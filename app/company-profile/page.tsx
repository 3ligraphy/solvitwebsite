'use client'

import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  Shield, 
  Globe, 
  Zap, 
  Users, 
  Bot, 
  Phone, 
  Mail, 
  Clock,
  CheckCircle,
  Star,
  Award,
  Sparkles,
  Building2,
  Target,
  Eye,
  TrendingUp,
  Headphones,
  FileText,
  MessageSquare,
  BarChart3,
  UserCheck,
  Settings,
  DollarSign,
  Scale,
  Calendar,
  Download
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

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.8 } }
}

export default function CompanyProfile() {
  const services = [
    {
      title: "Customer Support & Call Center AI",
      items: ["Voicebot", "Live Agent Assist", "Call Summarization"],
      useCase: "Retail • Handles 80% of returns & tracking queries autonomously",
      icon: Headphones,
      gradient: "from-blue-400 to-cyan-500"
    },
    {
      title: "Business Process & Backoffice AI",
      items: ["Document Processing", "Email Automation", "Meeting Summaries"],
      useCase: "Legal Firms • Auto-extract clauses from 1,000+ contracts monthly",
      icon: FileText,
      gradient: "from-green-400 to-emerald-500"
    },
    {
      title: "Sales & Marketing AI",
      items: ["Lead Scoring", "AI CRM", "Personalized Campaigns"],
      useCase: "SaaS • Increases qualified leads by 40% through AI enrichment",
      icon: TrendingUp,
      gradient: "from-purple-400 to-pink-500"
    },
    {
      title: "Knowledge & Internal AI Assistants",
      items: ["Enterprise Q&A Bot", "Slack/Teams Assistant", "Auto-Updating Knowledge Base"],
      useCase: "IT Teams • Cuts onboarding time by 60%",
      icon: MessageSquare,
      gradient: "from-orange-400 to-red-500"
    },
    {
      title: "HR & Employee Automation",
      items: ["Recruiting Assistant", "Onboarding Bot", "HR Inbox AI"],
      useCase: "Enterprises • Screen 500+ resumes weekly with zero bias",
      icon: UserCheck,
      gradient: "from-indigo-400 to-purple-500"
    },
    {
      title: "IT & DevOps AI",
      items: ["Incident Response Bot", "Log Anomaly Detection", "DevOps Copilot"],
      useCase: "Tech Startups • Cuts Mean Time To Repair (MTTR) by 50%",
      icon: Settings,
      gradient: "from-cyan-400 to-blue-500"
    },
    {
      title: "Finance & Accounting AI",
      items: ["Invoice Matching", "Expense Analysis", "Forecasting"],
      useCase: "E-commerce • Automates 95% of invoice reconciliation",
      icon: DollarSign,
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      title: "Legal & Compliance AI",
      items: ["Contract Analysis", "PII Redaction", "Policy Checker"],
      useCase: "Banks • Ensures GDPR compliance across 10,000+ documents",
      icon: Scale,
      gradient: "from-teal-400 to-green-500"
    }
  ]

  const deploymentOptions = [
    {
      title: "SaaS Platform",
      description: "Ready-to-use cloud solution for quick onboarding",
      icon: Globe
    },
    {
      title: "API Access",
      description: "Plug securely into your existing technology stack",
      icon: Settings
    },
    {
      title: "Private Cloud",
      description: "On-premises deployment for maximum data security",
      icon: Shield
    },
    {
      title: "Custom Dashboard",
      description: "Tailored UI designed specifically for your workflows",
      icon: BarChart3
    }
  ]

  const features = [
    { text: "Trusted by Fortune 500", icon: Building2 },
    { text: "ISO 27001 & SOC 2 Type II Compliant", icon: Shield },
    { text: "2-4 Week Rapid Deployment", icon: Zap },
    { text: "Multilingual & Emotion-Aware AI", icon: Globe },
    { text: "24/7 Enterprise Support", icon: Clock }
  ]

  const benefits = [
    "Up to 60% reduction in manual workloads",
    "Faster turnaround times in HR, finance, and support",
    "Enhanced customer satisfaction with conversational AI"
  ]

  const companyValues = [
    {
      title: "Innovation First",
      description: "Relentlessly advancing AI to solve complex challenges",
      icon: Sparkles
    },
    {
      title: "Customer-Centric",
      description: "Solutions designed around your business goals",
      icon: Users
    },
    {
      title: "Security",
      description: "Compliant with industry-leading data protection standards",
      icon: Shield
    },
    {
      title: "Scalability",
      description: "Flexible architectures grow with your enterprise",
      icon: TrendingUp
    }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              rotate: -360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-xl"
          />
        </div>

        <div className="relative z-10 container text-center">
          <div className="max-w-5xl mx-auto">
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 rounded-full glass-card-strong text-cyan-400 text-sm font-medium mb-8 hover-glow"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-5 h-5 mr-2" />
              </motion.div>
              Company Profile
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 text-shadow"
            >
              <span className="gradient-text">Transform Operations.</span><br />
              <span className="gradient-text">Automate Growth.</span><br />
              <span className="text-white">Powered by AI.</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-xl sm:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              SolvIt AI delivers end-to-end intelligent automation solutions tailored for modern enterprises.
            </motion.p>

            {/* Features Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="glass-card p-4 hover-glow group text-center"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-8 h-8 mx-auto mb-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center"
                  >
                    <feature.icon className="w-4 h-4 text-white" />
                  </motion.div>
                  <span className="text-white/90 text-sm font-medium group-hover:text-cyan-400 transition-colors">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 items-center justify-center"
            >
              <motion.a 
                href="#services" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center justify-center group"
              >
                Explore Our AI Solutions
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="ml-2 w-4 h-4" />
                </motion.div>
              </motion.a>
              
              <motion.a 
                href="/SolvIt_AI_Company_Profile2.pdf"
                download="SolvIt_AI_Company_Profile.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center justify-center group"
              >
                <Download className="mr-2 w-4 h-4" />
                Download Company Profile
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section id="about" className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              About <span className="gradient-text">SolvIt AI</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card p-8 hover-glow"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Vision</h3>
              </div>
              <p className="text-white/80 text-lg leading-relaxed">
                To become the leading AI automation partner in the MENA region, powering a 
                future where every business process is intelligent, seamless, and sustainable 
                aligned with the transformative goals of 2030.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card p-8 hover-glow"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              </div>
              <p className="text-white/80 text-lg leading-relaxed">
                Enable enterprises to transform operations through secure, scalable, and 
                human-centric AI automations that deliver measurable efficiency, growth, and 
                innovation.
              </p>
            </motion.div>
          </div>

          {/* Company Values */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {companyValues.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="glass-card p-6 hover-glow text-center group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center"
                >
                  <value.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {value.title}
                </h4>
                <p className="text-white/70 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* AI Automation Service Suites */}
      <section id="services" className="section-padding bg-black/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              <span className="gradient-text">AI Automation</span> Service Suites
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Modular, scalable AI solutions designed to optimize enterprise operations.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="glass-card p-8 hover-glow group"
              >
                <div className="flex items-center mb-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-lg flex items-center justify-center mr-4`}
                  >
                    <service.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                </div>
                
                <div className="mb-6">
                  {service.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center mb-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-white/80">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                  <p className="text-cyan-400 text-sm font-medium">
                    <span className="text-white/70">Use Case:</span> {service.useCase}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* VoiceFlow AI Spotlight */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 rounded-full glass-card-strong text-cyan-400 text-sm font-medium mb-8">
              <Star className="w-5 h-5 mr-2" />
              Spotlight
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              <span className="gradient-text">VoiceFlow AI</span> Call Center Suite
            </h2>
            <p className="text-xl text-white/80 mb-8">
              The Future of Customer Service is Conversational.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card p-8 hover-glow max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Key Features</h3>
                <div className="space-y-3">
                  {[
                    "Voicebot with Emotion-Aware TTS",
                    "Retrieval-Augmented Generation (RAG)",
                    "Live Agent Assist & Analytics Dashboard"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      <span className="text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Technology Stack</h3>
                <p className="text-white/80 mb-6">
                  Whisper, GPT-4, ElevenLabs, Twilio, Salesforce
                </p>
                
                <h3 className="text-2xl font-bold text-white mb-4">Industry Applications</h3>
                <p className="text-white/80 mb-6">
                  Healthcare, Banking, Telecom, Travel
                </p>
                
                <h3 className="text-2xl font-bold text-white mb-4">Why Choose VoiceFlow AI?</h3>
                <p className="text-white/80">
                  Multilingual, Dual Mode, Rapid Deployment
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <motion.a 
                href="#contact" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary inline-flex items-center"
              >
                Book a VoiceFlow Demo
                <ArrowRight className="ml-2 w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Deployment Options */}
      <section className="section-padding bg-black/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              <span className="gradient-text">Deployment & Integration</span> Options
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {deploymentOptions.map((option, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="glass-card p-6 hover-glow text-center group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center"
                >
                  <option.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {option.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {option.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Success Stories: <span className="gradient-text">Real Impact</span> with SolvIt AI
            </h2>
            <p className="text-xl text-white/80 max-w-4xl mx-auto mb-12">
              Discover how our intelligent automation solutions have transformed 
              enterprises across industries, driving efficiency, accuracy, and growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card p-8 hover-glow max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Our clients experience:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-white/80 leading-relaxed">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enterprise Plan */}
      <section className="section-padding bg-black/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              <span className="gradient-text">Enterprise Plan</span> Highlights
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card p-8 hover-glow max-w-4xl mx-auto text-center"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                "Unlimited AI Interactions",
                "Full API & Custom Integration Support",
                "Dedicated Success Manager",
                "Enterprise Analytics & SLA",
                "Custom AI Model Development"
              ].map((feature, index) => (
                <div key={index} className="flex items-center justify-center md:justify-start">
                  <Award className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0" />
                  <span className="text-white/80">{feature}</span>
                </div>
              ))}
            </div>
            
            <motion.a 
              href="#contact" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center"
            >
              Request Enterprise Proposal
              <ArrowRight className="ml-2 w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to <span className="gradient-text">Automate Your Future?</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card p-8 hover-glow max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-cyan-400 mr-4" />
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-white/70">+20 1503885386</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-cyan-400 mr-4" />
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-white/70">Solveitaiii@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-cyan-400 mr-4" />
                  <div>
                    <p className="text-white font-medium">Business Hours</p>
                    <p className="text-white/70">Sun-Thu, 9AM-6PM EET</p>
                    <p className="text-white/70">24/7 Support Available</p>
                  </div>
                </div>
              </div>
              
              <div className="text-center md:text-right">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Schedule Your Free AI Consultation
                </h3>
                <div className="space-y-4">
                  <motion.a 
                    href="#contact" 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary inline-flex items-center w-full justify-center"
                  >
                    Transform Your Business with AI
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </motion.a>
                  <motion.a 
                    href="mailto:Solveitaiii@gmail.com" 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-secondary inline-flex items-center w-full justify-center"
                  >
                    Contact Us
                    <Mail className="ml-2 w-4 h-4" />
                  </motion.a>
                  <motion.a 
                    href="/SolvIt_AI_Company_Profile2.pdf"
                    download="SolvIt_AI_Company_Profile.pdf"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="glass-card border border-cyan-400/30 hover:border-cyan-400/60 inline-flex items-center w-full justify-center px-6 py-3 text-cyan-400 hover:text-white transition-all duration-300"
                  >
                    <Download className="mr-2 w-4 h-4" />
                    Download Company Profile
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
