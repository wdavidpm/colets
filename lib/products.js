export const products = [
  {
    id: 1,
    name: 'ESTAMOS VIVOS',
    price: 99990,
    category: 'FitBoxy',
    image: '/fitboxy.jpg',
    description: 'Algodón AcidWash 280gsm. Corte FitBoxy. Cuello Rib, Estamapados DTF de alta calidad.',
  },
  {
    id: 2,
    name: 'Suerte & Muerte',
    price: 109990,
    category: 'Oversize',
    image: '/oversize.jpg',
    description: 'Algodon pesado de 310gsm. Corte Oversize. Cuello Rib. Logo bordado. Estampado DTF de alta calidad.',
  },
  {
    id: 3,
    name: 'Caribbean',
    price: 94990,
    category: 'Polo-Boxy',
    image: '/polo.jpeg',
    description: 'Algodon 270gsm. Corte BoxyFit. Cuello Rib. Logo bordado. Estampado DTF de alta calidad.',
  },
  {
    id: 4,
    name: 'Llavero',
    price: 15000,
    category: 'Accesorios',
    image: '/llavero.png',
    description: 'Llavero impreso en D3.',
  },
  /*{
    id: 5,
    name: 'Jacket Barrio',
    price: 285000,
    category: 'Chaquetas',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80',
    description: 'Shell nylon. Forro interior. Bolsillos laterales con parche.',
  },
   {
    id: 6,
    name: 'Tee Session 01',
    price: 90000,
    category: 'Camisetas',
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&q=80',
    description: 'Edición limitada. Serigrafía frontal. Algodón pima.',
  },
  {
    id: 7,
    name: 'Shorts Costeño',
    price: 110000,
    category: 'Pantalones',
    image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&q=80',
    description: 'Longitud midi. Bolsillos laterales. Cordón ajustable.',
  },
  {
    id: 8,
    name: 'Bag Coletera',
    price: 120000,
    category: 'Accesorios',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80',
    description: 'Lona 12oz. Cremallera YKK. Correa ajustable.',
  }, */
]

export const formatPrice = (price) =>
  new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
  }).format(price)
