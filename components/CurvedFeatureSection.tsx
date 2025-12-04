'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Product } from '@/lib/excelParser'
import ProductCard from './ProductCard'

interface CurvedFeatureSectionProps {
  products: Product[]
}

export default function CurvedFeatureSection({ products }: CurvedFeatureSectionProps) {
  const featuredProducts = products.slice(0, 2)
  const [imageSrc, setImageSrc] = useState('/products/hero.png')

  const whyNitroLubeItems = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Protection',
      description: 'Advanced protection for optimal engine performance and longevity.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Eco-Friendly',
      description: 'Environmentally conscious formula meeting the highest standards.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Affordable',
      description: 'Premium quality at competitive prices for maximum value.',
    },
  ]

  return (
    <section className="relative bg-white">
      {/* White Container - Completely Rectangular */}
      <div className="relative bg-white shadow-xl">
        {/* Right Side Image - Pushed outwards in y-axis */}
        <div className="absolute -top-8 -bottom-8 right-6 md:right-12 z-10 flex items-center">
          <div className="relative w-40 md:w-56 h-full min-h-[200px] md:min-h-[300px] rounded-xl shadow-2xl overflow-hidden bg-white p-2">
            <Image
              src={imageSrc}
              alt="NitroLube Hero"
              fill
              className="object-contain rounded-lg"
              onError={() => {
                // Fallback to an existing image if hero.png doesn't exist
                setImageSrc('/featuredProduct5containers.webp')
              }}
            />
          </div>
        </div>

        {/* Content Container */}
        <div className="relative max-w-7xl mx-auto px-6 pt-16 md:pt-20 pb-16 md:pb-20 z-10 pr-56 md:pr-72">
          {/* Two Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Side: Featured Products */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Featured Products
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {featuredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>

            {/* Right Side: Why NitroLube */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Why NitroLube?
              </h2>
              
              <div className="space-y-6">
                {whyNitroLubeItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-row items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
                  >
                    <div className="flex-shrink-0 p-3 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg text-white shadow-md">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

