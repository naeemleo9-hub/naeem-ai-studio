import { useState, useRef, useEffect } from 'react';
import { Pencil, Check, X } from 'lucide-react';
import { useEditMode } from '@/contexts/EditModeContext';
import { cn } from '@/lib/utils';

interface EditableTextProps {
  value: string;
  onSave: (value: string) => Promise<void>;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  className?: string;
  placeholder?: string;
  multiline?: boolean;
}

export function EditableText({
  value,
  onSave,
  as: Component = 'span',
  className,
  placeholder = 'Click to edit...',
  multiline = false,
}: EditableTextProps) {
  const { canEdit } = useEditMode();
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(value);
  const [isSaving, setIsSaving] = useState(false);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  useEffect(() => {
    setEditValue(value);
  }, [value]);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  const handleSave = async () => {
    if (editValue === value) {
      setIsEditing(false);
      return;
    }

    setIsSaving(true);
    try {
      await onSave(editValue);
      setIsEditing(false);
    } catch (error) {
      console.error('Failed to save:', error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancel = () => {
    setEditValue(value);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !multiline) {
      e.preventDefault();
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  if (!canEdit) {
    return <Component className={className}>{value || placeholder}</Component>;
  }

  if (isEditing) {
    const InputComponent = multiline ? 'textarea' : 'input';

    return (
      <div className="relative inline-flex items-center gap-2 w-full">
        <InputComponent
          ref={inputRef as React.RefObject<HTMLInputElement & HTMLTextAreaElement>}
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className={cn(
            'bg-background border-2 border-primary rounded-md px-3 py-1 w-full',
            'focus:outline-none focus:ring-2 focus:ring-primary/50',
            multiline && 'min-h-[100px] resize-y',
            className
          )}
          disabled={isSaving}
          rows={multiline ? 4 : undefined}
        />
        <div className="flex gap-1">
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="p-1.5 bg-google-green text-white rounded-md hover:bg-google-green/80 disabled:opacity-50"
            aria-label="Save"
          >
            <Check className="w-4 h-4" />
          </button>
          <button
            onClick={handleCancel}
            disabled={isSaving}
            className="p-1.5 bg-google-red text-white rounded-md hover:bg-google-red/80 disabled:opacity-50"
            aria-label="Cancel"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="group relative inline-block cursor-pointer"
      onClick={() => setIsEditing(true)}
    >
      <Component className={cn(className, 'group-hover:bg-primary/10 rounded transition-colors')}>
        {value || <span className="text-muted-foreground italic">{placeholder}</span>}
      </Component>
      <Pencil className="absolute -right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
}
