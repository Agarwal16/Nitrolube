'use client'

import { useState } from 'react'
import Image from 'next/image'
import { products } from '@/data/products'

const coolantImages = [
  "/coolant1.png",
  "/coolant2.png",
];

export default function CoolantPage() {
  const categoryProducts = products.coolant || []

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Coolant</h1>
        
        {categoryProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No products available in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categoryProducts.map((product, index) => {
              const ProductCard = () => {
                const smallestSize = product.sizes[0];
                const [selectedSize, setSelectedSize] = useState(smallestSize.size);
                const selectedSizeData = product.sizes.find(s => s.size === selectedSize) || smallestSize;

                return (
                  <div className="bg-white rounded-xl shadow-md p-3 flex flex-col">
                    <div className="relative w-full h-32 bg-gray-100 rounded-lg overflow-hidden mb-3">
                      <Image
                        src={coolantImages[index % coolantImages.length]}
                        alt={product.name || "Coolant"}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-contain"
                      />
                    </div>
                    <h3 className="font-semibold text-lg mt-3 text-gray-900">
                      {product.name || "Coolant"}
                    </h3>
                    {product.usage && (
                      <p className="text-sm text-gray-600 mt-1">
                        {product.usage}
                      </p>
                    )}
                    <p className="text-sm text-gray-600 mt-1">
                      {selectedSize}
                    </p>
                    {selectedSizeData.mrp && (
                      <p className="text-sm text-gray-600 mt-1">MRP: ₹{selectedSizeData.mrp}</p>
                    )}
                    <div className="flex items-center gap-2 mt-2">
                      <p className="text-sm text-gray-600 font-medium">Pack sizes</p>
                      <select
                        value={selectedSize}
                        onChange={(e) => setSelectedSize(e.target.value)}
                        className="text-xs border border-gray-300 rounded px-1.5 py-0.5 bg-white"
                      >
                        {product.sizes.map((size) => (
                          <option key={size.size} value={size.size}>
                            {size.size}
                          </option>
                        ))}
                      </select>
                    </div>
                    <a
                      href="mailto:info@nitrolube.co.in"
                      className="mt-auto bg-[#0055AD] text-white py-2 px-4 rounded-2xl hover:bg-[#004a99] transition-colors duration-200 mt-8 text-center"
                    >
                      Get quote
                    </a>
                  </div>
                );
              };
              return <ProductCard key={`${product.name}-${index}`} />;
            })}
          </div>
        )}
      </div>
    </div>
  )
}



