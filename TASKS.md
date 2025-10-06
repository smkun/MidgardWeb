# Midgard Hobbies & Games – Implementation Tasks

**Project**: Off-Wix Rebuild
**Timeline**: 4 weeks
**Last Updated**: 2025-10-06

---

## Milestone 1: Foundation & Setup (Week 1)

### Repository & Environment

- [x] Initialize Astro project with TypeScript template – **Completed**: 2025-10-06
- [x] Configure Git repository with .gitignore – **Completed**: 2025-10-06
- [x] Install Tailwind CSS integration – **Completed**: 2025-10-06
- [x] Install React integration for islands – **Completed**: 2025-10-06
- [x] Configure TypeScript for strict mode – **Completed**: 2025-10-06
- [x] Set up ESLint with Astro plugin – **Completed**: 2025-10-06
- [x] Set up Prettier with Astro formatting – **Completed**: 2025-10-06
- [x] Configure Husky pre-commit hooks – **Completed**: 2025-10-06
- [x] Connect GitHub repository to Vercel – **Completed**: 2025-10-06
- [x] Deploy initial preview to Vercel – **Completed**: 2025-10-06

### Content Export

- [ ] Export all text content from Wix pages – **Completed**: \***\*\_\_\_\*\***
- [ ] Download Wix media library images – **Completed**: \***\*\_\_\_\*\***
- [x] Organize images into /content-export/images/ – **Completed**: 2025-10-06
- [x] Audit image resolutions (flag <1600px) – **Completed**: 2025-10-06
- [ ] Extract current site color palette – **Completed**: \***\*\_\_\_\*\***
- [ ] Identify current site fonts – **Completed**: \***\*\_\_\_\*\***
- [ ] Document current NAP consistency – **Completed**: \***\*\_\_\_\*\***
- [ ] Export Facebook page URL and metadata – **Completed**: \***\*\_\_\_\*\***

### Design System

- [x] Configure Tailwind theme with brand colors – **Completed**: 2025-10-06
- [x] Add custom font definitions to Tailwind – **Completed**: 2025-10-06
- [x] Create global.css with base styles – **Completed**: 2025-10-06
- [x] Define responsive breakpoint strategy – **Completed**: 2025-10-06
- [ ] Create color palette CSS variables – **Completed**: \***\*\_\_\_\*\***
- [ ] Set up spacing scale in Tailwind config – **Completed**: \***\*\_\_\_\*\***

### Core Layout Components

- [x] Create BaseLayout.astro with HTML shell – **Completed**: 2025-10-06
- [x] Build Header.astro with navigation – **Completed**: 2025-10-06
- [x] Build Footer.astro with NAP info – **Completed**: 2025-10-06
- [ ] Implement mobile menu toggle – **Completed**: \***\*\_\_\_\*\***
- [x] Add logo SVG to public/images/ – **Completed**: 2025-10-06
- [x] Create favicon.svg and configure – **Completed**: 2025-10-06
- [ ] Add logo SVG to public/images/ – **Completed**: \***\*\_\_\_\*\***
- [ ] Create favicon.svg and configure – **Completed**: \***\*\_\_\_\*\***

### Content Collections Setup

- [x] Define content collections schema in config.ts – **Completed**: 2025-10-06
- [x] Create pages collection type definitions – **Completed**: 2025-10-06
- [x] Create data collection for hours.json – **Completed**: 2025-10-06
- [x] Create data collection for team.json – **Completed**: 2025-10-06
- [x] Create data collection for brands.json – **Completed**: 2025-10-06

### Static CMS Evaluation

- [x] Install Static CMS package – **Completed**: 2025-10-06
- [x] Configure admin/config.yml – **Completed**: 2025-10-06
- [x] Create test hours.json edit workflow – **Completed**: 2025-10-06
- [x] Demo CMS to Jason/Scott – **Completed**: 2025-10-06
- [x] Document CMS decision (adopt or defer) – **Completed**: 2025-10-06

---

## Milestone 2: Page Development (Week 2)

### SEO Foundation

- [ ] Create SEOHead.astro component – **Completed**: \***\*\_\_\_\*\***
- [ ] Create SchemaMarkup.astro component – **Completed**: \***\*\_\_\_\*\***
- [ ] Implement LocalBusiness schema – **Completed**: \***\*\_\_\_\*\***
- [ ] Add Open Graph meta tags – **Completed**: \***\*\_\_\_\*\***
- [ ] Add Twitter Card meta tags – **Completed**: \***\*\_\_\_\*\***
- [ ] Generate robots.txt – **Completed**: \***\*\_\_\_\*\***
- [ ] Configure sitemap.xml generation – **Completed**: \***\*\_\_\_\*\***

