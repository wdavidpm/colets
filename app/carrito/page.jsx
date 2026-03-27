'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/products'

export default function Carrito() {
  const { items, total, count, dispatch } = useCart()

  function updateQty(id, qty) {
    if (qty < 1) {
      dispatch({ type: 'REMOVE_ITEM', id })
    } else {
      dispatch({ type: 'UPDATE_QTY', id, qty })
    }
  }

  function remove(id) {
    dispatch({ type: 'REMOVE_ITEM', id })
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-24 px-6 border-b border-colets-beige">
        <div className="max-w-3xl mx-auto">
          <p className="section-label">Carrito</p>
          <h1 className="font-sans font-bold text-4xl md:text-5xl uppercase tracking-tight">
            Tu selección
          </h1>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-16">
        {items.length === 0 ? (
          /* Empty state */
          <div className="py-24 text-center">
            <p className="font-serif text-2xl italic text-colets-gray mb-8">
              Nada por aquí todavía.
            </p>
            <Link href="/drops" className="btn-primary">
              Explorar Drops
            </Link>
          </div>
        ) : (
          <div className="space-y-0">
            {/* Items */}
            {items.map((item) => (
              <div
                key={item.id}
                className="flex gap-5 py-8 border-b border-colets-beige last:border-0"
              >
                {/* Image */}
                <div className="relative w-24 h-32 bg-colets-beige overflow-hidden flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium uppercase tracking-wide">{item.name}</p>
                      <p className="text-xs text-colets-gray mt-1">{item.category}</p>
                    </div>
                    <button
                      onClick={() => remove(item.id)}
                      className="text-colets-gray hover:text-colets-black transition-colors text-xs tracking-widest uppercase"
                      aria-label="Eliminar"
                    >
                      ×
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    {/* Qty controls */}
                    <div className="flex items-center gap-3 border border-colets-beige">
                      <button
                        onClick={() => updateQty(item.id, item.qty - 1)}
                        className="w-8 h-8 flex items-center justify-center text-colets-gray hover:text-colets-black hover:bg-colets-beige/50 transition-colors text-base"
                      >
                        −
                      </button>
                      <span className="text-sm w-4 text-center">{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.id, item.qty + 1)}
                        className="w-8 h-8 flex items-center justify-center text-colets-gray hover:text-colets-black hover:bg-colets-beige/50 transition-colors text-base"
                      >
                        +
                      </button>
                    </div>

                    <p className="text-sm font-medium">
                      {formatPrice(item.price * item.qty)}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Summary */}
            <div className="pt-10 space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-colets-beige">
                <span className="text-xs tracking-widest uppercase text-colets-gray">
                  Subtotal ({count} {count === 1 ? 'pieza' : 'piezas'})
                </span>
                <span className="text-sm font-medium">{formatPrice(total)}</span>
              </div>

              <div className="flex justify-between items-center pb-6 border-b border-colets-black">
                <span className="text-xs tracking-widest uppercase">Total</span>
                <span className="text-lg font-bold">{formatPrice(total)}</span>
              </div>

              <p className="text-[10px] tracking-wide text-colets-gray text-center py-2">
                Pago contra entrega — Envío a todo Colombia
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Link href="/drops" className="btn-outline text-center flex-1">
                  Seguir comprando
                </Link>
                <Link href="/checkout" className="btn-primary text-center flex-1">
                  Finalizar pedido
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
     </div>
  )
}
