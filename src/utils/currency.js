import siteConfig from "../config/site.js";

// formatPrice(120) -> "MVR 120"
export function formatPrice(amount) {
  const rounded =
    Number.isInteger(amount) ? amount : Math.round(amount * 100) / 100;
  return `${siteConfig.currency} ${rounded.toLocaleString("en-US")}`;
}
