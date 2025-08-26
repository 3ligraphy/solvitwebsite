'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calendar, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

declare global {
  interface Window {
    Calendly: any;
  }
}

export default function DemoPage() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.head.appendChild(script)

    const timeoutId = setTimeout(() => {
      if (window.Calendly) {
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/3ligraphy/30min',
          parentElement: document.getElementById('calendly-embed'),
          prefill: {},
          utm: {}
        });
      }
    }, 1000);

    return () => {
      clearTimeout(timeoutId)
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Navigation */}
        <Link href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Schedule Your Demo
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Choose a convenient time slot for your personalized demonstration of our AI automation solutions.
            Our team will walk you through the platform and answer any questions you may have.
          </p>
        </motion.div>

        {/* Calendly Integration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-lg rounded-xl shadow-xl overflow-hidden max-w-4xl mx-auto"
        >
          <div 
            id="calendly-embed" 
            style={{ 
              minWidth: '320px',
              width: '100%',
              height: '750px'
            }}
          ></div>
        </motion.div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <h2 className="text-2xl font-semibold mb-4">What to Expect</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6">
              <Calendar className="w-8 h-8 text-cyan-400 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">30-Minute Session</h3>
              <p className="text-gray-400">Comprehensive walkthrough of our AI solutions tailored to your needs</p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6">
              <Calendar className="w-8 h-8 text-cyan-400 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Live Demo</h3>
              <p className="text-gray-400">See our AI automation in action with real-world examples</p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6">
              <Calendar className="w-8 h-8 text-cyan-400 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Q&A Session</h3>
              <p className="text-gray-400">Get all your questions answered by our product experts</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
