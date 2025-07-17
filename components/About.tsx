'use client'

import { 
  Target, 
  Users, 
  Award, 
  TrendingUp, 
  Shield, 
  Lightbulb, 
  Clock, 
  Globe,
  CheckCircle
} from 'lucide-react'
import { motion } from 'framer-motion'

export default function About() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We stay at the forefront of AI technology to deliver cutting-edge solutions."
    },
    {
      icon: Users,
      title: "Customer-Centric",
      description: "Your success is our priority. We build solutions that truly solve your problems."
    },
    {
      icon: Shield,
      title: "Security & Privacy",
      description: "Enterprise-grade security with GDPR compliance and data protection."
    },
    {
      icon: TrendingUp,
      title: "Scalable Growth",
      description: "Our solutions grow with your business, from startups to enterprise."
    }
  ]

  const stats = [
    { number: "500+", label: "Businesses Automated" },
    { number: "10M+", label: "Calls Processed" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Global Support" }
  ]

  const achievements = [
    "Leading AI automation provider in the enterprise market",
    "Trusted by Fortune 500 companies worldwide",
    "Award-winning customer support and implementation",
    "Certified partnerships with major cloud providers",
    "ISO 27001 and SOC 2 Type II compliant"
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
    <section id="about" className="section-padding relative overflow-hidden">
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
            About <span className="gradient-text">SolvIt AI</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            We are a leading AI business solutions company dedicated to transforming how businesses operate 
            through intelligent automation and cutting-edge AI technologies.
          </motion.p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div 
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div 
            className="glass-card-strong max-w-4xl mx-auto text-center p-8 md:p-12 mb-4"
            variants={itemVariants}
          >
            <Target className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-lg text-white/80 leading-relaxed">
              To empower businesses of all sizes with intelligent AI automation solutions that streamline operations, 
              enhance customer experiences, and drive sustainable growth. We believe that AI should be accessible, 
              practical, and transformative for every organization.
            </p>
          </motion.div>
        </motion.div>

        {/* Values */}
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
            Our Core <span className="gradient-text">Values</span>
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="glass-card p-6 text-center hover-glow group"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mb-4 shadow-neon"
                >
                  <value.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">{value.title}</h4>
                <p className="text-white/70 group-hover:text-white/90 transition-colors">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div 
            className="glass-card-strong p-8 md:p-12"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold text-center text-white mb-12 text-shadow">Our <span className="gradient-text">Impact</span></h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  variants={itemVariants}
                  whileHover={{ scale: 1.08 }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Achievements */}
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
            Why <span className="gradient-text">Choose Us</span>
          </motion.h3>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3 glass-card p-4 hover-glow"
                  variants={itemVariants}
                  whileHover={{ scale: 1.03, y: -3 }}
                >
                  <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <p className="text-white/80">{achievement}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div 
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h3 
            className="text-2xl font-bold text-white mb-6 text-shadow"
            variants={itemVariants}
          >
            Expert <span className="gradient-text">Team</span>
          </motion.h3>
          <motion.p 
            className="text-lg text-white/80 max-w-3xl mx-auto mb-8"
            variants={itemVariants}
          >
            Our team consists of world-class AI researchers, software engineers, and business consultants 
            with decades of combined experience in artificial intelligence, machine learning, and enterprise software.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="glass-card p-6 hover-glow"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">AI Research Team</h4>
              <p className="text-white/70">PhD-level experts in machine learning and natural language processing</p>
            </motion.div>
            <motion.div
              className="glass-card p-6 hover-glow"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Engineering Excellence</h4>
              <p className="text-white/70">Senior engineers with experience at top tech companies</p>
            </motion.div>
            <motion.div
              className="glass-card p-6 hover-glow"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Global Support</h4>
              <p className="text-white/70">24/7 customer success and technical support teams</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 