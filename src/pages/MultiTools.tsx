import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ExternalLink, FileText, Image, Video, Music, Calculator, Type, FileCode, Archive, Lock, Scissors, Wand2, Search } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';

const toolCategories = [
  { name: 'All', icon: Wand2 },
  { name: 'PDF', icon: FileText },
  { name: 'Image', icon: Image },
  { name: 'Video', icon: Video },
  { name: 'Audio', icon: Music },
  { name: 'Text', icon: Type },
  { name: 'File', icon: Archive },
];

const tools = [
  // PDF Tools
  { id: 1, name: 'PDF to Word', description: 'Convert PDF files to editable Word documents', category: 'PDF', icon: FileText, color: 'google-red' },
  { id: 2, name: 'Word to PDF', description: 'Convert Word documents to PDF format', category: 'PDF', icon: FileText, color: 'google-red' },
  { id: 3, name: 'Merge PDF', description: 'Combine multiple PDF files into one', category: 'PDF', icon: FileText, color: 'google-red' },
  { id: 4, name: 'Split PDF', description: 'Split PDF files into separate pages', category: 'PDF', icon: FileText, color: 'google-red' },
  { id: 5, name: 'Compress PDF', description: 'Reduce PDF file size without losing quality', category: 'PDF', icon: FileText, color: 'google-red' },
  { id: 6, name: 'PDF to Excel', description: 'Convert PDF tables to Excel spreadsheets', category: 'PDF', icon: FileText, color: 'google-red' },
  { id: 7, name: 'PDF to PowerPoint', description: 'Convert PDF to editable presentations', category: 'PDF', icon: FileText, color: 'google-red' },
  { id: 8, name: 'Unlock PDF', description: 'Remove password protection from PDFs', category: 'PDF', icon: Lock, color: 'google-red' },

  // Image Tools
  { id: 9, name: 'Image Compressor', description: 'Reduce image file size for web', category: 'Image', icon: Image, color: 'google-blue' },
  { id: 10, name: 'Image Resizer', description: 'Resize images to any dimension', category: 'Image', icon: Image, color: 'google-blue' },
  { id: 11, name: 'Image Cropper', description: 'Crop images to perfect dimensions', category: 'Image', icon: Scissors, color: 'google-blue' },
  { id: 12, name: 'PNG to JPG', description: 'Convert PNG images to JPG format', category: 'Image', icon: Image, color: 'google-blue' },
  { id: 13, name: 'JPG to PNG', description: 'Convert JPG images to PNG format', category: 'Image', icon: Image, color: 'google-blue' },
  { id: 14, name: 'Image to PDF', description: 'Convert images to PDF documents', category: 'Image', icon: Image, color: 'google-blue' },
  { id: 15, name: 'Remove Background', description: 'Remove background from images', category: 'Image', icon: Image, color: 'google-blue' },
  { id: 16, name: 'HEIC to JPG', description: 'Convert HEIC photos to JPG', category: 'Image', icon: Image, color: 'google-blue' },
  { id: 17, name: 'WebP to PNG', description: 'Convert WebP to PNG format', category: 'Image', icon: Image, color: 'google-blue' },
  { id: 18, name: 'GIF Maker', description: 'Create animated GIFs from images', category: 'Image', icon: Image, color: 'google-blue' },

  // Video Tools
  { id: 19, name: 'Video Compressor', description: 'Compress video files for sharing', category: 'Video', icon: Video, color: 'google-green' },
  { id: 20, name: 'Video Converter', description: 'Convert between video formats', category: 'Video', icon: Video, color: 'google-green' },
  { id: 21, name: 'Video Trimmer', description: 'Trim and cut video clips', category: 'Video', icon: Scissors, color: 'google-green' },
  { id: 22, name: 'Video to GIF', description: 'Convert video clips to GIFs', category: 'Video', icon: Video, color: 'google-green' },
  { id: 23, name: 'Video to Audio', description: 'Extract audio from video files', category: 'Video', icon: Music, color: 'google-green' },
  { id: 24, name: 'Screen Recorder', description: 'Record your screen online', category: 'Video', icon: Video, color: 'google-green' },

  // Audio Tools
  { id: 25, name: 'Audio Compressor', description: 'Compress audio files', category: 'Audio', icon: Music, color: 'google-yellow' },
  { id: 26, name: 'MP3 Converter', description: 'Convert audio to MP3 format', category: 'Audio', icon: Music, color: 'google-yellow' },
  { id: 27, name: 'Audio Trimmer', description: 'Trim and cut audio files', category: 'Audio', icon: Scissors, color: 'google-yellow' },
  { id: 28, name: 'Voice Recorder', description: 'Record voice online', category: 'Audio', icon: Music, color: 'google-yellow' },
  { id: 29, name: 'Audio Joiner', description: 'Merge multiple audio files', category: 'Audio', icon: Music, color: 'google-yellow' },

  // Text Tools
  { id: 30, name: 'Word Counter', description: 'Count words, characters, sentences', category: 'Text', icon: Type, color: 'google-orange' },
  { id: 31, name: 'Case Converter', description: 'Convert text case styles', category: 'Text', icon: Type, color: 'google-orange' },
  { id: 32, name: 'Lorem Ipsum Generator', description: 'Generate placeholder text', category: 'Text', icon: Type, color: 'google-orange' },
  { id: 33, name: 'Text to Speech', description: 'Convert text to audio', category: 'Text', icon: Music, color: 'google-orange' },
  { id: 34, name: 'Speech to Text', description: 'Transcribe speech to text', category: 'Text', icon: Type, color: 'google-orange' },
  { id: 35, name: 'OCR - Image to Text', description: 'Extract text from images', category: 'Text', icon: FileText, color: 'google-orange' },
  { id: 36, name: 'Markdown Editor', description: 'Write and preview Markdown', category: 'Text', icon: FileCode, color: 'google-orange' },

  // File Tools
  { id: 37, name: 'File Converter', description: 'Convert between file formats', category: 'File', icon: Archive, color: 'google-sky' },
  { id: 38, name: 'ZIP Creator', description: 'Compress files into ZIP', category: 'File', icon: Archive, color: 'google-sky' },
  { id: 39, name: 'Unzip Files', description: 'Extract ZIP archives', category: 'File', icon: Archive, color: 'google-sky' },
  { id: 40, name: 'QR Code Generator', description: 'Create QR codes instantly', category: 'File', icon: FileCode, color: 'google-sky' },
  { id: 41, name: 'Barcode Generator', description: 'Generate barcodes', category: 'File', icon: FileCode, color: 'google-sky' },
  { id: 42, name: 'Password Generator', description: 'Create secure passwords', category: 'File', icon: Lock, color: 'google-sky' },
];

