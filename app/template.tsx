'use client'

import { useEffect, useState } from 'react'

export default function RouteTemplate({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 30)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      style={{
        transition: 'opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1), transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), filter 0.45s ease',
        opacity: mounted ? 1 : 0,
        transform: mounted ? 'translateY(0px)' : 'translateY(14px)',
        filter: mounted ? 'blur(0px)' : 'blur(4px)',
        willChange: 'opacity, transform, filter',
      }}
    >
      {children}
    </div>
  )
}
