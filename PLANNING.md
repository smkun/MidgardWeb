# Midgard Hobbies & Games – Technical Planning Document

## Vision

Rebuild midgardhobbiesandgames.com as a fast, SEO-optimized static site with no Wix dependencies, preserving all existing content while achieving 50%+ page load improvements and enhanced local discoverability for Derry, NH game store searches. The site will use a modern JAMstack architecture with minimal JavaScript, prioritizing Core Web Vitals performance and local SEO through structured schema markup and optimized media delivery. Content management will be simplified through markdown-based editing with optional lightweight CMS integration for dynamic elements like hours and announcements.

## Tech Stack

### Core Framework
- **Astro 4.x** (latest stable) – Primary framework for SSG with React islands
  - Rationale: Superior performance with partial hydration, excellent image optimization, minimal JS by default
  - Alternative considered: Next.js 14 (rejected due to heavier baseline JS bundle)

### Styling & UI
- **Tailwind CSS 3.x** – Utility-first styling
  - Rationale: Rapid prototyping, consistent design tokens, excellent tree-shaking
- **@astrojs/tailwind** integration

### Content Management
- **Markdown/MDX** – Primary content format stored in `/src/content/`
  - `/src/content/pages/` – Main page content
  - `/src/content/config.ts` – Content collections schema
- **Static CMS** (Netlify CMS fork) – Optional GUI for non-technical edits
  - `/public/admin/config.yml` – CMS configuration
  - Rationale: Git-based workflow, no external dependencies, local editing support

### Media Pipeline
- **@astrojs/image** or **astro:assets** – Built-in image optimization
  - Formats: WebP primary, AVIF progressive enhancement, PNG fallback
  - Responsive: `srcset` with 400w, 800w, 1200w, 1600w breakpoints
  - Storage: `/src/assets/images/` → optimized to `/dist/`
- **Sharp** – Image processing engine (Astro dependency)

### Hosting & Deployment
- **Vercel** – Primary hosting platform
  - Rationale: Zero-config Astro support, edge network, serverless functions, DNS management
  - Alternative: Netlify (equal capability, Vercel chosen for unified DX)
- **GitHub** – Version control and CI/CD trigger

### Forms & Serverless
- **Vercel Serverless Functions** – Contact form email delivery
  - `/api/contact.ts` – Form handler
  - **Resend** or **Nodemailer** + SMTP – Email delivery service
  - Spam protection: honeypot field + rate limiting (Vercel KV or in-memory)

### Analytics & Monitoring
- **Plausible Analytics** – Privacy-friendly, no cookie banner required
  - Custom events: `phone_click`, `directions_click`, `fb_events_click`, `contact_submit`
  - Alternative: GA4 (requires cookie consent if using ads features)

### External Integrations
- **Facebook Page Plugin** – Events calendar and timeline embeds
  - `tabs=events` for [/events](/events)
  - `tabs=timeline` optional for Home page
  - Fallback: Link to `facebook.com/midgardhobbiesandgames/events` if plugin fails

### Development Tools
- **TypeScript 5.x** – Type safety for components and API routes
- **ESLint** + **Prettier** – Code quality and formatting
- **Husky** + **lint-staged** – Pre-commit hooks

## System Architecture

### Component Structure

```
/src
├── components/
│   ├── layout/
│   │   ├── Header.astro          # Navigation, logo, mobile menu
│   │   ├── Footer.astro          # Hours, NAP, social links
│   │   └── BaseLayout.astro      # HTML shell, meta tags, schema
│   ├── ui/
│   │   ├── ContactForm.tsx       # React island for form state
│   │   ├── ImageGallery.tsx      # Photo slider/grid (React)
│   │   └── FacebookEmbed.astro   # Plugin wrapper
│   ├── sections/
│   │   ├── Hero.astro            # Home hero with hours block
│   │   ├── HoursTable.astro      # Reusable hours display
│   │   └── BrandGrid.astro       # Hobby supplies brand list
│   └── seo/
│       ├── SEOHead.astro         # Meta tags, OG, Twitter cards
│       └── SchemaMarkup.astro    # JSON-LD structured data
├── content/
│   ├── config.ts                 # Content collections schema
│   ├── pages/
│   │   ├── home.md
│   │   ├── games.md
│   │   ├── hobby-supplies.md
│   │   ├── community.md
│   │   ├── about-us.md
│   │   └── contact.md
│   └── data/
│       ├── hours.json            # Business hours
│       ├── team.json             # Team member bios
│       └── brands.json           # Hobby supplies brands
├── pages/
│   ├── index.astro               # Home → content/pages/home.md
│   ├── games.astro
│   ├── hobby-supplies.astro
│   ├── community.astro
│   ├── about-us.astro
│   ├── contact.astro
│   ├── events.astro
│   └── legal/
│       └── privacy.astro
├── assets/
│   └── images/                   # Source images
└── styles/
    └── global.css                # Tailwind imports, custom utilities

/public
├── admin/
│   └── config.yml                # Static CMS config
├── robots.txt
└── favicon.svg

/api                              # Vercel serverless functions
└── contact.ts                    # Contact form handler
```