### Home Page (/)

- [ ] Create /src/pages/index.astro – **Completed**: \***\*\_\_\_\*\***
- [ ] Write home.md content file – **Completed**: \***\*\_\_\_\*\***
- [ ] Build Hero.astro section component – **Completed**: \***\*\_\_\_\*\***
- [ ] Build HoursTable.astro component – **Completed**: \***\*\_\_\_\*\***
- [ ] Populate hours.json with store hours – **Completed**: \***\*\_\_\_\*\***
- [ ] Add Google Maps directions link – **Completed**: \***\*\_\_\_\*\***
- [ ] Build ImageGallery.tsx React component – **Completed**: \***\*\_\_\_\*\***
- [ ] Integrate 6-12 curated images – **Completed**: \***\*\_\_\_\*\***
- [ ] Add optional Facebook timeline embed – **Completed**: \***\*\_\_\_\*\***
- [ ] Test home page in all breakpoints – **Completed**: \***\*\_\_\_\*\***

### Games Page (/games)

- [ ] Create /src/pages/games.astro – **Completed**: \***\*\_\_\_\*\***
- [ ] Write games.md content file – **Completed**: \***\*\_\_\_\*\***
- [ ] Structure miniatures section content – **Completed**: \***\*\_\_\_\*\***
- [ ] Structure RPGs section content – **Completed**: \***\*\_\_\_\*\***
- [ ] Structure TCGs section content – **Completed**: \***\*\_\_\_\*\***
- [ ] Add open gaming space photos (3-6) – **Completed**: \***\*\_\_\_\*\***
- [ ] Add private room photos (2-3) – **Completed**: \***\*\_\_\_\*\***
- [ ] Create contact CTA for private room – **Completed**: \***\*\_\_\_\*\***
- [ ] Test games page responsiveness – **Completed**: \***\*\_\_\_\*\***

### Hobby Supplies Page (/hobby-supplies)

- [ ] Create /src/pages/hobby-supplies.astro – **Completed**: \***\*\_\_\_\*\***
- [ ] Write hobby-supplies.md content – **Completed**: \***\*\_\_\_\*\***
- [ ] Populate brands.json with structured data – **Completed**: \***\*\_\_\_\*\***
- [ ] Build BrandGrid.astro component – **Completed**: \***\*\_\_\_\*\***
- [ ] Style brand grid with Tailwind – **Completed**: \***\*\_\_\_\*\***
- [ ] Test brand grid responsiveness – **Completed**: \***\*\_\_\_\*\***

### Community Page (/community)

- [ ] Create /src/pages/community.astro – **Completed**: \***\*\_\_\_\*\***
- [ ] Write community.md content – **Completed**: \***\*\_\_\_\*\***
- [ ] Add Extra Life charity link – **Completed**: \***\*\_\_\_\*\***
- [ ] Add FB group links (LFG, 40k/AoS, Painting) – **Completed**: \***\*\_\_\_\*\***
- [ ] Test all external links – **Completed**: \***\*\_\_\_\*\***

### About Us Page (/about-us)

- [ ] Create /src/pages/about-us.astro – **Completed**: \***\*\_\_\_\*\***
- [ ] Write about-us.md content – **Completed**: \***\*\_\_\_\*\***
- [ ] Populate team.json with bios – **Completed**: \***\*\_\_\_\*\***
- [ ] Add team photos (Jason, Scott, Maria, Shawn) – **Completed**: \***\*\_\_\_\*\***
- [ ] Build team member card component – **Completed**: \***\*\_\_\_\*\***
- [ ] Test about page layout – **Completed**: \***\*\_\_\_\*\***

### Contact Page (/contact)

- [ ] Create /src/pages/contact.astro – **Completed**: \***\*\_\_\_\*\***
- [ ] Write contact.md content – **Completed**: \***\*\_\_\_\*\***
- [ ] Build ContactForm.tsx React component – **Completed**: \***\*\_\_\_\*\***
- [ ] Add client-side form validation – **Completed**: \***\*\_\_\_\*\***
- [ ] Add honeypot spam protection field – **Completed**: \***\*\_\_\_\*\***
- [ ] Create /api/contact.ts serverless function – **Completed**: \***\*\_\_\_\*\***
- [ ] Implement rate limiting (5 req/hour) – **Completed**: \***\*\_\_\_\*\***
- [ ] Configure Resend API integration – **Completed**: \***\*\_\_\_\*\***
- [ ] Test email delivery to info@ address – **Completed**: \***\*\_\_\_\*\***
- [ ] Add form success/error states – **Completed**: \***\*\_\_\_\*\***
- [ ] Test contact form spam protection – **Completed**: \***\*\_\_\_\*\***

