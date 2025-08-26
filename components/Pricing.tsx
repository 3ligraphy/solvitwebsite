'use client'

import { motion } from 'framer-motion'
import { Check, Sparkles, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "59",
      description: "Perfect for individuals and small teams",
      features: [
        "Up to 500 AI interactions per month",
        "Basic voice and chat automation",
        "Standard response time",
        "Email support",
        "Basic analytics dashboard",
        "Single language support"
      ],
      highlight: false,
      cta: "Get Started"
    },
    {
      name: "Pro",
      price: "89",
      description: "Ideal for businesses and growing teams",
      features: [
        "Up to 2,000 AI interactions per month",
        "Advanced voice and chat automation",
        "Priority response time",
        "24/7 email and chat support",
        "Advanced analytics and reporting",
        "Multi-language support",
        "Custom AI model training",
        "API access"
      ],
      highlight: true,
      cta: "Try Pro"
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for large-scale operations",
      features: [
        "Unlimited AI interactions",
        "Full-suite automation capabilities",
        "Dedicated response time",
        "24/7 priority support with dedicated manager",
        "Enterprise-grade analytics",
        "Unlimited language support",
        "Custom AI development",
        "Full API access with priority rate limits",
        "Custom integration support"
      ],
      highlight: false,
      cta: "Contact Sales"
    }
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
    <section id="pricing" className="section-padding relative overflow-hidden">
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
            <span className="text-sm font-medium">Flexible Plans</span>
          </motion.div>
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 text-shadow"
            variants={itemVariants}
          >
            Choose the Perfect <span className="gradient-text">Plan</span> for Your Business
          </motion.h2>
          <motion.p 
            className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Affordable plans for businesses of all sizes. 
            Start with our core features and upgrade as you grow.
          </motion.p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative group ${plan.highlight ? 'md:-mt-4 md:mb-4' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full text-white text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className={`h-full glass-card-strong p-8 rounded-2xl border border-white/10 backdrop-blur-sm relative overflow-hidden group-hover:border-cyan-500/50 transition-colors duration-500 ${plan.highlight ? 'bg-gradient-to-b from-cyan-500/10 to-blue-500/10' : ''}`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700" />
                
                <div className="relative">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                    {plan.price !== "Custom" && <span className="text-white/60">/month</span>}
                  </div>
                  <p className="text-white/80 mb-6">{plan.description}</p>
                  
                  <Link href="/demo">
                    <motion.button 
                      className={`w-full mb-8 flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 group/btn ${
                        plan.highlight 
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/25' 
                          : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {plan.cta}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>

                  <ul className="space-y-4">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.highlight ? 'text-cyan-400' : 'text-green-400'}`} />
                        <span className="text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
