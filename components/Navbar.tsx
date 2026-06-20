'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useMemo, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { products } from '@/data/products'
export default function Navbar() {
  const pathname = usePathname()
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')
  const [showSearchResults, setShowSearchResults] = useState(false)
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false)
  const [theme, setTheme] = useState('dark')
  const [scrolled, setScrolled] = useState(false)

  const searchRef = useRef<HTMLDivElement>(null)
  const mobileSearchRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark'
    setTheme(savedTheme)
    document.documentElement.setAttribute('data-theme', savedTheme)
    document.documentElement.style.colorScheme = savedTheme === 'light' ? 'light' : 'dark'
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    localStorage.setItem('theme', nextTheme)
    document.documentElement.setAttribute('data-theme', nextTheme)
    document.documentElement.style.colorScheme = nextTheme === 'light' ? 'light' : 'dark'
  }

  // Flatten all products
  const allProducts = useMemo(() => {
    const flatProducts: Array<{ product: any; category: string; categoryRoute: string }> = []
    const categoryRouteMap: { [key: string]: string } = {
      engineOil: '/products/engine-oil',
      gearOil: '/products/gear-oil',
      hydOil: '/products/hydraulic-oil',
      grease: '/products/grease',
      brakeOil: '/products/brake-oil',
      steeringOil: '/products/steering-oil',
      shockerOil: '/products/shocker-oil',
      coolant: '/products/coolant',
      uttoOil: '/products/utto-oil',
    }
    Object.entries(products).forEach(([category, items]) => {
      items.forEach((product, index) => {
        const productGrade = (product as any).grade || ''
        const productId = `${product.name}-${productGrade || index}`.toLowerCase().replace(/\s+/g, '-')
        flatProducts.push({
          product,
          category,
          categoryRoute: `${categoryRouteMap[category] || '/products'}#${productId}`,
        })
      })
    })
    return flatProducts
  }, [])

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return []
    const query = searchQuery.toLowerCase().trim()
    return allProducts.filter(({ product }) => {
      const tagMatch = product.tags?.some((tag: string) => tag.toLowerCase().includes(query))
      const gradeMatch = product.grade?.toLowerCase().includes(query)
      const sizeMatch = product.sizes?.some((s: any) => s.size.toLowerCase().includes(query))
      const usageMatch = product.usage?.toLowerCase().includes(query)
      const nameMatch = product.name?.toLowerCase().includes(query)
      return tagMatch || gradeMatch || sizeMatch || usageMatch || nameMatch
    }).slice(0, 6)
  }, [searchQuery, allProducts])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearchResults(false)
      }
      if (mobileSearchRef.current && !mobileSearchRef.current.contains(event.target as Node)) {
        setIsMobileSearchOpen(false)
        setShowSearchResults(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (searchQuery.trim().length > 0 && searchResults.length > 0) {
      setShowSearchResults(true)
    } else {
      setShowSearchResults(false)
    }
  }, [searchQuery, searchResults])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/products', label: 'Products' },
    { href: '/contact', label: 'Contact' },
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery)}`)
      setSearchQuery('')
      setShowSearchResults(false)
      setIsMobileSearchOpen(false)
    }
  }

  const handleResultClick = (categoryRoute: string) => {
    router.push(categoryRoute)
    setSearchQuery('')
    setShowSearchResults(false)
    setIsMobileSearchOpen(false)
  }


  return (
    <nav className="fixed top-0 z-50 w-full" aria-label="Main navigation">
      {/* Main Header */}
      <div
        className={`navbar-glass transition-all duration-300 ${
          scrolled ? 'shadow-[0_8px_40px_rgba(0,0,0,0.4)]' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between h-[68px] px-4 sm:px-6 lg:px-8 gap-4">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0 group" aria-label="NitroLube Home">
            <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-[0_10px_24px_rgba(37,99,235,0.25)] transition-transform duration-300 group-hover:-translate-y-0.5">
              <Image
                src="/logo.jpeg"
                alt="NitroLube"
                fill
                sizes="48px"
                className="object-cover scale-110"
                priority
              />
            </div>
            <span className="text-[1.35rem] font-extrabold tracking-tight leading-none" style={{ fontFamily: 'Montserrat, Inter, sans-serif' }}>
              <span className="text-white">Nitro</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">Lube</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.label === 'Products' && pathname.startsWith('/products'))

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-white/8 border border-white/10'
                      : 'text-gray-400 hover:text-white hover:bg-white/6'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-2">
            {/* Search */}
            <div className="relative w-52 lg:w-64" ref={searchRef}>
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => searchResults.length > 0 && setShowSearchResults(true)}
                  placeholder="Search products..."
                  className="w-full pl-9 pr-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/40 transition-all duration-200"
                  aria-label="Search products"
                />
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </form>

              {showSearchResults && searchResults.length > 0 && (
                <div
                  className="absolute top-full right-0 mt-2 w-80 rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.6)] border border-white/10 py-2 z-50 max-h-80 overflow-y-auto animate-fade-in-down"
                  style={{ background: 'rgba(10, 16, 32, 0.97)', backdropFilter: 'blur(24px)' }}
                >
                  <div className="px-3 py-1.5 mb-1">
                    <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                      {searchResults.length} Result{searchResults.length !== 1 ? 's' : ''}
                    </span>
                  </div>
                  {searchResults.map(({ product, categoryRoute }, index) => {
                    const categoryName = categoryRoute.split('/').pop()?.split('#')[0].replace(/-/g, ' ') || 'Product'
                    return (
                      <button
                        key={`${product.id}-${index}`}
                        onClick={() => handleResultClick(categoryRoute)}
                        className="w-full text-left px-3 py-2.5 hover:bg-white/5 transition-colors border-b border-white/5 last:border-b-0 flex items-start gap-3"
                      >
                        <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                          </svg>
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-bold text-white truncate">
                            {product.name}{product.grade ? ` — ${product.grade}` : ''}
                          </div>
                          <div className="text-xs text-gray-500 capitalize">{categoryName}</div>
                        </div>
                      </button>
                    )
                  })}
                </div>
              )}
            </div>


            {/* Theme Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            >
              <div className="relative w-[18px] h-[18px] overflow-hidden">
                <div
                  className="absolute inset-0 transition-all duration-300"
                  style={{
                    opacity: theme === 'dark' ? 1 : 0,
                    transform: theme === 'dark' ? 'translateY(0) scale(1)' : 'translateY(-20px) scale(0.5)',
                  }}
                >
                  <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.364l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                  </svg>
                </div>
                <div
                  className="absolute inset-0 transition-all duration-300"
                  style={{
                    opacity: theme === 'light' ? 1 : 0,
                    transform: theme === 'light' ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.5)',
                  }}
                >
                  <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                </div>
              </div>
            </button>

            {/* Partner CTA */}
            <Link
              href="/partner-with-us"
              className="hidden lg:flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs font-bold rounded-xl transition-all duration-200 shadow-[0_4px_16px_rgba(37,99,235,0.3)] hover:shadow-[0_4px_20px_rgba(37,99,235,0.45)] hover:-translate-y-px text-white-force"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Partner
            </Link>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 md:hidden">

            <button
              type="button"
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white transition-all"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: '18px', height: '18px' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.364l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              ) : (
                <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: '18px', height: '18px' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            <button
              type="button"
              onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white transition-all"
              aria-label="Search"
            >
              <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: '18px', height: '18px' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300 ease-out"
        style={{
          maxHeight: isMobileSearchOpen ? '300px' : '0px',
          opacity: isMobileSearchOpen ? 1 : 0,
        }}
        ref={mobileSearchRef}
      >
        <div
          className="border-b border-white/8 py-3 px-4 shadow-lg"
          style={{ background: 'rgba(10, 16, 32, 0.97)', backdropFilter: 'blur(24px)' }}
        >
          <form onSubmit={handleSearch} className="relative w-full">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full px-4 py-2.5 pl-10 pr-10 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              autoFocus={isMobileSearchOpen}
              aria-label="Search products"
            />
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <button
              type="button"
              onClick={() => { setIsMobileSearchOpen(false); setSearchQuery(''); setShowSearchResults(false) }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors p-0.5"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </form>

          {showSearchResults && searchResults.length > 0 && (
            <div className="mt-2 border border-white/8 rounded-2xl overflow-hidden">
              {searchResults.map(({ product, categoryRoute }, index) => {
                const categoryName = categoryRoute.split('/').pop()?.split('#')[0].replace(/-/g, ' ') || 'Product'
                return (
                  <button
                    key={`mobile-${product.id}-${index}`}
                    onClick={() => handleResultClick(categoryRoute)}
                    className="w-full text-left px-4 py-2.5 hover:bg-white/5 border-b border-white/5 last:border-b-0 flex flex-col transition-colors"
                  >
                    <span className="font-bold text-white text-xs">{product.name}{product.grade ? ` — ${product.grade}` : ''}</span>
                    <span className="text-[10px] text-gray-500 capitalize mt-0.5">{categoryName}</span>
                  </button>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