### Component Boundaries

**Layout Components** ([/src/components/layout/](/src/components/layout/))
- Responsibilities: Site-wide navigation, footer, HTML structure, meta tags
- Data sources: `/src/content/data/hours.json`, static config
- No business logic; pure presentation

**UI Components** ([/src/components/ui/](/src/components/ui/))
- Responsibilities: Interactive elements requiring client-side JS
- React islands: `ContactForm.tsx`, `ImageGallery.tsx` (hydrated only)
- Astro components: Static embeds, no hydration

**Section Components** ([/src/components/sections/](/src/components/sections/))
- Responsibilities: Reusable page sections (hero, brand grids, hours tables)
- Consume content from MDX or JSON data files
- No client-side state

**SEO Components** ([/src/components/seo/](/src/components/seo/))
- Responsibilities: Meta tags, Open Graph, Schema.org JSON-LD
- Input: Page-specific metadata from frontmatter
- Output: `<head>` tags, `<script type="application/ld+json">`

**Pages** ([/src/pages/](/src/pages/))
- Responsibilities: Route definitions, content assembly
- Import sections and layouts; pass page-specific data
- No logic beyond data fetching from content collections

### External Services & Data Flow

#### Facebook Integration
```
User visits /events
→ Astro page loads FacebookEmbed.astro component
  → Renders <div class="fb-page"> with Page Plugin SDK
  → FB SDK fetches events from facebook.com/midgardhobbiesandgames
  → Events render in iframe (no login required)
  → Fallback: If plugin fails, show link to FB events page
```

**Data Flow**: Client browser → Facebook CDN → Plugin iframe → User

**Error Handling**: Check `window.FB` presence; timeout fallback to static link

#### Contact Form
```
User submits contact form (/contact)
→ React component validates fields (client-side)
  → POST request to /api/contact
    → Vercel serverless function validates (honeypot, rate limit)
      → Sends email via Resend API to info@midgardcomicsandgames.com
        → Returns success/error to client
          → Component shows confirmation or error message
```

**Data Flow**:
- Form data: Client → Vercel Edge Function → Resend API → Email recipient
- No PII stored; transient processing only

**Security**: Honeypot field, rate limiting (5 req/hour per IP), input sanitization

#### Analytics
```
User action (page view, phone click, etc.)
→ Plausible script sends event to plausible.io
  → Aggregated in Plausible dashboard
  → No cookies, no personal data
```

**Data Flow**: Client → Plausible edge → Dashboard (privacy-preserving aggregation)

#### Image Delivery
```
Build process:
  /src/assets/images/midgard-storefront-01.jpg
  → Astro Image component processes:
    → Generates WebP/AVIF variants (400w, 800w, 1200w, 1600w)
    → Optimizes with Sharp (quality=80, progressive)
    → Outputs to /dist/_astro/midgard-storefront-01.{hash}.webp
  → Deployed to Vercel Edge Network CDN

Runtime:
  User browser requests image
  → Vercel Edge serves from nearest PoP
  → Browser selects appropriate size from srcset
```

**Data Flow**: Build → Optimized assets → CDN → Client (with correct MIME types and caching headers)

## Key Technical Decisions

### Decision 1: Astro over Next.js
**Rationale**: Midgard site is content-heavy with minimal interactivity (no cart, no auth). Astro's zero-JS-by-default approach and island architecture deliver superior performance (target LCP <2.5s) without sacrificing React for complex components like contact form and image gallery. Next.js would ship 70-100KB baseline JS; Astro ships <5KB.

