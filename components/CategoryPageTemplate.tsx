'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { products } from '@/data/products'
import TransparentProductImage from './TransparentProductImage'

interface CategoryPageTemplateProps {
  categoryKey: keyof typeof products
  title: string
  description: string
  imagePath: string
}

export default function CategoryPageTemplate({
  categoryKey,
  title,
  description,
  imagePath,
}: CategoryPageTemplateProps) {
  const categoryProducts = products[categoryKey] || []

  const categoriesList = [
    { name: 'Engine Oil', route: '/products/engine-oil', icon: '🛢️' },
    { name: 'Gear Oil', route: '/products/gear-oil', icon: '⚙️' },
    { name: 'Hydraulic Oil', route: '/products/hydraulic-oil', icon: '🔧' },
    { name: 'Grease', route: '/products/grease', icon: '💛' },
    { name: 'Brake Oil', route: '/products/brake-oil', icon: '🔴' },
    { name: 'Steering Oil', route: '/products/steering-oil', icon: '🔵' },
    { name: 'Shocker Oil', route: '/products/shocker-oil', icon: '🟣' },
    { name: 'Coolant', route: '/products/coolant', icon: '🧊' },
    { name: 'UTTO Oil', route: '/products/utto-oil', icon: '🟠' },
  ]

  return (
    <div
      className="page-top-tight min-h-screen pb-16 md:pb-24 relative"
      style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}
    >
      {/* Background orbs */}
      <div className="absolute top-32 left-1/4 w-80 h-80 rounded-full blur-[120px] pointer-events-none opacity-20" style={{ background: 'rgba(37,99,235,0.4)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-[120px] pointer-events-none opacity-15" style={{ background: 'rgba(99,102,241,0.3)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm mb-6 md:mb-8 text-left" aria-label="Breadcrumb">
          <Link href="/" className="transition-colors hover:text-blue-400 font-medium" style={{ color: 'var(--text-muted)' }}>Home</Link>
          <svg className="w-3.5 h-3.5" style={{ color: 'var(--text-muted)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <Link href="/products" className="transition-colors hover:text-blue-400 font-medium" style={{ color: 'var(--text-muted)' }}>Products</Link>
          <svg className="w-3.5 h-3.5" style={{ color: 'var(--text-muted)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>{title}</span>
        </nav>

        <div className="grid lg:grid-cols-12 gap-8 md:gap-10">
          {/* Left Sidebar */}
          <div className="lg:col-span-4 space-y-5 md:space-y-6 text-left">
            {/* Category info card */}
            <div
              className="rounded-2xl p-6 md:p-8 border"
              style={{ background: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}
            >
              {/* Product image */}
              <div
                className="relative w-full h-44 md:h-52 mb-6 rounded-2xl overflow-hidden flex items-center justify-center p-4"
                style={{ background: 'var(--bg-tertiary)' }}
              >
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at center, rgba(37,99,235,0.12) 0%, transparent 75%)' }} />
                <TransparentProductImage
                  src={imagePath}
                  alt={title}
                  className="object-contain w-full h-full animate-float"
                />
              </div>

              <h1
                className="text-2xl md:text-3xl font-extrabold mb-3"
                style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--text-primary)' }}
              >
                {title}
              </h1>
              <p className="text-xs sm:text-sm leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
                {description}
              </p>

              {/* Quality badges */}
              <div className="pt-5 border-t space-y-3" style={{ borderColor: 'var(--border-subtle)' }}>
                {[
                  { text: '100% Quality Formulated', icon: '✅' },
                  { text: 'Lab Tested & ISO Certified', icon: '🏅' },
                  { text: 'BIS Standard Compliant', icon: '🛡️' },
                ].map((badge, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-sm"
                      style={{ background: 'rgba(37,99,235,0.08)', border: '1px solid rgba(37,99,235,0.15)' }}
                    >
                      {badge.icon}
                    </div>
                    <span className="text-xs font-semibold" style={{ color: 'var(--text-secondary)' }}>{badge.text}</span>
                  </div>
                ))}
              </div>

              {/* Contact CTA */}
              <a
                href="mailto:info@nitrolube.co.in"
                className="mt-6 flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 text-white-force"
                style={{ background: 'linear-gradient(135deg, #2563eb, #06b6d4)', color: 'white' }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Request Bulk Quote
              </a>
            </div>

            {/* Category nav — desktop only */}
            <div
              className="rounded-2xl border hidden lg:block"
              style={{ background: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}
            >
              <div className="p-4 border-b" style={{ borderColor: 'var(--border-subtle)' }}>
                <h3 className="text-sm font-bold uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                  All Categories
                </h3>
              </div>
              <div className="p-2">
                {categoriesList.map((cat, idx) => {
                  const isActive = cat.name === title
                  return (
                    <Link
                      key={idx}
                      href={cat.route}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 ${
                        isActive ? 'text-white' : 'hover:-translate-x-0'
                      }`}
                      style={
                        isActive
                          ? { background: 'linear-gradient(135deg, #2563eb, #06b6d4)', color: 'white', boxShadow: '0 4px 16px rgba(37,99,235,0.3)' }
                          : { color: 'var(--text-muted)' }
                      }
                      onMouseEnter={(e) => { if (!isActive) (e.currentTarget as HTMLElement).style.background = 'var(--bg-glass-light)' }}
                      onMouseLeave={(e) => { if (!isActive) (e.currentTarget as HTMLElement).style.background = 'transparent' }}
                    >
                      <span className="text-base w-5 text-center">{cat.icon}</span>
                      <span className="flex-grow">{cat.name}</span>
                      {!isActive && (
                        <svg className="w-4 h-4 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      )}
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right: Products Grid */}
          <div className="lg:col-span-8">
            {/* Count badge */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2
                  className="text-lg sm:text-xl font-bold"
                  style={{ color: 'var(--text-primary)', fontFamily: 'Montserrat, sans-serif' }}
                >
                  {title} Products
                </h2>
                <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                  {categoryProducts.length} variant{categoryProducts.length !== 1 ? 's' : ''} available
                </p>
              </div>
              <span
                className="px-3 py-1.5 rounded-xl text-xs font-bold border"
                style={{ background: 'rgba(37,99,235,0.08)', borderColor: 'rgba(37,99,235,0.2)', color: '#60a5fa' }}
              >
                {categoryProducts.length} Products
              </span>
            </div>

            {categoryProducts.length === 0 ? (
              <div
                className="rounded-2xl p-12 text-center border"
                style={{ background: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}
              >
                <p className="text-lg" style={{ color: 'var(--text-muted)' }}>
                  No products available in this category yet.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                {categoryProducts.map((product, index) => (
                  <ProductCard key={index} product={product} defaultImage={imagePath} index={index} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function ProductCard({ product, defaultImage, index }: { product: any; defaultImage: string; index: number }) {
  const smallestSize = product.sizes[0]
  const [selectedSize, setSelectedSize] = useState(smallestSize.size)
  const selectedSizeData = product.sizes.find((s: any) => s.size === selectedSize) || smallestSize

  const whatsappUrl = useMemo(() => {
    const text = `Hello Nitrolube Team,\n\nI would like to inquire about the wholesale/B2B details for the following product:\n- Product: ${product.name}\n- Grade: ${product.grade || 'N/A'}\n- Pack Size: ${selectedSize}\n\nPlease share wholesale pricing.`;
    return `https://wa.me/918709735654?text=${encodeURIComponent(text)}`;
  }, [product.name, product.grade, selectedSize]);

  const emailUrl = useMemo(() => {
    const subject = `B2B Inquiry: ${product.name} ${product.grade ? ' (Grade ' + product.grade + ')' : ''} - Size: ${selectedSize}`;
    const body = `Hello Nitrolube Team,\n\nI am interested in obtaining a bulk quotation / wholesale price for:\n\nProduct: ${product.name}\nGrade: ${product.grade || 'N/A'}\nPack Size: ${selectedSize}\nMRP: ${selectedSizeData.mrp ? '₹' + selectedSizeData.mrp.toLocaleString('en-IN') : 'Contact for Price'}\n\nPlease get in touch with me regarding bulk pricing and terms.`;
    return `mailto:info@nitrolube.co.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [product.name, product.grade, selectedSize, selectedSizeData.mrp]);

  const productId = `${product.name}-${product.grade || index}`.toLowerCase().replace(/\s+/g, '-')

  const visualVariance = useMemo(() => {
    const hueShift = (index * 65) % 360
    let glowColor = 'rgba(59, 130, 246, 0.1)'
    let badgeStyle = { bg: 'rgba(59,130,246,0.08)', border: 'rgba(59,130,246,0.2)', color: '#60a5fa' }

    if (hueShift >= 45 && hueShift < 110) {
      glowColor = 'rgba(168, 85, 247, 0.1)'
      badgeStyle = { bg: 'rgba(168,85,247,0.08)', border: 'rgba(168,85,247,0.2)', color: '#c084fc' }
    } else if (hueShift >= 110 && hueShift < 180) {
      glowColor = 'rgba(239, 68, 68, 0.1)'
      badgeStyle = { bg: 'rgba(239,68,68,0.08)', border: 'rgba(239,68,68,0.2)', color: '#f87171' }
    } else if (hueShift >= 180 && hueShift < 250) {
      glowColor = 'rgba(234, 179, 8, 0.1)'
      badgeStyle = { bg: 'rgba(234,179,8,0.08)', border: 'rgba(234,179,8,0.2)', color: '#fbbf24' }
    } else if (hueShift >= 250 && hueShift < 315) {
      glowColor = 'rgba(34, 197, 94, 0.1)'
      badgeStyle = { bg: 'rgba(34,197,94,0.08)', border: 'rgba(34,197,94,0.2)', color: '#4ade80' }
    } else if (hueShift >= 315) {
      glowColor = 'rgba(6, 182, 212, 0.1)'
      badgeStyle = { bg: 'rgba(6,182,212,0.08)', border: 'rgba(6,182,212,0.2)', color: '#22d3ee' }
    }

    const transformStyle = index % 3 === 1 ? 'rotate(-1.5deg) scale(0.96)' : index % 3 === 2 ? 'rotate(1.5deg) scale(1.02)' : ''
    return { hueShift, glowColor, badgeStyle, transformStyle }
  }, [index])

  return (
    <div
      id={productId}
      className="rounded-2xl overflow-hidden border flex flex-col text-left group scroll-mt-28 card-3d animate-fade-in-up"
      style={{
        background: 'var(--bg-card)',
        borderColor: 'var(--border-subtle)',
        animationDelay: `${index * 60}ms`,
      }}
    >
      {/* Image */}
      <div
        className="relative h-48 sm:h-52 overflow-hidden flex items-center justify-center p-3 sm:p-4"
        style={{ background: 'var(--bg-tertiary)' }}
      >
        <div
          className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
          style={{ background: `radial-gradient(circle at center, ${visualVariance.glowColor} 0%, transparent 70%)` }}
        />
        <div
          style={{ transform: visualVariance.transformStyle }}
          className="w-full h-full flex items-center justify-center"
        >
          <TransparentProductImage
            src={defaultImage}
            alt={product.name || 'NitroLube product'}
            className="object-contain w-full h-full p-2 sm:p-3 group-hover:scale-105 transition-transform duration-500"
            style={{ filter: `hue-rotate(${visualVariance.hueShift}deg)` }}
          />
        </div>
        {product.grade && (
          <div
            className="absolute top-3 left-3 px-2 py-0.5 rounded-lg border text-[9px] sm:text-[10px] font-bold tracking-wider uppercase"
            style={{ background: visualVariance.badgeStyle.bg, borderColor: visualVariance.badgeStyle.border, color: visualVariance.badgeStyle.color }}
          >
            Grade {product.grade}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow">
        <div className="mb-3">
          <h3
            className="text-sm sm:text-base font-bold mb-1 line-clamp-2"
            style={{ color: 'var(--text-primary)', fontFamily: 'Montserrat, sans-serif' }}
          >
            {product.name}
          </h3>
          {product.usage && (
            <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--accent-blue)' }}>
              {product.usage}
            </p>
          )}
        </div>

        {/* Size & Price */}
        <div
          className="rounded-xl p-3 sm:p-4 mb-4 space-y-2.5 border"
          style={{ background: 'var(--bg-glass-light)', borderColor: 'var(--border-subtle)' }}
        >
          <div className="flex items-center justify-between gap-2">
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>Pack Size</span>
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="text-[10px] sm:text-xs font-bold rounded-lg px-2 py-1.5 cursor-pointer focus:outline-none focus:ring-2 border"
              style={{
                background: 'var(--bg-card)',
                borderColor: 'var(--border-default)',
                color: 'var(--text-primary)',
              }}
              aria-label="Select pack size"
            >
              {product.sizes.map((size: any) => (
                <option key={size.size} value={size.size}>{size.size}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center justify-between pt-2 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>MRP</span>
            <div className="text-right">
              <span
                className="text-sm sm:text-lg font-extrabold whitespace-nowrap"
                style={{ color: 'var(--accent-blue)' }}
              >
                {selectedSizeData.mrp ? `₹${selectedSizeData.mrp.toLocaleString('en-IN')}` : 'Contact for Price'}
              </span>
              {selectedSizeData.mrp && (
                <div className="text-[9px] font-semibold tracking-wider" style={{ color: 'var(--text-muted)' }}>Incl. GST</div>
              )}
            </div>
          </div>
        </div>

        {/* Tags */}
        {product.tags && product.tags.length > 0 && (
          <div className="hidden sm:flex flex-wrap gap-1.5 mb-4">
            {product.tags.slice(0, 3).map((tag: string, tIdx: number) => (
              <span
                key={tIdx}
                className="px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wide border"
                style={{ background: 'var(--bg-glass-light)', borderColor: 'var(--border-subtle)', color: 'var(--text-muted)' }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Action buttons */}
        <div className="space-y-2 mt-auto">
          <div className="grid grid-cols-2 gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 rounded-xl font-bold text-xs sm:text-sm text-center flex items-center justify-center gap-1.5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(34,197,94,0.25)] text-white-force"
              style={{ background: 'linear-gradient(135deg, #22c55e, #10b981)', color: '#ffffff' }}
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.555 4.112 1.523 5.84L.057 23.882a.5.5 0 00.61.61l6.04-1.466A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.944 0-3.763-.523-5.323-1.433l-.38-.226-3.944.956.956-3.945-.227-.381A9.963 9.963 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
              </svg>
              WhatsApp
            </a>
            <a
              href={emailUrl}
              className="py-2.5 rounded-xl font-bold text-xs sm:text-sm text-center flex items-center justify-center gap-1.5 text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(37,99,235,0.25)] text-white-force"
              style={{ background: 'linear-gradient(135deg, #2563eb, #06b6d4)', color: '#ffffff' }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Inquiry
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
