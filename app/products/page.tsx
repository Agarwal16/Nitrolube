'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

export default function ProductsPage() {
  const router = useRouter()
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop
    let isScrolling = false

    const handleScroll = () => {
      if (isScrolling) return

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight
      const clientHeight = document.documentElement.clientHeight
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10
      const isAtTop = scrollTop <= 10
      const isScrollingUp = scrollTop < lastScrollTop

      if (isAtBottom && scrollTop > lastScrollTop) {
        isScrolling = true
        setIsExiting(true)
        setTimeout(() => {
          router.push('/contact')
        }, 400)
      } else if (isAtTop && isScrollingUp && lastScrollTop > 50) {
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
  // Map category titles to their routes
  const getCategoryRoute = (title: string) => {
    const routeMap: { [key: string]: string } = {
      'Engine Oil': '/products/engine-oil',
      'Gear Oil': '/products/gear-oil',
      'Hydraulic Oil': '/products/hydraulic-oil',
      'Grease': '/products/grease',
      'Brake Oil': '/products/brake-oil',
      'Steering Oil': '/products/steering-oil',
      'Shocker Oil': '/products/shocker-oil',
      'Coolant': '/products/coolant',
      'UTTO Oil': '/products/utto-oil',
    }
    return routeMap[title] || '/products'
  }
  const categories = [
    {
      id: 1,
      title: 'Engine Oil',
      image: '/engineOil1.jpg',
      products: [
        'CNG 20w50 Engine Oil',
        '20W40 Mutigrade Engine Oil',
        '10W30 Scooty Engine Oil',
      ],
    },
    {
      id: 2,
      title: 'Gear Oil',
      image: '/Gearoil.png',
      products: [
        'EP 140 Automotive Gear Oil',
        'EP 90 Automotive Gear Oil',
      ],
    },
    {
      id: 3,
      title: 'Hydraulic Oil',
      image: '/hydraulicOil1.png',
      products: [
        '20W40 Power Triller Lubricant Oil',
        'ATF Lubricant Oil',
        'Bike Chain Cleaner (175ML)',
      ],
    },
    {
      id: 4,
      title: 'Grease',
      image: '/grease1.png',
      products: [
        'Premium Grease',
        'Industrial Grease',
      ],
    },
    {
      id: 5,
      title: 'Brake Oil',
      image: '/brakeoil1.png',
      products: [
        'DOT-3 Brake Oil',
        'DOT-4 Brake Oil',
      ],
    },
    {
      id: 6,
      title: 'Steering Oil',
      image: '/steeringoil.png',
      products: [
        'Power Steering Oil',
      ],
    },
    {
      id: 7,
      title: 'Shocker Oil',
      image: '/shockeroil.png',
      products: [
        'Shocker Oil',
      ],
    },
    {
      id: 8,
      title: 'Coolant',
      image: '/coolant1.png',
      products: [
        'Coolant 1:4',
        'Coolant 1:7',
      ],
    },
    {
      id: 9,
      title: 'UTTO Oil',
      image: '/uttooil.png',
      products: [
        'UTTO Oil',
      ],
    },
  ]

  return (
    <div className={`w-full min-h-screen bg-gradient-to-b from-white to-blue-50 pt-32 pb-20 ${isExiting ? 'page-transition-exit' : 'page-transition-enter'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div key={category.id} className="flex flex-col h-full">
              {/* Card Image */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-4">
                <div className="relative w-full h-64">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
                    className="object-contain"
                  />
                </div>
              </div>
              
              {/* Category Title */}
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                {category.title}
              </h2>
              
              {/* Product List */}
              <ul className="space-y-2 mb-4 flex-grow">
                {category.products.map((product, index) => (
                  <li key={index} className="text-sm text-gray-700 flex items-start">
                    <span className="mr-2">•</span>
                    <span>{product}</span>
                  </li>
                ))}
              </ul>
              
              {/* View All Link */}
              <Link
                href={getCategoryRoute(category.title)}
                className="text-sm text-primary-500 hover:text-primary-600 font-medium mt-auto"
              >
                View All
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