**Trade-off**: Less ecosystem maturity than Next.js, but performance gains outweigh for this use case.

### Decision 2: Markdown-based CMS over Headless CMS
**Rationale**: Content updates are infrequent (weekly at most). Git-based markdown workflow with optional Static CMS GUI provides simplicity, version control, and no vendor lock-in or API costs. Alternatives like Contentful/Sanity add unnecessary complexity and ongoing costs for a 7-page site.

**Trade-off**: Non-technical editors need Static CMS GUI training, but no recurring CMS fees and full content portability.

### Decision 3: Vercel Hosting over Netlify
**Rationale**: Both platforms offer equivalent static hosting and serverless functions. Vercel chosen for unified developer experience (single config for hosting + functions), slightly faster global CDN (Cloudflare-backed), and simpler DNS management UI. Cost parity at this scale (free tier sufficient).

**Trade-off**: Vendor lock-in risk mitigated by Astro's platform-agnostic output.

### Decision 4: Facebook Page Plugin over Custom API Integration
**Rationale**: FB Graph API requires app approval, token management, and ongoing maintenance. Page Plugin is officially supported, no login required, and handles layout responsiveness. Risk of FB deprecation mitigated by fallback link to facebook.com/events.

**Trade-off**: Limited customization of events UI, but development speed and reliability gains significant.

### Decision 5: Plausible over Google Analytics 4
**Rationale**: Privacy-first analytics without cookie banners simplifies compliance and improves UX. Plausible's $9/month cost justified by avoiding GA4's complexity and GDPR/CCPA friction. Custom events sufficient for tracking business goals (phone clicks, directions, form submits).

**Trade-off**: Less granular demographic data than GA4, but user privacy and simplicity prioritized.

### Decision 6: WebP Primary Format over AVIF
**Rationale**: WebP has 96%+ browser support (includes Safari 14+) and excellent compression (~30% smaller than JPEG). AVIF offers 10-20% additional savings but has 90% support (Safari 16+ only). Serve AVIF as progressive enhancement with WebP fallback via `<picture>` element.

**Trade-off**: Slight extra file size for older Safari users, but broad compatibility ensured.

### Decision 7: TypeScript over JavaScript
**Rationale**: Type safety prevents runtime errors in serverless functions (e.g., form validation) and ensures content schema adherence. Minimal overhead with Astro's zero-config TS support. Improves maintainability for future developers.

**Trade-off**: Slight learning curve for JS-only developers, but error prevention worth investment.

## Open Questions & Risks

### Open Question 1: Static CMS Adoption
**Question**: Will store staff adopt Static CMS GUI, or prefer direct markdown editing?

**Next Steps**:
- Week 1: Demo Static CMS to Jason/Scott with test content changes
- Collect feedback on UX vs. requesting developer edits
- Decide by end of Week 1 whether to deploy CMS or rely on email-based update requests

**Risk Level**: Low (markdown editing works without CMS; CMS is optional enhancement)

### Open Question 2: Image Sourcing Quality
**Question**: Are current Wix images high-resolution enough for responsive optimization?

**Next Steps**:
- Week 1: Export all Wix media library assets
- Audit resolution (target ≥1600px width for hero images)
- Identify gaps requiring new photography (estimate 6-8 hours reshoot if needed)

**Risk Level**: Medium (low-res images hurt performance gains; reshoot adds W1 delay)

### Open Question 3: Facebook Embed Reliability
**Question**: How frequently does FB Page Plugin break due to API changes?

**Next Steps**:
- Week 2: Implement plugin with error boundary and fallback link
- Test across browsers (Chrome, Safari, Firefox) and mobile
- Monitor post-launch for 30 days; document any failures

**Risk Level**: Medium (mitigated by fallback link to facebook.com/events; acceptable degradation)

### Open Question 4: Contact Form Spam Volume
**Question**: Will honeypot + rate limiting sufficiently block spam, or is CAPTCHA needed?

**Next Steps**:
- Week 2: Deploy with honeypot (hidden field) and 5 req/hour rate limit
- Monitor spam submissions for 14 days post-launch
- Add hCaptcha if spam >20% of submissions

**Risk Level**: Low (honeypot typically blocks 95%+ bots; CAPTCHA adds UX friction)

### Risk 1: DNS Propagation Delays During Cutover
**Description**: DNS changes can take 24-48 hours to propagate globally, causing mixed traffic between Wix and new site.

