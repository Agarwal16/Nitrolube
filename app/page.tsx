'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Hero from '@/components/Hero'

export default function Home() {
  const router = useRouter()
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    let lastScrollTop = 0
    let isScrolling = false

    const handleScroll = () => {
      if (isScrolling) return

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight
      const clientHeight = document.documentElement.clientHeight
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10

      if (isAtBottom && scrollTop > lastScrollTop) {
        isScrolling = true
        setIsExiting(true)
        setTimeout(() => {
          router.push('/about')
        }, 400)
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [router])

  return (
    <div className={`w-full min-h-screen ${isExiting ? 'page-transition-exit' : 'page-transition-enter'}`}>
      {/* Hero Section */}
      <Hero />
    </div>
  )
}





