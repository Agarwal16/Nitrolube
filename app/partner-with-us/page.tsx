'use client'

import { useState } from 'react'

export default function PartnerWithUs() {
  const [formData, setFormData] = useState({
    businessName: '',
    contactPerson: '',
    email: '',
    phone: '',
    type: 'distributor',
    region: '',
    experience: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        businessName: '',
        contactPerson: '',
        email: '',
        phone: '',
        type: 'distributor',
        region: '',
        experience: '',
        message: '',
      })
    }, 5000)
  }

  const benefits = [
    {
      title: 'Premium Products',
      description: 'Access to our comprehensive range of high-quality lubricants and specialty products.',
      icon: (
        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Competitive Pricing',
      description: 'Attractive margins and pricing structures designed to maximize your profitability.',
      icon: (
        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Marketing Support',
      description: 'Comprehensive marketing materials, visual items, and brochures to support your sales operations.',
      icon: (
        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
        </svg>
      ),
    },
    {
      title: 'Training & Support',
      description: 'Expert guidance programs and continuous technical assistance for your team.',
      icon: (
        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
      ),
    },
    {
      title: 'Growth Opportunities',
      description: 'Align with a rapidly expanding national brand and grow your regional market share.',
      icon: (
        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
        </svg>
      ),
    },
    {
      title: 'Dedicated Account Managers',
      description: 'Personal coordination and direct channels to ensure quick orders and queries processing.',
      icon: (
        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      ),
    },
  ]

  return (
    <div className="page-top-tight min-h-screen bg-[#0a0f1d] text-white pb-16 md:pb-24 relative bg-doodle animate-fade-in-up">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            Expand your portfolio
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Partner <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">With Us</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed text-center">
            Grow Your Business With NitroLube's Premium Lubrication Network
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-gradient-to-r from-blue-600/10 to-indigo-600/10 border border-blue-500/20 rounded-3xl p-8 mb-16 hover:border-blue-500/30 transition-all duration-300 backdrop-blur-sm">
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-blue-400">NitroLube "We Grow Together" Partner Program</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            The NitroLube "We Grow Together" Partner Program is a support network of knowledge, tools, and resources specifically designed to help Channel Partners build competencies and service capabilities. We invest heavily in our partners' technical training, product knowledge, and regional advertising, providing the necessary foundations to excel and serve customer needs.
          </p>
        </div>

        {/* Benefits Grid */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-12">Why Partner With Us?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-b from-white/5 to-[#0d1324] border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 shadow-md"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-center mb-5 text-blue-400">
                  {b.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{b.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Distributor vs Retailer & Form */}
        <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Left Column: Programs info */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-2">Partnership Levels</h2>
            
            <div className="bg-gradient-to-b from-white/5 to-[#0d1324] border border-white/10 rounded-3xl p-6 space-y-4 hover:border-blue-500/20 transition-all">
              <h3 className="text-lg md:text-xl font-bold text-blue-400 flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
                Regional Distributor
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Become our exclusive distributor for your city or district. Manage wholesale supply channels to local retail counters, garages, and industrial units with premium pricing and territory protections.
              </p>
            </div>

            <div className="bg-gradient-to-b from-white/5 to-[#0d1324] border border-white/10 rounded-3xl p-6 space-y-4 hover:border-indigo-500/20 transition-all">
              <h3 className="text-lg md:text-xl font-bold text-indigo-400 flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse" />
                Authorized Retailer / Workshop
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Stock premium NitroLube lubricants directly in your auto-parts shop or workshop. Offer high-performance lubricants to your end consumers and receive branding, banners, and promotional merchandise.
              </p>
            </div>
          </div>

          {/* Right Column: Application Form */}
          <div className="lg:col-span-7 bg-gradient-to-b from-white/5 to-[#0d1324] border border-white/10 rounded-3xl p-8 backdrop-blur-md hover:border-blue-500/20 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-2">Apply for Partnership</h2>
            <p className="text-sm text-gray-400 mb-8 leading-relaxed">
              Complete the preliminary business application form below. Our business development team will evaluate your application and contact you.
            </p>

            {submitted ? (
              <div className="p-8 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-2xl text-center space-y-4 animate-fade-in-up">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto text-emerald-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="font-bold text-lg">Application Received!</div>
                <p className="text-xs text-gray-400 leading-relaxed max-w-sm mx-auto">
                  Thank you for your interest in NitroLube. Your preliminary application has been successfully submitted. We will review your corporate experience and contact you within 2-3 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs text-gray-400 font-bold uppercase tracking-wider">Business Name</label>
                    <input
                      type="text"
                      name="businessName"
                      required
                      value={formData.businessName}
                      onChange={handleInputChange}
                      placeholder="e.g. Tirupati Auto Parts"
                      className="w-full px-4 py-3 bg-[#0a0f1d] border border-white/10 focus:border-blue-500 hover:border-white/20 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm text-white placeholder-gray-600 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-gray-400 font-bold uppercase tracking-wider">Contact Person</label>
                    <input
                      type="text"
                      name="contactPerson"
                      required
                      value={formData.contactPerson}
                      onChange={handleInputChange}
                      placeholder="Enter contact name"
                      className="w-full px-4 py-3 bg-[#0a0f1d] border border-white/10 focus:border-blue-500 hover:border-white/20 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm text-white placeholder-gray-600 transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs text-gray-400 font-bold uppercase tracking-wider">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. partner@business.com"
                      className="w-full px-4 py-3 bg-[#0a0f1d] border border-white/10 focus:border-blue-500 hover:border-white/20 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm text-white placeholder-gray-600 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-gray-400 font-bold uppercase tracking-wider">Phone / Mobile</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +91 88888 88888"
                      className="w-full px-4 py-3 bg-[#0a0f1d] border border-white/10 focus:border-blue-500 hover:border-white/20 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm text-white placeholder-gray-600 transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs text-gray-400 font-bold uppercase tracking-wider">Interest Type</label>
                    <div className="relative">
                      <select
                        name="type"
                        value={formData.type}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-[#0a0f1d] border border-white/10 focus:border-blue-500 hover:border-white/20 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm text-white cursor-pointer appearance-none transition-all"
                      >
                        <option value="distributor" className="bg-[#0a0f1d]">Regional Distributor</option>
                        <option value="retailer" className="bg-[#0a0f1d]">Authorized Retailer</option>
                        <option value="industrial" className="bg-[#0a0f1d]">Industrial Supply Partner</option>
                      </select>
                      <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-gray-400 font-bold uppercase tracking-wider">Target Region</label>
                    <input
                      type="text"
                      name="region"
                      required
                      value={formData.region}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#0a0f1d] border border-white/10 focus:border-blue-500 hover:border-white/20 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm text-white placeholder-gray-600 transition-all"
                      placeholder="e.g. Ranchi, Jharkhand"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-gray-400 font-bold uppercase tracking-wider">Years of Auto/Lubricant Experience</label>
                  <input
                    type="text"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#0a0f1d] border border-white/10 focus:border-blue-500 hover:border-white/20 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm text-white placeholder-gray-600 transition-all"
                    placeholder="e.g. 5 years in automotive retail / distributorship"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-gray-400 font-bold uppercase tracking-wider">Additional Capacity/Notes</label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#0a0f1d] border border-white/10 focus:border-blue-500 hover:border-white/20 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm text-white resize-none placeholder-gray-600 transition-all"
                    placeholder="Provide details about warehouse capacity, sales force, or retail footprint..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm rounded-xl transition-all shadow-md shadow-blue-500/10 flex items-center justify-center gap-2 hover:scale-[1.01]"
                >
                  Submit Application
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
