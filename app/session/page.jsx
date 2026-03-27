import Link from 'next/link'

export const metadata = {
  title: 'Colets Session — Canal de YouTube',
  description: 'Espacios donde los DJs toman el control. Música, cultura costeña, identidad sin filtro.',
}

export default function Session() {
  return (
    <div className="min-h-screen">

      {/* Header */}
      <section className="py-28 px-6 bg-colets-black text-colets-white">
        <div className="max-w-5xl mx-auto">
          <p className="section-label text-colets-white/40">Cultura / Música</p>
          <h1 className="font-serif text-5xl md:text-7xl italic leading-[0.95]">
            Colets<br />
            <span className="not-italic font-bold">Session</span>
          </h1>
        </div>
      </section>

      {/* Descripción */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="section-label">¿Qué es?</p>
            <h2 className="font-serif text-3xl md:text-4xl italic mb-8 leading-tight">
              Espacios donde la música<br />habla por sí sola
            </h2>
            <div className="space-y-5 text-colets-gray text-sm leading-[1.9]">
              <p>
                Las Colets Sessions son encuentros reales donde los DJs toman el control
                y la gente se entrega al momento. Sin guión, sin protocolo —
                solo buen sonido y la vibra de quienes entienden que la música es lo que nos une.
              </p>
              <p>
                Cada sesión queda grabada y subida a nuestro canal de YouTube
                para que la revivas cuando quieras, donde quieras.
              </p>
              <p>
                Desde Santa Marta para el mundo. Cultura costeña, identidad sin filtro.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <p className="section-label">Canal</p>
            <p className="text-colets-gray text-sm leading-relaxed">
              Todas las sesiones están disponibles en nuestro canal de YouTube.
              Síguenos para no perderte los próximos drops de contenido.
            </p>

            {/* 🔥 ARREGLADO */}
            <a
              href="https://www.youtube.com/@coletsvibes/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Ver canal de YouTube {'→'}
            </a>
          </div>
        </div>
      </section>

      {/* Próxima sesión */}
      <section className="py-20 px-6 bg-colets-beige/30">
        <div className="max-w-5xl mx-auto">
          <p className="section-label">Próximo evento</p>
          <div className="border border-colets-black p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h3 className="font-sans font-bold text-3xl md:text-4xl uppercase tracking-tight mb-2">
                17 de Abril
              </h3>
              <p className="text-colets-gray text-sm tracking-wide">
                Feeling Sede U — Santa Marta, Colombia
              </p>
            </div>

            {/* 🔥 ARREGLADO */}
            <a
              href="https://www.youtube.com/@coletsvibes/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline whitespace-nowrap"
            >
              Ver sesiones anteriores {'→'}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
     

    </div>
  )
}