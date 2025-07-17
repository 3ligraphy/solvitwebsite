'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Bot, Phone, Mail } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass-card-strong border-b border-white/10"
    >
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg shadow-neon hover-glow"
            >
              <Bot className="w-6 h-6 text-white" />
            </motion.div>
            <span className="text-xl font-bold gradient-text">SolvIt AI</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  color: "#00d9ff",
                  textShadow: "0 0 8px rgba(0, 217, 255, 0.8)"
                }}
                className="text-white/80 hover:text-cyan-400 font-medium transition-all duration-300 relative group"
              >
                {item.name}
                <span className="absolute inset-x-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 bottom-0 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.a 
              href="tel:+1234567890" 
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 text-sm text-white/70 hover:text-cyan-400 transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              <span>+1 (234) 567-890</span>
            </motion.a>
            <motion.a 
              href="mailto:info@solvitai.com" 
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 text-sm text-white/70 hover:text-cyan-400 transition-all duration-300"
            >
              <Mail className="w-4 h-4" />
              <span>info@solvitai.com</span>
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-white/80 hover:text-cyan-400 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-card border-t border-white/10"
          >
            <nav className="flex flex-col space-y-4 py-4">
              {navigation.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05, 
                    color: "#00d9ff",
                    textShadow: "0 0 8px rgba(0, 217, 255, 0.8)"
                  }}
                  className="text-white/80 hover:text-cyan-400 font-medium transition-all duration-300 px-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
} 