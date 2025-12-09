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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false)
  const [showSearchResults, setShowSearchResults] = useState(false)
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)
  const mobileSearchRef = useRef<HTMLDivElement>(null)

  // Flatten all products with category info
  const allProducts = useMemo(() => {
    const flatProducts: Array<{
      product: any
      category: string
      categoryRoute: string
    }> = []
    
    Object.entries(products).forEach(([category, items]) => {
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
      
      items.forEach((product) => {
        flatProducts.push({
          product,
          category,
          categoryRoute: categoryRouteMap[category] || '/products',
        })
      })
    })
    
    return flatProducts
  }, [])

  // Search function
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return []
    
    const query = searchQuery.toLowerCase().trim()
    const results = allProducts.filter(({ product }) => {
      // Search in tags
      const tagMatch = product.tags?.some((tag: string) =>
        tag.toLowerCase().includes(query)
      )
      
      // Search in grade
      const gradeMatch = product.grade?.toLowerCase().includes(query)
      
      // Search in quantity
      const quantityMatch = product.quantity?.toLowerCase().includes(query)
      
      // Search in usage
      const usageMatch = product.usage?.toLowerCase().includes(query)
      
      return tagMatch || gradeMatch || quantityMatch || usageMatch
    })
    
    // Limit to 5 results
    return results.slice(0, 5)
  }, [searchQuery, allProducts])

  // Close search results when clicking outside
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
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Show results when typing
  useEffect(() => {
    if (isMobileSearchOpen || pathname.includes('/products')) {
      setShowSearchResults(searchQuery.trim().length > 0 && searchResults.length > 0)
    }
  }, [searchQuery, searchResults, isMobileSearchOpen, pathname])

  const navLinks = [
    { href: '/', label: 'Home', icon: 'home' },
    { href: '/about', label: 'About Us', icon: 'info' },
    { href: '/products', label: 'Products', icon: 'products' },
    { href: '/contact', label: 'Contact', icon: 'contact' },
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery)}`)
      setSearchQuery('')
      setShowSearchResults(false)
    }
  }

  const handleResultClick = (categoryRoute: string) => {
    router.push(categoryRoute)
    setSearchQuery('')
    setShowSearchResults(false)
    setIsMobileSearchOpen(false)
  }

  return (
    <nav className="fixed top-0 z-50 w-full">
      {/* Desktop Navbar */}
      <div className="hidden md:block">
        <div className="bg-white/25 bg-gradient-to-r from-white/60 via-blue-50/70 to-white/60 border-b border-black/20 shadow-lg backdrop-blur-xl">
          <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8 gap-2 md:gap-4 flex-nowrap">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-2 md:space-x-3">
                <div className="relative w-10 h-10 md:w-12 md:h-12">
                  <Image
                    src="/logoCopy.png"
                    alt="NitroLube Logo"
                    fill
                    sizes="(max-width: 768px) 40px, 48px"
                    className="object-contain rounded-lg"
                    priority
                  />
                </div>
                <span className="text-xl md:text-2xl font-bold">
                  <span className="text-black">Nitro</span>
                  <span className="text-primary-500">Lube</span>
                </span>
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2 flex-1 justify-center min-w-0 flex-shrink">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                const isProducts = link.label === 'Products'
                
                if (isProducts) {
                  return (
                    <div key={link.href} className="relative group flex-shrink-0">
                      <Link
                        href={link.href}
                        className={`relative px-3 lg:px-5 py-2 text-xs md:text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                          isActive
                            ? 'text-gray-700 after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-[#0055AD] after:scale-x-100'
                            : 'text-gray-700 after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-[#0055AD] after:scale-x-0 after:origin-center hover:after:scale-x-100 after:transition-transform after:duration-300'
                        }`}
                      >
                        {link.label}
                      </Link>
                      {/* Dropdown Menu */}
                      <div className="absolute top-full left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <div className="bg-white rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.15)] border border-white/40 py-2">
                          <Link href="/products/engine-oil" className="block px-3 py-2 text-sm text-gray-700 hover:bg-[#0055AD15] rounded-lg mx-2 transition-colors duration-200">
                            Engine Oil
                          </Link>
                          <Link href="/products/gear-oil" className="block px-3 py-2 text-sm text-gray-700 hover:bg-[#0055AD15] rounded-lg mx-2 transition-colors duration-200">
                            Gear Oil
                          </Link>
                          <Link href="/products/hydraulic-oil" className="block px-3 py-2 text-sm text-gray-700 hover:bg-[#0055AD15] rounded-lg mx-2 transition-colors duration-200">
                            Hydraulic Oil
                          </Link>
                          <Link href="/products/grease" className="block px-3 py-2 text-sm text-gray-700 hover:bg-[#0055AD15] rounded-lg mx-2 transition-colors duration-200">
                            Grease
                          </Link>
                          <Link href="/products/brake-oil" className="block px-3 py-2 text-sm text-gray-700 hover:bg-[#0055AD15] rounded-lg mx-2 transition-colors duration-200">
                            Brake Oil
                          </Link>
                          <Link href="/products/steering-oil" className="block px-3 py-2 text-sm text-gray-700 hover:bg-[#0055AD15] rounded-lg mx-2 transition-colors duration-200">
                            Steering Oil
                          </Link>
                          <Link href="/products/shocker-oil" className="block px-3 py-2 text-sm text-gray-700 hover:bg-[#0055AD15] rounded-lg mx-2 transition-colors duration-200">
                            Shocker Oil
                          </Link>
                          <Link href="/products/coolant" className="block px-3 py-2 text-sm text-gray-700 hover:bg-[#0055AD15] rounded-lg mx-2 transition-colors duration-200">
                            Coolant
                          </Link>
                          <Link href="/products/utto-oil" className="block px-3 py-2 text-sm text-gray-700 hover:bg-[#0055AD15] rounded-lg mx-2 transition-colors duration-200">
                            UTTO Oil
                          </Link>
                        </div>
                      </div>
                    </div>
                  )
                }
                
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-3 lg:px-5 py-2 text-xs md:text-sm font-medium transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                      isActive
                        ? 'text-gray-700 after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-[#0055AD] after:scale-x-100'
                        : 'text-gray-700 after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-[#0055AD] after:scale-x-0 after:origin-center hover:after:scale-x-100 after:transition-transform after:duration-300'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>

            {/* Search Bar */}
            <div className="hidden md:block flex-shrink-0 w-32 lg:w-48 xl:max-w-xs relative" ref={searchRef}>
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setShowSearchResults(searchQuery.trim().length > 0 && searchResults.length > 0)}
                  placeholder="Search..."
                  className="w-full px-3 lg:px-5 py-2 pl-8 lg:pl-10 pr-2 lg:pr-4 bg-white/60 border border-primary-200/70 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent text-xs md:text-sm text-gray-700 placeholder:text-gray-400"
                />
                <button
                  type="submit"
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary-500"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </form>
              
              {/* Search Results Dropdown */}
              {showSearchResults && searchResults.length > 0 && (
                <div className="absolute top-full right-0 mt-2 w-80 bg-white rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.15)] border border-white/40 py-2 z-50 max-h-96 overflow-y-auto">
                  {searchResults.map(({ product, categoryRoute }, index) => {
                    const categoryName = categoryRoute.split('/').pop()?.replace('-', ' ') || 'Product'
                    return (
                      <button
                        key={`${product.id}-${index}`}
                        onClick={() => handleResultClick(categoryRoute)}
                        className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-[#0055AD15] transition-colors duration-200 border-b border-gray-100 last:border-b-0"
                      >
                        <div className="font-semibold text-gray-900">
                          {product.grade || 'Product'} - {product.quantity}
                        </div>
                        <div className="text-xs text-gray-500 mt-1 capitalize">
                          {categoryName}
                        </div>
                        {product.tags && product.tags.length > 0 && (
                          <div className="text-xs text-gray-400 mt-1">
                            {product.tags.slice(0, 2).join(', ')}
                          </div>
                        )}
                      </button>
                    )
                  })}
                </div>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden">
        <div className="bg-white/25 bg-gradient-to-r from-white/60 via-blue-50/70 to-white/60 border-b border-black/20 shadow-lg backdrop-blur-xl">
          <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 gap-2">
            {!isMobileSearchOpen ? (
              <>
                {/* Logo */}
                <div className="flex-shrink-0">
                  <Link href="/" onClick={() => setIsProductsDropdownOpen(false)} className="flex items-center">
                    <div className="relative w-10 h-10">
                      <Image
                        src="/logoCopy.png"
                        alt="NitroLube Logo"
                        fill
                        className="object-contain rounded-lg"
                        priority
                      />
                    </div>
                  </Link>
                </div>

                {/* Navigation Links with Icons */}
                <div className="flex items-center space-x-4 flex-1 justify-center">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href
                    const isProducts = link.label === 'Products'
                    
                    if (isProducts) {
                      return (
                        <div key={link.href} className="relative group">
                          <button
                            type="button"
                            onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                            className={`relative p-2.5 rounded-lg transition-all duration-200 ${
                              isActive
                                ? 'text-gray-700 bg-white/40'
                                : 'text-gray-700 hover:bg-white/40'
                            }`}
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.25 10.5V6a2.25 2.25 0 114.5 0v4.5m-4.5 0h9" />
                            </svg>
                          </button>
                          {/* Dropdown Menu */}
                          {isProductsDropdownOpen && (
                            <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.15)] border border-white/40 py-2 z-50">
                              <Link href="/products/engine-oil" onClick={() => setIsProductsDropdownOpen(false)} className="block px-3 py-2 text-sm text-gray-700 hover:bg-[#0055AD15] rounded-lg mx-2 transition-colors duration-200">
                                Engine Oil
                              </Link>
                              <Link href="/products/gear-oil" onClick={() => setIsProductsDropdownOpen(false)} className="block px-3 py-2 text-sm text-gray-700 hover:bg-[#0055AD15] rounded-lg mx-2 transition-colors duration-200">
                                Gear Oil
                              </Link>
                              <Link href="/products/hydraulic-oil" onClick={() => setIsProductsDropdownOpen(false)} className="block px-3 py-2 text-sm text-gray-700 hover:bg-[#0055AD15] rounded-lg mx-2 transition-colors duration-200">
                                Hydraulic Oil
                              </Link>
                              <Link href="/products/grease" onClick={() => setIsProductsDropdownOpen(false)} className="block px-3 py-2 text-sm text-gray-700 hover:bg-[#0055AD15] rounded-lg mx-2 transition-colors duration-200">
                                Grease
                              </Link>
                              <Link href="/products/brake-oil" onClick={() => setIsProductsDropdownOpen(false)} className="block px-3 py-2 text-sm text-gray-700 hover:bg-[#0055AD15] rounded-lg mx-2 transition-colors duration-200">
                                Brake Oil
                              </Link>
                              <Link href="/products/steering-oil" onClick={() => setIsProductsDropdownOpen(false)} className="block px-3 py-2 text-sm text-gray-700 hover:bg-[#0055AD15] rounded-lg mx-2 transition-colors duration-200">
                                Steering Oil
                              </Link>
                              <Link href="/products/shocker-oil" onClick={() => setIsProductsDropdownOpen(false)} className="block px-3 py-2 text-sm text-gray-700 hover:bg-[#0055AD15] rounded-lg mx-2 transition-colors duration-200">
                                Shocker Oil
                              </Link>
                              <Link href="/products/coolant" onClick={() => setIsProductsDropdownOpen(false)} className="block px-3 py-2 text-sm text-gray-700 hover:bg-[#0055AD15] rounded-lg mx-2 transition-colors duration-200">
                                Coolant
                              </Link>
                              <Link href="/products/utto-oil" onClick={() => setIsProductsDropdownOpen(false)} className="block px-3 py-2 text-sm text-gray-700 hover:bg-[#0055AD15] rounded-lg mx-2 transition-colors duration-200">
                                UTTO Oil
                              </Link>
                            </div>
                          )}
                        </div>
                      )
                    }
                    
                    let iconSvg
                    if (link.icon === 'home') {
                      iconSvg = (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                      )
                    } else if (link.icon === 'info') {
                      iconSvg = (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0z" />
                        </svg>
                      )
                    } else if (link.icon === 'contact') {
                      iconSvg = (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                      )
                    }
                    
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsProductsDropdownOpen(false)}
                        className={`relative p-2.5 rounded-lg transition-all duration-200 ${
                          isActive
                            ? 'text-gray-700 bg-white/40'
                            : 'text-gray-700 hover:bg-white/40'
                        }`}
                      >
                        {iconSvg}
                      </Link>
                    )
                  })}
                </div>

                {/* Search Icon */}
                <div className="flex-shrink-0">
                  <button
                    type="button"
                    onClick={() => {
                      setIsMobileSearchOpen(true)
                      setIsProductsDropdownOpen(false)
                    }}
                    className="relative p-2.5 rounded-lg transition-all duration-200 text-gray-700 hover:bg-white/40"
                    aria-label="Search"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </button>
                </div>
              </>
            ) : (
              /* Mobile Search Input - Replaces entire navbar */
              <div className="w-full relative" ref={mobileSearchRef}>
                <form onSubmit={handleSearch} className="relative w-full">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setShowSearchResults(searchQuery.trim().length > 0 && searchResults.length > 0)}
                    placeholder="Search products..."
                    autoFocus
                    className="w-full px-4 py-2 pl-10 pr-10 bg-white/60 border border-primary-200/70 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent text-sm text-gray-700 placeholder:text-gray-400"
                  />
                  <button
                    type="submit"
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary-500"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
              <button
                type="button"
                    onClick={() => {
                      setIsMobileSearchOpen(false)
                      setSearchQuery('')
                      setShowSearchResults(false)
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary-500"
              >
                <svg
                      className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
                </form>
                
                {/* Mobile Search Results Dropdown */}
                {showSearchResults && searchResults.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.15)] border border-white/40 py-2 z-50 max-h-96 overflow-y-auto">
                    {searchResults.map(({ product, categoryRoute }, index) => {
                      const categoryName = categoryRoute.split('/').pop()?.replace('-', ' ') || 'Product'
                      return (
                        <button
                          key={`mobile-${product.id}-${index}`}
                          onClick={() => handleResultClick(categoryRoute)}
                          className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-[#0055AD15] transition-colors duration-200 border-b border-gray-100 last:border-b-0"
                        >
                          <div className="font-semibold text-gray-900">
                            {product.grade || 'Product'} - {product.quantity}
                          </div>
                          <div className="text-xs text-gray-500 mt-1 capitalize">
                            {categoryName}
                          </div>
                          {product.tags && product.tags.length > 0 && (
                            <div className="text-xs text-gray-400 mt-1">
                              {product.tags.slice(0, 2).join(', ')}
                            </div>
                          )}
                        </button>
                      )
                    })}
                  </div>
                )}
            </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

