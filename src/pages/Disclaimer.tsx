import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';

const Disclaimer = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://naeemonlinestore.com" },
      { "@type": "ListItem", "position": 2, "name": "Disclaimer", "item": "https://naeemonlinestore.com/disclaimer" }
    ]
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Disclaimer",
    "description": "Limitations and conditions regarding the use of Naeem Online Store website content and services.",
    "url": "https://naeemonlinestore.com/disclaimer",
    "dateModified": "2026-01-06",
    "publisher": { "@type": "Organization", "name": "Naeem Online Store" }
  };

  return (
    <Layout>
      <Helmet>
        <title>Disclaimer | Naeem Online Store</title>
        <meta name="description" content="Read Naeem Online Store's disclaimer. Understand the limitations and conditions regarding the use of our website content and services." />
        <link rel="canonical" href="https://naeemonlinestore.com/disclaimer" />
        <meta property="og:title" content="Disclaimer | Naeem Online Store" />
        <meta property="og:description" content="Limitations and conditions regarding the use of our website content and services." />
        <meta property="og:url" content="https://naeemonlinestore.com/disclaimer" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(webPageSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-google-yellow to-google-green py-16 sm:py-20">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4"
          >
            Disclaimer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-foreground/80 text-lg"
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
                <h2 className="text-2xl font-heading font-bold text-google-green mb-4">General Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The information provided on naeemonlinestore.com is for general informational purposes only. While we strive to keep the information up to date and accurate, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the website.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-google-green mb-4">No Professional Advice</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The content on this website does not constitute professional advice. Any reliance you place on such information is strictly at your own risk. We recommend consulting with appropriate professionals before making decisions based on information obtained from our website.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-google-green mb-4">Product Disclaimers</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">Regarding our products and services:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Digital products are provided "as is" without warranty of any kind</li>
                  <li>Results may vary based on individual circumstances and usage</li>
                  <li>We do not guarantee specific outcomes from using our products</li>
                  <li>Free tools are provided for convenience and may be modified or discontinued</li>
                  <li>Product features and availability may change without notice</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-google-green mb-4">External Links Disclaimer</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website may contain links to external websites that are not operated by us. We have no control over the content and practices of these sites and cannot accept responsibility for their respective privacy policies or content. The inclusion of any links does not necessarily imply a recommendation or endorsement of the views expressed within them.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-google-green mb-4">AI and Technology Disclaimer</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our AI-powered features and tools are designed to assist and enhance user experience. However, AI technology has limitations and may not always produce perfect results. Users should review AI-generated content or recommendations before relying on them for important decisions.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-google-green mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  In no event shall Naeem Online Store be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-google-green mb-4">Accuracy of Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Every effort is made to keep the website running smoothly. However, Naeem Online Store takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control. We do not guarantee that the website will be error-free or uninterrupted.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-google-green mb-4">Changes to Disclaimer</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify this disclaimer at any time without prior notice. Changes will be effective immediately upon posting to the website. It is your responsibility to review this disclaimer periodically for any updates.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-google-green mb-4">Affiliate Disclaimer</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Some links on this website may be affiliate links. This means we may receive a commission if you purchase through these links, at no additional cost to you. We only recommend products or services that we believe will add value to our visitors.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-google-green mb-4">Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you require any more information or have any questions about our disclaimer, please feel free to contact us:<br />
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

export default Disclaimer;
