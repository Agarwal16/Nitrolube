'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')

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
    }
  }

  return (
    <nav className="fixed top-0 z-50 w-full">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mt-3 rounded-full bg-white/25 bg-gradient-to-r from-white/60 via-blue-50/70 to-white/60 border border-black/20 shadow-lg backdrop-blur-xl">
          <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 sm:px-6 gap-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-3">
                <div className="relative w-12 h-12">
                  <Image
                    src="/logoCopy.png"
                    alt="NitroLube Logo"
                    fill
                    className="object-contain rounded-lg"
                    priority
                  />
                </div>
                <span className="text-2xl font-bold">
                  <span className="text-black">Nitro</span>
                  <span className="text-primary-500">Lube</span>
                </span>
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-2 flex-1 justify-center">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                const isProducts = link.label === 'Products'
                
                if (isProducts) {
                  return (
                    <div key={link.href} className="relative group">
                      <Link
                        href={link.href}
                        className={`relative px-5 py-2 text-sm font-medium transition-all duration-200 ${
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
                          <Link href="/products/other-items" className="block px-3 py-2 text-sm text-gray-700 hover:bg-[#0055AD15] rounded-lg mx-2 transition-colors duration-200">
                            Other Items
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
                    className={`relative px-5 py-2 text-sm font-medium transition-all duration-200 ${
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
            <div className="flex-shrink-0 max-w-xs">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-full px-5 py-2 pl-10 pr-4 bg-white/60 border border-primary-200/70 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent text-sm text-gray-700 placeholder:text-gray-400"
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
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden ml-4">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:bg-blue-50"
                aria-label="Menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