**Mitigation**:
- Lower TTL to 300s (5 min) 24 hours before cutover
- Deploy new site to preview URL (e.g., `midgard-new.vercel.app`) for QA
- Coordinate cutover during low-traffic window (Tuesday 10 AM EST)
- Prepare rollback: Temporary banner on Wix linking to new preview URL if issues arise

**Impact**: Medium (user confusion during mixed state)
**Probability**: Medium (DNS issues common)

### Risk 2: Facebook Page Plugin Deprecation
**Description**: Facebook may deprecate or change Page Plugin API without notice, breaking events display.

**Mitigation**:
- Implement error boundary with fallback link to `facebook.com/midgardhobbiesandgames/events`
- Monitor FB developer changelog weekly post-launch
- Build lightweight custom events scraper as backup (scrape public FB page HTML) – 8-hour effort

**Impact**: Medium (events page degrades to link)
**Probability**: Low (plugin stable since 2016)

### Risk 3: Core Web Vitals Regression from FB Embeds
**Description**: Facebook plugins inject 200-300KB JS, potentially delaying LCP and increasing TBT.

**Mitigation**:
- Lazy-load FB SDK below-the-fold (defer until user scrolls)
- Set `loading="lazy"` on plugin iframes
- Test Lighthouse scores with/without embeds; optimize script loading strategy
- Consider removing timeline embed from Home if LCP >2.5s

**Impact**: High (fails performance targets)
**Probability**: Medium (FB scripts notoriously heavy)

**Next Steps**: Week 2 – Lighthouse audit with embeds; optimize or remove timeline if needed

### Risk 4: Image Alt Text Quality Inconsistency
**Description**: 100+ images require descriptive alt text; rushed writing may produce generic alts, hurting accessibility and SEO.

**Mitigation**:
- Week 3: Dedicated alt text writing session with content checklist
- Use template: "Photo of [subject] at Midgard Hobbies & Games in Derry, NH"
- Peer review: Jason/Scott validate accuracy of product/game descriptions
- Automated check: ESLint rule to flag missing alt attributes

**Impact**: Medium (poor SEO/accessibility)
**Probability**: Medium (time pressure in W3)

### Risk 5: Email Deliverability Issues (Contact Form)
**Description**: Serverless function emails may land in spam due to SPF/DKIM misconfiguration or IP reputation.

**Mitigation**:
- Use transactional email service (Resend) with verified domain
- Configure SPF/DKIM records for `midgardcomicsandgames.com`
- Test deliverability to Gmail/Outlook/Yahoo during Week 2
- Add form confirmation page with phone number backup ("Call us if no response in 24h")

**Impact**: High (missed customer inquiries)
**Probability**: Low (Resend handles deliverability)

**Next Steps**: Week 2 – SPF/DKIM setup + deliverability testing to 5 email providers

## Next Steps (Week 1)

1. **Content Export** (4 hours)
   - Download all text from Wix pages to `/content-export/raw-text.md`
   - Export Wix media library to `/content-export/images/` (original files)
   - Audit image resolutions; flag low-res assets for reshoot

2. **Repository Setup** (2 hours)
   - Initialize Astro project: `npm create astro@latest`
   - Install dependencies: Tailwind, TypeScript, React integration
   - Configure Vercel deployment via GitHub integration

3. **Design System Foundation** (3 hours)
   - Extract brand colors/fonts from current Wix site
   - Configure Tailwind theme tokens in `tailwind.config.cjs`
   - Create reusable components: `Header.astro`, `Footer.astro`, `BaseLayout.astro`

4. **Static CMS Demo** (2 hours)
   - Set up Static CMS in `/public/admin/`
   - Create test content collection (hours.json)
   - Demo editing workflow to Jason/Scott; gather feedback

5. **Technical Validation** (3 hours)
   - Build `/events` page with Facebook Page Plugin
   - Test plugin rendering across Chrome/Safari/Firefox
   - Implement contact form React component with Vercel function stub
   - Test form submission to console (no email yet)

**Total Effort**: 14 hours
**Deliverables**: Functional dev environment, design tokens, content export, CMS decision

---

**Document Version**: 1.0
**Last Updated**: 2025-10-06
**References**: [PRD.md](/home/skunian/code/MyCode/MidgardWeb/PRD.md)
