import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface Tool {
  id: string;
  name: string;
  description: string | null;
  category: string;
  icon: string | null;
  color: string | null;
  external_url: string | null;
  sort_order: number | null;
  active: boolean | null;
  created_at: string;
  updated_at: string;
}

export function useTools() {
  const [tools, setTools] = useState<Tool[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchTools = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from('tools')
        .select('*')
        .order('sort_order', { ascending: true });

      if (error) throw error;
      setTools(data || []);
    } catch (error) {
      console.error('Error fetching tools:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTools();
  }, [fetchTools]);

  const createTool = async (tool: Omit<Tool, 'id' | 'created_at' | 'updated_at'>) => {
    try {
      const { data, error } = await supabase
        .from('tools')
        .insert(tool)
        .select()
        .single();

      if (error) throw error;
      await fetchTools();
      return { success: true, data };
    } catch (error) {
      console.error('Error creating tool:', error);
      return { success: false, error };
    }
  };

  const updateTool = async (id: string, updates: Partial<Tool>) => {
    try {
      const { error } = await supabase
        .from('tools')
        .update(updates)
        .eq('id', id);

      if (error) throw error;
      await fetchTools();
      return { success: true };
    } catch (error) {
      console.error('Error updating tool:', error);
      return { success: false, error };
    }
  };

  const deleteTool = async (id: string) => {
    try {
      const { error } = await supabase
        .from('tools')
        .delete()
        .eq('id', id);

      if (error) throw error;
      await fetchTools();
      return { success: true };
    } catch (error) {
      console.error('Error deleting tool:', error);
      return { success: false, error };
    }
  };

  return {
    tools,
    isLoading,
    createTool,
    updateTool,
    deleteTool,
    refetch: fetchTools,
  };
}
