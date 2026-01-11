import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ExternalLink, ShoppingCart, Star, Filter, Grid, List, Calendar, User, BookOpen } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import productDigestor from '@/assets/product-digestor.jpg';

const products = [
  {
    id: 1,
    name: 'Digistore 24 Pro',
    description: 'Advanced digital productivity suite with AI-powered automation features.',
    price: 49.99,
    originalPrice: 79.99,
    image: productDigestor,
    category: 'Software',
    rating: 4.9,
    featured: true,
  },
  {
    id: 2,
    name: 'Digistore 24 Lite',
    description: 'Essential productivity tools for everyday tasks and workflows.',
    price: 29.99,
    originalPrice: 39.99,
    image: productDigestor,
    category: 'Software',
    rating: 4.7,
    featured: false,
  },
  {
    id: 3,
    name: 'Digistore 24 Enterprise',
    description: 'Complete business solution with team collaboration and analytics.',
    price: 99.99,
    originalPrice: 149.99,
    image: productDigestor,
    category: 'Business',
    rating: 4.8,
    featured: true,
  },
  {
    id: 4,
    name: 'Digistore 24 Student',
    description: 'Perfect for students with special pricing and educational features.',
    price: 14.99,
    originalPrice: 24.99,
    image: productDigestor,
    category: 'Education',
    rating: 4.6,
    featured: false,
  },
];

const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with AI-Powered Productivity',
    excerpt: 'Learn how to leverage AI tools to boost your daily productivity and streamline your workflow with practical tips and strategies.',
    date: 'January 5, 2026',
    category: 'Tips & Tricks',
    author: 'Naeem Ahmed',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'Top 10 Features of Digistore 24',
    excerpt: 'Discover the powerful features that make Digistore 24 the ultimate productivity solution for professionals and businesses.',
    date: 'January 3, 2026',
    category: 'Product Updates',
    author: 'Naeem Ahmed',
    readTime: '7 min read',
  },
  {
    id: 3,
    title: 'How to Maximize Your Digital Workflow',
    excerpt: 'Expert strategies for organizing your digital workspace and automating repetitive tasks to save hours every week.',
    date: 'December 28, 2025',
    category: 'Tips & Tricks',
    author: 'Naeem Ahmed',
    readTime: '6 min read',
  },
  {
    id: 4,
    title: 'Introducing Digistore 24 Enterprise Edition',
    excerpt: 'Our new enterprise solution brings advanced collaboration features, analytics dashboard, and priority support for teams.',
    date: 'December 20, 2025',
    category: 'Product Updates',
    author: 'Naeem Ahmed',
    readTime: '4 min read',
  },
  {
    id: 5,
    title: 'The Future of AI in Digital Products',
    excerpt: 'Explore how artificial intelligence is reshaping digital tools and what it means for your productivity in the coming years.',
    date: 'December 15, 2025',
    category: 'Industry News',
    author: 'Naeem Ahmed',
    readTime: '8 min read',
  },
  {
    id: 6,
    title: 'Case Study: How Businesses Save Time with Digistore 24',
    excerpt: 'Real success stories from businesses that transformed their operations using our digital productivity solutions.',
    date: 'December 10, 2025',
    category: 'Case Studies',
    author: 'Naeem Ahmed',
    readTime: '10 min read',
  },
  {
    id: 7,
    title: 'Essential Tools Every Student Needs in 2026',
    excerpt: 'A comprehensive guide to digital tools that help students stay organized, productive, and ahead of their studies.',
    date: 'December 5, 2025',
    category: 'Education',
    author: 'Naeem Ahmed',
    readTime: '6 min read',
  },
  {
    id: 8,
    title: 'Monthly Roundup: December 2025 Updates',
    excerpt: 'A summary of all the new features, improvements, and bug fixes we shipped in December 2025.',
    date: 'December 1, 2025',
    category: 'Product Updates',
    author: 'Naeem Ahmed',
    readTime: '3 min read',
  },
];

const blogCategories = ['All', 'Tips & Tricks', 'Product Updates', 'Industry News', 'Case Studies', 'Education'];