### Events Page (/events)

- [ ] Create /src/pages/events.astro – **Completed**: \***\*\_\_\_\*\***
- [ ] Build FacebookEmbed.astro component – **Completed**: \***\*\_\_\_\*\***
- [ ] Configure Page Plugin with tabs=events – **Completed**: \***\*\_\_\_\*\***
- [ ] Implement error boundary fallback – **Completed**: \***\*\_\_\_\*\***
- [ ] Add fallback link to FB events page – **Completed**: \***\*\_\_\_\*\***
- [ ] Test plugin across Chrome/Safari/Firefox – **Completed**: \***\*\_\_\_\*\***
- [ ] Test plugin on mobile devices – **Completed**: \***\*\_\_\_\*\***

### Legal Page (/legal/privacy)

- [ ] Create /src/pages/legal/privacy.astro – **Completed**: \***\*\_\_\_\*\***
- [ ] Write basic privacy policy content – **Completed**: \***\*\_\_\_\*\***
- [ ] Link privacy policy in footer – **Completed**: \***\*\_\_\_\*\***

---

## Milestone 3: Content & Optimization (Week 3)

### Image Optimization

- [ ] Install Sharp image processing – **Completed**: \***\*\_\_\_\*\***
- [ ] Configure Astro image optimization – **Completed**: \***\*\_\_\_\*\***
- [ ] Process all images to WebP format – **Completed**: \***\*\_\_\_\*\***
- [ ] Generate AVIF variants for modern browsers – **Completed**: \***\*\_\_\_\*\***
- [ ] Create responsive srcsets (400w/800w/1200w/1600w) – **Completed**: \***\*\_\_\_\*\***
- [ ] Implement lazy loading below-the-fold – **Completed**: \***\*\_\_\_\*\***
- [ ] Strip EXIF metadata from all images – **Completed**: \***\*\_\_\_\*\***
- [ ] Verify image orientation correctness – **Completed**: \***\*\_\_\_\*\***
- [ ] Optimize image file sizes (target 80% quality) – **Completed**: \***\*\_\_\_\*\***

### Alt Text Writing

- [ ] Write alt text for home hero images – **Completed**: \***\*\_\_\_\*\***
- [ ] Write alt text for gallery images – **Completed**: \***\*\_\_\_\*\***
- [ ] Write alt text for games page images – **Completed**: \***\*\_\_\_\*\***
- [ ] Write alt text for hobby supplies images – **Completed**: \***\*\_\_\_\*\***
- [ ] Write alt text for team member photos – **Completed**: \***\*\_\_\_\*\***
- [ ] Review all alt texts for ≤125 char limit – **Completed**: \***\*\_\_\_\*\***
- [ ] Validate alt text accuracy with Jason/Scott – **Completed**: \***\*\_\_\_\*\***

### Content Writing & Refinement

- [ ] Tighten store mission statement – **Completed**: \***\*\_\_\_\*\***
- [ ] Normalize hours formatting (12-hour) – **Completed**: \***\*\_\_\_\*\***
- [ ] Rewrite hobby supplies blurbs – **Completed**: \***\*\_\_\_\*\***
- [ ] Write short CTAs (Call, Directions, Join FB) – **Completed**: \***\*\_\_\_\*\***
- [ ] Proofread all page content – **Completed**: \***\*\_\_\_\*\***
- [ ] Verify NAP consistency sitewide – **Completed**: \***\*\_\_\_\*\***

### Performance Optimization

- [ ] Audit Lighthouse desktop scores – **Completed**: \***\*\_\_\_\*\***
- [ ] Audit Lighthouse mobile scores – **Completed**: \***\*\_\_\_\*\***
- [ ] Optimize LCP to ≤2.5s – **Completed**: \***\*\_\_\_\*\***
- [ ] Optimize CLS to ≤0.1 – **Completed**: \***\*\_\_\_\*\***
- [ ] Optimize TBT to ≤200ms – **Completed**: \***\*\_\_\_\*\***
- [ ] Defer Facebook SDK loading – **Completed**: \***\*\_\_\_\*\***
- [ ] Minimize JavaScript bundle size – **Completed**: \***\*\_\_\_\*\***
- [ ] Enable Vercel edge caching – **Completed**: \***\*\_\_\_\*\***
- [ ] Test page load times on 3G network – **Completed**: \***\*\_\_\_\*\***

### Accessibility Pass

