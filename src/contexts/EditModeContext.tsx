import { createContext, useContext, useState, ReactNode } from 'react';
import { useAuth } from './AuthContext';

interface EditModeContextType {
  isEditMode: boolean;
  toggleEditMode: () => void;
  canEdit: boolean;
}

const EditModeContext = createContext<EditModeContextType | undefined>(undefined);

export function EditModeProvider({ children }: { children: ReactNode }) {
  const { isAdmin } = useAuth();
  const [isEditMode, setIsEditMode] = useState(false);

  const toggleEditMode = () => {
    if (isAdmin) {
      setIsEditMode(!isEditMode);
    }
  };

  const canEdit = isAdmin && isEditMode;

  return (
    <EditModeContext.Provider value={{ isEditMode, toggleEditMode, canEdit }}>
      {children}
    </EditModeContext.Provider>
  );
}

export function useEditMode() {
  const context = useContext(EditModeContext);
  if (context === undefined) {
    throw new Error('useEditMode must be used within an EditModeProvider');
  }
  return context;
}
