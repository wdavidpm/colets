'use client'

import Link from 'next/link'
import { useCart } from '@/context/CartContext'
import { useState } from 'react'

export default function Navbar() {
  const { count } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-colets-white/95 backdrop-blur-sm border-b border-colets-beige">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-colets-black font-bold text-lg tracking-ultra uppercase"
        >
          Colets
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {[
            { label: 'Drops', href: '/drops' },
            { label: 'Historia', href: '/historia' },
            { label: 'Colets Session', href: '/session' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs tracking-widest uppercase text-colets-gray hover:text-colets-black transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Cart + Mobile toggle */}
        <div className="flex items-center gap-5">
          <Link href="/carrito" className="relative group">
            <span className="text-xs tracking-widest uppercase text-colets-gray group-hover:text-colets-black transition-colors">
              Carrito
            </span>
            {count > 0 && (
              <span className="absolute -top-2 -right-4 w-4 h-4 bg-colets-black text-colets-white text-[9px] rounded-full flex items-center justify-center font-bold">
                {count}
              </span>
            )}
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className={`block w-5 h-px bg-colets-black transition-transform duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-px bg-colets-black transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-px bg-colets-black transition-transform duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-colets-beige bg-colets-white">
          {[
            { label: 'Drops', href: '/drops' },
            { label: 'Historia', href: '/historia' },
            { label: 'Colets Session', href: '/drops#session' },
            { label: 'Carrito', href: '/carrito' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-4 text-xs tracking-widest uppercase text-colets-gray hover:text-colets-black hover:bg-colets-beige/30 transition-colors border-b border-colets-beige last:border-0"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
