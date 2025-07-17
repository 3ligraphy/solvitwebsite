import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SolvIt AI - Business Automation Solutions',
  description: 'Leading AI business solutions company offering comprehensive automation services for customer support, sales, HR, operations, and more.',
  keywords: 'AI automation, business solutions, customer support, call center, chatbot, voice AI, process automation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Animated Background */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"></div>
          <div className="absolute inset-0 cyber-grid"></div>
          
          {/* Floating Orbs */}
          <div className="floating-orb w-96 h-96 bg-cyan-400 top-1/4 left-1/4 animate-float"></div>
          <div className="floating-orb w-64 h-64 bg-purple-400 top-3/4 right-1/4 animate-float" style={{animationDelay: '2s'}}></div>
          <div className="floating-orb w-48 h-48 bg-blue-400 top-1/2 right-1/3 animate-float" style={{animationDelay: '4s'}}></div>
          <div className="floating-orb w-32 h-32 bg-pink-400 bottom-1/4 left-1/3 animate-float" style={{animationDelay: '6s'}}></div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/20"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  )
} 