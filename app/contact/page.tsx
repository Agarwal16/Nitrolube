'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    }, 5000)
  }

  return (
    <div className="page-top-tight min-h-screen bg-[#0a0f1d] text-white pb-16 md:pb-24 relative bg-doodle animate-fade-in-up">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            Connect with our team
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Contact <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">Us</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed text-center">
            Have questions about specifications, supply routes, or wholesale quotes? Our executives are ready to assist.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Card */}
            <div className="bg-gradient-to-b from-white/5 to-[#0d1324] border border-white/10 rounded-3xl p-8 backdrop-blur-md space-y-6 hover:border-blue-500/20 transition-all duration-300">
              <h2 className="text-xl font-bold border-b border-white/10 pb-4">Corporate Headquarters</h2>
              
              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Registered Address</div>
                    <p className="text-xs sm:text-sm text-gray-200 mt-1 leading-relaxed font-semibold">
                      Shree Tirupati Motors & Tractors, Ranchi Patna Road, Koderma, Jharkhand, 825409
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Call Us Directly</div>
                    <p className="text-xs sm:text-sm text-gray-200 mt-1 font-extrabold text-blue-400">
                      +91 8709735654
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Email Inquiry Support</div>
                    <a href="mailto:info@nitrolube.co.in" className="text-xs sm:text-sm text-blue-400 hover:text-blue-300 font-semibold block mt-1 transition-colors">
                      info@nitrolube.co.in
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Executive Director</div>
                    <p className="text-xs sm:text-sm text-gray-200 mt-1 font-bold">
                      Abhishek Agarwal
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick action card */}
            <div className="bg-gradient-to-r from-blue-900/10 to-indigo-900/10 border border-blue-500/30 rounded-3xl p-8 text-center space-y-5 hover:border-blue-500/40 transition-all duration-300">
              <h3 className="text-lg font-bold text-white">Looking for Partnership?</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Join our regional network of distributors and workshops across India. Secure territory protection and attractive wholesale margins.
              </p>
              <div className="pt-1">
                <Link
                  href="/partner-with-us"
                  className="inline-block py-2.5 px-6 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-xs hover:scale-[1.02] transition-all shadow-md shadow-blue-500/15"
                >
                  Join Partner Program
                </Link>
              </div>
            </div>

          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 bg-gradient-to-b from-white/5 to-[#0d1324] border border-white/10 rounded-3xl p-8 backdrop-blur-md hover:border-blue-500/20 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-2">Send an Inquiry</h2>
            <p className="text-sm text-gray-400 mb-8 leading-relaxed">
              Fill out the form below to communicate directly with our sales department. We evaluate every inquiry and respond within 24 business hours.
            </p>

            {submitted ? (
              <div className="p-8 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-2xl text-center space-y-4 animate-fade-in-up">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto text-emerald-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="font-bold text-lg">Message Submitted Successfully!</div>
                <p className="text-xs text-gray-400 leading-relaxed max-w-sm mx-auto">
                  Thank you for contacting NitroLube. Our trade coordinator has received your message and will get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs text-gray-400 font-bold uppercase tracking-wider">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter full name"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-blue-500 hover:border-white/20 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm text-white placeholder-gray-600 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-gray-400 font-bold uppercase tracking-wider">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. name@company.com"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-blue-500 hover:border-white/20 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm text-white placeholder-gray-600 transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs text-gray-400 font-bold uppercase tracking-wider">Phone / Mobile</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +91 99999 99999"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-blue-500 hover:border-white/20 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm text-white placeholder-gray-600 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-gray-400 font-bold uppercase tracking-wider">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What is this inquiry about?"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-blue-500 hover:border-white/20 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm text-white placeholder-gray-600 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-gray-400 font-bold uppercase tracking-wider">Message / Details</label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-blue-500 hover:border-white/20 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm text-white resize-none placeholder-gray-600 transition-all"
                    placeholder="Provide details about product requirements, bulk order quantities, or feedback..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm rounded-xl transition-all shadow-md shadow-blue-500/10 flex items-center justify-center gap-2 hover:scale-[1.01]"
                >
                  Send Inquiry Message
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
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
