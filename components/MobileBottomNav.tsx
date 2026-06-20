'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function MobileBottomNav() {
  const pathname = usePathname()

  const navItems = [
    {
      label: 'Home',
      href: '/',
      icon: (active: boolean) => (
        <svg className="w-5 h-5" fill={active ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={active ? 0 : 2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      label: 'Catalog',
      href: '/products',
      icon: (active: boolean) => (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={active ? 2.5 : 2} d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      ),
    },
    {
      label: 'Contact',
      href: '/contact',
      icon: (active: boolean) => (
        <svg className="w-5 h-5" fill={active ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={active ? 0 : 2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ]

  return (
    <div className="mobile-bottom-nav fixed bottom-0 left-0 right-0 z-50 md:hidden px-2 py-2 select-none safe-area-bottom">
      {/* Top border glow line */}
      <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="flex items-center justify-around">
        {navItems.map((item, idx) => {
          const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)

          return (
            <Link
              key={idx}
              href={item.href}
              className={`flex flex-col items-center justify-center flex-1 py-1.5 gap-1 text-[9px] font-bold tracking-wide transition-all duration-200 active:scale-95 ${
                isActive ? 'text-blue-400' : 'text-gray-500 hover:text-gray-300'
              }`}
              aria-current={isActive ? 'page' : undefined}
            >
              <div className={`relative w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 ${
                isActive ? 'bg-blue-500/12 text-blue-400' : ''
              }`}>
                {item.icon(isActive)}
                {isActive && (
                  <span className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
                )}
              </div>
              <span>{item.label}</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