const MultiTools = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTools = tools.filter(tool => {
    const matchesCategory = activeCategory === 'All' || tool.category === activeCategory;
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
        "name": "Free Tools",
        "item": "https://naeemonlinestore.com/tools"
      }
    ]
  };

  const toolsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Free Online Tools",
    "description": "40+ free online tools for file conversion, image editing, video processing, and more.",
    "numberOfItems": tools.length,
    "itemListElement": tools.slice(0, 10).map((tool, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "SoftwareApplication",
        "name": tool.name,
        "description": tool.description,
        "applicationCategory": tool.category,
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      }
    }))
  };

  return (
    <Layout>
      <Helmet>
        <title>Free Online Tools - PDF, Image, Video, Audio Tools | Naeem Online Store</title>
        <meta name="description" content="Access 40+ free online tools for PDF conversion, image editing, video compression, audio tools, and more. No registration required." />
        <link rel="canonical" href="https://naeemonlinestore.com/tools" />
        <meta property="og:title" content="Free Online Tools - PDF, Image, Video, Audio | Naeem Online Store" />
        <meta property="og:description" content="Access 40+ free online tools for PDF conversion, image editing, video compression, and more." />
        <meta property="og:url" content="https://naeemonlinestore.com/tools" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(toolsSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-google-green via-google-blue to-google-sky py-16 sm:py-20">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-4"
          >
            Free Online Tools
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8"
          >
            Access 40+ free tools for file conversion, image editing, video processing, and more
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-xl mx-auto relative"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search for tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-background text-foreground shadow-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </motion.div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {toolCategories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.name
                    ? 'bg-primary text-primary-foreground shadow-glow'
                    : 'bg-secondary text-secondary-foreground hover:bg-primary/10'
                }`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.name}
              </button>
            ))}
          </div>

          {/* Tools Count */}
          <p className="text-center text-muted-foreground mb-8">
            Showing {filteredTools.length} tools
          </p>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredTools.map((tool, index) => (
              <motion.article
                key={tool.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(index * 0.03, 0.5) }}
                className="group bg-card rounded-xl p-5 border border-border card-hover cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-xl bg-${tool.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <tool.icon className={`w-6 h-6 text-${tool.color}`} />
                </div>
                <h3 className="font-heading font-semibold text-base mb-2">{tool.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{tool.description}</p>
                <Button variant="ghost" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  Use Tool <ExternalLink className="w-3 h-3 ml-1" />
                </Button>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom text-center">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4">
            Need More Advanced Features?
          </h2>
          <p className="text-muted-foreground text-lg mb-6 max-w-xl mx-auto">
            Check out our Digestor 24 products for premium features and unlimited access.
          </p>
          <Button asChild variant="gradient" size="lg">
            <a href="/shop">View Products</a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default MultiTools;
