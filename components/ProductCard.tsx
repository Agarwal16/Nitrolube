import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/lib/excelParser'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">
      {/* Product Image */}
      <div className="relative h-48 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
        <Image
          src={product.image || '/product1.jpg'}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Info */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
            {product.name}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Specifications */}
        {product.specifications && product.specifications.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {product.specifications.slice(0, 2).map((spec, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-50 text-primary-600 text-xs font-medium rounded-full"
              >
                {spec}
              </span>
            ))}
          </div>
        )}

        {/* View Product Button */}
        <Link
          href={`/products#${product.id}`}
          className="block w-full py-3 px-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold text-sm rounded-lg text-center hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
        >
          View Product
        </Link>
      </div>
    </div>
  )
}








