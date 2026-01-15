import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, MessageSquare, Clock, Facebook, Instagram, Youtube, Linkedin, Twitter } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import Layout from '@/components/layout/Layout';
import { z } from 'zod';
import { supabase } from '@/integrations/supabase/client';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100, 'Name must be less than 100 characters'),
  email: z.string().trim().email('Please enter a valid email').max(255, 'Email must be less than 255 characters'),
  subject: z.string().trim().min(1, 'Subject is required').max(200, 'Subject must be less than 200 characters'),
  message: z.string().trim().min(10, 'Message must be at least 10 characters').max(2000, 'Message must be less than 2000 characters'),
});

const socialLinks = [
  { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/profile.php?id=100088800220083', color: 'google-blue' },
  { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/naeemonlinestore/', color: 'google-red' },
  { name: 'YouTube', icon: Youtube, url: 'https://youtube.com/@naeemonlinestore5053?si=Kh41ez6oK91nzFo7', color: 'google-red' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/groups/9399204', color: 'google-blue' },
  { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/Naeem0nlineStor?t=iXbbel_JVdoM90qank0LDQ&s=09', color: 'google-sky' },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    website: '', // Honeypot field - should remain empty
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      // Client-side validation first
      contactSchema.parse(formData);
      
      // Submit to backend edge function
      const { data, error } = await supabase.functions.invoke('submit-contact', {
        body: formData
      });

      if (error) {
        console.error('Submission error:', error);
        toast({
          title: 'Error',
          description: 'Failed to send your message. Please try again.',
          variant: 'destructive',
        });
        return;
      }

      if (data?.success === false && data?.errors) {
        // Server-side validation errors
        setErrors(data.errors);
        return;
      }
      
      toast({
        title: 'Message Sent!',
        description: data?.message || 'Thank you for contacting us. We\'ll get back to you soon.',
      });
      
      setFormData({ name: '', email: '', subject: '', message: '', website: '' });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach(err => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);
      } else {
        console.error('Unexpected error:', error);
        toast({
          title: 'Error',
          description: 'An unexpected error occurred. Please try again.',
          variant: 'destructive',
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://naeemonlinestore.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Contact",
        "item": "https://naeemonlinestore.com/contact"
      }
    ]
  };

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Naeem Online Store",
    "description": "Get in touch with Naeem Online Store for support, inquiries, or feedback.",
    "url": "https://naeemonlinestore.com/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "Naeem Online Store",
      "email": "naeemleo9@gmail.com",
      "sameAs": [
        "https://www.facebook.com/profile.php?id=100088800220083",
        "https://www.instagram.com/naeemonlinestore/",
        "https://youtube.com/@naeemonlinestore5053",
        "https://www.linkedin.com/groups/9399204",
        "https://twitter.com/Naeem0nlineStor"
      ]
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Contact Us - Get in Touch | Naeem Online Store</title>
        <meta name="description" content="Have questions? Contact Naeem Online Store for support, inquiries, or feedback. We're here to help you with our products and services." />
        <link rel="canonical" href="https://naeemonlinestore.com/contact" />
        <meta property="og:title" content="Contact Us - Get in Touch | Naeem Online Store" />
        <meta property="og:description" content="Have questions? Contact Naeem Online Store for support, inquiries, or feedback." />
        <meta property="og:url" content="https://naeemonlinestore.com/contact" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(contactPageSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-google-orange via-google-red to-google-yellow py-16 sm:py-20">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/80 text-lg max-w-2xl mx-auto"
          >
            We'd love to hear from you. Get in touch with any questions or feedback.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-1"
            >
              <h2 className="text-2xl font-heading font-bold mb-6">Get in Touch</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-google-blue/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-google-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <a href="mailto:naeemleo9@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      naeemleo9@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-google-green/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-google-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-muted-foreground">Serving customers worldwide</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-google-yellow/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-google-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Response Time</h3>
                    <p className="text-muted-foreground">Usually within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-xl bg-${social.color}/10 hover:bg-${social.color} hover:text-primary-foreground transition-all duration-300 group`}
                    aria-label={`Follow Naeem Online Store on ${social.name}`}
                  >
                    <social.icon className={`w-5 h-5 text-${social.color} group-hover:text-primary-foreground`} />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2"
            >
              <div className="bg-card rounded-2xl p-6 sm:p-8 border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare className="w-6 h-6 text-google-blue" />
                  <h2 className="text-2xl font-heading font-bold">Send a Message</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-destructive' : 'border-input'} bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300`}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-destructive' : 'border-input'} bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.subject ? 'border-destructive' : 'border-input'} bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300`}
                      placeholder="How can we help you?"
                    />
                    {errors.subject && <p className="text-destructive text-sm mt-1">{errors.subject}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.message ? 'border-destructive' : 'border-input'} bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 resize-none`}
                      placeholder="Tell us more about your inquiry..."
                    />
                    {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
                  </div>

                  {/* Honeypot field - hidden from real users, bots will fill it */}
                  <div className="absolute -left-[9999px]" aria-hidden="true">
                    <label htmlFor="website">Website</label>
                    <input
                      type="text"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="gradient"
                    size="lg"
                    className="w-full sm:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
