# Midgard Hobbies & Games – Off‑Wix Rebuild PRD

## 1) Project Overview

**Objective:** Rebuild midgardhobbiesandgames.com using a modern, code‑owned stack (no Wix), preserving current content and improving speed, SEO, accessibility, and maintainability. No on‑site ecommerce; events surface from Facebook; POS remains Lightspeed Retail only.

**Primary outcomes**

- Same core pages and content migrated and improved.
- Lightweight CMS or markdown content for easy editing.
- Reliable events display using Facebook Page Plugin (tabs=events) with a fallback.
- Image pipeline (optimize → WebP/AVIF + alt text).
- Strong local SEO for Derry, NH game store terms.

## 2) In Scope

- Content inventory and copy migration (Home, Games, Hobby Supplies, Community, About, Contact, Events).
- Image collection, optimization, captions/alt text writing.
- Rebuild navigation and footer; hours, address, phone, email.
- Facebook embeds (Events, Timeline; selected post/video highlights as needed).
- Tech stack, deployment, DNS cutover from Wix.
- Analytics, privacy policy stub, accessibility baseline.
- 301 redirects for parity URLs.

## 3) Out of Scope (for now)

- Ecommerce/cart/checkout.
- Blog engine.
- Custom bookings system.
- POS integrations beyond links.

## 4) Target Stack

- **Framework:** Astro or Next.js (SSG/ISR) with React islands.
- **Styling:** Tailwind CSS.
- **CMS options:** Markdown content in repo (MD/MDX) or lightweight headless (Netlify CMS/Static CMS) for hours/news banners.
- **Hosting:** Vercel or Netlify.
- **Media:** Local `/images` folder; future CDN (Vercel/Cloudflare) as needed.
- **Embeds:** Facebook Page Plugin (tabs: `events`, `timeline`), Embedded Post/Video for highlights.

## 5) Information Architecture (Sitemap)

- **/** Home
- **/games** Games (miniatures, RPGs, TCGs; open play; private room blurb)
- **/hobby-supplies** Paint lines & hobby brands (structured list)
- **/community** Charity, community groups, FB group links
- **/about-us** Team bios + photos
- **/contact** Hours, address, phone, map link, contact form (email send via serverless)
- **/events** FB events calendar page (no login required)
- **/legal/privacy** Privacy Policy (basic)

## 6) Content Inventory & Migration Details

### Home (/)

- Hero: logo + store intro copy.
- Hours block; address; phone; “Get Directions” (Google Maps).
- Photo gallery/slider (replace Wix slider with responsive gallery, 6–12 curated images).

### Games (/games)

- Short intro + three sections:
  - **Miniatures:** Warhammer 40k, Age of Sigmar, Marvel Crisis Protocol, A Song of Ice & Fire, Star Wars: Shatterpoint, Star Wars: Legion.
  - **RPGs:** Dungeons & Dragons, Pathfinder, etc.
  - **TCGs:** Magic: The Gathering, Lorcana, Flesh and Blood, One Piece, Digimon.

- **Open Gaming Space:** copy + 3–6 photos.
- **Private Game Room:** copy + 2–3 photos; CTA to Contact.

### Hobby Supplies (/hobby-supplies)

- Intro copy.
- Structured brand/line list (convert bullets to clean grid):
  - Citadel.
  - Scale75 (Instant Color, Warfront, ScaleColor, Fantasy & Games).
  - Vallejo (Game Color, Game Air, Xpress Color, Model Color, Panzer Aces, Weathering Effects, Model Washes, Sprays/Primers).
  - Revell.
  - Mr. Hobby.
  - Dirty Down (Weathering/Aging).
  - AK Interactive (3G Acrylic, Diorama Series, Battle Grounds, True Metal Wax, Xtreme Metal, Weathering Effects, Pencils, Sprays, Wargame Spray, Pigments).
  - Pro Acryl, Two Thin Coats, The Army Painter (Speedpaint, tools), Turbodork (Colorshift, Turboshift, Metallics).

### Community (/community)

- Charity intro; Extra Life link.
- Gaming Communities: links to FB groups (LFG, 40k/AoS, Painting & Modeling).

### About Us (/about-us)

- About copy.
- Team: Jason (photo + blurb), Scott (photo + blurb), Maria (photo + blurb), Shawn (photo + blurb).

### Contact (/contact)

- Hours table.
- Address, phone, info email.
- Google Maps link (Directions).
- Simple contact form (serverless function → email).

