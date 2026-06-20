'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import TransparentProductImage from './TransparentProductImage'

const showcaseProducts = [
  {
    name: 'Engine Oil',
    image: '/engine_oil_3d.jpg',
    glowColor: 'rgba(245, 158, 11, 0.5)',
    glowColorSoft: 'rgba(245, 158, 11, 0.12)',
    colorName: 'text-amber-400',
    borderColor: 'border-amber-500/30',
    bgColor: 'bg-amber-500/10',
    textColor: 'text-amber-400',
    route: '/products/engine-oil',
    tag: 'Best Seller',
    desc: 'Fully Synthetic & Multigrade',
    specs: ['SAE 5W-30 / 10W-30 / 15W-40 / 20W-40', 'Peak Thermal Stability', 'Unmatched wear protection'],
    accentFrom: 'from-amber-500',
    accentTo: 'to-orange-500',
  },
  {
    name: 'Gear Oil',
    image: '/gear_oil_3d.jpg',
    glowColor: 'rgba(16, 185, 129, 0.5)',
    glowColorSoft: 'rgba(16, 185, 129, 0.12)',
    colorName: 'text-emerald-400',
    borderColor: 'border-emerald-500/30',
    bgColor: 'bg-emerald-500/10',
    textColor: 'text-emerald-400',
    route: '/products/gear-oil',
    tag: 'Heavy Duty',
    desc: 'EP 90 / 80W-90 / 85W-140',
    specs: ['Superior wear protection', 'Smooth gear shifting', 'Extreme pressure stability'],
    accentFrom: 'from-emerald-500',
    accentTo: 'to-teal-500',
  },
  {
    name: 'Coolant',
    image: '/coolant_3d.jpg',
    glowColor: 'rgba(239, 68, 68, 0.5)',
    glowColorSoft: 'rgba(239, 68, 68, 0.1)',
    colorName: 'text-red-400',
    borderColor: 'border-red-500/30',
    bgColor: 'bg-red-500/10',
    textColor: 'text-red-400',
    route: '/products/coolant',
    tag: 'All Season',
    desc: 'Advanced Antifreeze & Coolant',
    specs: ['Multipurpose 1:4 / 1:7', 'Anti-rust protection', 'Efficient heat transfer'],
    accentFrom: 'from-red-500',
    accentTo: 'to-rose-500',
  },
  {
    name: 'Grease',
    image: '/grease_3d.jpg',
    glowColor: 'rgba(217, 70, 239, 0.5)',
    glowColorSoft: 'rgba(217, 70, 239, 0.1)',
    colorName: 'text-fuchsia-400',
    borderColor: 'border-fuchsia-500/30',
    bgColor: 'bg-fuchsia-500/10',
    textColor: 'text-fuchsia-400',
    route: '/products/grease',
    tag: 'High Temp',
    desc: 'Heavy Duty Gel Lubricants',
    specs: ['Lithium AP-3 & White Gel', 'Water washout resistance', 'High shear stability'],
    accentFrom: 'from-fuchsia-500',
    accentTo: 'to-purple-500',
  },
  {
    name: 'Brake Oil',
    image: '/brake_oil_3d.jpg',
    glowColor: 'rgba(6, 182, 212, 0.5)',
    glowColorSoft: 'rgba(6, 182, 212, 0.1)',
    colorName: 'text-cyan-400',
    borderColor: 'border-cyan-500/30',
    bgColor: 'bg-cyan-500/10',
    textColor: 'text-cyan-400',
    route: '/products/brake-oil',
    tag: 'Safety Critical',
    desc: 'High Boiling Point Fluid',
    specs: ['DOT-3 & DOT-4 Fluids', 'Highly responsive braking', 'Resists vapor lock'],
    accentFrom: 'from-cyan-500',
    accentTo: 'to-blue-500',
  },
  {
    name: 'Hydraulic Oil',
    image: '/hydraulic_oil_3d.jpg',
    glowColor: 'rgba(59, 130, 246, 0.5)',
    glowColorSoft: 'rgba(59, 130, 246, 0.1)',
    colorName: 'text-blue-400',
    borderColor: 'border-blue-500/30',
    bgColor: 'bg-blue-500/10',
    textColor: 'text-blue-400',
    route: '/products/hydraulic-oil',
    tag: 'Industrial',
    desc: 'Anti-wear Industrial Fluid',
    specs: ['Grade 32 / 46 / 68', 'High viscosity index', 'Excellent water separation'],
    accentFrom: 'from-blue-500',
    accentTo: 'to-indigo-500',
  },
]

