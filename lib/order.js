import { formatPrice } from './products'

export function generateOrderId() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let id = 'COLETS-'
  for (let i = 0; i < 4; i++) {
    id += chars[Math.floor(Math.random() * chars.length)]
  }
  return id
}

export function buildWhatsAppMessage({ orderId, items, total, customer }) {
  const lines = [
    `🖤 *NUEVO PEDIDO — ${orderId}*`,
    ``,
    `👤 *CLIENTE*`,
    `• Nombre: ${customer.nombre}`,
    `• Ciudad: ${customer.ciudad}`,
    `• Dirección: ${customer.direccion}`,
    `• Teléfono: ${customer.telefono}`,
    ``,
    `🛍️ *PRODUCTOS*`,
    ...items.map(
      (i) => `• ${i.name} x${i.qty} — ${formatPrice(i.price * i.qty)}`
    ),
    ``,
    `💰 *TOTAL: ${formatPrice(total)}*`,
    ``,
    `✅ Por favor confirmar disponibilidad y coordinar envío.`, 
     `💳 Enviar comprobante de pago por este medio. .`,
  ]

  return encodeURIComponent(lines.join('\n'))
}

export function getWhatsAppURL(message) {
  // Reemplaza con el número real de Colets
  const phone = '573007102294'
  return `https://wa.me/${phone}?text=${message}`
}

export async function generatePDF({ orderId, items, total, customer }) {
  const { jsPDF } = await import('jspdf')
  const doc = new jsPDF({ unit: 'mm', format: 'a4' })

  const black = [10, 10, 10]
  const gray = [120, 120, 120]
  const beige = [232, 224, 208]

  // Header background
  doc.setFillColor(...beige)
  doc.rect(0, 0, 210, 45, 'F')

  // Brand
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(28)
  doc.setTextColor(...black)
  doc.text('COLETS', 20, 22)

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(8)
  doc.setTextColor(...gray)
  doc.setCharSpace(3)
  doc.text('STREETWEAR — SANTA MARTA', 20, 30)
  doc.setCharSpace(0)

  // Order ID
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(9)
  doc.setTextColor(...black)
  doc.text(orderId, 190, 22, { align: 'right' })
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(8)
  doc.setTextColor(...gray)
  doc.text(new Date().toLocaleDateString('es-CO'), 190, 30, { align: 'right' })

  // Section: Customer
  let y = 60
  doc.setDrawColor(...beige)
  doc.setLineWidth(0.5)
  doc.line(20, y - 5, 190, y - 5)

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(8)
  doc.setTextColor(...gray)
  doc.setCharSpace(2)
  doc.text('DATOS DEL CLIENTE', 20, y)
  doc.setCharSpace(0)

  y += 8
  const fields = [
    ['Nombre', customer.nombre],
    ['Ciudad', customer.ciudad],
    ['Dirección', customer.direccion],
    ['Teléfono', customer.telefono],
  ]

  fields.forEach(([label, value]) => {
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(9)
    doc.setTextColor(...gray)
    doc.text(label, 20, y)
    doc.setTextColor(...black)
    doc.text(value, 70, y)
    y += 7
  })

  // Section: Products
  y += 5
  doc.setDrawColor(...beige)
  doc.line(20, y - 3, 190, y - 3)

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(8)
  doc.setTextColor(...gray)
  doc.setCharSpace(2)
  doc.text('PRODUCTOS', 20, y)
  doc.setCharSpace(0)

  y += 8

  // Table header
  doc.setFontSize(8)
  doc.setTextColor(...gray)
  doc.text('ARTÍCULO', 20, y)
  doc.text('CANT.', 130, y, { align: 'right' })
  doc.text('PRECIO', 190, y, { align: 'right' })
  y += 5
  doc.setDrawColor(...black)
  doc.setLineWidth(0.3)
  doc.line(20, y, 190, y)
  y += 7

  items.forEach((item) => {
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(9)
    doc.setTextColor(...black)
    doc.text(item.name, 20, y)
    doc.text(`x${item.qty}`, 130, y, { align: 'right' })
    doc.text(formatPrice(item.price * item.qty), 190, y, { align: 'right' })
    y += 7
  })

  // Total
  y += 5
  doc.setDrawColor(...black)
  doc.setLineWidth(0.5)
  doc.line(120, y, 190, y)
  y += 7

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(11)
  doc.setTextColor(...black)
  doc.text('TOTAL', 120, y)
  doc.text(formatPrice(total), 190, y, { align: 'right' })

  // Footer
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(7)
  doc.setTextColor(...gray)
  doc.text('Colets Streetwear — Santa Marta, Colombia', 105, 285, { align: 'center' })
  doc.text('Pago contra entrega', 105, 290, { align: 'center' })

  doc.save(`Colets-${orderId}.pdf`)

  //CORRECCION

}
