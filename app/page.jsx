import Link from 'next/link'
import Image from 'next/image'
import { formatPrice } from '@/lib/products'

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-colets-black">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/portada20.jpeg"
            alt="Colets Hero"
            fill
            className="object-cover opacity-40"
            priority
          />
          {/* Grain overlay */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <p className="animate-fade-up section-label text-colets-light/60 mb-6">
            Santa Marta — Colombia — Est. 2024
          </p>

          <h1 className="animate-fade-up-delay-1 font-serif text-5xl md:text-7xl lg:text-8xl text-colets-white leading-[0.95] mb-8 italic">
            Representando
            <br />
            <span className="not-italic font-bold tracking-tight">la real coletera</span>
          </h1>

          <p className="animate-fade-up-delay-2 text-colets-light/70 text-sm tracking-wide max-w-md mx-auto mb-12">
            Prendas construidas desde el barrio, para quienes viven la cultura sin pedirle permiso a nadie.
          </p>

          <div className="animate-fade-up-delay-3">
            <Link href="/drops" className="btn-primary">
              Ver Drop
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-[9px] tracking-widest uppercase text-colets-white">Scroll</span>
          <div className="w-px h-12 bg-colets-white/50 animate-pulse" />
        </div>
      </section>

      {/* ── MANIFESTO ── */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div>
            <p className="section-label">Manifiesto</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight italic text-colets-black mb-8">
              No es ropa.<br />Es actitud.
            </h2>
            <p className="text-colets-gray text-sm leading-relaxed mb-6">
             Colets nace en las calles de Santa Marta, donde el calor no solo es del sol,
             sino del barrio, de la música y de la gente.
            </p>
            <p className="text-colets-gray text-sm leading-relaxed mb-10">
              Cada pieza lleva la historia de quien la usa. Sin pretensiones,
              sin marcas gringas que no te conocen. Esto es nuestro.
            </p>
            <Link href="/historia" className="btn-outline">
              Nuestra Historia
            </Link>
          </div>

          <div className="relative aspect-square bg-colets-beige overflow-hidden">
            <Image
              src="/foto1.jpg"
              alt="Colets culture"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── FEATURED DROPS ── */}
      <section className="py-20 px-6 bg-colets-beige/40">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="section-label">Drop 07</p>
              <h2 className="font-sans font-bold text-3xl md:text-4xl tracking-tight uppercase">
                Caribbean Motion
              </h2>
            </div>
            <Link href="/drops" className="text-xs tracking-widest uppercase text-colets-gray hover:text-colets-black transition-colors hidden md:block">
              Ver todo →
            </Link>
          </div>

<div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
  {[
    {
      name: 'ESTAMOS VIVOS',
      price: 99990,
      image: '/fitboxy.jpg',
    },
    {
      name: 'Suerte & Muerte',
      price: 109990,
      image: '/oversize.jpg',
    },
    {
      name: 'Caribbean',
      price: 94990,
      image: '/polo.jpeg',
    },
  ].map((item) => (
    <div key={item.name} className="group">
      <div className="relative aspect-[3/4] bg-colets-beige overflow-hidden mb-3">
        <Image
          src={item.image} // 🔥 AQUÍ EL FIX
          alt={item.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <p className="text-xs font-medium uppercase tracking-wide">{item.name}</p>
      <p className="text-xs text-colets-gray mt-1">{formatPrice(item.price)}</p>    </div>
  ))}
</div>

          <div className="text-center mt-14 md:hidden">
            <Link href="/drops" className="btn-outline">
              Ver todos los productos
            </Link>
          </div>
        </div>
      </section>

{/* ── COLETS SESSION ── */}
<section className="py-40 px-6 bg-colets-black text-colets-white text-center">
  <div className="max-w-3xl mx-auto">

    {/* Logo */}
    <div className="mb-12 flex flex-col items-center">
      <img
        src="/logosinfondo.png" // ← pon tu logo aquí en /public
        alt="Colets Session"
        className="w-32 md:w-40 object-contain mb-6"
      />

      <h2 className="font-serif text-4xl md:text-6xl italic">
        Colets Session
      </h2>

      <a
        href="https://www.youtube.com/@coletsvibes/videos"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 text-xs tracking-[0.3em] uppercase text-colets-white/50 hover:text-colets-white transition"
      >
        Ver canal de YouTube →
      </a>
    </div>

    {/* Divider */}
    <div className="border-t border-colets-white/10 my-16"></div>

    {/* Próxima sesión */}
    <div className="space-y-4">
      <p className="text-[10px] tracking-[0.3em] uppercase text-colets-white/30">
        Próxima sesión
      </p>

      <h3 className="text-3xl md:text-4xl font-bold uppercase">
        17 de Abril
      </h3>

      <p className="text-colets-white/50 text-sm">
        Feeling Sede U — Santa Marta, Colombia
      </p>
    </div>

  </div>
</section>

      {/* ── FOOTER ── */}

    </>
  )
}
