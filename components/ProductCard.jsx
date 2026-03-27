'use client'

import Image from 'next/image'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/products'
import { useState } from 'react'

export default function ProductCard({ product }) {
  const { dispatch } = useCart()
  const [added, setAdded] = useState(false)

  function handleAdd() {
    dispatch({ type: 'ADD_ITEM', item: product })
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <div className="group flex flex-col">
      {/* Image */}
      <div className="relative aspect-[3/4] bg-colets-beige overflow-hidden mb-4">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, 33vw"
        />
        {/* Category tag */}
        <span className="absolute top-3 left-3 text-[9px] tracking-widest uppercase bg-colets-white/90 text-colets-black px-2 py-1">
          {product.category}
        </span>
      </div>

      {/* Info */}
      <div className="flex flex-col gap-2 flex-1">
        <h3 className="text-sm font-medium tracking-wide text-colets-black uppercase">
          {product.name}
        </h3>
        <p className="text-xs text-colets-gray leading-relaxed">{product.description}</p>

        <div className="flex items-center justify-between mt-auto pt-3">
          <span className="text-sm font-medium text-colets-black">
            {formatPrice(product.price)}
          </span>

          <button
            onClick={handleAdd}
            className={`text-[10px] tracking-widest uppercase px-4 py-2 border transition-all duration-300 ${
              added
                ? 'bg-colets-black text-colets-white border-colets-black'
                : 'bg-transparent text-colets-black border-colets-black hover:bg-colets-black hover:text-colets-white'
            }`}
          >
            {added ? '✓ Agregado' : 'Agregar'}
          </button>
        </div>
      </div>
    </div>
  )
}
