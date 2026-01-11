import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Wand2, Sparkles, X, Sun, Moon, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const colorThemes = [
  { name: 'Default', class: '', colors: ['#4285F4', '#EA4335', '#FBBC04', '#34A853'] },
  { name: 'Warm', class: 'theme-warm', colors: ['#F97316', '#EA4335', '#FBBC04', '#22C55E'] },
  { name: 'Cool', class: 'theme-cool', colors: ['#0EA5E9', '#34A853', '#4285F4', '#06B6D4'] },
  { name: 'Vibrant', class: 'theme-vibrant', colors: ['#EA4335', '#FBBC04', '#4285F4', '#34A853'] },
];

const AICustomizer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('');
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Apply theme to document
    document.documentElement.className = `${currentTheme} ${isDark ? 'dark' : ''}`.trim();
  }, [currentTheme, isDark]);

  const applyTheme = (themeClass: string) => {
    setCurrentTheme(themeClass);
  };

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <>
      {/* Floating AI Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-google-blue via-google-red to-google-yellow shadow-xl flex items-center justify-center group"
        aria-label="Open AI Customizer"
      >
        <Wand2 className="w-6 h-6 text-primary-foreground group-hover:rotate-12 transition-transform duration-300" />
      </motion.button>

      {/* AI Customizer Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-foreground/20 backdrop-blur-sm"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-full max-w-sm z-50 bg-card shadow-2xl border-l border-border overflow-y-auto"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-google-blue to-google-sky flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h2 className="font-heading font-semibold text-lg">AI Customizer</h2>
                      <p className="text-sm text-muted-foreground">Personalize your experience</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close customizer"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                {/* Dark Mode Toggle */}
                <section className="mb-8">
                  <h3 className="font-heading font-medium text-sm text-muted-foreground uppercase tracking-wide mb-4">
                    Display Mode
                  </h3>
                  <button
                    onClick={toggleDarkMode}
                    className="w-full p-4 rounded-xl border border-border bg-secondary/50 hover:bg-secondary transition-all duration-300 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      {isDark ? (
                        <Moon className="w-5 h-5 text-google-blue" />
                      ) : (
                        <Sun className="w-5 h-5 text-google-yellow" />
                      )}
                      <span className="font-medium">{isDark ? 'Dark Mode' : 'Light Mode'}</span>
                    </div>
                    <div className={`w-12 h-6 rounded-full transition-colors duration-300 ${isDark ? 'bg-google-blue' : 'bg-muted'} relative`}>
                      <div className={`absolute top-1 w-4 h-4 rounded-full bg-primary-foreground transition-transform duration-300 ${isDark ? 'translate-x-7' : 'translate-x-1'}`} />
                    </div>
                  </button>
                </section>

                {/* Color Themes */}
                <section className="mb-8">
                  <h3 className="font-heading font-medium text-sm text-muted-foreground uppercase tracking-wide mb-4 flex items-center gap-2">
                    <Palette className="w-4 h-4" />
                    Color Palette
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {colorThemes.map((theme) => (
                      <button
                        key={theme.name}
                        onClick={() => applyTheme(theme.class)}
                        className={`p-4 rounded-xl border transition-all duration-300 ${
                          currentTheme === theme.class
                            ? 'border-primary bg-primary/5 ring-2 ring-primary/20'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <div className="flex items-center gap-1 mb-2">
                          {theme.colors.map((color, i) => (
                            <div
                              key={i}
                              className="w-4 h-4 rounded-full"
                              style={{ backgroundColor: color }}
                            />
                          ))}
                        </div>
                        <p className="text-sm font-medium text-left">{theme.name}</p>
                      </button>
                    ))}
                  </div>
                </section>

                {/* AI Quick Actions */}
                <section>
                  <h3 className="font-heading font-medium text-sm text-muted-foreground uppercase tracking-wide mb-4 flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    Quick Actions
                  </h3>
                  <div className="space-y-3">
                    <Button
                      variant="outline"
                      className="w-full justify-start"
                      onClick={() => applyTheme('')}
                    >
                      <Wand2 className="w-4 h-4 mr-2 text-google-blue" />
                      Reset to Default
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start"
                      onClick={() => applyTheme('theme-vibrant')}
                    >
                      <Sparkles className="w-4 h-4 mr-2 text-google-red" />
                      Apply Vibrant Style
                    </Button>
                  </div>
                </section>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default AICustomizer;
