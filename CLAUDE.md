# CLAUDE.md – Prompt to Build the **Olyncha** Website

> **Copy–paste this entire file into Claude** (as one message). Claude should reply with a complete, production-ready project following the specs below.

---

## Role

You are a senior full-stack engineer + brand-aware designer. Build a fast, accessible, mobile-first website for **Olyncha** (premium matcha & tea brand). Output clean, well-commented code.

---

## Deliverables

1. A complete web project using **Vite + React + Tailwind CSS + TypeScript**.
2. Include a **project tree** and **one code block per file** in the format:

```txt
// FILE: path/to/file.ext
<file contents>
```

3. Provide a short **README.md** with install/deploy steps.
4. Include **sample content** and **placeholder assets** so the site runs as-is.

> The project is a Single Page Application (SPA) built with Vite and React.

---

## Tech Stack & Conventions

* Vite, React, **TypeScript on**.
* Tailwind CSS with a small token set (colors, spacing, fonts).
* Images in `/public` (use placeholders and brand colors).
* ESLint & Prettier (minimal configs).
* No server DB; read data from **JSON files** in `/data`.
* Animate subtle motion using CSS animations or a lightweight library like Framer Motion if needed (the project does not currently use three.js).

---

## Reference HTML Screens (ensure equivalent routes/components exist)

* `about_us.html`
* `checkout.html`
* `detail_menu.html`
* `FAQ.html`
* `home.html`
* `menu.html`
* `order_status.html`
* `terms_of_services.html`
* `testimonials.html`
* `your_order.html`
* `your_order_confirmed.html`

🔒 WEB SECURITY & COMPLIANCE
Security Patterns
// Web security checklist
security_measures: {
  authentication: "JWT with secure httpOnly cookies",
  authorization: "Role-based access control (RBAC)",
  input_validation: "Joi/Yup validation on frontend and backend",
  sql_injection: "Parameterized queries with ORM",
  xss_protection: "Content Security Policy headers",
  csrf_protection: "CSRF tokens for state-changing operations",
  https_enforcement: "HTTPS redirect and HSTS headers",
  rate_limiting: "API rate limiting per user/IP"
}
Compliance Requirements
// Common web compliance patterns
compliance: {
  gdpr: "Cookie consent + data export/deletion APIs",
  accessibility: "WCAG 2.1 AA compliance with axe testing",
  performance: "Core Web Vitals optimization",
  seo: "Server-side rendering + structured data"
}

> You don’t have to output these literal `.html` files when using Next.js—just ensure pages/components match the UI/sections.

---
Component Development (Always Parallel)
// Create component ecosystem in parallel
[BatchTool - Component Creation]:
  // Base component
  - Write("src/components/Button/Button.tsx", buttonComponent)
  - Write("src/components/Button/Button.test.tsx", buttonTests)
  - Write("src/components/Button/Button.stories.tsx", buttonStories)
  - Write("src/components/Button/Button.module.css", buttonStyles)

  // Variant components (parallel)
  - Write("src/components/Button/PrimaryButton.tsx", primaryVariant)
  - Write("src/components/Button/SecondaryButton.tsx", secondaryVariant)
  - Write("src/components/Button/IconButton.tsx", iconVariant)
Responsive Design Patterns
/* Mobile-first responsive approach */
.component {
  /* Mobile styles (default) */
  padding: 1rem;

  /* Tablet styles */
  @media (min-width: 768px) {
    padding: 1.5rem;
  }

  /* Desktop styles */
  @media (min-width: 1024px) {
    padding: 2rem;
  }
}
🚀 PERFORMANCE OPTIMIZATION
Frontend Performance
// Performance optimization checklist
frontend_optimization: {
  code_splitting: "React.lazy() + Suspense for route-based splitting",
  bundle_optimization: "Webpack bundle analyzer + tree shaking",
  image_optimization: "WebP format + responsive images",
  caching: "Service worker + HTTP caching headers",
  lazy_loading: "Intersection Observer for images/components"
}
Backend Performance
// Backend optimization patterns
backend_optimization: {
  database: "Connection pooling + query optimization + indexing",
  caching: "Redis for session storage + API response caching",
  compression: "Gzip/Brotli compression for API responses",
  cdn: "Static asset delivery via CDN",
  monitoring: "APM tools for bottleneck identification"
}

## Brand Snapshot

* **Brand**: Olyncha *(lockup variant “The OlynCha” allowed in logo)*
* **Tagline**: *Premium Matcha & Tea.*
* **Kanji Sub-brand**: **緑風 — The OlynCha** (Green Breeze)
* **Location**: Rochester, New Hampshire, USA
* **Domain**: `Olyncha.com`
* **Logo/Icon**: **Cat lifting a cup** (monoline, white on black) as the primary mark; include an alternate **matcha whisk** glyph.

  * Provide inline SVG components.

### Design Tokens

Use Tailwind theme extensions and CSS variables:

* `--color-matcha-900: #0E4F33`
* `--color-matcha-600: #3C8F52`
* `--color-cream: #F3EDE4`
* `--color-ink: #111111`
* `--color-brand-red: #C4112F` *(matches provided mockups)*
* **Fonts**: Headings **Cormorant** (or Canela-like serif), body **Inter/Manrope** (fallback `system-ui`).

### Voice & Content Style

Premium, minimal, friendly. Short, benefit-led copy. Emphasize “**not-as-bitter**” ceremonial grade, sustainability, and made-to-order freshness.

---

## Required Pages / Routes

