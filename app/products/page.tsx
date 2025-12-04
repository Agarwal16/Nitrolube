import { parseExcelFile } from '@/lib/excelParser'
import ProductsClient from '@/components/ProductsClient'
import { Suspense } from 'react'

export default function ProductsPage() {
  const allProducts = parseExcelFile()

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-white via-blue-50 to-primary-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Products
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Explore our complete range of premium lubricants
          </p>
        </div>
      </section>

      {/* Search and Products Section */}
      <Suspense fallback={<div className="py-12 text-center">Loading products...</div>}>
        <ProductsClient products={allProducts} />
      </Suspense>
    </div>
  )
}

