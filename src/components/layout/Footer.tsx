import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Linkedin, Twitter, Sparkles, Mail, MapPin } from 'lucide-react';

const socialLinks = [
  { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/profile.php?id=100088800220083' },
  { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/naeemonlinestore/' },
  { name: 'YouTube', icon: Youtube, url: 'https://youtube.com/@naeemonlinestore5053?si=Kh41ez6oK91nzFo7' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/groups/9399204' },
  { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/Naeem0nlineStor?t=iXbbel_JVdoM90qank0LDQ&s=09' },
];

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'Shop/Blog', path: '/shop' },
  { name: 'Multi Tools', path: '/tools' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact Us', path: '/contact' },
];

const legalLinks = [
  { name: 'Privacy Policy', path: '/privacy' },
  { name: 'Terms & Conditions', path: '/terms' },
  { name: 'Disclaimer', path: '/disclaimer' },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground" role="contentinfo">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-google-blue via-google-red to-google-yellow flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-heading font-bold text-xl">
                Naeem Online Store
              </span>
            </Link>
            <p className="text-primary-foreground/70 mb-6">
              Your one-stop destination for AI-powered tools, digital products, and innovative solutions.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-primary-foreground/10 hover:bg-google-blue transition-all duration-300"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-google-yellow transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-google-yellow transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-google-blue" />
                <a 
                  href="mailto:naeemleo9@gmail.com" 
                  className="text-primary-foreground/70 hover:text-google-yellow transition-colors duration-300"
                >
                  naeemleo9@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin className="w-4 h-4 text-google-red mt-1" />
                <span>Duki, Baluchistan, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Naeem Online Store. All rights reserved.
          </p>
          <p className="text-primary-foreground/60 text-sm">
            Empowering Digital Success
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