- [ ] Validate color contrast ratios (AA) – **Completed**: \***\*\_\_\_\*\***
- [ ] Add focus styles to interactive elements – **Completed**: \***\*\_\_\_\*\***
- [ ] Verify semantic heading hierarchy – **Completed**: \***\*\_\_\_\*\***
- [ ] Test keyboard navigation flow – **Completed**: \***\*\_\_\_\*\***
- [ ] Add ARIA labels where needed – **Completed**: \***\*\_\_\_\*\***
- [ ] Test with screen reader (VoiceOver/NVDA) – **Completed**: \***\*\_\_\_\*\***
- [ ] Validate HTML semantics – **Completed**: \***\*\_\_\_\*\***

### Analytics Integration

- [ ] Create Plausible Analytics account – **Completed**: \***\*\_\_\_\*\***
- [ ] Add Plausible script to BaseLayout – **Completed**: \***\*\_\_\_\*\***
- [ ] Configure custom events (phone_click) – **Completed**: \***\*\_\_\_\*\***
- [ ] Configure custom events (directions_click) – **Completed**: \***\*\_\_\_\*\***
- [ ] Configure custom events (fb_events_click) – **Completed**: \***\*\_\_\_\*\***
- [ ] Configure custom events (contact_submit) – **Completed**: \***\*\_\_\_\*\***
- [ ] Test event tracking in Plausible dashboard – **Completed**: \***\*\_\_\_\*\***

---

## Milestone 4: Launch Preparation (Week 4)

### Email Deliverability

- [ ] Configure SPF record for domain – **Completed**: \***\*\_\_\_\*\***
- [ ] Configure DKIM record for domain – **Completed**: \***\*\_\_\_\*\***
- [ ] Verify domain in Resend dashboard – **Completed**: \***\*\_\_\_\*\***
- [ ] Test email to Gmail inbox – **Completed**: \***\*\_\_\_\*\***
- [ ] Test email to Outlook inbox – **Completed**: \***\*\_\_\_\*\***
- [ ] Test email to Yahoo inbox – **Completed**: \***\*\_\_\_\*\***
- [ ] Test email to Apple Mail inbox – **Completed**: \***\*\_\_\_\*\***
- [ ] Test email to ProtonMail inbox – **Completed**: \***\*\_\_\_\*\***

### QA Testing

- [ ] Verify content parity with Wix site – **Completed**: \***\*\_\_\_\*\***
- [ ] Test all internal navigation links – **Completed**: \***\*\_\_\_\*\***
- [ ] Test all external links (FB groups, charity) – **Completed**: \***\*\_\_\_\*\***
- [ ] Verify Facebook embeds render correctly – **Completed**: \***\*\_\_\_\*\***
- [ ] Test contact form submission flow – **Completed**: \***\*\_\_\_\*\***
- [ ] Validate schema markup (Rich Results Test) – **Completed**: \***\*\_\_\_\*\***
- [ ] Check for console errors across pages – **Completed**: \***\*\_\_\_\*\***
- [ ] Test on iPhone Safari – **Completed**: \***\*\_\_\_\*\***
- [ ] Test on Android Chrome – **Completed**: \***\*\_\_\_\*\***
- [ ] Test on desktop Chrome – **Completed**: \***\*\_\_\_\*\***
- [ ] Test on desktop Firefox – **Completed**: \***\*\_\_\_\*\***
- [ ] Test on desktop Safari – **Completed**: \***\*\_\_\_\*\***

### 301 Redirects

- [ ] Create vercel.json redirects config – **Completed**: \***\*\_\_\_\*\***
- [ ] Add redirect: /app-landing-page → /hobby-supplies – **Completed**: \***\*\_\_\_\*\***
- [ ] Test all redirect paths – **Completed**: \***\*\_\_\_\*\***
- [ ] Verify 301 status codes – **Completed**: \***\*\_\_\_\*\***

### DNS & Deployment

- [ ] Lower DNS TTL to 300s (24h before cutover) – **Completed**: \***\*\_\_\_\*\***
- [ ] Configure custom domain in Vercel – **Completed**: \***\*\_\_\_\*\***
- [ ] Generate SSL certificate – **Completed**: \***\*\_\_\_\*\***
- [ ] Update A record to Vercel IP – **Completed**: \***\*\_\_\_\*\***
- [ ] Update CNAME for www subdomain – **Completed**: \***\*\_\_\_\*\***
- [ ] Enable HTTP→HTTPS redirect – **Completed**: \***\*\_\_\_\*\***
- [ ] Verify DNS propagation globally – **Completed**: \***\*\_\_\_\*\***
- [ ] Test site on new domain – **Completed**: \***\*\_\_\_\*\***

