import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Facebook, Instagram, Youtube, Linkedin, Twitter, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';


const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Shop/Blog', path: '/shop' },
  { name: 'Multi Tools', path: '/tools' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const socialLinks = [
  { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/profile.php?id=100088800220083', color: 'text-blue-500 hover:text-blue-400' },
  { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/naeemonlinestore/', color: 'text-pink-500 hover:text-pink-400' },
  { name: 'YouTube', icon: Youtube, url: 'https://youtube.com/@naeemonlinestore5053?si=Kh41ez6oK91nzFo7', color: 'text-red-500 hover:text-red-400' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/groups/9399204', color: 'text-sky-500 hover:text-sky-400' },
  { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/Naeem0nlineStor?t=iXbbel_JVdoM90qank0LDQ&s=09', color: 'text-cyan-400 hover:text-cyan-300' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  

  return (
    <header className="sticky top-4 z-50 glass-effect border-b border-border mx-4 rounded-2xl">
      <nav className="container-custom" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-google-blue via-google-red to-google-yellow flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-heading font-bold text-lg sm:text-xl text-gradient">
              Naeem Online Store
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      location.pathname === link.path
                        ? 'bg-primary text-primary-foreground'
                        : 'text-foreground hover:bg-secondary hover:text-primary'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full hover:bg-secondary transition-all duration-300 ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>

          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                      location.pathname === link.path
                        ? 'bg-primary text-primary-foreground'
                        : 'text-foreground hover:bg-secondary'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                
                
                {/* Mobile Social Links */}
                <div className="flex items-center justify-center gap-4 pt-4 border-t border-border">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full bg-secondary transition-all duration-300 ${social.color}`}
                      aria-label={social.name}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
