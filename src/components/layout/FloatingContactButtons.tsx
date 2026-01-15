import { Mail, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingContactButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Gmail Button */}
      <motion.a
        href="mailto:naeemleo9@gmail.com"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-google-red shadow-lg flex items-center justify-center text-white hover:shadow-xl transition-shadow duration-300"
        aria-label="Email us"
      >
        <Mail className="w-6 h-6" />
      </motion.a>

      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/923417600835"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-google-green shadow-lg flex items-center justify-center text-white hover:shadow-xl transition-shadow duration-300"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>
    </div>
  );
};

export default FloatingContactButtons;
