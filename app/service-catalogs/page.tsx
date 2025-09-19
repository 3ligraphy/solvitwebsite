'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Download, 
  Bot, 
  Phone, 
  Database,
  Zap,
  Shield,
  Globe,
  BarChart3,
  Users,
  Settings,
  FileText,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8 } }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const tabVariants = {
  inactive: { opacity: 0, x: 20, scale: 0.95 },
  active: { 
    opacity: 1, 
    x: 0, 
    scale: 1,
    transition: { 
      duration: 0.5, 
      ease: "easeOut"
    }
  },
  exit: { 
    opacity: 0, 
    x: -20, 
    scale: 0.95,
    transition: { 
      duration: 0.3
    }
  }
}

export default function ServiceCatalogs() {
  const [activeTab, setActiveTab] = useState('automation')

  const services = {
    automation: {
      title: 'Data Scraping & Email Automation Service',
      subtitle: 'Transforming Data into Actionable Insights',
      description: 'Collects and structures data into meaningful insights, integrating scraping with automation.',
      icon: Bot,
      color: 'from-cyan-400 to-blue-500',
      pdfFile: 'service catalog - automation pdf.pdf',
      features: [
        {
          title: 'Precise Data Extraction at Scale',
          items: [
            'Automated Data Extraction via APIs and bots',
            'Customisable Scraping Rules for tailored needs'
          ]
        },
        {
          title: 'Ensuring Data Quality and Seamless Delivery',
          items: [
            'Data Cleaning & Normalisation',
            'Email Integration: CSV, PDF, XLSX outputs'
          ]
        },
        {
          title: 'Intelligent Automation & Workflow Control',
          items: [
            'Scheduling & Frequency Control',
            'Workflow Automation',
            'Custom Alerts & Digests'
          ]
        },
        {
          title: 'Secure and Compliant Delivery',
          items: [
            'Secure Delivery via SMTP and encrypted channels',
            'Compliance: GDPR, CCPA-ready'
          ]
        }
      ],
      tiers: [
        { name: 'Standard', description: 'Basic CSV data scraping' },
        { name: 'Professional', description: 'PDF/XLSX outputs + CRM integration' },
        { name: 'Enterprise', description: 'Full BI integration and compliance-ready' }
      ],
      applications: [
        'Market Intelligence',
        'Financial Services',
        'E-Commerce Optimisation',
        'Compliance & Risk Management'
      ]
    },
    callcenter: {
      title: 'AI Call Center: Enhancing Customer Insights',
      subtitle: 'The AI Call Analysis Agent: A Strategic Overview',
      description: 'The AI Call Analysis Agent provides an end-to-end solution for analyzing customer calls. It enhances customer insights by applying advanced analytics and real-time feedback.',
      icon: Phone,
      color: 'from-purple-400 to-pink-500',
      pdfFile: 'service catalog - call center .pdf',
      features: [
        {
          title: 'Unlocking Conversations with Automatic Speech Recognition (ASR)',
          items: [
            'High Accuracy: Robust recognition of speech, even in noisy environments',
            'Multi-Language Support: Handles multiple languages and dialects',
            'Detailed Transcripts: Full conversation logs for reference and training'
          ]
        },
        {
          title: 'Decoding Customer Sentiment and Intent',
          items: [
            'Sentiment Detection: Positive, neutral, negative',
            'Intent Recognition: Identifies customer goals',
            'Proactive Insights: Helps agents understand how and why customers react'
          ]
        },
        {
          title: 'Elevating Agent Performance and Compliance',
          items: [
            'Performance Metrics: Track agent efficiency and service quality',
            'Real-Time Alerts: Monitor and alert for compliance violations',
            'Compliance Assurance: Ensures adherence to GDPR, HIPAA, PCI DSS'
          ]
        }
      ],
      tiers: [
        { name: 'Standard', description: '$49,999/month (SMBs)' },
        { name: 'Professional', description: '$79,999/month (SMBs with CRM integration)' },
        { name: 'Enterprise', description: '$99,999/month (advanced compliance and scalability)' }
      ],
      applications: [
        'Customer Support Centers',
        'Sales Teams',
        'Compliance Departments',
        'Business Intelligence'
      ]
    },
    knowledge: {
      title: 'Intelligent Knowledge Management for the Modern Enterprise',
      subtitle: 'Revolutionising Information Access',
      description: 'The AI Knowledge Base System transforms how organizations access and interact with information. Powered by NLP and LLMs, it improves search accuracy and reduces friction.',
      icon: Database,
      color: 'from-green-400 to-emerald-500',
      pdfFile: 'service catalog - knowledge baase.pdf',
      features: [
        {
          title: 'Core Capabilities',
          items: [
            'Centralised Knowledge Integration: Connects with ERP, CRM, BI tools',
            'Natural Language Querying: Users ask questions directly in plain English'
          ]
        },
        {
          title: 'Advanced AI for Deeper Insights',
          items: [
            'Semantic Understanding: Context-aware interpretation of queries',
            'Document Summarisation: Short summaries of large reports'
          ]
        },
        {
          title: 'Ensuring Relevance and Security',
          items: [
            'Continuous Learning: Improves answers over time',
            'Access Control & Security: Role-based and ISO/SOC2 compliance'
          ]
        },
        {
          title: 'Flexible Deployment Options',
          items: [
            'On-Premises',
            'Cloud-Based Hosting (AWS, Azure, GCP)',
            'Hybrid Environments'
          ]
        }
      ],
      tiers: [
        { name: 'Standard', description: 'Basic AI search and FAQs' },
        { name: 'Professional', description: 'API integrations (CRM, ERP, HRIS)' },
        { name: 'Enterprise', description: 'ISO, SOC2, GDPR compliance with full customization' }
      ],
      applications: [
        'HR: Employee queries, onboarding',
        'Operations: SOPs and workflows',
        'Customer Support: FAQs and automated answers',
        'Project Management: Documentation access'
      ]
    }
  }

  const tabs = [
    { id: 'automation', label: 'Data Automation', icon: Bot },
    { id: 'callcenter', label: 'AI Call Center', icon: Phone },
    { id: 'knowledge', label: 'Knowledge Base', icon: Database }
  ]

  const currentService = services[activeTab as keyof typeof services]

  const handleDownload = (filename: string) => {
    // Create a download link for the PDF
    const link = document.createElement('a')
    link.href = `/${filename}`
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="section-padding">
        <div className="container">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Service Catalogs</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive range of AI-powered business solutions designed to transform your operations
            </p>
          </motion.div>

          {/* Tabs */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    flex items-center gap-3 px-6 py-4 rounded-xl font-medium transition-all duration-300
                    ${activeTab === tab.id 
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg transform scale-105' 
                      : 'glass-card text-gray-300 hover:text-white hover:scale-102'
                    }
                  `}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={20} />
                  <span>{tab.label}</span>
                </motion.button>
              )
            })}
          </motion.div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={tabVariants}
              initial="inactive"
              animate="active"
              exit="exit"
              className="space-y-12"
            >
              {/* Service Header */}
              <div className="glass-card-strong p-8 rounded-2xl">
                <div className="flex flex-col lg:flex-row items-start gap-8">
                  <div className="flex-shrink-0">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${currentService.color} p-4 flex items-center justify-center`}>
                      <currentService.icon size={40} className="text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                      {currentService.title}
                    </h2>
                    <h3 className="text-xl text-cyan-400 mb-4 font-semibold">
                      {currentService.subtitle}
                    </h3>
                    <p className="text-gray-300 text-lg mb-6">
                      {currentService.description}
                    </p>
                    
                    <motion.button
                      onClick={() => handleDownload(currentService.pdfFile)}
                      className="btn-primary flex items-center gap-3"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Download size={20} />
                      Download PDF Catalog
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="grid md:grid-cols-2 gap-8">
                {currentService.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="glass-card p-6 rounded-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <h4 className="text-xl font-semibold mb-4 text-cyan-400">
                      {feature.title}
                    </h4>
                    <ul className="space-y-3">
                      {feature.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3 text-gray-300">
                          <CheckCircle size={16} className="text-green-400 mt-1 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              {/* Service Tiers */}
              <div className="glass-card-strong p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 text-center gradient-text">
                  Service Tiers
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {currentService.tiers.map((tier, index) => (
                    <motion.div
                      key={index}
                      className="glass-card p-6 rounded-xl text-center"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Star className="mx-auto mb-4 text-yellow-400" size={24} />
                      <h4 className="text-lg font-semibold mb-2 text-cyan-400">
                        {tier.name}
                      </h4>
                      <p className="text-gray-300 text-sm">
                        {tier.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div className="glass-card-strong p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 text-center gradient-text">
                  Applications
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {currentService.applications.map((application, index) => (
                    <motion.div
                      key={index}
                      className="glass-card p-4 rounded-lg text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <BarChart3 className="mx-auto mb-2 text-purple-400" size={20} />
                      <span className="text-gray-300 text-sm">{application}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="glass-card-strong p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold mb-4 gradient-text">
                    Ready to Transform Your Business?
                  </h3>
                  <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                    Get started with {currentService.title} and experience the power of AI-driven automation
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.button
                      className="btn-primary flex items-center gap-3 justify-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ArrowRight size={20} />
                      Request Demo
                    </motion.button>
                    <motion.button
                      onClick={() => handleDownload(currentService.pdfFile)}
                      className="btn-secondary flex items-center gap-3 justify-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Download size={20} />
                      Download Catalog
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      <Footer />
    </div>
  )
}
