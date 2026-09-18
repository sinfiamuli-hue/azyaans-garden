import siteConfig from "../config/site.js";
import { formatPrice } from "./currency.js";

// Builds the wa.me link for any pre-written message.
function buildWhatsAppUrl(message) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}

// Single-plant enquiry — used on a plant detail page's
// "Order on WhatsApp" button.
export function createSinglePlantMessage(plant, quantity = 1) {
  const lines = [
    "Hello! I would like to order/request the following plant from Azyaan's Garden.",
    "",
    "Plant:",
    plant.name,
    "",
    "Plant ID:",
    plant.id,
    "",
    "Price:",
    formatPrice(plant.price),
    "",
    "Quantity:",
    String(quantity),
    "",
    "I would like to arrange collection/delivery.",
    "",
    "Please confirm availability and the next steps.",
  ];
  return lines.join("\n");
}

// Full basket checkout message — includes every item, customer
// details, delivery preference and an optional note.
export function createBasketOrderMessage({
  items,
  customerName,
  customerPhone,
  deliveryPreference,
  note,
}) {
  const lines = [
    "Hello! I would like to place an order/request from Azyaan's Garden.",
    "",
    "Customer name:",
    customerName || "-",
    "",
    "Phone:",
    customerPhone || "-",
    "",
    "Plants:",
    "",
  ];

  let total = 0;
  items.forEach((item, index) => {
    const subtotal = item.price * item.quantity;
    total += subtotal;
    lines.push(
      `${index + 1}. ${item.name}`,
      `    ID: ${item.id}`,
      `    Quantity: ${item.quantity}`,
      `    Price: ${formatPrice(item.price)} each`,
      `    Subtotal: ${formatPrice(subtotal)}`,
      ""
    );
  });

  lines.push(
    "Estimated total:",
    formatPrice(total),
    "",
    "Collection/delivery:",
    deliveryPreference || "-",
    ""
  );

  if (note && note.trim()) {
    lines.push("Note:", note.trim(), "");
  }

  lines.push("Please confirm availability and the final total. Thank you.");

  return lines.join("\n");
}

export function openWhatsAppOrder(message) {
  const url = buildWhatsAppUrl(message);
  const win = window.open(url, "_blank", "noopener,noreferrer");
  if (!win) {
    // Popup blocked or WhatsApp couldn't open — caller should show
    // a fallback message with the number and a plain link.
    return false;
  }
  return true;
}

export function getWhatsAppUrl(message) {
  return buildWhatsAppUrl(message);
}

export function getGeneralEnquiryUrl() {
  return buildWhatsAppUrl(siteConfig.whatsappGeneralMessage);
}
