'use client'

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const automotiveLinks = [
    { name: 'Engine Oils', href: '/products/engine-oil' },
    { name: 'Gear Oils', href: '/products/gear-oil' },
    { name: 'Radiator Coolants', href: '/products/coolant' },
    { name: 'Grease Gels', href: '/products/grease' },
  ]

  const specialtyLinks = [
    { name: 'Hydraulic Oils', href: '/products/hydraulic-oil' },
    { name: 'UTTO Tractor Fluids', href: '/products/utto-oil' },
    { name: 'Brake Oils (DOT)', href: '/products/brake-oil' },
    { name: 'Power Steering Oils', href: '/products/steering-oil' },
    { name: 'Shocker Oils', href: '/products/shocker-oil' },
  ]

  const companyLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products Catalog', href: '/products' },
    { name: 'Partner With Us', href: '/partner-with-us' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <footer className="relative border-t z-20 overflow-hidden" style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border-subtle)' }}>
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      {/* Subtle background orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-blue-600/4 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-indigo-600/4 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">

          {/* Brand column */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-lg shadow-[0_4px_16px_rgba(37,99,235,0.4)]"
                style={{ background: 'linear-gradient(135deg, #2563eb, #06b6d4)' }}
                aria-hidden="true"
              >
                N
              </div>
              <span className="text-2xl font-extrabold tracking-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                <span className="text-white">Nitro</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">Lube</span>
              </span>
            </Link>

            <p className="text-sm leading-relaxed max-w-sm" style={{ color: 'var(--text-muted)' }}>
              NitroLube is an <strong className="font-semibold" style={{ color: 'var(--text-secondary)' }}>ISO 9001:2015 certified</strong> company dedicated to formulating advanced lubrication solutions that deliver peak power, friction protection, and thermal stability across all operating conditions.
            </p>

            {/* Certifications */}
            <div className="flex flex-wrap gap-2 pt-2">
              {['ISO 9001:2015', 'BIS Certified', '100% Lab Tested'].map((cert) => (
                <span
                  key={cert}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold border"
                  style={{
                    background: 'rgba(59, 130, 246, 0.08)',
                    borderColor: 'rgba(59, 130, 246, 0.2)',
                    color: '#60a5fa',
                  }}
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {cert}
                </span>
              ))}
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://www.facebook.com/people/NitroLube/61584391217683/?sfnsn=wa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl flex items-center justify-center border transition-all duration-200 hover:scale-110 hover:shadow-[0_4px_16px_rgba(37,99,235,0.4)]"
                style={{ background: 'var(--bg-glass-light)', borderColor: 'var(--border-default)', color: 'var(--text-muted)' }}
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://x.com/NitroLube_?t=x_-XUQjhX0gWnff-1q5ahA&s=08"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl flex items-center justify-center border transition-all duration-200 hover:scale-110 hover:shadow-[0_4px_16px_rgba(29,78,216,0.3)]"
                style={{ background: 'var(--bg-glass-light)', borderColor: 'var(--border-default)', color: 'var(--text-muted)' }}
                aria-label="X (Twitter)"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/nitrolube_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl flex items-center justify-center border transition-all duration-200 hover:scale-110 hover:shadow-[0_4px_16px_rgba(219,39,119,0.3)]"
                style={{ background: 'var(--bg-glass-light)', borderColor: 'var(--border-default)', color: 'var(--text-muted)' }}
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://wa.me/918709735654"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl flex items-center justify-center border transition-all duration-200 hover:scale-110 hover:shadow-[0_4px_16px_rgba(34,197,94,0.3)]"
                style={{ background: 'var(--bg-glass-light)', borderColor: 'var(--border-default)', color: 'var(--text-muted)' }}
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.555 4.112 1.523 5.84L.057 23.882a.5.5 0 00.61.61l6.04-1.466A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.944 0-3.763-.523-5.323-1.433l-.38-.226-3.944.956.956-3.945-.227-.381A9.963 9.963 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Automotive Range column */}
          <div className="space-y-5 text-left">
            <h3 className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--accent-blue)' }}>
              Automotive Range
            </h3>
            <ul className="space-y-2.5">
              {automotiveLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-all duration-150 hover:translate-x-1 inline-flex items-center gap-1.5 group"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    <span className="w-1 h-1 rounded-full bg-blue-500/50 group-hover:bg-blue-400 transition-colors flex-shrink-0" />
                    <span className="group-hover:text-white transition-colors">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industrial & Specialty column */}
          <div className="space-y-5 text-left">
            <h3 className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--accent-blue)' }}>
              Industrial & Specialty
            </h3>
            <ul className="space-y-2.5">
              {specialtyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-all duration-150 hover:translate-x-1 inline-flex items-center gap-1.5 group"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    <span className="w-1 h-1 rounded-full bg-blue-500/50 group-hover:bg-blue-400 transition-colors flex-shrink-0" />
                    <span className="group-hover:text-white transition-colors">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div className="space-y-5">
            <h3 className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--accent-blue)' }}>
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:info@nitrolube.co.in"
                  className="group flex items-start gap-3 transition-all duration-200"
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-200 group-hover:bg-blue-500/20" style={{ background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.15)' }}>
                    <svg className="w-3.5 h-3.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider mb-0.5" style={{ color: 'var(--text-muted)' }}>Email</div>
                    <div className="text-sm font-medium group-hover:text-blue-400 transition-colors" style={{ color: 'var(--text-secondary)' }}>info@nitrolube.co.in</div>
                  </div>
                </a>
              </li>
              <li>
                <a href="tel:+918709735654" className="group flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-200 group-hover:bg-blue-500/20" style={{ background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.15)' }}>
                    <svg className="w-3.5 h-3.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider mb-0.5" style={{ color: 'var(--text-muted)' }}>Phone</div>
                    <div className="text-sm font-medium group-hover:text-blue-400 transition-colors" style={{ color: 'var(--text-secondary)' }}>+91 87097 35654</div>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.15)' }}>
                  <svg className="w-3.5 h-3.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider mb-0.5" style={{ color: 'var(--text-muted)' }}>Headquarters</div>
                  <div className="text-sm font-medium leading-snug" style={{ color: 'var(--text-secondary)' }}>Ranchi Patna Road,<br />Koderma, Jharkhand</div>
                </div>
              </li>
            </ul>

            {/* CTA button */}
            <Link
              href="/partner-with-us"
              className="inline-flex items-center gap-2 mt-2 px-4 py-2.5 text-sm font-bold rounded-xl text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(37,99,235,0.35)] text-white-force"
              style={{ background: 'linear-gradient(135deg, #2563eb, #06b6d4)' }}
            >
              Become a Partner
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: 'var(--border-subtle)' }}>
          <div className="text-xs text-center sm:text-left" style={{ color: 'var(--text-muted)' }}>
            <p>© {currentYear} NitroLube Lubricants. All rights reserved.</p>
            <p className="mt-0.5">Registered ISO 9001:2015 | Made with ❤️ in India</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {companyLinks.slice(0, 4).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs transition-colors hover:text-blue-400"
                style={{ color: 'var(--text-muted)' }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
