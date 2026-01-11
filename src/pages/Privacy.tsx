import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';

const Privacy = () => {
  return (
    <Layout>
      <Helmet>
        <title>Privacy Policy | Naeem Online Store</title>
        <meta name="description" content="Read Naeem Online Store's privacy policy. Learn how we collect, use, and protect your personal information." />
        <link rel="canonical" href="https://naeemonlinestore.com/privacy" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-google-blue to-google-sky py-16 sm:py-20">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-4"
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/80 text-lg"
          >
            Last updated: January 6, 2026
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto prose prose-lg"
          >
            <div className="bg-card rounded-2xl p-6 sm:p-10 border border-border">
              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-google-blue mb-4">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Welcome to Naeem Online Store. We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at naeemonlinestore.com.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-google-blue mb-4">2. Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">We may collect information about you in various ways, including:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Personal Data:</strong> Name, email address, and contact information you provide through forms.</li>
                  <li><strong>Usage Data:</strong> Information about how you access and use our website.</li>
                  <li><strong>Device Data:</strong> Information about your device, browser type, and operating system.</li>
                  <li><strong>Cookies:</strong> Small data files stored on your device to enhance your experience.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-google-blue mb-4">3. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send promotional communications (with your consent)</li>
                  <li>Respond to your comments, questions, and customer service requests</li>
                  <li>Monitor and analyze usage trends</li>
                  <li>Protect against fraudulent or unauthorized activity</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-google-blue mb-4">4. Information Sharing</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We do not sell, trade, or otherwise transfer your personal information to outside parties except as described in this policy. We may share information with trusted third parties who assist us in operating our website and conducting our business, so long as those parties agree to keep this information confidential.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-google-blue mb-4">5. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-google-blue mb-4">6. Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Access and receive a copy of your personal data</li>
                  <li>Request correction of inaccurate personal data</li>
                  <li>Request deletion of your personal data</li>
                  <li>Object to processing of your personal data</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-google-blue mb-4">7. Cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-google-blue mb-4">8. Third-Party Links</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-google-blue mb-4">9. Changes to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-google-blue mb-4">10. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at:<br />
                  <strong>Email:</strong> contact@naeemonlinestore.com<br />
                  <strong>Website:</strong> naeemonlinestore.com
                </p>
              </section>
            </div>
          </motion.article>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
