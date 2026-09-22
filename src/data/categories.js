// ─────────────────────────────────────────────────────────────
// CATEGORY DATA
// Add or remove categories here — the catalogue, filters and
// navigation all read from this file automatically.
// `slug` must be unique and URL-safe (lowercase, hyphens only).
// ─────────────────────────────────────────────────────────────

const categories = [
  { slug: "cactus", name: "Cactus", blurb: "Spiny, sculptural, low-fuss." },
  { slug: "snake-plant", name: "Snake Plant",blurb: "Bold, upright, hardy, and easy to care for."},
  { slug: "succulents", name: "Succulents", blurb: "Plump leaves, easy care." },
  { slug: "indoor-plants", name: "Indoor Plants", blurb: "For shelves and quiet corners." },
  { slug: "outdoor-plants", name: "Outdoor Plants", blurb: "Happiest in open sun." },
  { slug: "bonsai", name: "Bonsai", blurb: "Small trees, patient hands." },
  { slug: "flowering-plants", name: "Flowering Plants", blurb: "A little seasonal colour." },
  { slug: "other-plants", name: "Other Plants", blurb: "The rest of the garden." },
];

export default categories;
