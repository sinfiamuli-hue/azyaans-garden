# Azyaan's Garden

**Growing Plants. Growing Dreams.**

A small, WhatsApp-ordered plant shop website for Azyaan's Garden — a
family-run cactus & succulent business in Meemu Atoll, Maldives.

Live domain (once connected): **https://azyaansgarden.sinfia.net**

---

## What this site does

- Shows a catalogue of plants with search, category filters, sorting and
  stock status
- Lets a visitor build a basket, then sends the whole order as one
  pre-written WhatsApp message to the business number
- Has **no** online payment, no accounts, and no database — everything is
  static, and every order is confirmed manually by the parent over
  WhatsApp
- Is built mobile-first and works on phones, tablets and desktop

---

## Local development

You'll need [Node.js](https://nodejs.org) 18+ installed.

```bash
npm install
npm run dev
```

This opens the site at `http://localhost:5173` with hot-reload — any file
you save updates the page instantly.

To check the production build locally:

```bash
npm run build
npm run preview
```

---

## The three files you'll edit most often

### 1. Add or edit a plant → `src/data/plants.js`

Copy an existing plant object, change every field, and give it a new
unique `id` (e.g. `AG-190`). Fields:

| Field         | What it means                                         |
| ------------- | ------------------------------------------------------ |
| `id`          | Unique code shown to customers (e.g. `AG-120`)          |
| `name`        | Plant name                                              |
| `slug`        | URL-safe name, lowercase with hyphens                   |
| `category`    | Must match a `slug` in `src/data/categories.js`         |
| `price`       | Plain number, no currency symbol                        |
| `image`       | Path to the photo, e.g. `/images/plants/AG-120.jpg`      |
| `available`   | `true` / `false`                                        |
| `stock`       | Number left — 1–2 shows a "Low Stock" badge              |
| `featured`    | `true` to show it on the homepage                        |
| `isNew`       | `true` to show a "New" badge                             |
| `description`, `light`, `watering`, `difficulty`, `size`, `fact` | Shown on the plant's detail page |

**The sample plants included are placeholders** — replace them with your
real inventory before launch.

### 2. Add plant photos → `public/images/plants/`

Drop your photos in this folder and point each plant's `image` field at
the file, e.g. `/images/plants/AG-120.jpg`. The sample data currently
points at simple illustrated placeholders (`.svg` files in the same
folder) — swap these out plant by plant as you get real photos. No code
changes needed elsewhere.

### 3. Change the WhatsApp number or business settings → `src/config/site.js`

This one file controls, site-wide:

- `whatsappNumber` — the number every "Order on WhatsApp" button and the
  floating WhatsApp button use
- `siteName`, `tagline`, `seoTitle`, `seoDescription`
- `currency`, `island`
- `delivery` — collection/local-delivery availability, delivery fee
  (leave `fee: null` to always say "Confirm on WhatsApp"), and the
  outside-island policy text
- `story` — the "About" section text

---

## Project structure

```
public/
  images/
    plants/        ← plant photos (or placeholder illustrations)
    logo/ hero/ categories/
  favicon.svg
  robots.txt
  sitemap.xml
  _redirects        ← tells Cloudflare Pages to serve index.html for all routes

src/
  components/       ← Header, Footer, PlantCard, BasketDrawer, etc.
  pages/            ← Home, Plants, PlantDetail, OurStory, Delivery, NotFound
  data/
    plants.js       ← ⭐ your plant inventory
    categories.js   ← plant categories
  config/
    site.js         ← ⭐ WhatsApp number & business settings
  context/
    BasketContext.jsx  ← basket state + localStorage persistence
  utils/
    whatsapp.js     ← builds the WhatsApp order message + link
    currency.js     ← MVR price formatting
    useSeo.js       ← sets page title / meta tags per page
```

---

## How the WhatsApp ordering works

- `src/utils/whatsapp.js` has two message builders:
  - `createSinglePlantMessage()` — used by the "Order on WhatsApp" button
    on a plant's detail page
  - `createBasketOrderMessage()` — used when checking out the whole
    basket, including customer name, phone, delivery preference and note
- Both build a plain-text message, URL-encode it, and open
  `https://wa.me/<number>?text=...`
- If a browser blocks the pop-up, the site shows a fallback link so the
  customer can still send the message manually
- The basket itself is saved in the browser's `localStorage` so it
  survives an accidental page refresh — nothing is sent anywhere until
  the customer taps "Send Request on WhatsApp"

---

## Build

```bash
npm run build
```

Output goes to `dist/`. This is a static site — no server, no database,
no Node.js needed at runtime.

---

## GitHub → Cloudflare Pages deployment

1. Push this project to a GitHub repository, with `main` as the
   production branch.
2. In Cloudflare Pages, create a project and connect it to that GitHub
   repository.
3. Build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node version:** 18 or later (set `NODE_VERSION=18` in
     environment variables if Cloudflare doesn't detect it automatically)
4. Every push to `main` will redeploy automatically. Pull requests / other
   branches get their own preview deployments.
5. Attach the custom subdomain `azyaansgarden.sinfia.net` to the Pages
   project from the Cloudflare dashboard (Custom domains tab).

The included `public/_redirects` file (`/* /index.html 200`) makes sure
routes like `/plants/bunny-ears-cactus` don't 404 when someone refreshes
the page directly — this is required for any single-page app on
Cloudflare Pages.

No environment variables or secrets are required. There are no API keys
anywhere in this project.

---

## What was deliberately left out (by design)

- Online payment / checkout
- Customer accounts or login
- A database or backend server
- Ahmed's personal contact details, school, or location — the public
  contact point is always the parent's WhatsApp business number

See `src/config/site.js` and `DO NOT BUILD` notes throughout the code
comments for the reasoning.

---

© 2026 Azyaan's Garden
