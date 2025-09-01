# CLAUDE.md – Prompt to Build the Olyn Cha Website

> **Copy–paste this whole file into Claude** (as one message). Claude should reply with a complete, production‑ready project following the specs below.

---

## Role

You are a senior full‑stack engineer + brand‑aware designer. Build a fast, accessible, mobile‑first website for **The Olyn Cha** (premium matcha brand). Output clean, well‑commented code.

## Deliverables

1. A complete web project using **Next.js 15 (App Router) + Tailwind CSS**.
2. Include a **project tree** and **one code block per file** in the format:

```
// FILE: path/to/file.ext
<file contents>
```

3. Provide a short **README.md** with install/deploy steps.
4. Include **sample content** and **placeholder assets** so the site runs as‑is.

> If Next.js is not possible, deliver a fallback: **Vanilla HTML/CSS/JS** with the exact same pages/components and a simple buildless setup.

## Tech Stack & Conventions

* Next.js 15, App Router (`/app`), TypeScript **on**.
* Tailwind CSS with a small token set (colors, spacing, fonts).
* Images in `/public` (use placeholders and brand colors).
* ESLint & Prettier config minimal.
* No server DB; read data from **JSON files** in `/data`.
* Animate 3D motion using tree.js library

# Website UI Desing – Follwing desing with HTML File
- `about_us.html`
- `checkout.html`
- `detail_menu.html`
- `FAQ.html`
- `home.html`
- `menu.html`
- `order_status.html`
- `terms_of_services.html`
- `testimonials.html`
- `your_order.html`
- `your_order_confirmed.html`

## Brand Snapshot

* **Brand**: The Olyn Cha
* **Tagline**: *Premium Matcha Tea.*
* **Kanji Sub‑brand**: **緑風 — Midori‑kaze** (Green Breeze)
* **Location**: Rochester, New Hampshire, USA
* **Domain**: `Olyncha.com`
* **Logo/Icon**: **Cat lifting a cup** (monoline, white on black). Make an inline **SVG** component.

### Design Tokens

* `--color-matcha-900: #0E4F33`
* `--color-matcha-600: #3C8F52`
* `--color-cream: #F3EDE4`
* `--color-ink: #111111`
* `--color-brand-red: #C8102E` (accent, sparing)
* Fonts: Headings **Canela/Cormorant** fallback to `serif`; body **Inter/Manrope** fallback to `system-ui`.

### Voice & Content Style

Premium, minimal, friendly. Short, benefit‑led copy. Avoid bitterness; emphasize “**not‑as‑bitter**”, ceremonial grade, and sustainability.

## Required Pages / Routes

* `/` **Home**: Hero, highlights, featured drinks, CTA to Order, newsletter.
* `/menu` **Menu**: Sections (Signatures, Seasonal, Classics). Cards sourced from `/data/menu.json`.
* `/about` **Our Story**: Brand intro, sourcing (Uji/Kyoto), photos.
* `/locations` **Find Us**: Single card for Rochester, NH + map placeholder.
* `/order` **Order**: External links buttons (DoorDash/UberEats placeholders) + pickup info.
* `/contact` **Contact**: Form (Name, Email, Message) posting to `https://formsubmit.co` placeholder; success toast.
* `/legal/privacy` and `/legal/terms` simple pages.

## Global Components

* `Header` (logo SVG + nav + mobile menu)
* `Footer` (socials, address, hours, copyright)
* `Hero` (headline, subhead, CTA)
* `DrinkCard` (image, title, jp/romaji, price, badges)
* `BadgeJP` (renders **緑風 / Midori‑kaze** lockup)
* `LogoCat` (inline SVG “cat lifting a cup”)
* `Newsletter` (email field + consent)

## Data Model

Create `/data/menu.json` with this shape:

