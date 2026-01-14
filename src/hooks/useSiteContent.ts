import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import type { Json } from '@/integrations/supabase/types';

interface ContentBlock {
  id: string;
  page_key: string;
  section_key: string;
  content_type: string;
  content: Record<string, unknown>;
}

export function useSiteContent(pageKey: string) {
  const [content, setContent] = useState<Record<string, ContentBlock>>({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchContent = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from('site_content')
        .select('*')
        .eq('page_key', pageKey);

      if (error) throw error;

      const contentMap: Record<string, ContentBlock> = {};
      data?.forEach((item) => {
        contentMap[item.section_key] = {
          ...item,
          content: (item.content as Record<string, unknown>) ?? {},
        };
      });

      setContent(contentMap);
    } catch (error) {
      console.error('Error fetching content:', error);
    } finally {
      setIsLoading(false);
    }
  }, [pageKey]);

  useEffect(() => {
    fetchContent();
  }, [fetchContent]);

  const updateContent = async (sectionKey: string, newContent: Record<string, unknown>) => {
    try {
      // Check if content exists
      const existing = content[sectionKey];
      const jsonContent = newContent as Json;
      
      if (existing) {
        // Update existing
        const { error } = await supabase
          .from('site_content')
          .update({
            content: jsonContent,
            content_type: 'text',
          })
          .eq('page_key', pageKey)
          .eq('section_key', sectionKey);

        if (error) throw error;
      } else {
        // Insert new
        const { error } = await supabase
          .from('site_content')
          .insert([{
            page_key: pageKey,
            section_key: sectionKey,
            content: jsonContent,
            content_type: 'text',
          }]);

        if (error) throw error;
      }

      // Refresh content
      await fetchContent();
      return { success: true };
    } catch (error) {
      console.error('Error updating content:', error);
      return { success: false, error };
    }
  };

  const getContentValue = (sectionKey: string, field: string, defaultValue: string = '') => {
    const block = content[sectionKey];
    if (block && block.content && typeof block.content === 'object') {
      return (block.content as Record<string, string>)[field] ?? defaultValue;
    }
    return defaultValue;
  };

  return {
    content,
    isLoading,
    updateContent,
    getContentValue,
    refetch: fetchContent,
  };
}