export default function Hero3DShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const activeProduct = showcaseProducts[activeIndex]

  const goTo = (idx: number) => {
    if (idx === activeIndex) return
    setIsTransitioning(true)
    setTimeout(() => {
      setActiveIndex(idx)
      setIsTransitioning(false)
    }, 200)
  }

  useEffect(() => {
    if (isHovered) {
      if (timerRef.current) clearInterval(timerRef.current)
      return
    }
    timerRef.current = setInterval(() => {
      goTo((activeIndex + 1) % showcaseProducts.length)
    }, 4000)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [isHovered, activeIndex])

  const handlePrev = () => goTo((activeIndex - 1 + showcaseProducts.length) % showcaseProducts.length)
  const handleNext = () => goTo((activeIndex + 1) % showcaseProducts.length)

  return (
    <div
      className="flex flex-col items-center w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 3D Viewport */}
      <div
        className="relative w-full h-72 sm:h-96 flex items-center justify-center"
        style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
      >
        {/* Ambient glow — color changes with product */}
        <div
          className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full pointer-events-none transition-all duration-700"
          style={{
            backgroundColor: activeProduct.glowColor,
            filter: 'blur(90px)',
            opacity: 0.6,
            transform: 'translateZ(-80px) translateY(20px)',
          }}
        />

        {/* Ground reflection */}
        <div
          className="absolute bottom-2 w-60 h-10 rounded-full pointer-events-none opacity-30"
          style={{
            background: `radial-gradient(ellipse at center, ${activeProduct.glowColor} 0%, transparent 70%)`,
            filter: 'blur(10px)',
          }}
        />

        {/* Product Carousel */}
        {showcaseProducts.map((prod, idx) => {
          let diff = idx - activeIndex
          if (diff < -3) diff += showcaseProducts.length
          if (diff > 3) diff -= showcaseProducts.length

          const isActive = diff === 0
          const isVisible = Math.abs(diff) <= 2

          const translateX = diff * 120
          const translateZ = -Math.abs(diff) * 110
          const rotateY = diff * -22
          const scale = 1 - Math.abs(diff) * 0.2
          const opacity = isActive ? 1 : Math.max(0, 0.35 - Math.abs(diff) * 0.12)

          if (!isVisible) return null

          return (
            <div
              key={prod.name}
              onClick={() => goTo(idx)}
              className={`absolute w-44 h-56 sm:w-56 sm:h-72 flex items-center justify-center cursor-pointer select-none`}
              style={{
                transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                zIndex: 30 - Math.abs(diff) * 8,
                opacity,
                transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                pointerEvents: isVisible ? 'auto' : 'none',
              }}
            >
              <div
                className={`relative w-full h-full flex items-center justify-center ${isActive ? 'animate-float' : ''}`}
                style={{ filter: isActive ? `drop-shadow(0 20px 30px ${prod.glowColor})` : 'none' }}
              >
                <TransparentProductImage
                  src={prod.image}
                  alt={prod.name}
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          )
        })}

        {/* Navigation arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-0 sm:left-2 z-50 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border transition-all duration-200 hover:scale-110 active:scale-95"
          style={{
            background: 'rgba(10, 16, 32, 0.85)',
            borderColor: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(12px)',
          }}
          aria-label="Previous product"
        >
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 sm:right-2 z-50 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border transition-all duration-200 hover:scale-110 active:scale-95"
          style={{
            background: 'rgba(10, 16, 32, 0.85)',
            borderColor: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(12px)',
          }}
          aria-label="Next product"
        >
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Info Card */}
      <div className="w-full max-w-sm mt-6 sm:mt-8 px-2 sm:px-4">
        <div
          className="rounded-2xl p-5 border transition-all duration-500"
          style={{
            background: `linear-gradient(135deg, ${activeProduct.glowColorSoft} 0%, rgba(10, 16, 32, 0.9) 100%)`,
            borderColor: `${activeProduct.glowColor.replace('0.5)', '0.25)')}`,
            backdropFilter: 'blur(20px)',
            opacity: isTransitioning ? 0 : 1,
            transform: isTransitioning ? 'translateY(6px)' : 'translateY(0)',
            transition: 'opacity 0.2s ease, transform 0.2s ease, background 0.5s ease, border-color 0.5s ease',
          }}
        >
          {/* Tag row */}
          <div className="flex items-center justify-between mb-3">
            <span className={`px-2.5 py-0.5 rounded-lg text-[10px] sm:text-xs font-bold uppercase tracking-wider border ${activeProduct.borderColor} ${activeProduct.bgColor} ${activeProduct.textColor}`}>
              {activeProduct.tag}
            </span>
            <span className="text-[9px] text-gray-500 font-semibold uppercase tracking-widest">3D Showcase</span>
          </div>

          {/* Name */}
          <div className="mb-3">
            <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {activeProduct.name}
            </h3>
            <p className="text-xs sm:text-sm mt-0.5" style={{ color: 'var(--text-muted)' }}>{activeProduct.desc}</p>
          </div>

          {/* Specs */}
          <div className="grid grid-cols-1 gap-1.5 pt-3 border-t border-white/5 mb-4">
            {activeProduct.specs.map((spec, sIdx) => (
              <div key={sIdx} className="flex items-center gap-2 text-[10px] sm:text-xs" style={{ color: 'var(--text-muted)' }}>
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: activeProduct.glowColor }}
                />
                {spec}
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link
            href={activeProduct.route}
            className={`w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-gradient-to-r ${activeProduct.accentFrom} ${activeProduct.accentTo} text-white font-bold text-xs sm:text-sm rounded-xl transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 shadow-lg text-white-force`}
          >
            Explore {activeProduct.name}
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-5">
          {showcaseProducts.map((prod, idx) => (
            <button
              key={prod.name}
              onClick={() => goTo(idx)}
              className={`rounded-full transition-all duration-300 ${
                activeIndex === idx ? 'w-6 h-2' : 'w-2 h-2 hover:opacity-70'
              }`}
              style={{
                background: activeIndex === idx ? activeProduct.glowColor : 'rgba(255,255,255,0.15)',
              }}
              aria-label={`View ${prod.name}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