```json
{
  "sections": [
    {
      "id": "signatures",
      "title": "Signature",
      "items": [
        {
          "id": "midori-kaze",
          "name": "緑風 Midori-kaze",
          "english": "Green Breeze",
          "desc": "Ceremonial matcha, not-as-bitter. Smooth & aromatic.",
          "prices": {"12": 4.80, "16": 5.60, "20": 6.30},
          "tags": ["iced", "ceremonial"],
          "img": "/drinks/midori-kaze.jpg"
        },
        {
          "id": "strawberry-matcha",
          "name": "Strawberry Matcha Latte",
          "desc": "Creamy latte with fresh strawberry notes.",
          "prices": {"16": 5.30, "20": 5.95},
          "tags": ["seasonal", "sweet"],
          "img": "/drinks/strawberry-matcha.jpg"
        },
        {
          "id": "coconut-matcha",
          "name": "Coconut Matcha Latte",
          "desc": "Ceremonial matcha, coconut milk, optional espresso.",
          "prices": {"16": 5.50, "20": 6.20},
          "tags": ["dairy-free"],
          "img": "/drinks/coconut-matcha.jpg"
        }
      ]
    },
    {
      "id": "classics",
      "title": "Classics",
      "items": [
        {"id": "matcha-latte", "name": "Matcha Latte", "prices": {"12": 4.60, "16": 5.20, "20": 5.90}, "tags": ["hot", "iced"], "img": "/drinks/matcha-latte.jpg"},
        {"id": "iced-matcha", "name": "Iced Matcha", "prices": {"16": 4.20, "20": 4.80}, "tags": ["iced"], "img": "/drinks/iced-matcha.jpg"}
      ]
    }
  ]
}
```

## Home Page Copy (sample)

* **H1**: *Sip the Green.*
* **Sub**: *Premium matcha, crafted fresh in Rochester, NH. Not‑as‑bitter, always photogenic.*
* **CTA**: `View Menu` · `Order Now`

## SEO & Meta

* Title: `The Olyn Cha — Premium Matcha in Rochester, NH`
* Description: `Ceremonial matcha, not‑as‑bitter. Signatures like 緑風 Midori‑kaze and Strawberry Matcha Latte.`
* OpenGraph + Twitter cards using `/public/og-cover.jpg`.

## Accessibility

* Color contrast ≥ 4.5:1 for text.
* Keyboard navigable menus.
* Semantic landmarks.
* Alt text for all images.

## Analytics (optional)

Add Google Analytics `G-XXXXXXX` via a simple script in the root layout if an env var exists.

## Performance

* Next/Image with `priority` for hero.
* Preload key fonts.
* Compress images in `/public` and provide webp fallbacks.

## Footer Content (sample)

* **Address**: Rochester, NH • USA
* **Hours**: Mon–Sun 9:00–18:00
* **Email**: [hello@olyncha.com](mailto:hello@olyncha.com)
* **Social**: `@theolyncha` (FB/IG/TikTok placeholders)

## README (expected content)

* `npm i`
* `npm run dev`
* `npm run build && npm start`
* Deploy to **Vercel**.
* How to edit `/data/menu.json` to add drinks.

## Example Components to Include

* `/components/LogoCat.tsx` → inline SVG of the *cat lifting a cup* (stroke‑based, currentColor).
* `/components/BadgeJP.tsx` → lockup for **緑風 Midori‑kaze**.
* `/components/DrinkCard.tsx` → props: `title, subtitle, priceFrom, tags, img`.

## Navigation

Header links: Home, Menu, About, Locations, Order, Contact. Mobile drawer on ≤768px. Sticky header on scroll.

## Extra: Promo Banner Component

A closable top banner: `BUY 1 GET 1 • Today Only` (controlled by a boolean flag in `/data/site.json`).

## Output Policy

* Return **one** message containing: project tree, all files in separate code blocks, and a short README.
* Do **not** omit files necessary to run.
* If any requirement is ambiguous, make a reasonable best‑practice choice and proceed.

---

**End of CLAUDE.md**
