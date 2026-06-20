'use client'

import { useCart } from '@/lib/CartContext'
import Link from 'next/link'
import { useRef, useEffect } from 'react'
import TransparentProductImage from './TransparentProductImage'

export default function CartDrawer() {
  const { cart, isCartOpen, setCartOpen, removeFromCart, updateQuantity } = useCart()
  const drawerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setCartOpen(false)
    }
    if (isCartOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isCartOpen, setCartOpen])

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
      setCartOpen(false)
    }
  }

  if (!isCartOpen) return null

  const subtotal = cart.reduce((acc, item) => acc + (item.mrp || 0) * item.quantity, 0)
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <div
      className="fixed inset-0 z-[100] flex justify-end"
      style={{ background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(4px)' }}
      onClick={handleOverlayClick}
      aria-modal="true"
      role="dialog"
      aria-label="Shopping cart"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 animate-fade-in" />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className="relative w-full max-w-md h-full flex flex-col border-l cart-drawer-bg"
        style={{
          background: 'var(--bg-card)',
          borderColor: 'var(--border-default)',
          animation: 'slideInRight 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards',
          boxShadow: '-24px 0 64px rgba(0,0,0,0.5)',
        }}
      >
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500" />

        {/* Header */}
        <div className="p-5 sm:p-6 flex items-center justify-between flex-shrink-0" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{ background: 'rgba(59,130,246,0.12)', border: '1px solid rgba(59,130,246,0.2)' }}
            >
              <svg className="w-4.5 h-4.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: '18px', height: '18px' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <div>
              <h2 className="text-base font-bold" style={{ color: 'var(--text-primary)', fontFamily: 'Montserrat, sans-serif' }}>Your Cart</h2>
              <p className="text-[11px]" style={{ color: 'var(--text-muted)' }}>{totalItems} item{totalItems !== 1 ? 's' : ''}</p>
            </div>
            {totalItems > 0 && (
              <span
                className="px-2 py-0.5 rounded-full text-[10px] font-bold"
                style={{ background: 'rgba(59,130,246,0.15)', border: '1px solid rgba(59,130,246,0.25)', color: '#60a5fa' }}
              >
                {totalItems}
              </span>
            )}
          </div>
          <button
            onClick={() => setCartOpen(false)}
            className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{ background: 'var(--bg-glass-light)', border: '1px solid var(--border-subtle)', color: 'var(--text-muted)' }}
            aria-label="Close cart"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Cart items */}
        <div className="flex-grow overflow-y-auto p-4 sm:p-6 space-y-3">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-5">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center"
                style={{ background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.15)' }}
              >
                <svg className="w-9 h-9 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)', fontFamily: 'Montserrat, sans-serif' }}>Your Cart is Empty</h3>
                <p className="text-sm max-w-[220px]" style={{ color: 'var(--text-muted)' }}>Choose from our premium industrial & automotive lubricant range.</p>
              </div>
              <button
                onClick={() => setCartOpen(false)}
                className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_8px_20px_rgba(37,99,235,0.35)] hover:-translate-y-0.5 text-white-force"
              >
                Browse Catalog
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 rounded-2xl p-3 border relative group transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: 'var(--bg-glass-light)',
                  borderColor: 'var(--border-subtle)',
                }}
              >
                {/* Hover border */}
                <div
                  className="absolute inset-0 rounded-2xl border opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
                  style={{ borderColor: 'rgba(59,130,246,0.2)' }}
                />

                {/* Product image */}
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center p-1.5 flex-shrink-0"
                  style={{ background: 'var(--bg-tertiary)' }}
                >
                  <TransparentProductImage
                    src={item.image}
                    alt={item.name}
                    className="object-contain w-full h-full"
                  />
                </div>

                {/* Details */}
                <div className="flex-grow min-w-0">
                  <h4 className="text-sm font-bold truncate mb-1" style={{ color: 'var(--text-primary)' }}>{item.name}</h4>
                  <div className="flex items-center gap-1.5 mb-2">
                    {item.grade && (
                      <span
                        className="px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wide"
                        style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)', color: '#60a5fa' }}
                      >
                        {item.grade}
                      </span>
                    )}
                    <span className="text-[10px] font-semibold" style={{ color: 'var(--text-muted)' }}>{item.size}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm font-extrabold text-blue-400">
                        {item.mrp ? `₹${(item.mrp * item.quantity).toLocaleString('en-IN')}` : 'Contact'}
                      </span>
                      {item.mrp && (
                        <div className="text-[9px] font-semibold tracking-wide" style={{ color: 'var(--text-muted)' }}>Incl. GST</div>
                      )}
                    </div>

                    {/* Quantity controls */}
                    <div
                      className="flex items-center gap-0.5 rounded-lg p-0.5"
                      style={{ background: 'var(--bg-glass-light)', border: '1px solid var(--border-subtle)' }}
                    >
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-7 h-7 rounded-md flex items-center justify-center text-sm font-bold transition-all hover:bg-white/10"
                        style={{ color: 'var(--text-muted)' }}
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className="w-7 text-center text-xs font-extrabold" style={{ color: 'var(--text-primary)' }}>
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 rounded-md flex items-center justify-center text-sm font-bold transition-all hover:bg-white/10"
                        style={{ color: 'var(--text-muted)' }}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Remove button */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="absolute top-2 right-2 w-6 h-6 rounded-lg flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100 hover:bg-red-500/15 hover:scale-110"
                  style={{ color: 'var(--text-muted)' }}
                  aria-label="Remove item"
                >
                  <svg className="w-3.5 h-3.5 hover:text-red-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div
            className="p-5 sm:p-6 flex-shrink-0 space-y-4 cart-footer-bg"
            style={{ borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-secondary)' }}
          >
            {/* Subtotal */}
            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm font-semibold block" style={{ color: 'var(--text-secondary)' }}>Subtotal</span>
                <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>GST Included</span>
              </div>
              <span className="text-2xl font-extrabold text-blue-400">
                ₹{subtotal.toLocaleString('en-IN')}
              </span>
            </div>

            <p className="text-[10px] leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              Shipping & regional taxes calculated at checkout. Bulk discounts applied on final invoice.
            </p>

            {/* Actions */}
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setCartOpen(false)}
                className="py-3 rounded-xl text-xs font-bold border transition-all duration-200 hover:bg-white/5"
                style={{ borderColor: 'var(--border-default)', color: 'var(--text-secondary)' }}
              >
                Keep Shopping
              </button>
              <Link
                href="/checkout"
                onClick={() => setCartOpen(false)}
                className="py-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-center font-bold rounded-xl text-xs transition-all duration-200 hover:shadow-[0_8px_24px_rgba(37,99,235,0.4)] hover:-translate-y-0.5 flex items-center justify-center gap-1.5 text-white-force"
              >
                Checkout
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Bulk inquiry */}
            <a
              href="mailto:info@nitrolube.co.in?subject=Bulk Order Inquiry"
              className="flex items-center justify-center gap-2 py-2 text-[11px] font-semibold rounded-xl border border-dashed transition-all hover:border-blue-500/30 hover:text-blue-400"
              style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-muted)' }}
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Inquire Bulk Business Quote
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