### Events (/events)

- FB Events calendar embed; link to Page events; short note about updates.

## 7) Asset Collection Plan

- **Logos:** primary logo (SVG if available; else PNG) and favicon.
- **Photos:** export full‑res from Wix media; keep originals; create web versions: 1600w, 1200w, 800w, 400w.
- **File naming:** `midgard-<slug>-NN.webp` (e.g., `midgard-storefront-01.webp`).
- **EXIF:** strip metadata; preserve orientation.
- **Alt text:** write concise, descriptive alts for each image (≤125 chars).
- **Color palette & fonts:** set Tailwind theme tokens to match current brand.

## 8) Content Writing Tasks

- Tighten store mission statement (Home + About).
- Normalize hours formatting (12‑hour, consistent punctuation).
- Rewrite product line blurbs for scannability (Hobby Supplies grid).
- Short CTAs: “Call”, “Get Directions”, “Join our FB group”, “Host an event”.

## 9) Facebook Integration

- **/events:** Page Plugin with `tabs="events"`; fallback to reputable widget if FB changes layout.
- **/ (Home):** optional timeline embed to surface latest posts.
- **Highlights:** hand‑picked embedded posts/videos on Home or Community.

## 10) Local SEO & Schema

- **NAP:** Name, Address, Phone consistent sitewide + footer.
- **Schema.org:** `LocalBusiness`/`Store` with hours, geo, map link, sameAs (FB page).
- **Meta/Open Graph:** titles, descriptions, og:image banner.
- **Robots/Sitemap:** `robots.txt`, `/sitemap.xml` auto‑generated.
- **Google Business Profile:** verify categories, hours, photos.

## 11) Performance & Accessibility

- Core Web Vitals budget: LCP ≤ 2.5s, CLS ≤ 0.1, TBT ≤ 200ms.
- Serve images with `srcset`/`sizes`; lazy‑load below‑the‑fold.
- Min JS; no heavy sliders; accessible keyboard navigation.
- Color contrast AA; focus styles; semantic headings; ARIA only as needed.

## 12) Analytics & Telemetry

- Privacy‑friendly analytics (Plausible/GA4). Cookie banner only if GA4 with ads features.
- Track: phone click, directions click, FB events click, contact form submit.

## 13) Forms & Email

- Contact form → serverless function (Vercel/Netlify) → forward to `info@midgardcomicsandgames.com`.
- Spam protection: honeypot + rate‑limit.

## 14) Hosting & DNS

- Deploy to Vercel/Netlify.
- Point A/CNAME from Wix DNS to new host; keep registration at Wix initially.
- Enable HTTPS; HTTP→HTTPS redirect.

## 15) Redirect Map (initial)

- `/` → `/` (no change)
- `/games` → `/games`
- `/app-landing-page` → `/hobby-supplies`
- `/community` → `/community`
- `/about-us` → `/about-us`
- `/contact` → `/contact`
- `/events` → `/events`

## 16) QA Checklist

- Content parity vs current site (text, hours, addresses, phone, emails).
- All internal links and external FB links working.
- Images optimized and lazy‑loaded; alts present.
- FB embeds render without login.
- Schema validates (Rich Results Test); no console errors.
- Lighthouse ≥ 95 perf/accessibility/best‑practices on desktop; ≥ 85 mobile.

## 17) Project Plan & Milestones

- **W1 – Inventory & Design**: scrape/export content, pick stack, wireframes, brand tokens.
- **W2 – Build**: pages, navigation, gallery, embeds, forms, schema, analytics.
- **W3 – Content & Images**: alt text, compress, write blurbs; accessibility pass.
- **W4 – Launch**: DNS cutover, monitoring, post‑launch fixes.

## 18) Risks & Mitigations

- **FB embed changes** → Keep fallback widget ready; link to FB events page.
- **Image rights/quality** → Keep originals; reshoot key shots if needed.
- **DNS propagation hiccups** → Prepare rollback (temporary Wix banner linking to new domain hostname).

## 19) Acceptance Criteria

- Content parity achieved.
- Events page shows current FB events without login.
- Core Web Vitals pass; Lighthouse targets met.
- SEO basics in place; site indexed.
- Contact form delivers messages reliably.

## 20) Success Metrics

- Page load time reduction ≥ 50% vs Wix baseline.
- Increase in clicks on Directions/Call by 20% within 60 days.
- Bounce rate decreases by 15%.
- Organic impressions for branded + local queries increase within 90 days.
