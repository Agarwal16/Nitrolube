'use client'

import { useCart } from '@/lib/CartContext'
import Link from 'next/link'
import TransparentProductImage from '@/components/TransparentProductImage'

export default function OrdersPage() {
  const { orders } = useCart()

  return (
    <div className="page-top-tight min-h-screen bg-[#0a0f1d] text-white pb-16 md:pb-24 relative bg-doodle text-left animate-fade-in-up">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-white/10 pb-6 mb-8 gap-4">
          <div>
            <nav className="flex items-center gap-2 text-xs md:text-sm text-gray-400 mb-2">
              <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white font-medium">My Orders</span>
            </nav>
            <h1 className="text-3xl font-extrabold tracking-tight">
              Order <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">History</span>
            </h1>
          </div>
          <div>
            <Link
              href="/products"
              className="inline-flex py-2.5 px-5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/30 rounded-xl text-xs font-bold transition-all"
            >
              Order More Products
            </Link>
          </div>
        </div>

        {orders.length === 0 ? (
          <div className="bg-gradient-to-b from-white/5 to-[#0d1324] border border-white/10 rounded-3xl p-16 text-center space-y-6 max-w-xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto text-blue-400 animate-pulse">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white">No Purchase Orders Placed</h2>
            <p className="text-sm text-gray-400 max-w-xs mx-auto leading-relaxed">
              You haven't placed any corporate or retail orders yet. Browse our catalog to add products and create your first purchase order.
            </p>
            <Link
              href="/products"
              className="inline-block px-8 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-extrabold rounded-xl text-sm transition-all shadow-md shadow-blue-500/10 text-white-force"
            >
              Explore Products Catalog
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => {
              const subtotal = order.total
              const shipping = subtotal > 2000 ? 0 : 250
              const gst = Math.floor(subtotal - (subtotal / 1.18))
              const baseAmount = subtotal - gst
              const finalTotal = subtotal + shipping

              return (
                <div
                  key={order.id}
                  className="bg-gradient-to-b from-white/5 to-[#0d1324] border border-white/10 rounded-3xl overflow-hidden hover:border-blue-500/20 transition-all duration-300 shadow-lg"
                >
                  {/* Order Status Bar */}
                  <div className="bg-[#070b14]/50 border-b border-white/10 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
                      <div>
                        <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider block">Order ID</span>
                        <span className="text-sm font-extrabold text-blue-400">{order.id}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider block">Placed On</span>
                        <span className="text-xs font-semibold text-gray-300">{order.date}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider block">Grand Total</span>
                        <span className="text-xs font-extrabold text-white">₹{finalTotal}</span>
                      </div>
                    </div>
                    <div>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border bg-amber-500/10 border-amber-500/30 text-amber-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                        {order.status}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 grid md:grid-cols-12 gap-8 items-start">
                    {/* Left: Products list */}
                    <div className="md:col-span-7 space-y-4">
                      <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider block">Ordered Lubricants</span>
                      <div className="space-y-3">
                        {order.items.map((item) => (
                          <div key={item.id} className="flex items-center gap-4 bg-white/5 border border-white/5 rounded-2xl p-3 hover:border-blue-500/10 transition-colors">
                            <div className="w-12 h-12 rounded-xl bg-[#070b14] p-0.5 flex items-center justify-center flex-shrink-0">
                              <TransparentProductImage src={item.image} alt={item.name} className="object-contain w-full h-full" />
                            </div>
                            <div className="flex-grow min-w-0">
                              <div className="text-sm font-bold text-white truncate">{item.name}</div>
                              <div className="text-[10px] text-gray-400 mt-0.5 uppercase font-semibold">
                                {item.grade && `${item.grade} • `}{item.size} • Qty {item.quantity}
                              </div>
                            </div>
                            <div className="text-xs font-extrabold text-blue-400 whitespace-nowrap">
                              {item.mrp ? `₹${item.mrp * item.quantity}` : 'Quote Request'}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right: Destination / Invoice summary */}
                    <div className="md:col-span-5 bg-white/5 border border-white/5 rounded-2xl p-5 space-y-4 text-xs font-semibold text-gray-300">
                      <div>
                        <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider block mb-1">Billing & Delivery Details</span>
                        <div className="text-white font-bold mb-1">
                          {order.customerDetails.businessName ? `${order.customerDetails.businessName} (${order.customerDetails.name})` : order.customerDetails.name}
                        </div>
                        <div className="text-[11px] text-gray-400 leading-relaxed font-semibold">
                          {order.customerDetails.address}, {order.customerDetails.city}, {order.customerDetails.state} - {order.customerDetails.zip}<br />
                          Phone: {order.customerDetails.phone} | Email: {order.customerDetails.email}
                        </div>
                      </div>

                      <div className="border-t border-white/5 pt-3 space-y-1.5 text-[11px]">
                        <div className="flex justify-between">
                          <span>Base Amount (excl. GST):</span>
                          <span className="text-white">₹{baseAmount}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>GST (18% Included):</span>
                          <span className="text-white">₹{gst}</span>
                        </div>
                        <div className="flex justify-between border-t border-white/5 pt-1.5">
                          <span>Subtotal (incl. GST):</span>
                          <span className="text-white">₹{subtotal}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Regional Shipping:</span>
                          <span>{shipping === 0 ? 'Free Shipping' : `₹${shipping}`}</span>
                        </div>
                        <div className="flex justify-between border-t border-white/5 pt-2 text-xs font-extrabold text-blue-400">
                          <span>Grand Total (Paid/Invoice):</span>
                          <span>₹{finalTotal}</span>
                        </div>
                      </div>

                      <div className="border-t border-white/5 pt-3 flex items-center justify-between text-[10px] text-gray-400 uppercase tracking-wide">
                        <span>Payment Mode:</span>
                        <span className="text-white">{order.customerDetails.paymentMethod === 'invoice' ? 'Wholesale Net 30' : 'COD'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
