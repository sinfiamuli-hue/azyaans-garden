// ─────────────────────────────────────────────────────────────
// PLANT DATA — THIS IS THE FILE YOU EDIT MOST OFTEN
// ─────────────────────────────────────────────────────────────
// To add a plant: copy an existing object below, change every
// field, and give it a new unique `id` (e.g. AG-439).
//
// Field guide:
//   id           unique code, format "AG-###" — shown to
//                customers so the parent can identify orders.
//                MUST BE UNIQUE — the basket uses it to tell
//                plants apart. Never reuse an id.
//   name         plant name shown everywhere (can repeat)
//   slug         URL-safe version of the name (lowercase, hyphens,
//                no spaces). MUST BE UNIQUE — it is the plant's
//                web address. Easy rule: name + id,
//                e.g. "zz-plant-ag-437"
//   category     must match a `slug` in src/data/categories.js
//   price        a plain number, no currency symbol
//   image        path to the main photo. Name the file after the id
//                and match the extension exactly (.jpg vs .svg),
//                e.g. "/images/plants/AG-120.jpg"
//   available    true/false — set false when sold out
//   stock        number left (used for the "Low Stock" badge)
//   featured     true to show on the homepage
//   isNew        true to show a "New" badge
//
// SAME PLANT, DIFFERENT PRICE? Make a separate entry for each one,
// with its own id, slug, price and image.
//
// SAMPLE INVENTORY NOTICE:
// Every plant below is SAMPLE DATA so the site looks complete
// out of the box. Replace it with your real plants before
// launch — none of these are actually available for sale yet.
// ─────────────────────────────────────────────────────────────
const plants = [
  {
    id: "AG-120",
    name: "Bunny Ears Cactus",
    slug: "bunny-ears-cactus",
    category: "cactus",
    price: 120,
    image: "/images/plants/AG-120.jpg",
    available: true,
    stock: 3,
    featured: true,
    isNew: false,
    description:
      "A friendly, paddle-shaped cactus named for its two round ears. Slow-growing and easy to love — a good first cactus for a sunny windowsill.",
    light: "Bright, direct sunlight",
    watering: "Let soil dry out fully between waterings",
    difficulty: "Easy",
    size: "Small",
    fact: "Its tiny golden dots aren't thorns — they're clusters of fine, fragile bristles called glochids.",
  },
  {
    id: "AG-435",
    name: "Bonsai Ficus",
    slug: "bonsai-ficus-ag-435",
    category: "bonsai",
    price: 435,
    image: "/images/plants/AG-435.jpg",
    available: true,
    stock: 2,
    featured: true,
    isNew: false,
    description:
      "A patient little tree with glossy leaves and character in its trunk. Rewards a steady hand and a bit of weekly attention.",
    light: "Bright indirect light",
    watering: "Water when the top inch of soil feels dry",
    difficulty: "Moderate",
    size: "Medium",
    fact: "With good care, a bonsai like this can live for decades — some even get passed down through families.",
  },
  {
    id: "AG-436",
    name: "Bonsai Ficus",
    slug: "bonsai-ficus-ag-436",
    category: "bonsai",
    price: 550,
    image: "/images/plants/AG-436.jpg",
    available: true,
    stock: 2,
    featured: true,
    isNew: false,
    description:
      "A patient little tree with glossy leaves and character in its trunk. Rewards a steady hand and a bit of weekly attention.",
    light: "Bright indirect light",
    watering: "Water when the top inch of soil feels dry",
    difficulty: "Moderate",
    size: "Medium",
    fact: "With good care, a bonsai like this can live for decades — some even get passed down through families.",
  },
  {
    id: "AG-080",
    name: "Aloe Vera",
    slug: "aloe-vera",
    category: "succulents",
    price: 80,
    image: "/images/plants/AG-080.svg",
    available: true,
    stock: 6,
    featured: true,
    isNew: false,
    description:
      "A classic, hard-working succulent with thick, soothing leaves. Handles a bit of neglect better than most.",
    light: "Bright indirect to direct sunlight",
    watering: "Deep water, then let it dry out completely",
    difficulty: "Easy",
    size: "Small",
    fact: "Aloe has been grown and used by people for thousands of years — it's one of the oldest known houseplants.",
  },
  {
    id: "AG-150",
    name: "Haworthia",
    slug: "haworthia",
    category: "succulents",
    price: 150,
    image: "/images/plants/AG-150.svg",
    available: false,
    stock: 0,
    featured: false,
    isNew: true,
    description:
      "Small striped rosettes that look almost like little zebras. Perfect for a desk or a narrow sunny ledge.",
    light: "Bright indirect light — avoid harsh midday sun",
    watering: "Light watering, allow to dry between",
    difficulty: "Easy",
    size: "Small",
    fact: "Haworthia's translucent leaf tips work like tiny skylights, letting light reach the plant's core.",
  },
  {
    id: "AG-180",
    name: "Echeveria",
    slug: "echeveria",
    category: "succulents",
    price: 180,
    image: "/images/plants/AG-180.svg",
    available: true,
    stock: 4,
    featured: true,
    isNew: false,
    description:
      "A rosette of dusty blue-green leaves that looks like it was folded by hand. One of the prettiest succulents in the garden.",
    light: "Bright, direct sunlight",
    watering: "Water sparingly, let soil dry fully between",
    difficulty: "Easy",
    size: "Small",
    fact: "The soft, powdery coating on its leaves is called farina — it helps protect the plant from strong sun.",
  },
  {
    id: "AG-439",
    name: "Fairy Castle Cactus",
    slug: "fairy-castle-cactus",
    category: "cactus",
    price: 750,
    image: "/images/plants/AG-439.jpg",
    available: true,
    stock: 1,
    featured: false,
    isNew: true,
    description:
      "A whimsical, slow-growing cactus with multiple green spires that resemble the turrets of a miniature castle.",
    light: "Full sun to bright indirect light",
    watering: "Infrequent — allow soil to dry fully",
    difficulty: "Easy",
    size: "Medium",
    fact: "Its many branching stems produce a uniquely miniature cityscape appearance over time.",
  },
  {
    id: "AG-210",
    name: "Golden Barrel Cactus",
    slug: "golden-barrel-cactus",
    category: "cactus",
    price: 350,
    image: "/images/plants/AG-210.jpg",
    available: true,
    stock: 2,
    featured: false,
    isNew: true,
    description:
      "A round, ribbed cactus with golden spines that catch the light beautifully in the afternoon.",
    light: "Full sun",
    watering: "Infrequent — allow soil to dry fully",
    difficulty: "Easy",
    size: "Medium",
    fact: "In its natural habitat, a barrel cactus this size could already be several years old.",
  },
  {
    id: "AG-095",
    name: "Sansevieria Cylindrica",
    slug: "sansevieria-cylindrica",
    category: "indoor-plants",
    price: 150,
    image: "/images/plants/AG-095.jpg",
    available: true,
    stock: 1,
    featured: false,
    isNew: false,
    description:
      "Tall, upright leaves with a striking pattern. One of the most forgiving indoor plants there is.",
    light: "Low to bright indirect light",
    watering: "Water sparingly, roughly once every two to three weeks",
    difficulty: "Easy",
    size: "Medium",
    fact: "Snake plants are known for quietly tolerating almost any corner of a room, dim or bright.",
  },
  {
    id: "AG-260",
    name: "Frangipani Cutting",
    slug: "frangipani-cutting",
    category: "flowering-plants",
    price: 260,
    image: "/images/plants/AG-260.svg",
    available: true,
    stock: 3,
    featured: false,
    isNew: false,
    description:
      "A rooted frangipani cutting that will grow into a small tree of fragrant, five-petalled flowers.",
    light: "Full sun",
    watering: "Water when soil is dry to the touch",
    difficulty: "Moderate",
    size: "Medium",
    fact: "Frangipani flowers are among the most fragrant in the islands, especially in the evening.",
  },
  {
    id: "AG-442",
    name: "Money Plant",
    slug: "money-plant",
    category: "indoor-plants",
    price: 145,
    image: "/images/plants/AG-442.jpg",
    available: true,
    stock: 1,
    featured: false,
    isNew: false,
    description:
      "Trailing, heart-shaped leaves that are happy to climb a trellis or spill from a shelf.",
    light: "Bright indirect light",
    watering: "Water when the top of the soil feels dry",
    difficulty: "Easy",
    size: "Small",
    fact: "A money plant will grow toward the nearest light source, so a quarter-turn each week keeps it even.",
  },
  {
    id: "AG-440",
    name: "Rat Tail Cactus",
    slug: "rat-tail-cactus",
    category: "indoor-plants",
    price: 675,
    image: "/images/plants/AG-440.jpg",
    available: true,
    stock: 1,
    featured: false,
    isNew: false,
    description:
      "Long, trailing cylindrical stems covered in fine, bristly spines. Perfect for hanging baskets or tall pots where its cascading stems can spill over dramatically.",
    light: "Bright, direct light to full sun",
    watering: "Water thoroughly when soil is completely dry, reduce significantly in winter",
    difficulty: "Easy to Medium",
    size: "Small",
    fact: "Native to Mexico, the Rat Tail Cactus produces vivid magenta flowers in spring and summer under strong sunlight.",
  },
  {
    id: "AG-330",
    name: "Dwarf Coconut Sapling",
    slug: "dwarf-coconut-sapling",
    category: "outdoor-plants",
    price: 130,
    image: "/images/plants/AG-330.svg",
    available: false,
    stock: 0,
    featured: false,
    isNew: false,
    description:
      "A young dwarf coconut palm, grown from seed. A slow, rewarding outdoor project for a sunny garden spot.",
    light: "Full sun",
    watering: "Regular watering, especially while young",
    difficulty: "Moderate",
    size: "Large",
    fact: "A coconut palm can keep producing fruit for well over sixty years once it matures.",
  },
  {
    id: "AG-190",
    name: "ZZ Plant",
    slug: "zz-plant-ag-190",
    category: "indoor-plants",
    price: 565,
    image: "/images/plants/AG-190.jpg",
    available: true,
    stock: 1,
    featured: false,
    isNew: true,
    description:
      "Glossy, upright stems that look almost too perfect to be real. Thrives on neglect and tolerates low light without complaint.",
    light: "Low to bright indirect light",
    watering: "Water sparingly, let soil dry out fully between waterings",
    difficulty: "Easy",
    size: "Medium",
    fact: "The ZZ plant stores water in its thick rhizomes, which is why it can go weeks without a drink.",
  },
  {
    id: "AG-437",
    name: "ZZ Plant",
    slug: "zz-plant-ag-437",
    category: "indoor-plants",
    price: 350,
    image: "/images/plants/AG-437.jpg",
    available: true,
    stock: 1,
    featured: false,
    isNew: true,
    description:
      "Glossy, upright stems that look almost too perfect to be real. Thrives on neglect and tolerates low light without complaint.",
    light: "Low to bright indirect light",
    watering: "Water sparingly, let soil dry out fully between waterings",
    difficulty: "Easy",
    size: "Medium",
    fact: "The ZZ plant stores water in its thick rhizomes, which is why it can go weeks without a drink.",
  },
  {
    id: "AG-441",
    name: "Snake Plant",
    slug: "snake-plant-ag-441",
    category: "indoor-plants",
    price: 650,
    image: "/images/plants/AG-441.jpg",
    available: true,
    stock: 1,
    featured: false,
    isNew: true,
    description:
      "Broad, stiff, sword-like leaves with distinctive variegated banding. Exceptionally hardy and excellent for beginner plant parents.",
    light: "Low to bright indirect light",
    watering: "Water sparingly, let soil dry out fully between waterings",
    difficulty: "Easy",
    size: "Medium",
    fact: "Snake plants produce oxygen and filter indoor air pollutants even at night through Crassulacean Acid Metabolism (CAM) photosynthesis.",
  },
  {
    id: "AG-438",
    name: "African Spear",
    slug: "african-spear-plant-ag-438",
    category: "indoor-plants",
    price: 450,
    image: "/images/plants/AG-438.jpg",
    available: true,
    stock: 1,
    featured: false,
    isNew: true,
    description:
      "Striking, smooth, cylindrical spears that shoot straight up from the soil. Highly architectural, extremely durable, and thrives with minimal attention.",
    light: "Bright indirect to full sun",
    watering: "Water sparingly, let soil dry out fully between waterings",
    difficulty: "Easy",
    size: "Medium",
    fact: "Unlike flat-leaved snake plants, African Spear leaves are completely smooth, round, and so tough that they are often braided into living sculptures.",
  },
];

// SAFETY CHECK (only runs while developing with `npm run dev`).
// Prints a red error in the browser console if two plants share an
// id or a slug, so mistakes like this are caught immediately.
if (import.meta.env.DEV) {
  ["id", "slug"].forEach((field) => {
    const seen = new Set();
    plants.forEach((p) => {
      if (seen.has(p[field])) {
        console.error(
          `[plants.js] Duplicate ${field}: "${p[field]}" — every plant needs its own unique ${field}.`
        );
      }
      seen.add(p[field]);
    });
  });
}

export default plants;
