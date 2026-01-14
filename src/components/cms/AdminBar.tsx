import { LogOut, User, Settings } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useEditMode } from '@/contexts/EditModeContext';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export function AdminBar() {
  const { user, isAdmin, signOut } = useAuth();
  const { isEditMode } = useEditMode();

  if (!user || !isAdmin) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-foreground text-primary-foreground py-2 px-4"
    >
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span className="text-sm font-medium">{user.email}</span>
          </div>
          <span className="text-xs px-2 py-0.5 bg-google-green rounded-full">Admin</span>
          {isEditMode && (
            <span className="text-xs px-2 py-0.5 bg-google-yellow text-foreground rounded-full">
              Editing
            </span>
          )}
        </div>
        
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="text-primary-foreground hover:bg-primary-foreground/10"
          >
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={signOut}
            className="text-primary-foreground hover:bg-primary-foreground/10"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
