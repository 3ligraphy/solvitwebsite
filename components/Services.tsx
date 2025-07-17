'use client'

import { motion } from 'framer-motion'
import { 
  Phone, 
  FileText, 
  TrendingUp, 
  Brain, 
  Users, 
  Monitor, 
  DollarSign, 
  Shield, 
  Globe,
  Zap,
  MessageCircle,
  Bot,
  BarChart3,
  Headphones,
  Mail,
  Calendar,
  Database,
  Lock,
  Languages,
  Cog,
  Sparkles
} from 'lucide-react'

export default function Services() {
  const serviceCategories = [
    {
      icon: Phone,
      title: "Customer Support & Call Center",
      description: "24/7 AI-powered customer service automation",
      services: [
        "AI Voicebot & Chatbot Automation",
        "Ticket Classification & Routing", 
        "AI Call Summarization & Transcription",
        "Agent Assist Automation",
        "Voice Authentication & Fraud Detection"
      ]
    },
    {
      icon: FileText,
      title: "Business Process & Backoffice",
      description: "Streamline your operations with intelligent automation",
      services: [
        "Document Understanding & Processing",
        "Email Automation (NLP-driven)",
        "AI Meeting Summaries & Action Items"
      ]
    },
    {
      icon: TrendingUp,
      title: "Sales & Marketing Automation",
      description: "Boost your sales performance with AI-driven insights",
      services: [
        "Lead Scoring & Enrichment",
        "AI Email Personalization & Campaigns",
        "AI CRM Data Entry",
        "Call Analytics for Sales Teams"
      ]
    },
    {
      icon: Brain,
      title: "Knowledge & Internal AI Assistants",
      description: "Empower your team with intelligent knowledge systems",
      services: [
        "Enterprise Q&A Bot (RAG)",
        "AI Slack/Teams Knowledge Assistant",
        "Auto-Updating Knowledge Base"
      ]
    },
    {
      icon: Users,
      title: "HR & Employee Automation",
      description: "Revolutionize your human resources processes",
      services: [
        "AI Recruiting Assistant",
        "Onboarding Assistant",
        "HR Inbox Automation"
      ]
    },
    {
      icon: Monitor,
      title: "IT & DevOps Automation",
      description: "Optimize your IT operations with intelligent monitoring",
      services: [
        "AI Incident Response Bot",
        "Log Anomaly Detection",
        "DevOps Copilot"
      ]
    },
    {
      icon: DollarSign,
      title: "Finance & Accounting Automation",
      description: "Automate financial processes with precision",
      services: [
        "Invoice Matching & Payment Automation",
        "Expense Report Analysis",
        "Financial Forecasting Automation"
      ]
    },
    {
      icon: Shield,
      title: "Legal & Compliance Automation",
      description: "Ensure compliance with AI-powered legal solutions",
      services: [
        "Contract Analysis & Clause Detection",
        "PII Redaction",
        "Policy Compliance Checker"
      ]
    },
    {
      icon: Globe,
      title: "Multilingual & Global Automations",
      description: "Break language barriers with global AI solutions",
      services: [
        "Speech Translation & Transcription",
        "Multilingual Customer Support AI"
      ]
    },
    {
      icon: Cog,
      title: "Custom AI Services",
      description: "Tailored AI solutions for your specific industry",
      services: [
        "Legal Copilot",
        "Medical Copilot",
        "Insurance Claims Copilot",
        "Retail Inventory Assistant"
      ]
    }
  ]

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-shadow"
          >
            Comprehensive <span className="gradient-text">AI Automation Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            Transform every aspect of your business with our complete suite of AI automation solutions, 
            designed to streamline operations and boost productivity across all departments.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02, 
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="glass-card p-6 hover-glow group"
            >
              <div className="flex items-center mb-4">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg mr-4 shadow-neon"
                >
                  <category.icon className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  {category.title}
                </h3>
              </div>
              
              <p className="text-white/70 mb-4 group-hover:text-white/90 transition-colors">
                {category.description}
              </p>
              
              <ul className="space-y-2">
                {category.services.map((service, serviceIndex) => (
                  <motion.li 
                    key={serviceIndex} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: (index * 0.1) + (serviceIndex * 0.05) }}
                    viewport={{ once: true }}
                    className="flex items-start group/item"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.2 }}
                      className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-2 mr-3"
                    />
                    <span className="text-sm text-white/70 group-hover/item:text-white/90 transition-colors">
                      {service}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Deployment Options */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 glass-card-strong p-8 hover-glow"
        >
          <motion.h3 
            className="text-2xl font-bold text-center text-white mb-8 text-shadow"
          >
            Flexible <span className="gradient-text">Deployment Options</span>
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Globe, title: "SaaS Platform", desc: "Cloud-based solutions ready to deploy", color: "from-blue-400 to-cyan-500" },
              { icon: Zap, title: "API Access", desc: "Easy integration with existing systems", color: "from-yellow-400 to-orange-500" },
              { icon: Shield, title: "Private Cloud", desc: "On-premises for maximum security", color: "from-green-400 to-emerald-500" },
              { icon: BarChart3, title: "Custom Dashboard", desc: "Tailored UI for your specific needs", color: "from-purple-400 to-pink-500" }
            ].map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center glass-card p-6 hover-glow group"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`flex items-center justify-center w-16 h-16 bg-gradient-to-r ${option.color} rounded-full mx-auto mb-4 shadow-neon`}
                >
                  <option.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {option.title}
                </h4>
                <p className="text-sm text-white/70 group-hover:text-white/90 transition-colors">
                  {option.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 