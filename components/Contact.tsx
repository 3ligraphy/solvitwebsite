'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle, 
  Calendar,
  ArrowRight,
  Sparkles,
  Zap,
  Shield,
  Cpu
} from 'lucide-react'

export default function Contact() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  })

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+20 155 310 0916"],
      action: "Call us now",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["3ligrphy@gmail.com"],
      action: "Send us an email",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Sunday - Thursday: 9:00 AM - 6:00 PM EET", "24/7 Support Available"],
      action: "Get support anytime",
      color: "from-orange-500 to-yellow-500"
    }
  ]

  const services = [
    "AI Call Center Automation",
    "Customer Support Chatbots",
    "Business Process Automation",
    "Document Processing AI",
    "HR Automation Solutions",
    "Custom AI Development"
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      // EmailJS configuration
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_solvit'
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_solvit'
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key'

      // Email template parameters
      const templateParams = {
        to_name: 'SolvIt AI Team',
        to_email: '3ligrphy@gmail.com',
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        company: formData.company,
        phone: formData.phone || 'Not provided',
        service: formData.service,
        message: formData.message,
        reply_to: formData.email
      }

      // Send email using EmailJS
      const result = await emailjs.send(serviceId, templateId, templateParams, publicKey)
      
      if (result.status === 200) {
        setSubmitStatus('success')
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          phone: '',
          service: '',
          message: ''
        })
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        setSubmitStatus('error')
        setTimeout(() => setSubmitStatus('idle'), 5000)
      }
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

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
    hidden: { y: 20, opacity: 0 },
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
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-cyan-400/20 to-emerald-400/20 rounded-full blur-3xl"
          animate={{ x: [0, -40, 0], y: [0, 20, 0], scale: [1, 0.9, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
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
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 glass-card text-cyan-400 text-sm font-medium mb-6 hover-glow"
            variants={itemVariants}
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium">Get Started Today</span>
          </motion.div>
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 text-shadow"
            variants={itemVariants}
          >
            Transform Your Business with <span className="gradient-text">SolvIt AI</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Ready to revolutionize your operations with cutting-edge AI automation? 
            Connect with our experts for a personalized consultation.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Enhanced Contact Form */}
          <motion.div 
            className="relative group"
            variants={itemVariants}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative glass-card-strong p-8 border border-white/20 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Request Consultation</h3>
              </div>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label htmlFor="firstName" className="block text-sm font-medium text-white mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm text-white placeholder-white/60"
                      placeholder="John"
                    />
                  </div>
                  <div className="relative">
                    <label htmlFor="lastName" className="block text-sm font-medium text-white mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm text-white placeholder-white/60"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div className="relative">
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm text-white placeholder-white/60"
                    placeholder="john@company.com"
                  />
                </div>
                <div className="relative">
                  <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm text-white placeholder-white/60"
                    placeholder="Your Company Inc."
                  />
                </div>
                <div className="relative">
                  <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm text-white placeholder-white/60"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div className="relative">
                  <label htmlFor="service" className="block text-sm font-medium text-white mb-2">
                    Service Interest *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm text-white"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                <div className="relative">
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm text-white placeholder-white/60 resize-none"
                    placeholder="Tell us about your automation needs and business goals..."
                  />
                </div>
                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-500/20 border border-green-500/30 text-green-400 px-4 py-3 rounded-lg mb-4 flex items-center"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.5 }}
                      className="w-5 h-5 mr-2"
                    >
                      ✓
                    </motion.div>
                    Message sent successfully! We'll get back to you soon.
                  </motion.div>
                )}
                
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-500/20 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg mb-4 flex items-center"
                  >
                    <span className="w-5 h-5 mr-2">⚠</span>
                    Failed to send message. Please try again or contact us directly.
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full btn-primary flex items-center justify-center relative overflow-hidden transition-all duration-300 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-102'
                  }`}
                  whileHover={isSubmitting ? {} : { scale: 1.02 }}
                  whileTap={isSubmitting ? {} : { scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 mr-2 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Enhanced Contact Information */}
          <motion.div 
            className="space-y-6"
            variants={itemVariants}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${info.color} rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                <div className="relative glass-card p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <motion.div 
                      className={`flex items-center justify-center w-12 h-12 bg-gradient-to-r ${info.color} rounded-lg flex-shrink-0`}
                      animate={{ scale: hoveredCard === index ? 1.1 : 1, rotate: hoveredCard === index ? 5 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <info.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-2">{info.title}</h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-white/80 mb-1">{detail}</p>
                      ))}
                      <p className={`text-sm font-medium mt-2 bg-gradient-to-r ${info.color} bg-clip-text text-transparent`}>
                        {info.action}
                      </p>
                    </div>
                    <motion.div
                      animate={{ x: hoveredCard === index ? 5 : 0, opacity: hoveredCard === index ? 1 : 0.6 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowRight className="w-5 h-5 text-white/60" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Enhanced CTA Cards */}
            <motion.div 
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
              <div className="relative glass-card-strong bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
                <div className="relative">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-5 h-5" />
                    <h4 className="text-lg font-semibold">Schedule a Demo</h4>
                  </div>
                  <p className="text-blue-100 mb-4">
                    Experience our AI automation solutions with a personalized demonstration.
                  </p>
                  <motion.button 
                    className="bg-white text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Demo
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </motion.button>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
              <div className="relative glass-card-strong bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-6 text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/20 rounded-full -translate-y-12 translate-x-12" />
                <div className="relative">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-5 h-5 text-emerald-400" />
                    <h4 className="text-lg font-semibold">24/7 Support</h4>
                  </div>
                  <p className="text-white/80 mb-4">
                    Get immediate assistance from our technical support team.
                  </p>
                  <motion.button 
                    className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-emerald-700 transition-colors duration-200 flex items-center group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Live Chat
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 