* `/` **Home**: Hero, highlights, featured drinks, CTA to Order, newsletter.
* `/menu` **Menu**: Sections (Signatures, Seasonal, Classics). Cards sourced from `/data/menu.json`.
* `/about` **Our Story**: Brand intro, sourcing (Uji/Kyoto), photos/placeholders.
* `/locations` **Find Us**: Card for Rochester, NH + map placeholder.
* `/order` **Order**: External link buttons (DoorDash/UberEats placeholders) + pickup info. *(Optionally show LINE MAN/Grab for future regions.)*
* `/contact` **Contact**: Form (Name, Email, Message) posting to `https://formsubmit.co` placeholder; success toast.
* `/legal/privacy` and `/legal/terms` simple pages.

---

## Global Components

* `Header` (logo SVG + nav + mobile menu; sticky on scroll)
* `Footer` (socials, address, hours, copyright)
* `Hero` (headline, subhead, CTA; optional three.js parallax background)
* `DrinkCard` (image, title, jp/romaji, price, badges)
* `BadgeJP` (renders **緑風 / The Olyncha** lockup)
* `LogoCat` (inline SVG “cat lifting a cup”, `currentColor`, stroke-based)
* `LogoWhisk` (inline SVG whisk alt-mark)
* `Newsletter` (email field + consent)
* `PromoBanner` (closable top banner)

---

## Data Model

Create `/data/menu.json`:

```json
{
  "sections": [
    {
      "id": "signatures",
      "title": "Signature",
      "items": [
        {
          "id": "olyncha",
          "name": "緑風 The Olyncha",
          "english": "Green Breeze",
          "desc": "Ceremonial matcha, not-as-bitter. Smooth & aromatic.",
          "prices": { "12": 4.8, "16": 5.6, "20": 6.3 },
          "tags": ["iced", "ceremonial"],
          "img": "/drinks/olyncha.jpg"
        },
        {
          "id": "strawberry-matcha",
          "name": "Strawberry Matcha Latte",
          "desc": "Creamy latte with fresh strawberry notes.",
          "prices": { "16": 5.3, "20": 5.95 },
          "tags": ["seasonal", "sweet"],
          "img": "/drinks/strawberry-matcha.jpg"
        },
        {
          "id": "coconut-matcha",
          "name": "Coconut Matcha Latte",
          "desc": "Ceremonial matcha, coconut milk, optional espresso.",
          "prices": { "16": 5.5, "20": 6.2 },
          "tags": ["dairy-free"],
          "img": "/drinks/coconut-matcha.jpg"
        }
      ]
    },
    {
      "id": "classics",
      "title": "Classics",
      "items": [
        {
          "id": "matcha-latte",
          "name": "Matcha Latte",
          "prices": { "12": 4.6, "16": 5.2, "20": 5.9 },
          "tags": ["hot", "iced"],
          "img": "/drinks/matcha-latte.jpg"
        },
        {
          "id": "iced-matcha",
          "name": "Iced Matcha",
          "prices": { "16": 4.2, "20": 4.8 },
          "tags": ["iced"],
          "img": "/drinks/iced-matcha.jpg"
        }
      ]
    }
  ]
}
```

Add `/data/site.json`:

```json
{
  "promoEnabled": true,
  "promoText": "BUY 1 GET 1 • Today Only",
  "social": {
    "instagram": "https://instagram.com/theolyncha",
    "tiktok": "https://tiktok.com/@theolyncha"
  },
  "hours": "Mon–Sun 9:00–18:00",
  "address": "Rochester, NH • USA",
  "email": "hello@olyncha.com"
}
```

---

## Home Page Copy (sample)

* **H1**: *Sip the Green.*
* **Sub**: *Premium matcha, crafted fresh in Rochester, NH. Not-as-bitter, always photogenic.*
* **CTA**: `View Menu` · `Order Now`

---

## SEO & Meta

* Title: `Olyncha — Premium Matcha & Tea in Rochester, NH`
* Description: `Ceremonial matcha, not-as-bitter. Signatures like 緑風 The Olyncha and Strawberry Matcha Latte.`
* OpenGraph + Twitter cards using `/public/og-cover.jpg`.

---

## Accessibility

* Color contrast ≥ 4.5:1 for text.
* Keyboard navigable menus and visible focus rings.
* Semantic landmarks.
* Alt text for all images.

---

## Analytics (optional)

Add Google Analytics `G-XXXXXXX` via a simple script in the root layout only if an env var exists.

---

## Performance

* `next/image` with `priority` for hero.
* Preload key fonts.
* Compress images and provide WebP.
* Avoid layout shift (declare sizes).

---

## Footer Content (sample)

* **Address**: Rochester, NH • USA
* **Hours**: Mon–Sun 9:00–18:00
* **Email**: [hello@olyncha.com](mailto:hello@olyncha.com)
* **Social**: `@theolyncha` (FB/IG/TikTok placeholders)
* **Facebook**: [https://www.facebook.com/olynchaofficial]
* **Instagram**: [https://www.instagram.com/olynchaofficial]
* **website**: [https://www.olyncha.com]
* **website**: [https://olyncha.com/]
## Navigation

Header links: Home, Menu, About, Locations, Order, Contact. Mobile drawer on ≤768px. Sticky header on scroll.

---

## Extra: Promo Banner Component

Closable top banner controlled by `/data/site.json`:

```json
{ "promoEnabled": true, "promoText": "BUY 1 GET 1 • Today Only" }
```

---

## Output Policy

* Return **one** message containing: project tree, all files in separate code blocks, and a short README.
* Do **not** omit files necessary to run.
* If any requirement is ambiguous, make a reasonable best-practice choice and proceed.

---

**End of CLAUDE.md**
