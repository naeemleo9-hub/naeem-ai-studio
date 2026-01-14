import { Pencil, Eye } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useEditMode } from '@/contexts/EditModeContext';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

export function EditModeToggle() {
  const { isAdmin, user } = useAuth();
  const { isEditMode, toggleEditMode } = useEditMode();

  if (!isAdmin || !user) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="fixed bottom-24 right-6 z-50"
      >
        <Button
          onClick={toggleEditMode}
          variant={isEditMode ? 'default' : 'outline'}
          size="lg"
          className={`rounded-full shadow-lg ${
            isEditMode
              ? 'bg-google-green hover:bg-google-green/80'
              : 'bg-background hover:bg-secondary'
          }`}
        >
          {isEditMode ? (
            <>
              <Eye className="w-5 h-5 mr-2" />
              View Mode
            </>
          ) : (
            <>
              <Pencil className="w-5 h-5 mr-2" />
              Edit Mode
            </>
          )}
        </Button>
      </motion.div>
    </AnimatePresence>
  );
}
