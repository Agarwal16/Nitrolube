'use client'

import { useState, useMemo, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { products } from '@/data/products'
import TransparentProductImage from '@/components/TransparentProductImage'

function ProductsCatalogContent() {
  const searchParams = useSearchParams()
  const initialSearch = searchParams?.get('search') || ''
  const [searchQuery, setSearchQuery] = useState(initialSearch)

  // Listen to URL search param changes (e.g. searching from navbar)
  useEffect(() => {
    setSearchQuery(searchParams?.get('search') || '')
  }, [searchParams])

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
      image: '/engine_oil_3d.jpg',
      description: 'High-strength film formulations for passenger cars, bikes, and fleets.',
      items: products.engineOil || [],
      highlights: ['10W30 Scooty', '20W40 Multigrade', '15W40 Diesel', '5W30 Synthetic'],
    },
    {
      id: 2,
      title: 'Gear Oil',
      image: '/gear_oil_3d.jpg',
      description: 'Extreme pressure additives for smooth shifting and gearbox durability.',
      items: products.gearOil || [],
      highlights: ['EP 90', '80W90 Transmission', '85W140 Heavy Duty'],
    },
    {
      id: 3,
      title: 'Hydraulic Oil',
      description: 'Anti-wear industrial fluids for high pressure pumps and hydraulic gear.',
      image: '/hydraulic_oil_3d.jpg',
      items: products.hydOil || [],
      highlights: ['Grade 32', 'Grade 46', 'Grade 68'],
    },
    {
      id: 4,
      title: 'Grease',
      description: 'Heavy duty gel lubricants with water washout resistance.',
      image: '/grease_3d.jpg',
      items: products.grease || [],
      highlights: ['White Gel NP', 'Red Gel Lithium AP-3', 'Golden Gel AP-3'],
    },
    {
      id: 5,
      title: 'Brake Oil',
      description: 'High boiling point hydraulic fluids for responsive braking protection.',
      image: '/brake_oil_3d.jpg',
      items: products.brakeOil || [],
      highlights: ['DOT-3 Brake Fluid', 'DOT-4 Brake Fluid'],
    },
    {
      id: 6,
      title: 'Steering Oil',
      description: 'Anti-foam fluids designed for smooth power steering transitions.',
      image: '/steering_oil_3d.jpg',
      items: products.steeringOil || [],
      highlights: ['Power Steering fluid', 'Seal-protective formula'],
    },
    {
      id: 7,
      title: 'Shocker Oil',
      description: 'High-stability damping fluid engineered for shock absorber oscillations.',
      image: '/shocker_oil_3d.jpg',
      items: products.shockerOil || [],
      highlights: ['All-terrain shock oil', 'Damping consistency'],
    },
    {
      id: 8,
      title: 'Coolant',
      description: 'Ethylene-glycol antifreeze fluids offering radiator rust protection.',
      image: '/coolant_3d.jpg',
      items: products.coolant || [],
      highlights: ['Coolant 1:4 standard', 'Coolant 1:7 concentrated'],
    },
    {
      id: 9,
      title: 'UTTO Oil',
      description: 'Universal tractor transmission oil for agricultural wet brakes and hydraulics.',
      image: '/utto_oil_3d.jpg',
      items: products.uttoOil || [],
      highlights: ['Tractor transmission oil', 'Wet brake control'],
    },
  ]

  // Filter categories based on search query
  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return categories

    const query = searchQuery.toLowerCase().trim()
    return categories.filter((cat) => {
      const titleMatch = cat.title.toLowerCase().includes(query)
      const descMatch = cat.description.toLowerCase().includes(query)
      const highlightMatch = cat.highlights.some(h => h.toLowerCase().includes(query))
      return titleMatch || descMatch || highlightMatch
    })
  }, [searchQuery])

  return (
    <div className="page-top-tight min-h-screen bg-[#0a0f1d] text-white pb-16 md:pb-24 relative bg-doodle">
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16 space-y-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Our Lubricant <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">Catalog</span>
          </h1>
          <p className="text-gray-300 text-sm sm:text-lg">
            NitroLube provides advanced, certified lubricants for automotive, industrial, and agricultural needs. Browse our range below.
          </p>
        </div>

        {/* Search Input */}
        <div className="max-w-xl mx-auto mb-10 md:mb-16">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search categories..."
              className="w-full px-4 py-3 pl-10 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500 backdrop-blur-md transition-all text-xs sm:text-sm"
            />
            <svg
              className="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Categories Grid */}
        {filteredCategories.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredCategories.map((category) => (
              <div
                key={category.id}
                className="bg-gradient-to-b from-white/5 to-[#0d1324] border border-white/10 rounded-3xl overflow-hidden hover:border-blue-500/30 transition-all duration-300 flex flex-col h-full group text-left"
              >
                {/* 3D Category Image */}
                <div className="relative h-40 sm:h-64 bg-[#070b14] overflow-hidden flex items-center justify-center p-2 sm:p-4">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.1)_0%,_transparent_75%)] pointer-events-none" />
                  <TransparentProductImage
                    src={category.image}
                    alt={category.title}
                    className="object-contain w-full h-full p-2 sm:p-4 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute top-2 right-2 sm:top-4 sm:right-4 px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-400 text-[9px] sm:text-xs font-semibold">
                    {category.items.length} Item{category.items.length !== 1 ? 's' : ''}
                  </div>
                </div>

                {/* Info and links */}
                <div className="p-4 sm:p-6 flex flex-col flex-grow">
                  <h2 className="text-sm sm:text-2xl font-extrabold text-white mb-1.5 sm:mb-2 group-hover:text-blue-400 transition-colors">
                    {category.title}
                  </h2>
                  <p className="text-gray-400 text-[10px] sm:text-sm mb-4 sm:mb-6 leading-relaxed line-clamp-3 sm:line-clamp-none flex-grow">
                    {category.description}
                  </p>

                  <div className="border-t border-white/5 pt-3 sm:pt-4 mb-4 sm:mb-6 hidden sm:block">
                    <h3 className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest mb-3">Key Formulations</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {category.highlights.map((hl, index) => (
                        <span
                          key={index}
                          className="px-2.5 py-1 bg-white/5 border border-white/5 text-gray-300 text-[10px] rounded-md font-semibold"
                        >
                          {hl}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={getCategoryRoute(category.title)}
                    className="w-full py-2 sm:py-3 bg-white/5 group-hover:bg-blue-600 border border-white/10 group-hover:border-transparent text-white font-bold text-xs sm:text-sm rounded-xl text-center transition-all duration-300 flex items-center justify-center gap-1.5"
                  >
                    Explore Category
                    <svg className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white/5 border border-white/10 rounded-3xl p-16 text-center">
            <h3 className="text-2xl font-extrabold mb-2">No Categories Found</h3>
            <p className="text-gray-400">Try adjusting your search criteria.</p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-6 px-6 py-2.5 bg-blue-600 hover:bg-blue-500 rounded-xl text-sm font-bold transition-all"
            >
              Reset Search
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0a0f1d] text-white flex items-center justify-center">Loading Products...</div>}>
      <ProductsCatalogContent />
    </Suspense>
  )
}
