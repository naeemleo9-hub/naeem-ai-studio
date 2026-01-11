import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Target, Zap, Users, Heart, Award, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import aboutTeam from '@/assets/about-team.jpg';

const values = [
  {
    icon: Target,
    title: 'Innovation First',
    description: 'We constantly push boundaries to bring you the latest in AI-powered technology.',
    color: 'google-blue',
  },
  {
    icon: Zap,
    title: 'Speed & Efficiency',
    description: 'Our tools are optimized for performance, saving you valuable time.',
    color: 'google-yellow',
  },
  {
    icon: Users,
    title: 'Customer Focused',
    description: 'Every feature we build starts with understanding your needs.',
    color: 'google-green',
  },
  {
    icon: Heart,
    title: 'Quality Matters',
    description: 'We never compromise on quality in products or support.',
    color: 'google-red',
  },
];

const stats = [
  { value: '50K+', label: 'Happy Customers' },
  { value: '40+', label: 'Free Tools' },
  { value: '99.9%', label: 'Uptime' },
  { value: '24/7', label: 'Support' },
];

const About = () => {
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
        "name": "About",
        "item": "https://naeemonlinestore.com/about"
      }
    ]
  };

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Naeem Online Store",
    "description": "Learn about Naeem Online Store's mission to deliver AI-powered digital solutions.",
    "url": "https://naeemonlinestore.com/about",
    "mainEntity": {
      "@type": "Organization",
      "name": "Naeem Online Store",
      "description": "Your one-stop destination for AI-powered digital products, Digistore 24 solutions, and free online tools.",
      "url": "https://naeemonlinestore.com",
      "foundingDate": "2023",
      "numberOfEmployees": {
        "@type": "QuantitativeValue",
        "value": "10-50"
      },
      "slogan": "Empowering Your Digital Journey",
      "knowsAbout": ["AI-powered products", "Digital productivity tools", "Online utilities"],
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
        <title>About Us - Our Story & Mission | Naeem Online Store</title>
        <meta name="description" content="Learn about Naeem Online Store's mission to deliver AI-powered digital solutions. Discover our values, story, and commitment to innovation." />
        <link rel="canonical" href="https://naeemonlinestore.com/about" />
        <meta property="og:title" content="About Us - Our Story & Mission | Naeem Online Store" />
        <meta property="og:description" content="Learn about Naeem Online Store's mission to deliver AI-powered digital solutions." />
        <meta property="og:url" content="https://naeemonlinestore.com/about" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(aboutSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-google-blue/10 via-google-red/10 to-google-yellow/10 py-16 sm:py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-google-blue font-medium mb-4 block">About Us</span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6">
                Empowering Your Digital Journey
              </h1>
              <p className="text-muted-foreground text-lg mb-6">
                At Naeem Online Store, we believe in making powerful digital tools accessible to everyone. Our mission is to provide AI-driven solutions that simplify your workflow and enhance productivity.
              </p>
              <p className="text-muted-foreground text-lg">
                From our flagship Digistore 24 products to our comprehensive suite of free online tools, every solution we create is designed with you in mind.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={aboutTeam}
                  alt="Naeem Online Store team collaborating on digital solutions"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-2xl bg-gradient-to-br from-google-red to-google-yellow flex items-center justify-center shadow-xl">
                <Award className="w-10 h-10 text-primary-foreground" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-foreground text-primary-foreground">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-heading font-bold text-google-yellow mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              These principles guide everything we do at Naeem Online Store
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.article
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border card-hover text-center"
              >
                <div className={`w-16 h-16 rounded-xl bg-${value.color}/10 flex items-center justify-center mx-auto mb-4`}>
                  <value.icon className={`w-8 h-8 text-${value.color}`} />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <Sparkles className="w-12 h-12 text-google-blue mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">What We Offer</h2>
            <div className="space-y-6 text-left">
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-heading font-semibold text-xl text-google-blue mb-2">AI-Driven Customization</h3>
                <p className="text-muted-foreground">
                  Experience personalized design options powered by AI. Switch themes, colors, and layouts instantly with our intelligent customization system.
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-heading font-semibold text-xl text-google-red mb-2">Premium Digital Products</h3>
                <p className="text-muted-foreground">
                  Our Digistore 24 product line offers powerful productivity solutions designed to streamline your workflow and boost efficiency.
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-heading font-semibold text-xl text-google-green mb-2">Free Tools Hub</h3>
                <p className="text-muted-foreground">
                  Access over 40 free online tools for PDF conversion, image editing, video processing, and more - all without registration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Join our community of satisfied customers and experience the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="gradient" size="lg">
              <Link to="/shop">Browse Products</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
