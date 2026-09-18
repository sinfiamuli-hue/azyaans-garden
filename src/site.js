// ─────────────────────────────────────────────────────────────
// SITE CONFIGURATION
// Change business-wide settings here. Nothing else in the code
// should need editing when you update these values.
// ─────────────────────────────────────────────────────────────

const siteConfig = {
  siteName: "Azyaan's Garden",
  shortName: "Azyaan's Garden",
  tagline: "Growing Plants. Growing Dreams.",

  // Used in <title> tags and meta descriptions. Edit freely.
  seoTitle: "Azyaan's Garden | Plants, Cactus & Succulents",
  seoDescription:
    "Explore plants, cactus and succulents from Azyaan's Garden. Browse available plants and send your order request directly through WhatsApp.",

  // Production URL — used for canonical links & Open Graph tags.
  productionUrl: "https://azyaansgarden.sinfia.net",

  currency: "MVR",
  island: "Meemu Atoll",

  // ── WhatsApp ─────────────────────────────────────────────
  // International format, no "+", no spaces, no leading zero.
  // Change this ONE line to update the number used everywhere
  // on the site (order button, floating button, footer).
  whatsappNumber: "9607900319",
  whatsappDisplayNumber: "+960 790 0319",

  // General enquiry message used by the floating WhatsApp button.
  whatsappGeneralMessage:
    "Hello, I would like to know more about the plants available at Azyaan's Garden.",

  // ── Delivery / collection policy ────────────────────────
  // Keep this text accurate — it is shown on the Delivery page,
  // the footer, and the order form. Do not add a delivery fee
  // here unless you have actually decided on one; leave the
  // "confirmOnWhatsApp" flag true and the site will always say
  // "confirm on WhatsApp" instead of inventing a number.
  delivery: {
    confirmOnWhatsApp: true,
    fee: null, // e.g. 25 once you decide on a flat fee — leave null until then
    collectionAvailable: true,
    localDeliveryAvailable: true,
    outsideIslandNote:
      "Customers outside the island are responsible for arranging collection or transport. We do not provide island-to-island shipping. Please contact us on WhatsApp to discuss arrangements.",
  },

  // ── About / story section ───────────────────────────────
  // Kept minimal and privacy-conscious. Ahmed's first and middle
  // name only — no school, address or personal contact details.
  story: {
    heading: "The story behind the garden",
    body:
      "Azyaan's Garden began with a simple childhood love of plants. Ahmed Azyaan, a Grade 3 student, enjoys growing and caring for cactus and other plants. With the support of his family, this little hobby is becoming a small garden project where he can learn about plants, responsibility and entrepreneurship.",
    futureHeading: "Growing today for tomorrow",
    futureBody:
      "Every plant is part of a small journey. Through Azyaan's Garden, Ahmed is learning that patience, care and hard work can help something grow — both in a garden and in life.",
  },

  // Footer legal line
  copyrightYear: 2026,
};

export default siteConfig;
