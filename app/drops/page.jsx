'use client'

import { useState } from 'react'
import { products } from '@/lib/products'
import ProductCard from '@/components/ProductCard'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'

const categories = ['Todos', 'FitBoxy', 'Polo-BoxyFit', 'Oversize', 'Accesorios']

export default function Drops() {
  const [activeCategory, setActiveCategory] = useState('Todos')
  const { count } = useCart()

  const filtered =
    activeCategory === 'Todos'
      ? products
      : products.filter((p) => p.category === activeCategory)

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-24 px-6 border-b border-colets-beige">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="section-label">Drop 07 — 2026</p>
            <h1 className="font-sans font-bold text-4xl md:text-6xl uppercase tracking-tight">
              Caribbean Motion 
            </h1>
          </div>
          <div className="flex flex-col items-start md:items-end gap-2">
            <p className="text-xs text-colets-gray tracking-wide">
              {products.length} piezas disponibles
            </p>
            {count > 0 && (
              <Link href="/carrito" className="btn-primary text-center">
                Ver carrito ({count})
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="px-6 py-6 border-b border-colets-beige sticky top-16 bg-colets-white/95 backdrop-blur-sm z-30">
        <div className="max-w-7xl mx-auto flex gap-6 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[10px] tracking-widest uppercase whitespace-nowrap pb-1 transition-colors duration-200 ${
                activeCategory === cat
                  ? 'text-colets-black border-b border-colets-black'
                  : 'text-colets-gray hover:text-colets-black'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Products grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-14">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-32 text-center">
              <p className="text-colets-gray text-sm tracking-wide">
                No hay productos en esta categoría por ahora.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Colets Session anchor */}
      <section id="session" className="py-32 px-6 bg-colets-olive">
        <div className="max-w-3xl mx-auto text-center">
          <p className="section-label text-colets-white/50">Evento</p>
          <h2 className="font-serif text-4xl md:text-6xl italic text-colets-white mb-6 leading-tight">
            Colets Session
          </h2>
          <p className="text-colets-white/60 text-sm leading-relaxed max-w-md mx-auto mb-10">
            Música, moda y cultura costeña en un solo espacio.
            Próxima sesión: 17 de abril, Feeling Sede U Santa Marta, 2026.
          </p>
          <span className="text-[10px] tracking-ultra uppercase text-colets-white/30 border border-colets-white/20 px-6 py-2">
            Próximamente
          </span>
        </div>
      </section>

      {/* Footer */}
      
    </div>
  )
}
