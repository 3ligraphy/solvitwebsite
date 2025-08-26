'use client'

import { 
  Phone, 
  MessageCircle, 
  FileText, 
  BarChart3, 
  Users, 
  Shield, 
  Mic, 
  Bot, 
  Headphones,
  Database,
  Brain,
  Globe,
  CheckCircle,
  ArrowRight
} from 'lucide-react'
import { motion } from 'framer-motion'

export default function Solutions() {
  const features = [
    {
      icon: Bot,
      title: "AI Voicebot (Inbound/Outbound)",
      description: "Natural speech interaction handling customer queries, support requests, and appointment scheduling with human-like responses."
    },
    {
      icon: Brain,
      title: "Dynamic Knowledge Retrieval (RAG)",
      description: "Real-time answer generation from company documentation, FAQs, and CRM data with personalized responses."
    },
    {
      icon: FileText,
      title: "Real-Time Transcription & Summarization",
      description: "Instant call-to-text conversion with automated summaries, action items, and sentiment analysis."
    },
    {
      icon: Headphones,
      title: "Live Agent Assist",
      description: "AI provides real-time suggestions, relevant articles, and next-best-action recommendations during human calls."
    },
    {
      icon: Database,
      title: "Call Classification & Ticket Automation",
      description: "Auto-tag issues, create support tickets with context, and route to appropriate departments."
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights Dashboard",
      description: "Track KPIs, resolution rates, customer satisfaction scores, and searchable call transcripts."
    }
  ]

  const industries = [
    { name: "Retail", use: "Order status, product availability, returns" },
    { name: "Healthcare", use: "Appointment booking, insurance validation" },
    { name: "Banking", use: "Balance inquiry, fraud reporting, credit applications" },
    { name: "Travel", use: "Flight status, refund, rescheduling" },
    { name: "Telecom", use: "Plan upgrades, technical support, usage alerts" }
  ]

  const techStack = [
    { component: "Speech-to-Text", tech: "OpenAI Whisper, Google Speech, Deepgram" },
    { component: "Language Model", tech: "GPT-4 / Claude / Mistral (RAG)" },
    { component: "Text-to-Speech", tech: "ElevenLabs, Azure TTS, Amazon Polly" },
    { component: "Voice Integration", tech: "Twilio Voice, Dialogflow CX, Genesys Cloud" },
    { component: "CRM/Helpdesk", tech: "Salesforce, Zendesk, HubSpot, Freshdesk" },
    { component: "Vector Database", tech: "Pinecone, Weaviate, FAISS, Qdrant" }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  }

  return (
    <section id="solutions" className="section-padding relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], rotate: [360, 180, 0] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-500/10 rounded-full blur-3xl"
        />
      </div>
      <div className="container relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-shadow"
            variants={itemVariants}
          >
            <span className="gradient-text">VoiceFlow AI™</span> Call Center Solution
          </motion.h2>
          <motion.p 
            className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Conversational Intelligence for Modern Contact Centers - An end-to-end AI-powered call center solution 
            that revolutionizes customer interaction with natural, human-like communication.
          </motion.p>
        </motion.div>

        {/* Core Features */}
        <motion.div 
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h3 
            className="text-2xl font-bold text-center text-white mb-12 text-shadow"
            variants={itemVariants}
          >
            Core <span className="gradient-text">Features</span>
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="glass-card p-6 hover-glow group"
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg mb-4 shadow-neon"
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </motion.div>
                <h4 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors mb-2">
                  {feature.title}
                </h4>
                <p className="text-white/70 group-hover:text-white/90 transition-colors">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technology Stack */}
        <motion.div 
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h3 
            className="text-2xl font-bold text-center text-white mb-12 text-shadow"
            variants={itemVariants}
          >
            Enterprise-Grade <span className="gradient-text">Technology Stack</span>
          </motion.h3>
          <div className="glass-card-strong p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {techStack.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  variants={itemVariants}
                >
                  <motion.div 
                    whileHover={{ scale: 1.2 }}
                    className="flex-shrink-0 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-2"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">{item.component}</h4>
                    <p className="text-white/70">{item.tech}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Industry Use Cases */}
        <motion.div 
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h3 
            className="text-2xl font-bold text-center text-white mb-12 text-shadow"
            variants={itemVariants}
          >
            Industry <span className="gradient-text">Applications</span>
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className="glass-card p-6 hover-glow"
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <h4 className="text-lg font-semibold text-white mb-2">{industry.name}</h4>
                <p className="text-white/70">{industry.use}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Unique Selling Points */}
        <motion.div 
          className="glass-card-strong p-8 shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h3 
            className="text-2xl font-bold text-center text-white mb-8 text-shadow"
            variants={itemVariants}
          >
            Why Choose <span className="gradient-text">VoiceFlow AI™</span>
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-lg font-semibold text-white">Human-like Speech with Emotion</h4>
                  <p className="text-white/70">Advanced TTS with emotion-aware responses for natural conversations</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-lg font-semibold text-white">Built-in RAG Technology</h4>
                  <p className="text-white/70">Access proprietary knowledge bases for accurate, contextual responses</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-lg font-semibold text-white">Multilingual Support</h4>
                  <p className="text-white/70">Works in 50+ languages including regional dialects</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-lg font-semibold text-white">Dual Mode Operation</h4>
                  <p className="text-white/70">Supports both full automation and agent assist modes</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-lg font-semibold text-white">Rapid Deployment</h4>
                  <p className="text-white/70">Get up and running within 2-4 weeks</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-lg font-semibold text-white">Enterprise Security</h4>
                  <p className="text-white/70">GDPR-ready with end-to-end encryption and PII redaction</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <motion.a 
              href="/demo" 
              className="btn-primary inline-flex items-center group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Schedule Demo
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 