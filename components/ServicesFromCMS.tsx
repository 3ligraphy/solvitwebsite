'use client'

import { useState, useEffect } from 'react'
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

interface Service {
  id: number
  title: string
  description: string
  icon: string
  gradient: string
  services_list: string
  use_case: string
  category: string
  active: boolean
  order_index: number
}

// Map icon names to components
const iconMap: { [key: string]: any } = {
  Phone, FileText, TrendingUp, Brain, Users, Monitor, DollarSign, Shield, Globe,
  Zap, MessageCircle, Bot, BarChart3, Headphones, Mail, Calendar, Database, Lock,
  Languages, Cog, Sparkles
}

export default function ServicesFromCMS() {
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchServices()
  }, [])

  const fetchServices = async () => {
    try {
      const response = await fetch('/api/cms/services')
      if (response.ok) {
        const data = await response.json()
        setServices(data.services)
      }
    } catch (error) {
      console.error('Failed to fetch services:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <section id="services" className="section-padding relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-500/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-shadow">
              Loading <span className="gradient-text">AI Services</span>...
            </h2>
            <div className="w-8 h-8 border-4 border-blue-400/30 border-t-blue-400 rounded-full animate-spin mx-auto" />
          </div>
        </div>
      </section>
    )
  }

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
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Zap
            const servicesList = JSON.parse(service.services_list || '[]')
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="group h-full"
              >
                <div className="glass-card p-8 h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${service.gradient} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-white/70 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex-grow">
                    <ul className="space-y-3 mb-6">
                      {servicesList.map((serviceItem: string, idx: number) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                          <span className="text-white/80 text-sm leading-relaxed">{serviceItem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {service.use_case && (
                    <div className="mt-auto pt-6 border-t border-white/10">
                      <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                        <div className="flex items-center mb-2">
                          <Sparkles className="w-4 h-4 text-blue-400 mr-2" />
                          <h4 className="text-sm font-semibold text-blue-300">Use Case</h4>
                        </div>
                        <p className="text-sm text-white/70 leading-relaxed">{service.use_case}</p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.p 
            className="text-xl text-white/80 mb-8 leading-relaxed"
          >
            Ready to transform your business with AI automation?
          </motion.p>
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg border border-white/20"
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
