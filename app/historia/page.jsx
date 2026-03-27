import Image from 'next/image'

export const metadata = {
  title: 'Historia — Colets',
  description: 'La historia de Colets: cultura costeña, Santa Marta, barrios y música.',
}

export default function Historia() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-28 px-6 bg-colets-beige/30">
        <div className="max-w-3xl mx-auto">
          <p className="section-label">Nuestra Historia</p>
          <h1 className="font-serif text-5xl md:text-7xl italic leading-[0.95] text-colets-black">
            De las calles<br />
            <span className="not-italic font-bold">al mundo</span>
          </h1>
        </div>
      </section>

      {/* Chapter 1 */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="section-label">01 — El Origen</p>

          <div className="grid md:grid-cols-5 gap-12 items-start">
            <div className="md:col-span-3 space-y-6 text-colets-gray text-sm leading-[1.9]">
          <p>
            Todo empezó a las 3 de la mañana, saliendo de una discoteca.
            Entre música, calor y esa sensación de que algo tenía que pasar,
            nació la idea: montar una marca de ropa.
          </p>

          <p>
            Crecimos en Santa Marta, entre barrio, atardeceres y el sonido constante
            de la champeta, el reggaetón y el vallenato marcando el ritmo de cada día.
            Ahí entendimos que lo nuestro no solo se vive, también se representa.
          </p>

          <p>
            Colets nace de esa cultura.
            De una generación que mezcla música, lenguaje y actitud sin pedir permiso.
            Esto no es solo ropa, es identidad.
            Es representar la real coletera.
          </p>
            </div>

            <div className="md:col-span-2">
              <div className="relative aspect-[3/4] bg-colets-beige overflow-hidden">
                <Image
                  src="/foto2.jpg"
                  alt="Santa Marta calles"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-[10px] tracking-widest uppercase text-colets-gray mt-3">
                Caribbean Team, Santa Marta — 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width image break */}
      <section className="py-9 px-6">
        <div className="max-w-7xl mx-auto relative aspect-[21/9] bg-colets-beige overflow-hidden">
          <Image
            src="/portada.jpeg"
            alt="Costa Caribe"
            fill
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-colets-black/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <blockquote className="text-colets-white font-serif text-2xl md:text-4xl italic text-center px-6 max-w-2xl leading-tight">
              "La Costa no es un lugar. Es una forma de ser."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Chapter 2 */}
      <section className="py-24 px-6 bg-colets-beige/20">
        <div className="max-w-3xl mx-auto">
          <p className="section-label">02 — La Música, Los Barrios</p>

          <h2 className="font-serif text-3xl md:text-4xl italic mb-12 leading-tight">
            Cada punta de Santa Marta<br />tiene su propio beat
          </h2>

          <div className="space-y-6 text-colets-gray text-sm leading-[1.9]">
            <p>
             Santa Marta tiene muchos ritmos.
             Desde Pescaíto hasta Gaira, pasando por Minca,
             cada lugar suena distinto, pero todo conecta.
            </p>

           <p>
             Crecimos entre champeta, reggaetón y vallenato.
             Sin reglas, sin etiquetas.
             Todo mezclado, todo sonando al mismo tiempo.
             Así es el barrio.
            </p>

           <p> 
             Colets nace de esa mezcla.
             De lo que escuchamos, de cómo hablamos,
             de la forma en que vivimos.
             Esto no es tendencia.
             Es lo que somos.
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 3 - two column */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square bg-colets-beige overflow-hidden order-2 md:order-1">
              <Image
                src="/foto33.jpeg"
                alt="Coletera cultura"
                fill
                className="object-cover grayscale"
              />
            </div>

            <div className="order-1 md:order-2">
              <p className="section-label">03 — La Coletera</p>
              <h2 className="font-serif text-3xl md:text-4xl italic mb-8 leading-tight">
                Vibes<br />
              </h2>
              <div className="space-y-5 text-colets-gray text-sm leading-[1.9]">
<p>
  Coleto o coleta es quien tiene flow.
  Quien se la vacila sin forzar nada,
  sin necesidad de aparentar.
</p>

<p>
  Coletera es otra cosa.
  Es cuando todo conecta.
  Cuando la vibra se siente igual para todos,
  sin tener que explicarlo.
</p>

<p>
  Colets nace de ahí.
  De esa energía, de esa forma de ser.
  No es algo que se inventa,
  es algo que ya existe.
</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 4 */}
      <section className="py-24 px-6 bg-colets-black text-colets-white">
        <div className="max-w-3xl mx-auto">
          <p className="section-label text-colets-white/40">04 — El Futuro</p>
          <h2 className="font-serif text-3xl md:text-5xl italic mb-12 leading-tight text-colets-white">
            Esto apenas comienza
          </h2>
          <div className="space-y-6 text-colets-white/60 text-sm leading-[1.9]">
            <p>
              Colets no es una marca de temporada. No tenemos colecciones que caducan ni drops diseñados
              para olvidarse. Cada pieza que sacamos está pensada para durar —en el guardarropa y en la memoria.
            </p>
            <p>
              El plan siempre fue construir despacio: primero el barrio, después la ciudad, después el país.
              No queremos ser la marca que todo el mundo conoce de oídas. Queremos ser la que la gente usa
              cuando quiere decir algo sin decir nada.
            </p>
            <p>
              Las Colets Sessions son el próximo paso: un espacio físico y digital donde la música, el arte
              callejero y la moda costeña conviven. Grabaciones en barrios, collabs con artistas locales,
              contenido que no pide permiso.
            </p>
            <p className="text-colets-white font-medium">
              Si llegaste hasta acá, ya eres parte de esto.
            </p>
          </div>
        </div>
      </section>

      {/* Footer simple */}
      
    </div>
  )
}
