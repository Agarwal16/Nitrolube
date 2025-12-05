import Image from 'next/image'
import { products } from '@/data/products'

export default function HydraulicOilPage() {
  const categoryProducts = products.hydOil || []

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Hydraulic Oil</h1>
        
        {categoryProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No products available in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categoryProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-md p-3 flex flex-col">
                <div className="relative w-full h-32 bg-gray-100 rounded-lg overflow-hidden mb-3">
                  <Image
                    src="/Engineoil05w30.png"
                    alt="Hydraulic Oil"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-semibold text-lg mt-3 text-gray-900">Hydraulic Oil</h3>
                {product.grade && (
                  <p className="text-sm text-gray-600 mt-1">Grade: {product.grade}</p>
                )}
                <p className="text-sm text-gray-600 mt-1">Quantity: {product.quantity}</p>
                <p className="text-sm text-gray-600 mt-1">MRP: ₹{product.mrp}</p>
                <button className="mt-auto bg-[#0055AD] text-white py-2 px-4 rounded-2xl hover:bg-[#004a99] transition-colors duration-200 mt-6">
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

