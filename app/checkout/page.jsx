'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/products'
import { generateOrderId, buildWhatsAppMessage, getWhatsAppURL, generatePDF } from '@/lib/order'

export default function Checkout() {
  const { items, total, dispatch } = useCart()
  const [form, setForm] = useState({
    nombre: '',
    ciudad: '',
    direccion: '',
    telefono: '',
  })
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  function validate() {
    const errs = {}
    if (!form.nombre.trim()) errs.nombre = 'Ingresa tu nombre'
    if (!form.ciudad.trim()) errs.ciudad = 'Ingresa tu ciudad'
    if (!form.direccion.trim()) errs.direccion = 'Ingresa tu dirección'
    if (!form.telefono.trim()) errs.telefono = 'Ingresa tu teléfono'
    else if (!/^\d{7,12}$/.test(form.telefono.replace(/\s/g, '')))
      errs.telefono = 'Número inválido'
    return errs
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }
    if (items.length === 0) return

    setLoading(true)
    const orderId = generateOrderId()

    // Generate PDF
/*    try {
      await generatePDF({ orderId, items, total, customer: form })
    } catch (err) {
      console.error('PDF error:', err)
    }*/

    // Build WhatsApp URL
    const message = buildWhatsAppMessage({ orderId, items, total, customer: form })
    const url = getWhatsAppURL(message)

    // Clear cart
    dispatch({ type: 'CLEAR' })

    // Redirect to WhatsApp
    window.open(url, '_blank')
    setLoading(false)
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <p className="font-serif text-2xl italic text-colets-gray mb-8">
            Tu carrito está vacío.
          </p>
          <Link href="/drops" className="btn-primary">
            Explorar Drops
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-24 px-6 border-b border-colets-beige">
        <div className="max-w-4xl mx-auto">
          <p className="section-label">Checkout</p>
          <h1 className="font-sans font-bold text-4xl md:text-5xl uppercase tracking-tight">
            Finalizar pedido
          </h1>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-5 gap-16">
          {/* Form */}
          <div className="md:col-span-3">
            <p className="section-label mb-8">01 — Datos de envío</p>

            <form onSubmit={handleSubmit} className="space-y-8" noValidate>
              {/* Nombre */}
              <div>
                <label className="block text-[10px] tracking-widest uppercase text-colets-gray mb-3">
                  Nombre completo
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  className="input-field"
                  autoComplete="name"
                />
                {errors.nombre && (
                  <p className="text-[10px] text-red-500 mt-2">{errors.nombre}</p>
                )}
              </div>

              {/* Ciudad */}
              <div>
                <label className="block text-[10px] tracking-widest uppercase text-colets-gray mb-3">
                  Ciudad
                </label>
                <input
                  type="text"
                  name="ciudad"
                  value={form.ciudad}
                  onChange={handleChange}
                  placeholder="Santa Marta, Barranquilla, Bogotá..."
                  className="input-field"
                  autoComplete="address-level2"
                />
                {errors.ciudad && (
                  <p className="text-[10px] text-red-500 mt-2">{errors.ciudad}</p>
                )}
              </div>

              {/* Dirección */}
              <div>
                <label className="block text-[10px] tracking-widest uppercase text-colets-gray mb-3">
                  Dirección
                </label>
                <input
                  type="text"
                  name="direccion"
                  value={form.direccion}
                  onChange={handleChange}
                  placeholder="Calle, carrera, barrio"
                  className="input-field"
                  autoComplete="street-address"
                />
                {errors.direccion && (
                  <p className="text-[10px] text-red-500 mt-2">{errors.direccion}</p>
                )}
              </div>

              {/* Teléfono */}
              <div>
                <label className="block text-[10px] tracking-widest uppercase text-colets-gray mb-3">
                  Teléfono / WhatsApp
                </label>
                <input
                  type="tel"
                  name="telefono"
                  value={form.telefono}
                  onChange={handleChange}
                  placeholder="300000000"
                  className="input-field"
                  autoComplete="tel"
                />
                {errors.telefono && (
                  <p className="text-[10px] text-red-500 mt-2">{errors.telefono}</p>
                )}
              </div>

              {/* Info */}
              <div className="bg-colets-beige/40 px-5 py-4 space-y-1.5">
                <p className="text-[10px] tracking-widest uppercase text-colets-gray">
                  ¿Cómo funciona?
                </p>
                <ul className="text-xs text-colets-gray space-y-1 leading-relaxed mt-2">
                  <li>1. Serás redirigido a WhatsApp con tu pedido listo</li>
                  <li>2. Confirmamos disponibilidad y coordinar el envío</li>
                  <li>3. Una vez confirmado el pago se realizara el envío</li>
                </ul>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full text-center disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? 'Generando pedido...' : 'Finalizar pedido →'}
              </button>

              <p className="text-[10px] text-center tracking-wide text-colets-gray">
                Te redirigiremos a WhatsApp
              </p>
            </form>
          </div>

          {/* Order Summary */}
          <div className="md:col-span-2">
            <p className="section-label">02 — Resumen</p>

            <div className="space-y-0">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between py-4 border-b border-colets-beige">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide">{item.name}</p>
                    <p className="text-[10px] text-colets-gray mt-0.5">Qty: {item.qty}</p>
                  </div>
                  <p className="text-xs font-medium">
                    {formatPrice(item.price * item.qty)}
                  </p>
                </div>
              ))}

              <div className="flex justify-between py-5">
                <span className="text-xs tracking-widest uppercase">Total</span>
                <span className="text-base font-bold">{formatPrice(total)}</span>
              </div>
            </div>

            <Link
              href="/carrito"
              className="text-[10px] tracking-widest uppercase text-colets-gray hover:text-colets-black transition-colors"
            >
              ← Editar carrito
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
    </div>
  )
}
