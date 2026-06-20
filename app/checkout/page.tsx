'use client'

import { useState } from 'react'
import { useCart, Order } from '@/lib/CartContext'
import Link from 'next/link'
import TransparentProductImage from '@/components/TransparentProductImage'

export default function CheckoutPage() {
  const { cart, placeOrder } = useCart()
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    paymentMethod: 'invoice',
  })

  const [isProcessing, setIsProcessing] = useState(false)
  const [placedOrder, setPlacedOrder] = useState<Order | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (cart.length === 0) return

    setIsProcessing(true)

    // Simulate wholesale validation/checkout authorization
    setTimeout(() => {
      const order = placeOrder(formData)
      setPlacedOrder(order)
      setIsProcessing(false)
    }, 2000)
  }

  const subtotal = cart.reduce((acc, item) => acc + (item.mrp || 0) * item.quantity, 0)
  const shipping = subtotal > 2000 ? 0 : 250
  const gst = Math.floor(subtotal - (subtotal / 1.18)) // Extract 18% GST
  const baseAmount = subtotal - gst
  const total = subtotal + shipping

  if (placedOrder) {
    return (
      <div className="page-top-tight min-h-screen bg-[#0a0f1d] text-white pb-16 relative bg-doodle flex items-center justify-center">
        <div className="max-w-xl w-full mx-auto px-4 relative z-10 text-center">
          <div className="bg-gradient-to-b from-white/5 to-[#0d1324] border border-white/10 rounded-3xl p-8 backdrop-blur-md shadow-2xl space-y-6 animate-fade-in-up">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center mx-auto text-emerald-400">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <div className="space-y-2">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Order Confirmed!</h1>
              <p className="text-sm text-gray-400">Your purchase order has been generated successfully.</p>
            </div>

            {/* Invoice box */}
            <div className="bg-white/5 border border-white/5 rounded-2xl p-6 text-left space-y-4">
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <div>
                  <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Order Reference</span>
                  <div className="text-sm font-extrabold text-blue-400">{placedOrder.id}</div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Order Date</span>
                  <div className="text-xs font-semibold text-gray-300">{placedOrder.date}</div>
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Delivery Destination</span>
                <p className="text-xs text-gray-300 leading-relaxed font-semibold">
                  {placedOrder.customerDetails.businessName && `${placedOrder.customerDetails.businessName}, `}
                  {placedOrder.customerDetails.name}<br />
                  {placedOrder.customerDetails.address}, {placedOrder.customerDetails.city}, {placedOrder.customerDetails.state} - {placedOrder.customerDetails.zip}
                </p>
              </div>

              <div className="border-t border-white/5 pt-3">
                <div className="flex justify-between items-center text-xs font-bold text-gray-400">
                  <span>Authorized Payment Method:</span>
                  <span className="capitalize">{placedOrder.customerDetails.paymentMethod === 'invoice' ? 'Wholesale Purchase Invoice' : 'Cash on Delivery'}</span>
                </div>
                <div className="flex justify-between items-center text-base font-extrabold text-blue-400 mt-2">
                  <span>Grand Total (incl. GST):</span>
                  <span>₹{placedOrder.total + (placedOrder.total > 2000 ? 0 : 250)}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href="/"
                className="w-full py-3 border border-white/10 hover:bg-white/5 rounded-xl font-bold text-sm transition-all"
              >
                Back to Home
              </Link>
              <Link
                href="/orders"
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold rounded-xl text-sm transition-all shadow-lg hover:shadow-blue-500/20 text-white-force"
              >
                Track Purchase Order
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="page-top-tight min-h-screen bg-[#0a0f1d] text-white pb-16 md:pb-24 relative bg-doodle text-left animate-fade-in-up">
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-8">
          Checkout <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">Order</span>
        </h1>

        {cart.length === 0 ? (
          <div className="bg-gradient-to-b from-white/5 to-[#0d1324] border border-white/10 rounded-3xl p-16 text-center space-y-6 max-w-xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto text-blue-400">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white">Your Shopping Cart is Empty</h2>
            <p className="text-sm text-gray-400 max-w-sm mx-auto">
              Please add items to your shopping cart from the catalog before proceeding to order checkout.
            </p>
            <Link
              href="/products"
              className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-sm transition-all"
            >
              Browse Catalog
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left: Form */}
            <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-6">
              <div className="bg-gradient-to-b from-white/5 to-[#0d1324] border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md space-y-5 hover:border-blue-500/10 transition-all duration-300">
                <h2 className="text-xl font-bold text-white border-l-4 border-blue-500 pl-3">Shipping & Account Details</h2>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs text-gray-400 font-bold uppercase tracking-wider">Contact Person Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs text-gray-400 font-bold uppercase tracking-wider">Business / Garage Name (Optional)</label>
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      placeholder="e.g. Apex Auto Care"
                      className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs text-gray-400 font-bold uppercase tracking-wider">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. rahul@company.com"
                      className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs text-gray-400 font-bold uppercase tracking-wider">Phone / Mobile</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +91 99999 99999"
                      className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs text-gray-400 font-bold uppercase tracking-wider">Complete Shipping Address</label>
                  <input
                    type="text"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Street address, building number, locality"
                    className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs text-gray-400 font-bold uppercase tracking-wider">City</label>
                    <input
                      type="text"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="Ranchi"
                      className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs text-gray-400 font-bold uppercase tracking-wider">State</label>
                    <input
                      type="text"
                      name="state"
                      required
                      value={formData.state}
                      onChange={handleInputChange}
                      placeholder="Jharkhand"
                      className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs text-gray-400 font-bold uppercase tracking-wider">ZIP Code</label>
                    <input
                      type="text"
                      name="zip"
                      required
                      value={formData.zip}
                      onChange={handleInputChange}
                      placeholder="834001"
                      className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-b from-white/5 to-[#0d1324] border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md space-y-4 hover:border-blue-500/10 transition-all duration-300">
                <h2 className="text-xl font-bold text-white border-l-4 border-blue-500 pl-3">Payment & Credit Method</h2>
                
                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                  <label className={`flex items-start gap-3 p-4 border rounded-2xl cursor-pointer hover:bg-white/5 transition-all ${
                    formData.paymentMethod === 'invoice' ? 'border-blue-500 bg-blue-500/5' : 'border-white/10 bg-transparent'
                  }`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="invoice"
                      checked={formData.paymentMethod === 'invoice'}
                      onChange={handleInputChange}
                      className="mt-1 text-blue-600 focus:ring-blue-500"
                    />
                    <div className="text-left">
                      <div className="font-bold text-sm text-white">Wholesale Invoice Credit</div>
                      <p className="text-[10px] text-gray-400 mt-1">Receive official purchase invoice, pay within standard 30-day corporate net term.</p>
                    </div>
                  </label>

                  <label className={`flex items-start gap-3 p-4 border rounded-2xl cursor-pointer hover:bg-white/5 transition-all ${
                    formData.paymentMethod === 'cod' ? 'border-blue-500 bg-blue-500/5' : 'border-white/10 bg-transparent'
                  }`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={handleInputChange}
                      className="mt-1 text-blue-600 focus:ring-blue-500"
                    />
                    <div className="text-left">
                      <div className="font-bold text-sm text-white">Cash on Delivery (COD)</div>
                      <p className="text-[10px] text-gray-400 mt-1">Pay with cash or digital UPI upon receipt of chemical drums/containers.</p>
                    </div>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-extrabold text-sm rounded-xl transition-all shadow-lg hover:shadow-blue-500/20 flex items-center justify-center gap-2 disabled:opacity-50 text-white-force"
              >
                {isProcessing ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Authorizing Wholesale Invoice...
                  </>
                ) : (
                  <>
                    Generate Purchase Order (₹{total})
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </>
                )}
              </button>
            </form>

            {/* Right: Summary */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-gradient-to-b from-white/5 to-[#0d1324] border border-white/10 rounded-3xl p-6 backdrop-blur-md space-y-5 hover:border-blue-500/10 transition-all duration-300">
                <h2 className="text-xl font-bold text-white border-l-4 border-blue-500 pl-3">Order Summary</h2>

                {/* Items loop */}
                <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center gap-3 border-b border-white/5 pb-3 last:border-b-0 last:pb-0">
                      <div className="w-12 h-12 rounded-lg bg-[#070b14] border border-white/5 p-0.5 flex items-center justify-center flex-shrink-0">
                        <TransparentProductImage src={item.image} alt={item.name} className="object-contain w-full h-full" />
                      </div>
                      <div className="flex-grow min-w-0">
                        <div className="text-xs font-bold text-white truncate">{item.name}</div>
                        <div className="text-[9px] text-gray-400 mt-0.5 uppercase tracking-wide">
                          {item.grade && `${item.grade} • `}{item.size} • Qty {item.quantity}
                        </div>
                      </div>
                      <div className="text-xs font-extrabold text-blue-400 whitespace-nowrap">
                        {item.mrp ? `₹${item.mrp * item.quantity}` : 'Quote'}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Breakdown */}
                <div className="border-t border-white/5 pt-4 space-y-2 text-xs font-medium text-gray-400">
                  <div className="flex justify-between">
                    <span>Items Subtotal</span>
                    <span className="text-white font-semibold">₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping Handling</span>
                    {shipping === 0 ? (
                      <span className="text-emerald-400 font-semibold uppercase">Free Delivery</span>
                    ) : (
                      <span className="text-white font-semibold">₹{shipping}</span>
                    )}
                  </div>
                  <div className="flex justify-between">
                    <span>Base Amount (excl. GST)</span>
                    <span className="text-white font-semibold">₹{baseAmount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>GST (18% Included)</span>
                    <span className="text-white font-semibold">₹{gst}</span>
                  </div>
                  <div className="flex justify-between border-t border-white/5 pt-2">
                    <span>Subtotal (incl. GST)</span>
                    <span className="text-white font-semibold">₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping Handling</span>
                    {shipping === 0 ? (
                      <span className="text-emerald-400 font-semibold uppercase">Free Delivery</span>
                    ) : (
                      <span className="text-white font-semibold">₹{shipping}</span>
                    )}
                  </div>
                  <div className="flex justify-between text-sm font-extrabold text-blue-400 border-t border-white/5 pt-3">
                    <span>Estimated Grand Total</span>
                    <span>₹{total}</span>
                  </div>
                </div>
              </div>

              {/* Security info card */}
              <div className="bg-white/5 border border-white/5 rounded-2xl p-5 text-center space-y-2.5">
                <div className="text-xs text-gray-300 font-bold uppercase tracking-wider flex items-center justify-center gap-1.5">
                  <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  ISO 9001 Approved Trade Channels
                </div>
                <p className="text-[10px] text-gray-500 leading-normal">
                  All transactions and wholesale net invoices are authenticated by our financial division in compliance with Bureau of Indian Standards and GST regulations.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
