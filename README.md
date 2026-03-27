# Colets — Streetwear Santamartero

Web de e-commerce para la marca **Colets**, con estética minimalista tipo Fear of God.  
Pedidos vía WhatsApp + PDF autogenerado.

---

## Stack

- **Next.js 14** (App Router)
- **Tailwind CSS**
- **React hooks + Context API** (carrito global)
- **jsPDF** (generación de PDF del pedido)

---

## Estructura del proyecto

```
colets/
├── app/
│   ├── layout.jsx          # Root layout + CartProvider + Navbar
│   ├── globals.css         # Estilos globales + variables
│   ├── page.jsx            # Home (Hero, Manifiesto, Featured)
│   ├── historia/
│   │   └── page.jsx        # Storytelling cultura costeña
│   ├── drops/
│   │   └── page.jsx        # Grilla de productos con filtros
│   ├── carrito/
│   │   └── page.jsx        # Carrito: ver, editar, eliminar
│   └── checkout/
│       └── page.jsx        # Formulario + WhatsApp + PDF
├── components/
│   ├── Navbar.jsx          # Navegación responsive
│   └── ProductCard.jsx     # Tarjeta de producto con "Agregar"
├── context/
│   └── CartContext.jsx     # Estado global del carrito (useReducer)
└── lib/
    ├── products.js         # Datos de productos mock + formatPrice
    └── order.js            # generateOrderId, buildWhatsAppMessage, generatePDF
```

---

## Cómo correr el proyecto

### 1. Instalar dependencias

```bash
cd colets
npm install
```

### 2. Correr en desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### 3. Build para producción

```bash
npm run build
npm start
```

---

## Configuración necesaria antes de lanzar

### Número de WhatsApp

En `lib/order.js`, línea con `const phone`:

```js
// Cambia por el número real de Colets (sin + ni espacios):
const phone = '573001234567'
//              57 = código Colombia
//              300 1234567 = número local
```

### Imágenes de productos

En `lib/products.js`, reemplaza los `image:` de Unsplash por las imágenes reales de los productos:

```js
image: '/productos/tee-coletera-v1.jpg', // en /public/productos/
```

---

## Flujo de pedido

```
Drops → Agregar al carrito
      → Carrito (ver/editar/eliminar)
      → Checkout (nombre, ciudad, dirección, teléfono)
      → Click "Finalizar pedido"
           ├── Genera PDF con jsPDF (descarga automática)
           └── Redirige a WhatsApp con mensaje pre-armado:
               🖤 NUEVO PEDIDO — COLETS-XXXX
               CLIENTE: ...
               PRODUCTOS: ...
               TOTAL: ...
```

---

## Paleta de colores

| Variable Tailwind       | Hex       | Uso               |
|------------------------|-----------|-------------------|
| `colets-black`         | `#0A0A0A` | Texto, botones    |
| `colets-white`         | `#F8F6F1` | Fondo principal   |
| `colets-beige`         | `#E8E0D0` | Fondos secundarios|
| `colets-olive`         | `#4A4A38` | Sección Sessions  |
| `colets-gray`          | `#8A8A8A` | Texto secundario  |

---

## Deploy recomendado

El proyecto está listo para desplegarse en **Vercel** con cero configuración:

```bash
npx vercel
```

---

Hecho con 🖤 para Santa Marta.  
*Representando la real coletera.*
