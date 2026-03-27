import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google'
import './globals.css'
import { CartProvider } from '@/context/CartContext'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })
const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  style: ['normal', 'italic'],
})

export const metadata = {
  title: 'COLETS',
  description: 'Representando la real coletera. Santa Marta, Colombia.',
  openGraph: {
    title: 'Colets',
    description: 'Representando la real coletera.',
  },
  title: 'Colets',
  description: 'Representando la real coletera. Santa Marta, Colombia.',
  icons: {
  icon: '/palmera1.png',  
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable}`}>
      <body className="bg-colets-white text-colets-black antialiased">
        <CartProvider>
          <Navbar />
          <main className="pt-16">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
