import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';

const Terms = () => {
  return (
    <Layout>
      <Helmet>
        <title>Terms and Conditions | Naeem Online Store</title>
        <meta name="description" content="Read Naeem Online Store's terms and conditions. Understand the rules and regulations governing the use of our website and services." />
        <link rel="canonical" href="https://naeemonlinestore.com/terms" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-google-red to-google-orange py-16 sm:py-20">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-4"
          >
            Terms and Conditions
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
            className="max-w-4xl mx-auto"
          >
            <div className="bg-card rounded-2xl p-6 sm:p-10 border border-border">
              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-google-red mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using naeemonlinestore.com ("the Website"), you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our Website.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-google-red mb-4">2. Use of Website</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">You agree to use this Website only for lawful purposes and in a way that does not infringe the rights of others. You must not:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Use the Website in any way that violates applicable laws or regulations</li>
                  <li>Attempt to gain unauthorized access to any part of the Website</li>
                  <li>Use the Website to transmit viruses or malicious code</li>
                  <li>Engage in any conduct that restricts others from using the Website</li>
                  <li>Collect or harvest any information from the Website without permission</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-google-red mb-4">3. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content on this Website, including text, graphics, logos, images, software, and compilation of all content, is the property of Naeem Online Store and is protected by copyright and intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-google-red mb-4">4. Products and Services</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We reserve the right to modify, discontinue, or update any product or service at any time without prior notice. Product descriptions and prices are subject to change.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Digital products are delivered electronically after purchase</li>
                  <li>Free tools are provided "as is" without warranty</li>
                  <li>We reserve the right to limit quantities or refuse orders</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-google-red mb-4">5. Payment Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All purchases are subject to payment verification. We accept various payment methods as displayed during checkout. Prices are listed in USD unless otherwise specified. You are responsible for any applicable taxes.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-google-red mb-4">6. Refund Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Due to the digital nature of our products, refunds are handled on a case-by-case basis. If you experience technical issues with a purchased product, please contact our support team within 30 days of purchase.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-google-red mb-4">7. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Naeem Online Store shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the Website or services. Our total liability shall not exceed the amount paid by you for the specific product or service in question.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-google-red mb-4">8. Indemnification</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You agree to indemnify and hold harmless Naeem Online Store, its affiliates, and their respective officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses arising out of your use of the Website or violation of these Terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-google-red mb-4">9. Third-Party Links</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our Website may contain links to third-party websites. We are not responsible for the content, accuracy, or practices of these external sites. Accessing these links is at your own risk.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-google-red mb-4">10. Modifications</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to the Website. Your continued use of the Website after changes constitutes acceptance of the modified terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-google-red mb-4">11. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms and Conditions shall be governed by and construed in accordance with applicable laws. Any disputes shall be resolved through appropriate legal channels.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-google-red mb-4">12. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions regarding these Terms and Conditions, please contact us at:<br />
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

export default Terms;