### Google Business Profile

- [ ] Verify store categories in GBP – **Completed**: \***\*\_\_\_\*\***
- [ ] Update business hours in GBP – **Completed**: \***\*\_\_\_\*\***
- [ ] Upload photos to GBP – **Completed**: \***\*\_\_\_\*\***
- [ ] Verify NAP consistency with website – **Completed**: \***\*\_\_\_\*\***

### Launch Day Tasks

- [ ] Schedule cutover for Tuesday 10 AM EST – **Completed**: \***\*\_\_\_\*\***
- [ ] Monitor DNS propagation status – **Completed**: \***\*\_\_\_\*\***
- [ ] Test site from multiple networks – **Completed**: \***\*\_\_\_\*\***
- [ ] Monitor Vercel logs for errors – **Completed**: \***\*\_\_\_\*\***
- [ ] Monitor Plausible for traffic spike – **Completed**: \***\*\_\_\_\*\***
- [ ] Monitor contact form submissions – **Completed**: \***\*\_\_\_\*\***
- [ ] Prepare Wix rollback banner (if needed) – **Completed**: \***\*\_\_\_\*\***

### Post-Launch Monitoring (First 48h)

- [ ] Check Vercel bandwidth usage – **Completed**: \***\*\_\_\_\*\***
- [ ] Monitor Core Web Vitals in Search Console – **Completed**: \***\*\_\_\_\*\***
- [ ] Verify Google indexing status – **Completed**: \***\*\_\_\_\*\***
- [ ] Check for broken links via crawl – **Completed**: \***\*\_\_\_\*\***
- [ ] Monitor Facebook embed uptime – **Completed**: \***\*\_\_\_\*\***
- [ ] Review Plausible analytics data – **Completed**: \***\*\_\_\_\*\***
- [ ] Collect user feedback from Jason/Scott – **Completed**: \***\*\_\_\_\*\***

---

## Newly Discovered Tasks

### Week 1 Discoveries

- [ ] Review and fix npm audit vulnerabilities (7 moderate) – **Reason**: npm install reported 7 moderate vulnerabilities requiring review – **Completed**: \***\*\_\_\_\*\***
- [ ] Upgrade to Astro 5.14.1 when stable – **Reason**: Dev server shows update available, evaluate breaking changes – **Completed**: \***\*\_\_\_\*\***

### Week 2 Discoveries

- [ ] _Task placeholder – add tasks as discovered_ – **Completed**: \***\*\_\_\_\*\***

### Week 3 Discoveries

- [ ] _Task placeholder – add tasks as discovered_ – **Completed**: \***\*\_\_\_\*\***

### Week 4 Discoveries

- [ ] _Task placeholder – add tasks as discovered_ – **Completed**: \***\*\_\_\_\*\***

---

## Next 5 Tasks to Run

Based on Week 1 priorities from [PLANNING.md](/home/skunian/code/MyCode/MidgardWeb/PLANNING.md):

1. **Initialize Astro project with TypeScript template**
   - Command: `npm create astro@latest -- --template minimal --typescript strict`
   - Expected: Project scaffold with TypeScript configuration
   - Verify: `package.json` exists with Astro 4.x

2. **Configure Git repository with .gitignore**
   - Command: `git init && git add .gitignore`
   - Expected: `.gitignore` includes `node_modules/`, `dist/`, `.env`
   - Verify: `git status` shows clean working tree

3. **Install Tailwind CSS integration**
   - Command: `npx astro add tailwind`
   - Expected: `tailwind.config.cjs` created, integration added to astro.config.mjs
   - Verify: Import Tailwind in `src/styles/global.css`

4. **Install React integration for islands**
   - Command: `npx astro add react`
   - Expected: React integration added to astro.config.mjs
   - Verify: Test `.tsx` component renders

5. **Export all text content from Wix pages**
   - Action: Manually copy text from each Wix page
   - Expected: `/content-export/raw-text.md` with all 7 pages
   - Verify: Content matches Home, Games, Hobby Supplies, Community, About, Contact, Events

---

**Total Tasks**: 211
**Completed**: 0
**In Progress**: 0
**Remaining**: 211

**Progress**: 0%

---

**Notes**:

- Mark tasks complete with actual date in YYYY-MM-DD format
- Add newly discovered tasks to "Newly Discovered Tasks" section
- Update "Next 5 tasks to run" list as you progress through milestones
- Reference [PLANNING.md](/home/skunian/code/MyCode/MidgardWeb/PLANNING.md) for technical context
- Reference [PRD.md](/home/skunian/code/MyCode/MidgardWeb/PRD.md) for requirements
