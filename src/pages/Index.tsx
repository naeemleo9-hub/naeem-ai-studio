import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Wrench, ShoppingBag, Star, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import { EditableText } from '@/components/cms/EditableText';
import { useSiteContent } from '@/hooks/useSiteContent';
// Hero banner is served from public folder for LCP discoverability
const heroBanner = '/images/hero-banner.jpg';
import aiFeature from '@/assets/ai-feature.jpg';
import toolsHub from '@/assets/tools-hub.jpg';
import productDigestor from '@/assets/product-digestor.jpg';

const defaultFeatures = [
  {
    icon: Sparkles,
    title: 'AI-Powered Design',
    description: 'Customize your experience with our intelligent AI design system that adapts to your preferences.',
    color: 'google-blue',
  },
  {
    icon: Zap,
    title: 'Digistore 24 Products',
    description: 'Discover our flagship Digistore 24 line of digital products designed to boost your productivity.',
    color: 'google-red',
  },
  {
    icon: Wrench,
    title: 'Free Tools Hub',
    description: 'Access our comprehensive suite of free online tools for file conversion, editing, and more.',
    color: 'google-green',
  },
];

const Index = () => {
  const { getContentValue, updateContent, isLoading } = useSiteContent('home');

  // Default content values
  const heroTagline = getContentValue('hero', 'tagline', 'AI-Powered Experience');
  const heroTitle = getContentValue('hero', 'title', 'Welcome to');
  const heroBrand = getContentValue('hero', 'brand', 'Naeem Online Store');
  const heroDescription = getContentValue('hero', 'description', 'Your one-stop destination for AI-powered digital products, Digistore 24 solutions, and a comprehensive suite of free online tools.');
  
  const featuresTitle = getContentValue('features', 'title', 'Why Choose Us?');
  const featuresSubtitle = getContentValue('features', 'subtitle', 'Experience the future of digital commerce with our AI-driven platform');
  
  const aiSectionLabel = getContentValue('ai-section', 'label', 'AI Design Capabilities');
  const aiSectionTitle = getContentValue('ai-section', 'title', 'Personalize Your Experience with AI');
  const aiSectionDescription = getContentValue('ai-section', 'description', 'Our intelligent AI system allows you to customize colors, layouts, and styles with a single click. Experience a truly personalized shopping journey.');
  
  const digestorLabel = getContentValue('digestor-section', 'label', 'Featured Product');
  const digestorTitle = getContentValue('digestor-section', 'title', 'Digistore 24');
  const digestorDescription = getContentValue('digestor-section', 'description', 'Our flagship digital product designed to streamline your workflow and boost productivity. Experience the power of intelligent automation.');
  
  const toolsLabel = getContentValue('tools-section', 'label', 'Free Resources');
  const toolsTitle = getContentValue('tools-section', 'title', 'Multi Tools Hub');
  const toolsDescription = getContentValue('tools-section', 'description', "Access our comprehensive suite of free online tools. From file converters to image editors, we've got everything you need.");
  
  const ctaTitle = getContentValue('cta', 'title', 'Ready to Get Started?');
  const ctaDescription = getContentValue('cta', 'description', 'Join thousands of satisfied customers who have transformed their digital experience with Naeem Online Store.');

  const handleSave = async (section: string, field: string, value: string) => {
    const currentContent = {};
    await updateContent(section, { ...currentContent, [field]: value });
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Naeem Online Store",
    "url": "https://naeemonlinestore.com",
    "logo": "https://naeemonlinestore.com/og-image.png",
    "description": "Your one-stop destination for AI-powered digital products, Digistore 24 solutions, and free online tools.",
    "foundingDate": "2023",
    "sameAs": [
      "https://www.facebook.com/profile.php?id=100088800220083",
      "https://www.instagram.com/naeemonlinestore/",
      "https://youtube.com/@naeemonlinestore5053",
      "https://www.linkedin.com/groups/9399204",
      "https://twitter.com/Naeem0nlineStor"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "url": "https://naeemonlinestore.com/contact"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Naeem Online Store",
    "url": "https://naeemonlinestore.com",
    "description": "AI-powered digital products, Digistore 24 solutions, and 40+ free online tools.",
    "publisher": {
      "@type": "Organization",
      "name": "Naeem Online Store"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://naeemonlinestore.com/tools?q={search_term_string}",
      "query-input": "required name=search_term_string"
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
      }
    ]
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Helmet>
        <title>Naeem Online Store - AI-Powered Digital Products & Free Tools</title>
        <meta name="description" content="Discover AI-powered digital products, Digistore 24 solutions, and free online tools at Naeem Online Store. Your destination for innovative digital solutions." />
        <link rel="canonical" href="https://naeemonlinestore.com" />
        <meta property="og:title" content="Naeem Online Store - AI-Powered Digital Products & Free Tools" />
        <meta property="og:description" content="Discover AI-powered digital products, Digistore 24 solutions, and free online tools." />
        <meta property="og:url" content="https://naeemonlinestore.com" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20 sm:pt-0">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBanner}
            srcSet={`${heroBanner} 1504w`}
            sizes="100vw"
            alt="Naeem Online Store - Digital innovation and AI technology"
            className="w-full h-full object-cover"
            width={1504}
            height={846}
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <EditableText
                  value={heroTagline}
                  onSave={(value) => handleSave('hero', 'tagline', value)}
                />
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6"
            >
              <EditableText
                value={heroTitle}
                onSave={(value) => handleSave('hero', 'title', value)}
              />{' '}
              <span className="text-gradient">
                <EditableText
                  value={heroBrand}
                  onSave={(value) => handleSave('hero', 'brand', value)}
                />
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-muted-foreground mb-8"
            >
              <EditableText
                value={heroDescription}
                onSave={(value) => handleSave('hero', 'description', value)}
                as="p"
                multiline
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild size="xl" variant="hero">
                <Link to="/shop">
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Explore Products
                </Link>
              </Button>
              <Button asChild size="xl" variant="outline">
                <Link to="/tools">
                  <Wrench className="w-5 h-5 mr-2" />
                  Free Tools
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
              <EditableText
                value={featuresTitle}
                onSave={(value) => handleSave('features', 'title', value)}
              />
            </h2>
            <div className="text-muted-foreground text-lg">
              <EditableText
                value={featuresSubtitle}
                onSave={(value) => handleSave('features', 'subtitle', value)}
                as="p"
              />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {defaultFeatures.map((feature, index) => (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 lg:p-8 card-hover border border-border"
              >
                <div className={`w-14 h-14 rounded-xl bg-${feature.color}/10 flex items-center justify-center mb-6`}>
                  <feature.icon className={`w-7 h-7 text-${feature.color}`} />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* AI Design Showcase */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-google-blue font-medium mb-4 block">
                <EditableText
                  value={aiSectionLabel}
                  onSave={(value) => handleSave('ai-section', 'label', value)}
                />
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
                <EditableText
                  value={aiSectionTitle}
                  onSave={(value) => handleSave('ai-section', 'title', value)}
                />
              </h2>
              <div className="text-muted-foreground text-lg mb-6">
                <EditableText
                  value={aiSectionDescription}
                  onSave={(value) => handleSave('ai-section', 'description', value)}
                  as="p"
                  multiline
                />
              </div>
              <ul className="space-y-4 mb-8">
                {['Instant color palette switching', 'Smart layout optimization', 'Personalized recommendations'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-google-green/10 flex items-center justify-center">
                      <Star className="w-3 h-3 text-google-green" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild variant="gradient" size="lg">
                <Link to="/about">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={aiFeature}
                  srcSet={`${aiFeature} 584w`}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  alt="AI-powered design customization interface"
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                  width={584}
                  height={374}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-2xl bg-gradient-to-br from-google-blue to-google-sky flex items-center justify-center shadow-xl animate-float">
                <Sparkles className="w-12 h-12 text-primary-foreground" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Digestor 24 Promo */}
      <section className="section-padding bg-gradient-to-br from-google-blue/5 via-google-red/5 to-google-yellow/5">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={productDigestor}
                  srcSet={`${productDigestor} 584w`}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  alt="Digistore 24 - Premium digital productivity software"
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                  width={584}
                  height={584}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <span className="text-google-red font-medium mb-4 block">
                <EditableText
                  value={digestorLabel}
                  onSave={(value) => handleSave('digestor-section', 'label', value)}
                />
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
                <EditableText
                  value={digestorTitle}
                  onSave={(value) => handleSave('digestor-section', 'title', value)}
                />
              </h2>
              <div className="text-muted-foreground text-lg mb-6">
                <EditableText
                  value={digestorDescription}
                  onSave={(value) => handleSave('digestor-section', 'description', value)}
                  as="p"
                  multiline
                />
              </div>
              <div className="flex flex-wrap gap-3 mb-8">
                {['Premium Quality', 'Instant Access', '24/7 Support'].map((tag) => (
                  <span key={tag} className="px-4 py-2 rounded-full bg-google-yellow/10 text-google-orange text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              <Button asChild variant="googleRed" size="lg">
                <Link to="/shop">
                  View Product <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Free Tools Hub */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-google-green font-medium mb-4 block">
                <EditableText
                  value={toolsLabel}
                  onSave={(value) => handleSave('tools-section', 'label', value)}
                />
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
                <EditableText
                  value={toolsTitle}
                  onSave={(value) => handleSave('tools-section', 'title', value)}
                />
              </h2>
              <div className="text-muted-foreground text-lg mb-6">
                <EditableText
                  value={toolsDescription}
                  onSave={(value) => handleSave('tools-section', 'description', value)}
                  as="p"
                  multiline
                />
              </div>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {['PDF Tools', 'Image Editors', 'Video Tools', 'Text Utilities', 'Calculators', 'Converters'].map((tool) => (
                  <div key={tool} className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-google-green" />
                    {tool}
                  </div>
                ))}
              </div>
              <Button asChild variant="success" size="lg">
                <Link to="/tools">
                  Explore Tools <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={toolsHub}
                  srcSet={`${toolsHub} 584w`}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  alt="Free online tools collection for file conversion and editing"
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                  width={584}
                  height={584}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-foreground text-primary-foreground">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
              <EditableText
                value={ctaTitle}
                onSave={(value) => handleSave('cta', 'title', value)}
              />
            </h2>
            <div className="text-primary-foreground/70 text-lg mb-8 max-w-xl mx-auto">
              <EditableText
                value={ctaDescription}
                onSave={(value) => handleSave('cta', 'description', value)}
                as="p"
                multiline
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="xl" variant="hero">
                <Link to="/shop">
                  Start Shopping
                </Link>
              </Button>
              <Button asChild size="xl" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
