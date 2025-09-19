'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import {
  LayoutDashboard,
  Settings,
  FileText,
  Users,
  DollarSign,
  MessageSquare,
  Building,
  LogOut,
  Plus,
  Edit,
  Trash2,
  Eye,
  EyeOff,
  Save,
  X
} from 'lucide-react'

interface User {
  id: number
  username: string
  email: string
  role: string
}

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

interface CompanyInfo {
  id: number
  section: string
  title: string
  subtitle: string
  content: string
  data: string
  active: boolean
}

export default function AdminDashboard() {
  const [user, setUser] = useState<User | null>(null)
  const [activeTab, setActiveTab] = useState('overview')
  const [services, setServices] = useState<Service[]>([])
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo[]>([])
  const [editingService, setEditingService] = useState<Service | null>(null)
  const [editingCompanyInfo, setEditingCompanyInfo] = useState<CompanyInfo | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    fetchUserData()
    fetchServices()
    fetchCompanyInfo()
  }, [])

  const fetchUserData = async () => {
    try {
      const response = await fetch('/api/auth/me')
      if (response.ok) {
        const data = await response.json()
        setUser(data.user)
      }
    } catch (error) {
      console.error('Failed to fetch user data:', error)
    }
  }

  const fetchServices = async () => {
    try {
      const response = await fetch('/api/cms/services')
      if (response.ok) {
        const data = await response.json()
        setServices(data.services)
      }
    } catch (error) {
      console.error('Failed to fetch services:', error)
    }
  }

  const fetchCompanyInfo = async () => {
    try {
      const response = await fetch('/api/cms/company-info')
      if (response.ok) {
        const data = await response.json()
        setCompanyInfo(data.companyInfo)
      }
    } catch (error) {
      console.error('Failed to fetch company info:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' })
      router.push('/admin/login')
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  const handleSaveService = async (service: Partial<Service>) => {
    try {
      const method = service.id ? 'PUT' : 'POST'
      const response = await fetch('/api/cms/services', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(service),
      })

      if (response.ok) {
        await fetchServices()
        setEditingService(null)
      }
    } catch (error) {
      console.error('Failed to save service:', error)
    }
  }

  const handleDeleteService = async (id: number) => {
    if (confirm('Are you sure you want to delete this service?')) {
      try {
        const response = await fetch(`/api/cms/services?id=${id}`, {
          method: 'DELETE',
        })

        if (response.ok) {
          await fetchServices()
        }
      } catch (error) {
        console.error('Failed to delete service:', error)
      }
    }
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'services', label: 'Services', icon: Settings },
    { id: 'company', label: 'Company Info', icon: Building },
    { id: 'pricing', label: 'Pricing', icon: DollarSign },
  ]

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-white">
          <div className="w-8 h-8 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin mx-auto mb-4" />
          <p>Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">SolvIt AI CMS</h1>
              <p className="text-slate-600">Content Management System</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium text-slate-900">{user?.username}</p>
                <p className="text-xs text-slate-500">{user?.role}</p>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 px-4 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-sm h-[calc(100vh-80px)]">
          <nav className="p-4">
            <ul className="space-y-2">
              {tabs.map((tab) => (
                <li key={tab.id}>
                  <button
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === tab.id
                        ? 'bg-blue-50 text-blue-700 border-blue-200'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <tab.icon className="w-5 h-5" />
                    <span>{tab.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activeTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-slate-900">Dashboard Overview</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-lg shadow-sm p-6 border border-slate-200">
                  <div className="flex items-center">
                    <Settings className="w-8 h-8 text-blue-500" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-slate-600">Services</p>
                      <p className="text-2xl font-bold text-slate-900">{services.length}</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm p-6 border border-slate-200">
                  <div className="flex items-center">
                    <Building className="w-8 h-8 text-green-500" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-slate-600">Company Sections</p>
                      <p className="text-2xl font-bold text-slate-900">{companyInfo.length}</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm p-6 border border-slate-200">
                  <div className="flex items-center">
                    <Users className="w-8 h-8 text-purple-500" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-slate-600">Admin Users</p>
                      <p className="text-2xl font-bold text-slate-900">1</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm p-6 border border-slate-200">
                  <div className="flex items-center">
                    <MessageSquare className="w-8 h-8 text-orange-500" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-slate-600">Messages</p>
                      <p className="text-2xl font-bold text-slate-900">0</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'services' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold text-slate-900">Services Management</h2>
                <button
                  onClick={() => setEditingService({
                    id: 0,
                    title: '',
                    description: '',
                    icon: 'Zap',
                    gradient: 'from-blue-400 to-cyan-500',
                    services_list: '[]',
                    use_case: '',
                    category: '',
                    active: true,
                    order_index: 0
                  })}
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Service</span>
                </button>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-slate-200">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                          Title
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                          Category
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-slate-200">
                      {services.map((service) => (
                        <tr key={service.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div>
                              <div className="text-sm font-medium text-slate-900">{service.title}</div>
                              <div className="text-sm text-slate-500">{service.description}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">
                            {service.category}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                              service.active 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {service.active ? 'Active' : 'Inactive'}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={() => setEditingService(service)}
                                className="text-blue-600 hover:text-blue-900"
                              >
                                <Edit className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleDeleteService(service.id)}
                                className="text-red-600 hover:text-red-900"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'company' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-slate-900">Company Information</h2>
              
              <div className="grid gap-6">
                {companyInfo.map((info) => (
                  <div key={info.id} className="bg-white rounded-lg shadow-sm p-6 border border-slate-200">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-slate-900 capitalize">
                        {info.section.replace('_', ' ')}
                      </h3>
                      <button
                        onClick={() => setEditingCompanyInfo(info)}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="space-y-2">
                      {info.title && (
                        <div>
                          <span className="text-sm font-medium text-slate-600">Title:</span>
                          <p className="text-slate-900">{info.title}</p>
                        </div>
                      )}
                      {info.subtitle && (
                        <div>
                          <span className="text-sm font-medium text-slate-600">Subtitle:</span>
                          <p className="text-slate-900">{info.subtitle}</p>
                        </div>
                      )}
                      {info.content && (
                        <div>
                          <span className="text-sm font-medium text-slate-600">Content:</span>
                          <p className="text-slate-900">{info.content}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </main>
      </div>

      {/* Service Edit Modal */}
      {editingService && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">
                  {editingService.id ? 'Edit Service' : 'Add Service'}
                </h3>
                <button
                  onClick={() => setEditingService(null)}
                  className="text-slate-400 hover:text-slate-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  handleSaveService(editingService)
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Title</label>
                  <input
                    type="text"
                    value={editingService.title}
                    onChange={(e) => setEditingService({...editingService, title: e.target.value})}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Description</label>
                  <textarea
                    value={editingService.description}
                    onChange={(e) => setEditingService({...editingService, description: e.target.value})}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={3}
                    required
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Icon</label>
                    <input
                      type="text"
                      value={editingService.icon}
                      onChange={(e) => setEditingService({...editingService, icon: e.target.value})}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Lucide icon name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Category</label>
                    <input
                      type="text"
                      value={editingService.category}
                      onChange={(e) => setEditingService({...editingService, category: e.target.value})}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Use Case</label>
                  <input
                    type="text"
                    value={editingService.use_case}
                    onChange={(e) => setEditingService({...editingService, use_case: e.target.value})}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={editingService.active}
                      onChange={(e) => setEditingService({...editingService, active: e.target.checked})}
                      className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-slate-700">Active</span>
                  </label>
                </div>
                
                <div className="flex justify-end space-x-3 pt-6">
                  <button
                    type="button"
                    onClick={() => setEditingService(null)}
                    className="px-4 py-2 text-slate-600 hover:text-slate-800 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
