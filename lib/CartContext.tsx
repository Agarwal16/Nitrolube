'use client'

import { createContext, useContext, useState, useEffect } from 'react'

export interface CartItem {
  id: string // product-name-grade-size
  name: string
  grade?: string
  size: string
  mrp: number | null
  image: string
  quantity: number
}

export interface Order {
  id: string
  date: string
  items: CartItem[]
  total: number
  customerDetails: {
    name: string
    email: string
    phone: string
    businessName?: string
    address: string
    city: string
    state: string
    zip: string
    paymentMethod: string
  }
  status: 'Pending Approval' | 'Processing' | 'Shipped' | 'Delivered'
}

interface CartContextType {
  cart: CartItem[]
  isCartOpen: boolean
  orders: Order[]
  addToCart: (item: Omit<CartItem, 'quantity'>, quantity?: number) => void
  removeFromCart: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  setCartOpen: (open: boolean) => void
  placeOrder: (customerDetails: Order['customerDetails']) => Order
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])
  const [orders, setOrders] = useState<Order[]>([])
  const [isCartOpen, setCartOpen] = useState(false)
  const [loaded, setLoaded] = useState(false)

  // Load from localStorage on client render
  useEffect(() => {
    const savedCart = localStorage.getItem('nitrolube_cart')
    const savedOrders = localStorage.getItem('nitrolube_orders')
    
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart))
      } catch (e) {
        console.error(e)
      }
    }
    
    if (savedOrders) {
      try {
        setOrders(JSON.parse(savedOrders))
      } catch (e) {
        console.error(e)
      }
    }
    setLoaded(true)
  }, [])

  // Save to localStorage when cart changes
  useEffect(() => {
    if (loaded) {
      localStorage.setItem('nitrolube_cart', JSON.stringify(cart))
    }
  }, [cart, loaded])

  // Save to localStorage when orders change
  useEffect(() => {
    if (loaded) {
      localStorage.setItem('nitrolube_orders', JSON.stringify(orders))
    }
  }, [orders, loaded])

  const addToCart = (newItem: Omit<CartItem, 'quantity'>, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === newItem.id)
      if (existing) {
        return prev.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      return [...prev, { ...newItem, quantity }]
    })
    setCartOpen(true)
  }

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id))
  }

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id)
      return
    }
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    )
  }

  const clearCart = () => {
    setCart([])
  }

  const placeOrder = (customerDetails: Order['customerDetails']) => {
    const total = cart.reduce((acc, item) => acc + (item.mrp || 0) * item.quantity, 0)
    
    const newOrder: Order = {
      id: 'NL-' + Math.floor(100000 + Math.random() * 900000),
      date: new Date().toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
      items: [...cart],
      total,
      customerDetails,
      status: 'Pending Approval',
    }

    setOrders((prev) => [newOrder, ...prev])
    clearCart()
    return newOrder
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        orders,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        setCartOpen,
        placeOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