const Shop = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeBlogCategory, setActiveBlogCategory] = useState('All');

  const categories = ['All', 'Software', 'Business', 'Education'];

  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory);

  const filteredBlogPosts = activeBlogCategory === 'All'
    ? blogPosts
    : blogPosts.filter(p => p.category === activeBlogCategory);

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
        "name": "Shop",
        "item": "https://naeemonlinestore.com/shop"
      }
    ]
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Digistore 24 Products",
    "description": "Browse our Digistore 24 product lineup for digital productivity solutions.",
    "url": "https://naeemonlinestore.com/shop",
    "numberOfItems": products.length,
    "itemListElement": products.map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": product.name,
        "description": product.description,
        "image": `https://naeemonlinestore.com${product.image}`,
        "category": product.category,
        "offers": {
          "@type": "Offer",
          "price": product.price,
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": product.rating,
          "bestRating": 5,
          "worstRating": 1,
          "ratingCount": Math.floor(Math.random() * 500) + 100
        }
      }
    }))
  };

  return (
    <Layout>
      <Helmet>
        <title>Shop - Digistore 24 Products | Naeem Online Store</title>
        <meta name="description" content="Browse our Digistore 24 product lineup. Find the perfect digital productivity solution for your needs at Naeem Online Store." />
        <link rel="canonical" href="https://naeemonlinestore.com/shop" />
        <meta property="og:title" content="Shop - Digistore 24 Products | Naeem Online Store" />
        <meta property="og:description" content="Browse our Digistore 24 product lineup. Find the perfect digital productivity solution for your needs." />
        <meta property="og:url" content="https://naeemonlinestore.com/shop" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
      </Helmet>

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-google-blue via-google-red to-google-yellow py-16 sm:py-20">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-4"
          >
            Shop Our Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/80 text-lg max-w-2xl mx-auto"
          >
            Discover our premium Digistore 24 product line and digital solutions
          </motion.p>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="w-5 h-5 text-muted-foreground" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-secondary-foreground hover:bg-primary/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="icon"
                onClick={() => setViewMode('grid')}
                aria-label="Grid view"
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="icon"
                onClick={() => setViewMode('list')}
                aria-label="List view"
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Products Grid */}
          <div className={viewMode === 'grid'
            ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
            : 'space-y-4'
          }>
            {filteredProducts.map((product, index) => (
              <motion.article
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-card rounded-2xl overflow-hidden border border-border card-hover ${
                  viewMode === 'list' ? 'flex flex-col sm:flex-row' : ''
                }`}
              >
                {/* Product Image */}
                <div className={`relative overflow-hidden ${viewMode === 'list' ? 'sm:w-48 h-48 sm:h-auto' : 'aspect-square'}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  {product.featured && (
                    <span className="absolute top-3 left-3 px-3 py-1 bg-google-yellow text-foreground text-xs font-semibold rounded-full">
                      Featured
                    </span>
                  )}
                  {product.originalPrice > product.price && (
                    <span className="absolute top-3 right-3 px-3 py-1 bg-google-red text-primary-foreground text-xs font-semibold rounded-full">
                      Sale
                    </span>
                  )}
                </div>

                {/* Product Info */}
                <div className={`p-5 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <span className="text-xs text-muted-foreground uppercase tracking-wide">{product.category}</span>
                  <h3 className="font-heading font-semibold text-lg mt-1 mb-2">{product.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{product.description}</p>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    <Star className="w-4 h-4 fill-google-yellow text-google-yellow" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xl font-bold text-google-blue">${product.price}</span>
                    {product.originalPrice > product.price && (
                      <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button variant="default" size="sm" className="flex-1">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Buy Now
                    </Button>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="section-padding bg-secondary/30" id="blog">
        <div className="container-custom">
          {/* Blog Header */}
          <div className="text-center mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-google-green/10 text-google-green text-sm font-medium mb-4"
            >
              <BookOpen className="w-4 h-4" />
              Our Blog
            </motion.div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">Latest Articles & Updates</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Stay informed with tips, tutorials, product updates, and industry insights
            </p>
          </div>

          {/* Blog Category Filters */}
          <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveBlogCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeBlogCategory === cat
                    ? 'bg-google-green text-primary-foreground'
                    : 'bg-card text-foreground border border-border hover:border-google-green/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBlogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-card rounded-2xl overflow-hidden border border-border card-hover group"
              >
                {/* Blog Card Header */}
                <div className="h-3 bg-gradient-to-r from-google-blue via-google-red to-google-yellow" />
                
                <div className="p-6">
                  {/* Category & Date */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-google-blue/10 text-google-blue text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-semibold text-xl mb-3 group-hover:text-google-blue transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4 pt-4 border-t border-border">
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span>{post.readTime}</span>
                  </div>

                  {/* Read More Button */}
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-google-blue group-hover:text-primary-foreground group-hover:border-google-blue transition-all">
                    Read Article <ExternalLink className="w-3 h-3 ml-2" />
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Show message if no posts */}
          {filteredBlogPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No blog posts found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Shop;
