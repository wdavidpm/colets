export default function Footer() {
  return (
    <footer className="border-t border-colets-beige py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        <span className="font-bold tracking-ultra text-sm uppercase">
          Colets
        </span>

        <a
          href="https://www.instagram.com/coletsvibes"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs tracking-widest uppercase text-colets-gray hover:text-colets-black transition-colors"
        >
          @coletsvibes
        </a>

        <span className="text-[10px] tracking-widest uppercase text-colets-gray">
          Representando la real coletera
        </span>

      </div>
    </footer>
  )
}