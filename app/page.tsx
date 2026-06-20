'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import TransparentProductImage from '@/components/TransparentProductImage'
import Hero3DShowcase from '@/components/Hero3DShowcase'
import CarAnimation from '@/components/CarAnimation'

// Animated counter hook
function useCounter(target: number, duration: number = 2000, startWhen: boolean = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!startWhen) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [target, duration, startWhen])
  return count
}

// Intersection observer hook
function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])
  return { ref, inView }
}

export default function Home() {
  const [activeTab, setActiveTab] = useState('all')

  const benefits = [
    {
      title: 'Peak Thermal Stability',
      description: 'Engineered to withstand extreme temperatures without breaking viscosity — continuous protection in all conditions.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: 'rgba(245, 158, 11, 0.2)',
      borderColor: 'rgba(245, 158, 11, 0.3)',
      iconColor: '#f59e0b',
    },
    {
      title: 'Advanced Wear Protection',
      description: 'Creates a high-strength microscopic barrier preventing metal-on-metal contact, extending machine lifespan dramatically.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: 'rgba(59, 130, 246, 0.2)',
      borderColor: 'rgba(59, 130, 246, 0.3)',
      iconColor: '#3b82f6',
    },
    {
      title: 'Enhanced Fuel Efficiency',
      description: 'Reduces internal engine drag and friction, translating directly into optimized mileage and peak power delivery.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'rgba(16, 185, 129, 0.2)',
      borderColor: 'rgba(16, 185, 129, 0.3)',
      iconColor: '#10b981',
    },
    {
      title: 'Anti-Sludge Formula',
      description: 'Active cleaning agents prevent carbon buildup and sludge deposits, keeping your engine interior pristine and efficient.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      color: 'rgba(139, 92, 246, 0.2)',
      borderColor: 'rgba(139, 92, 246, 0.3)',
      iconColor: '#8b5cf6',
    },
  ]

  const featuredProducts = [
    {
      title: 'Engine Oil',
      category: 'engine-oil',
      subtitle: 'NitroLube Premium Engine Oil',
      image: '/engine_oil_3d.jpg',
      route: '/products/engine-oil',
      tag: 'Best Seller',
      tagColor: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
      specs: ['SAE 5W-30 / 10W-30 / 15W-40 / 20W-40', 'Fully Synthetic & Multigrade', 'Unmatched thermal protection'],
      glowColor: 'rgba(245, 158, 11, 0.15)',
    },
    {
      title: 'Gear Oil',
      category: 'gear-oil',
      subtitle: 'Extreme Pressure Gear Oil',
      image: '/gear_oil_3d.jpg',
      route: '/products/gear-oil',
      tag: 'Heavy Duty',
      tagColor: 'bg-amber-500/10 border-amber-500/30 text-amber-400',
      specs: ['EP 90 / 80W-90 / 85W-140', 'Superior wear protection', 'Smooth gear shifting'],
      glowColor: 'rgba(16, 185, 129, 0.15)',
    },
    {
      title: 'Hydraulic Oil',
      category: 'industrial',
      subtitle: 'Industrial Hydraulic Fluid',
      image: '/hydraulic_oil_3d.jpg',
      route: '/products/hydraulic-oil',
      tag: 'Industrial',
      tagColor: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400',
      specs: ['Grade 32 / 46 / 68', 'High viscosity index', 'Excellent water separation'],
      glowColor: 'rgba(6, 182, 212, 0.15)',
    },
    {
      title: 'Coolant',
      category: 'specialties',
      subtitle: 'Advanced Antifreeze & Coolant',
      image: '/coolant_3d.jpg',
      route: '/products/coolant',
      tag: 'All Season',
      tagColor: 'bg-blue-500/10 border-blue-500/30 text-blue-400',
      specs: ['Multipurpose 1:4 / 1:7', 'Anti-rust protection', 'Efficient heat transfer'],
      glowColor: 'rgba(239, 68, 68, 0.12)',
    },
    {
      title: 'Grease',
      category: 'specialties',
      subtitle: 'Heavy Duty Gel Lubricants',
      image: '/grease_3d.jpg',
      route: '/products/grease',
      tag: 'High Temp',
      tagColor: 'bg-red-500/10 border-red-500/30 text-red-400',
      specs: ['White Gel NP / Red Lithium AP-3 / Golden Gel AP-3', 'Water washout resistance', 'High shear stability'],
      glowColor: 'rgba(217, 70, 239, 0.12)',
    },
    {
      title: 'Brake Oil',
      category: 'specialties',
      subtitle: 'High Boiling Point Brake Fluid',
      image: '/brake_oil_3d.jpg',
      route: '/products/brake-oil',
      tag: 'Safety Critical',
      tagColor: 'bg-rose-500/10 border-rose-500/30 text-rose-400',
      specs: ['DOT-3 & DOT-4 Fluids', 'Highly responsive braking', 'Resists vapor lock'],
      glowColor: 'rgba(6, 182, 212, 0.1)',
    },
    {
      title: 'Steering Oil',
      category: 'specialties',
      subtitle: 'Power Steering Fluid',
      image: '/steering_oil_3d.jpg',
      route: '/products/steering-oil',
      tag: 'Automotive',
      tagColor: 'bg-violet-500/10 border-violet-500/30 text-violet-400',
      specs: ['Anti-foam & seal protection', 'Consistent power transition', 'Extends pump lifespan'],
      glowColor: 'rgba(99, 102, 241, 0.12)',
    },
    {
      title: 'Shocker Oil',
      category: 'specialties',
      subtitle: 'Shock Absorber Damping Fluid',
      image: '/shocker_oil_3d.jpg',
      route: '/products/shocker-oil',
      tag: 'Consistency',
      tagColor: 'bg-purple-500/10 border-purple-500/30 text-purple-400',
      specs: ['All-terrain shock oil', 'Damping performance consistency', 'Excellent seal compatibility'],
      glowColor: 'rgba(168, 85, 247, 0.1)',
    },
    {
      title: 'UTTO Oil',
      category: 'industrial',
      subtitle: 'Universal Tractor Transmission Oil',
      image: '/utto_oil_3d.jpg',
      route: '/products/utto-oil',
      tag: 'Agricultural',
      tagColor: 'bg-orange-500/10 border-orange-500/30 text-orange-400',
      specs: ['Tractor transmission oil', 'Wet brake noise control', 'Hydraulic system support'],
      glowColor: 'rgba(251, 146, 60, 0.1)',
    },
  ]

  const filteredProducts = featuredProducts.filter((prod) => {
    if (activeTab === 'all') {
      return ['Engine Oil', 'Gear Oil', 'Hydraulic Oil', 'Coolant', 'Grease', 'Brake Oil'].includes(prod.title)
    }
    if (activeTab === 'engine-oil') return prod.title === 'Engine Oil'
    if (activeTab === 'gear-oil') return prod.title === 'Gear Oil'
    if (activeTab === 'industrial') return prod.category === 'industrial'
    if (activeTab === 'specialties') return prod.category === 'specialties'
    return true
  })

  const reportNames = [
    'Viscosity Index Analysis',
    'High-Temp Stability Report',
    'Wear & Friction Performance',
    'Shear Stability Assessment',
    'Radiator Coolant Test',
    'Flash & Fire Point Audit',
  ]

  // Stats section with animated counters
  const statsRef = useRef<HTMLDivElement>(null)
  const [statsInView, setStatsInView] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsInView(true) },
      { threshold: 0.3 }
    )
    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  const stats = [
    { value: 50, suffix: '+', label: 'Distributors', sublabel: 'Pan India Network' },
    { value: 9, suffix: ' Categories', label: 'Product Lines', sublabel: 'Complete Lubrication' },
    { value: 100, suffix: '%', label: 'Lab Tested', sublabel: 'Every Batch' },
    { value: 2015, suffix: '', label: 'ISO 9001', sublabel: 'Since Inception' },
  ]

  const marqueeItems = [
    '🏆 ISO 9001:2015 Certified',
    '🧪 Lab Tested Every Batch',
    '⚡ SAE / API Grade Compliant',
    '🌡️ Extreme Temperature Rated',
    '🛡️ BIS Standard Formulated',
    '🚀 50+ National Distributors',
    '🔬 Advanced Chemical Formula',
    '♻️ Eco-Conscious Production',
  ]

  return (
    <div className="w-full bg-[#070d1a] text-white overflow-hidden">

      {/* ================================================================
          HERO SECTION
          ================================================================ */}
      <section
        className="relative pt-[68px] pb-16 md:pt-20 md:pb-24 bg-grid-lines overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #050b18 0%, #070d1a 50%, #0c1225 100%)',
        }}
      >
        {/* Ambient orbs */}
        <div className="hero-orb w-[500px] h-[500px] top-[-10%] right-[-10%] opacity-25" style={{ background: 'rgba(37, 99, 235, 0.6)' }} />
        <div className="hero-orb w-[350px] h-[350px] bottom-[-5%] left-[5%] opacity-20" style={{ background: 'rgba(6, 182, 212, 0.5)', animationDelay: '3s' }} />
        <div className="hero-orb w-[200px] h-[200px] top-[30%] left-[30%] opacity-10" style={{ background: 'rgba(99, 102, 241, 0.6)', animationDelay: '1.5s' }} />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-lines opacity-60 pointer-events-none" />

        {/* Top gradient fade */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#070d1a] to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">

            {/* Left Content */}
            <div className="md:col-span-6 lg:col-span-7 space-y-6 text-left">

              {/* Badge */}
              <div
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border text-sm font-semibold tracking-wider uppercase animate-fade-in-up"
                style={{
                  background: 'rgba(37, 99, 235, 0.1)',
                  borderColor: 'rgba(37, 99, 235, 0.3)',
                  color: '#60a5fa',
                }}
              >
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                Premium Lubrication Engineering
              </div>

              {/* Headline */}
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.08] animate-fade-in-up"
                style={{ animationDelay: '80ms', fontFamily: 'Montserrat, sans-serif' }}
              >
                Engineered for{' '}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #06b6d4 100%)' }}
                >
                  Power
                </span>
                .<br />
                Trusted for{' '}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #6366f1 100%)' }}
                >
                  Protection
                </span>
                .
              </h1>

              {/* Subheading */}
              <p
                className="text-base sm:text-lg leading-relaxed max-w-xl animate-fade-in-up"
                style={{ color: 'var(--text-secondary)', animationDelay: '160ms' }}
              >
                NitroLube delivers world-class lubrication technology tailored for high-performance automotive and industrial applications. Unleash peak efficiency, extend machine life, and protect your investments under any operating conditions.
              </p>

              {/* CTAs */}
              <div
                className="flex flex-wrap gap-4 pt-2 animate-fade-in-up"
                style={{ animationDelay: '240ms' }}
              >
                <Link
                  href="/products"
                  className="px-7 py-3.5 text-white font-bold rounded-xl transition-all duration-250 hover:-translate-y-1 text-sm text-white-force"
                  style={{
                    background: 'linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)',
                    boxShadow: '0 4px 24px rgba(37, 99, 235, 0.4)',
                  }}
                >
                  Explore Catalog
                </Link>
                <Link
                  href="/partner-with-us"
                  className="px-7 py-3.5 font-bold rounded-xl transition-all duration-250 hover:-translate-y-1 text-sm border"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    borderColor: 'rgba(255,255,255,0.15)',
                    backdropFilter: 'blur(12px)',
                    color: 'var(--text-primary)',
                  }}
                >
                  Partner With Us
                </Link>
              </div>

              {/* Stats row */}
              <div
                className="flex flex-wrap items-center gap-6 sm:gap-8 pt-6 animate-fade-in-up"
                style={{ borderTop: '1px solid rgba(255,255,255,0.08)', animationDelay: '320ms' }}
                ref={statsRef}
              >
                {[
                  { value: 'ISO', label: '9001:2015 Certified' },
                  { value: '50+', label: 'Pan-India Distributors' },
                  { value: '100%', label: 'Lab Tested Batches' },
                ].map((stat, idx) => (
                  <div key={idx} className="stat-card">
                    <div
                      className="stat-number text-2xl sm:text-3xl font-extrabold"
                      style={{ color: 'var(--accent-blue)' }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-[10px] uppercase tracking-widest mt-0.5" style={{ color: 'var(--text-muted)' }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: 3D Hero Showcase */}
            <div className="md:col-span-6 lg:col-span-5 flex justify-center relative w-full overflow-visible animate-fade-in" style={{ animationDelay: '200ms' }}>
              <Hero3DShowcase />
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#070d1a] to-transparent pointer-events-none" />
      </section>

      {/* ================================================================
          MARQUEE TRUST BAND
          ================================================================ */}
      <div className="relative py-4 overflow-hidden border-y" style={{ background: 'rgba(37, 99, 235, 0.06)', borderColor: 'rgba(37, 99, 235, 0.12)' }}>
        <div className="animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-2 mx-6 text-xs sm:text-sm font-semibold uppercase tracking-widest"
              style={{ color: 'var(--text-muted)' }}
            >
              {item}
              <span className="mx-4 opacity-30">|</span>
            </span>
          ))}
        </div>
      </div>

      {/* ================================================================
          ADVANTAGES / BENEFITS SECTION
          ================================================================ */}
      <section className="py-20 md:py-28 relative overflow-hidden" style={{ background: 'var(--bg-secondary)' }}>
        <div className="absolute inset-0 bg-grid-lines opacity-40 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.3), transparent)' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section header */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border"
              style={{ background: 'rgba(59,130,246,0.08)', borderColor: 'rgba(59,130,246,0.2)', color: '#60a5fa' }}
            >
              Engineered Excellence
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold"
              style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--text-primary)' }}
            >
              The NitroLube Advantage
            </h2>
            <p className="text-base sm:text-lg" style={{ color: 'var(--text-muted)' }}>
              Our advanced chemical formulations are crafted to meet global performance indicators, ensuring machinery runs cooler, smoother, and longer.
            </p>
          </div>

          {/* Benefits grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-2 cursor-default"
                style={{
                  background: 'var(--bg-card)',
                  borderColor: 'var(--border-subtle)',
                  animationDelay: `${idx * 100}ms`,
                }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${benefit.color} 0%, transparent 70%)`,
                    border: `1px solid ${benefit.borderColor}`,
                    borderRadius: 'inherit',
                  }}
                />

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: benefit.color,
                    border: `1px solid ${benefit.borderColor}`,
                    color: benefit.iconColor,
                  }}
                >
                  {benefit.icon}
                </div>

                <h3
                  className="text-lg font-bold mb-2 transition-colors"
                  style={{ color: 'var(--text-primary)', fontFamily: 'Montserrat, sans-serif' }}
                >
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  {benefit.description}
                </p>

                {/* Bottom accent */}
                <div
                  className="absolute bottom-0 left-6 right-6 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${benefit.iconColor}, transparent)` }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          PRODUCT SHOWCASE SECTION
          ================================================================ */}
      <section className="py-20 md:py-28 relative overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)' }} />

        {/* Background orbs */}
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full opacity-6 blur-[120px] pointer-events-none" style={{ background: 'rgba(37, 99, 235, 0.3)' }} />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full opacity-6 blur-[120px] pointer-events-none" style={{ background: 'rgba(6, 182, 212, 0.2)' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="space-y-4 max-w-2xl text-left">
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border"
                style={{ background: 'rgba(6,182,212,0.08)', borderColor: 'rgba(6,182,212,0.2)', color: '#22d3ee' }}
              >
                Visual Showcase
              </div>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold"
                style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--text-primary)' }}
              >
                Premium Product Categories
              </h2>
              <p className="text-sm sm:text-base" style={{ color: 'var(--text-muted)' }}>
                Explore our state-of-the-art formulations. Tap any category to view specific options, pack sizes, and complete technical parameters.
              </p>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 font-bold text-sm transition-all hover:-translate-y-0.5 group flex-shrink-0"
              style={{ color: 'var(--accent-blue)' }}
            >
              View Full Catalog
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Tab switcher */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
            {[
              { id: 'all', label: 'All Products' },
              { id: 'engine-oil', label: 'Engine Oils' },
              { id: 'gear-oil', label: 'Gear Oils' },
              { id: 'industrial', label: 'Industrial' },
              { id: 'specialties', label: 'Specialties' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all duration-250 border ${
                  activeTab === tab.id
                    ? 'text-white border-transparent shadow-[0_4px_20px_rgba(37,99,235,0.3)]'
                    : 'border-transparent hover:border-white/10'
                }`}
                style={
                  activeTab === tab.id
                    ? { background: 'linear-gradient(135deg, #2563eb, #06b6d4)' }
                    : {
                        background: 'var(--bg-glass-light)',
                        color: 'var(--text-muted)',
                      }
                }
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Product cards */}
          <div key={activeTab} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((prod, idx) => (
              <div
                key={prod.title}
                className="group rounded-2xl overflow-hidden border flex flex-col h-full card-3d animate-fade-in-up"
                style={{
                  background: 'var(--bg-card)',
                  borderColor: 'var(--border-subtle)',
                  animationDelay: `${idx * 80}ms`,
                }}
              >
                {/* Product Image */}
                <div
                  className="relative h-60 sm:h-64 overflow-hidden flex items-center justify-center p-4 scan-line"
                  style={{ background: 'var(--bg-tertiary)' }}
                >
                  {/* Color glow */}
                  <div
                    className="absolute inset-0 transition-opacity duration-500 opacity-60 group-hover:opacity-90 pointer-events-none"
                    style={{ background: `radial-gradient(circle at center, ${prod.glowColor} 0%, transparent 70%)` }}
                  />

                  <TransparentProductImage
                    src={prod.image}
                    alt={prod.title}
                    className="object-contain w-full h-full p-4 group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Tag */}
                  <div className={`absolute top-4 left-4 px-2.5 py-1 rounded-lg border text-[10px] font-bold uppercase tracking-wider ${prod.tagColor}`}>
                    {prod.tag}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow text-left">
                  <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--accent-blue)' }}>
                    {prod.title}
                  </p>
                  <h3
                    className="text-lg sm:text-xl font-bold mb-4"
                    style={{ color: 'var(--text-primary)', fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {prod.subtitle}
                  </h3>

                  <ul className="space-y-2 mb-6 flex-grow">
                    {prod.specs.map((spec, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2.5 text-sm" style={{ color: 'var(--text-muted)' }}>
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5"
                          style={{ background: 'var(--accent-blue)' }}
                        />
                        {spec}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={prod.route}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm border transition-all duration-250 group-hover:border-transparent"
                    style={{
                      background: 'var(--bg-glass-light)',
                      borderColor: 'var(--border-default)',
                      color: 'var(--text-primary)',
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement
                      el.style.background = 'linear-gradient(135deg, #2563eb, #06b6d4)'
                      el.style.color = '#ffffff'
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement
                      el.style.background = 'var(--bg-glass-light)'
                      el.style.color = 'var(--text-primary)'
                    }}
                  >
                    View Details
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Car Animation Strip */}
      <CarAnimation />

      {/* ================================================================
          LAB CERTIFICATION SECTION
          ================================================================ */}
      <section className="py-20 md:py-28 relative overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left */}
            <div className="space-y-6 text-left">
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border"
                style={{ background: 'rgba(99,102,241,0.08)', borderColor: 'rgba(99,102,241,0.2)', color: '#a5b4fc' }}
              >
                Quality Certified
              </div>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight"
                style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--text-primary)' }}
              >
                Rigorous Lab Tested Formulations
              </h2>
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                We believe in complete transparency. Every batch of NitroLube lubricants undergoes stringent quality assurance testing in advanced chemical laboratories to certify wear protection indices, flash points, and shear stability.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'Compliance with Bureau of Indian Standards (BIS)',
                  'ISO 9001:2015 Standards Formulated',
                  'API & SAE Grade Specifications Met',
                  'Third-party Laboratory Verified',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(37,99,235,0.12)', border: '1px solid rgba(37,99,235,0.25)' }}
                    >
                      <svg className="w-3 h-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap gap-3">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 py-3 px-6 rounded-xl font-bold text-sm border transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    background: 'var(--bg-glass-light)',
                    borderColor: 'var(--border-default)',
                    color: 'var(--text-primary)',
                  }}
                >
                  View Company Profile
                </Link>
                <a
                  href="/brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 py-3 px-6 rounded-xl font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 text-white-force"
                  style={{ background: 'linear-gradient(135deg, #2563eb, #06b6d4)', color: 'white' }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Brochure
                </a>
              </div>
            </div>

            {/* Right: Lab reports grid */}
            <div
              className="rounded-2xl p-6 sm:p-8 border"
              style={{ background: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}
            >
              <div className="mb-6 text-center">
                <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)', fontFamily: 'Montserrat, sans-serif' }}>
                  Download Certifications
                </h3>
                <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>
                  Access official lab testing documentation and reports.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {reportNames.map((name, num) => (
                  <a
                    key={num}
                    href={`/labtest${num + 1}.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3.5 rounded-xl border transition-all duration-200 hover:-translate-y-1 group"
                    style={{
                      background: 'var(--bg-glass-light)',
                      borderColor: 'var(--border-subtle)',
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(239,68,68,0.25)' }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-subtle)' }}
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-110"
                      style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)' }}
                    >
                      <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="text-left min-w-0">
                      <div className="font-bold text-xs truncate transition-colors group-hover:text-blue-400" style={{ color: 'var(--text-primary)' }}>
                        {name}
                      </div>
                      <div className="text-[10px] mt-0.5" style={{ color: 'var(--text-muted)' }}>PDF Document</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          CTA SECTION
          ================================================================ */}
      <section className="py-16 md:py-24 relative overflow-hidden" style={{ background: 'var(--bg-secondary)' }}>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)' }} />

        {/* Background effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 opacity-5 bg-grid-lines" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[120px]" style={{ background: 'rgba(37, 99, 235, 0.2)' }} />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            className="rounded-3xl p-10 md:p-16 text-center border relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(37,99,235,0.1) 0%, var(--bg-card) 50%, rgba(6,182,212,0.06) 100%)',
              borderColor: 'rgba(37,99,235,0.2)',
              boxShadow: '0 32px 80px rgba(0,0,0,0.3)',
            }}
          >
            {/* Animated border top */}
            <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl" style={{ background: 'linear-gradient(90deg, #2563eb, #06b6d4, #6366f1, #2563eb)', backgroundSize: '300% 100%', animation: 'gradientShift 4s linear infinite' }} />

            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border mb-6"
              style={{ background: 'rgba(37,99,235,0.1)', borderColor: 'rgba(37,99,235,0.25)', color: '#60a5fa' }}
            >
              🤝 Join Our Network
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4"
              style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--text-primary)' }}
            >
              Ready to Partner With NitroLube?
            </h2>
            <p className="text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
              Join our growing network of national distributors and retailers. Experience attractive wholesale pricing, dedicated marketing materials, and premium support.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/partner-with-us"
                className="px-8 py-3.5 font-bold rounded-xl text-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(37,99,235,0.45)] text-white-force"
                style={{ background: 'linear-gradient(135deg, #2563eb, #06b6d4)', color: 'white' }}
              >
                Join Partner Program
              </Link>
              <a
                href="mailto:info@nitrolube.co.in"
                className="px-8 py-3.5 font-bold rounded-xl text-sm border transition-all duration-200 hover:-translate-y-1"
                style={{
                  background: 'var(--bg-glass-light)',
                  borderColor: 'var(--border-default)',
                  color: 'var(--text-primary)',
                }}
              >
                Send Requirements
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 pt-6 border-t flex flex-wrap items-center justify-center gap-8" style={{ borderColor: 'var(--border-subtle)' }}>
              {[
                { icon: '🛡️', text: 'ISO 9001:2015' },
                { icon: '🧪', text: '100% Lab Tested' },
                { icon: '🚀', text: '50+ Distributors' },
                { icon: '📍', text: 'Pan India Network' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
