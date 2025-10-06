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
- [ ] Set up ESLint with Astro plugin – **Completed**: ___________
- [ ] Set up Prettier with Astro formatting – **Completed**: ___________
- [ ] Configure Husky pre-commit hooks – **Completed**: ___________
- [ ] Connect GitHub repository to Vercel – **Completed**: ___________
- [ ] Deploy initial preview to Vercel – **Completed**: ___________

### Content Export
- [ ] Export all text content from Wix pages – **Completed**: ___________
- [ ] Download Wix media library images – **Completed**: ___________
- [ ] Organize images into /content-export/images/ – **Completed**: ___________
- [ ] Audit image resolutions (flag <1600px) – **Completed**: ___________
- [ ] Extract current site color palette – **Completed**: ___________
- [ ] Identify current site fonts – **Completed**: ___________
- [ ] Document current NAP consistency – **Completed**: ___________
- [ ] Export Facebook page URL and metadata – **Completed**: ___________

### Design System
- [ ] Configure Tailwind theme with brand colors – **Completed**: ___________
- [ ] Add custom font definitions to Tailwind – **Completed**: ___________
- [ ] Create global.css with base styles – **Completed**: ___________
- [ ] Define responsive breakpoint strategy – **Completed**: ___________
- [ ] Create color palette CSS variables – **Completed**: ___________
- [ ] Set up spacing scale in Tailwind config – **Completed**: ___________

### Core Layout Components
- [ ] Create BaseLayout.astro with HTML shell – **Completed**: ___________
- [ ] Build Header.astro with navigation – **Completed**: ___________
- [ ] Build Footer.astro with NAP info – **Completed**: ___________
- [ ] Implement mobile menu toggle – **Completed**: ___________
- [ ] Add logo SVG to public/images/ – **Completed**: ___________
- [ ] Create favicon.svg and configure – **Completed**: ___________

### Content Collections Setup
- [ ] Define content collections schema in config.ts – **Completed**: ___________
- [ ] Create pages collection type definitions – **Completed**: ___________
- [ ] Create data collection for hours.json – **Completed**: ___________
- [ ] Create data collection for team.json – **Completed**: ___________
- [ ] Create data collection for brands.json – **Completed**: ___________

### Static CMS Evaluation
- [ ] Install Static CMS package – **Completed**: ___________
- [ ] Configure admin/config.yml – **Completed**: ___________
- [ ] Create test hours.json edit workflow – **Completed**: ___________
- [ ] Demo CMS to Jason/Scott – **Completed**: ___________
- [ ] Document CMS decision (adopt or defer) – **Completed**: ___________

---

## Milestone 2: Page Development (Week 2)

### SEO Foundation
- [ ] Create SEOHead.astro component – **Completed**: ___________
- [ ] Create SchemaMarkup.astro component – **Completed**: ___________
- [ ] Implement LocalBusiness schema – **Completed**: ___________
- [ ] Add Open Graph meta tags – **Completed**: ___________
- [ ] Add Twitter Card meta tags – **Completed**: ___________
- [ ] Generate robots.txt – **Completed**: ___________
- [ ] Configure sitemap.xml generation – **Completed**: ___________

### Home Page (/)
- [ ] Create /src/pages/index.astro – **Completed**: ___________
- [ ] Write home.md content file – **Completed**: ___________
- [ ] Build Hero.astro section component – **Completed**: ___________
- [ ] Build HoursTable.astro component – **Completed**: ___________
- [ ] Populate hours.json with store hours – **Completed**: ___________
- [ ] Add Google Maps directions link – **Completed**: ___________
- [ ] Build ImageGallery.tsx React component – **Completed**: ___________
- [ ] Integrate 6-12 curated images – **Completed**: ___________
- [ ] Add optional Facebook timeline embed – **Completed**: ___________
- [ ] Test home page in all breakpoints – **Completed**: ___________

### Games Page (/games)
- [ ] Create /src/pages/games.astro – **Completed**: ___________
- [ ] Write games.md content file – **Completed**: ___________
- [ ] Structure miniatures section content – **Completed**: ___________
- [ ] Structure RPGs section content – **Completed**: ___________
- [ ] Structure TCGs section content – **Completed**: ___________
- [ ] Add open gaming space photos (3-6) – **Completed**: ___________
- [ ] Add private room photos (2-3) – **Completed**: ___________
- [ ] Create contact CTA for private room – **Completed**: ___________
- [ ] Test games page responsiveness – **Completed**: ___________

### Hobby Supplies Page (/hobby-supplies)
- [ ] Create /src/pages/hobby-supplies.astro – **Completed**: ___________
- [ ] Write hobby-supplies.md content – **Completed**: ___________
- [ ] Populate brands.json with structured data – **Completed**: ___________
- [ ] Build BrandGrid.astro component – **Completed**: ___________
- [ ] Style brand grid with Tailwind – **Completed**: ___________
- [ ] Test brand grid responsiveness – **Completed**: ___________

### Community Page (/community)
- [ ] Create /src/pages/community.astro – **Completed**: ___________
- [ ] Write community.md content – **Completed**: ___________
- [ ] Add Extra Life charity link – **Completed**: ___________
- [ ] Add FB group links (LFG, 40k/AoS, Painting) – **Completed**: ___________
- [ ] Test all external links – **Completed**: ___________

### About Us Page (/about-us)
- [ ] Create /src/pages/about-us.astro – **Completed**: ___________
- [ ] Write about-us.md content – **Completed**: ___________
- [ ] Populate team.json with bios – **Completed**: ___________
- [ ] Add team photos (Jason, Scott, Maria, Shawn) – **Completed**: ___________
- [ ] Build team member card component – **Completed**: ___________
- [ ] Test about page layout – **Completed**: ___________

### Contact Page (/contact)
- [ ] Create /src/pages/contact.astro – **Completed**: ___________
- [ ] Write contact.md content – **Completed**: ___________
- [ ] Build ContactForm.tsx React component – **Completed**: ___________
- [ ] Add client-side form validation – **Completed**: ___________
- [ ] Add honeypot spam protection field – **Completed**: ___________
- [ ] Create /api/contact.ts serverless function – **Completed**: ___________
- [ ] Implement rate limiting (5 req/hour) – **Completed**: ___________
- [ ] Configure Resend API integration – **Completed**: ___________
- [ ] Test email delivery to info@ address – **Completed**: ___________
- [ ] Add form success/error states – **Completed**: ___________
- [ ] Test contact form spam protection – **Completed**: ___________

### Events Page (/events)
- [ ] Create /src/pages/events.astro – **Completed**: ___________
- [ ] Build FacebookEmbed.astro component – **Completed**: ___________
- [ ] Configure Page Plugin with tabs=events – **Completed**: ___________
- [ ] Implement error boundary fallback – **Completed**: ___________
- [ ] Add fallback link to FB events page – **Completed**: ___________
- [ ] Test plugin across Chrome/Safari/Firefox – **Completed**: ___________
- [ ] Test plugin on mobile devices – **Completed**: ___________

### Legal Page (/legal/privacy)
- [ ] Create /src/pages/legal/privacy.astro – **Completed**: ___________
- [ ] Write basic privacy policy content – **Completed**: ___________
- [ ] Link privacy policy in footer – **Completed**: ___________

---

## Milestone 3: Content & Optimization (Week 3)

### Image Optimization
- [ ] Install Sharp image processing – **Completed**: ___________
- [ ] Configure Astro image optimization – **Completed**: ___________
- [ ] Process all images to WebP format – **Completed**: ___________
- [ ] Generate AVIF variants for modern browsers – **Completed**: ___________
- [ ] Create responsive srcsets (400w/800w/1200w/1600w) – **Completed**: ___________
- [ ] Implement lazy loading below-the-fold – **Completed**: ___________
- [ ] Strip EXIF metadata from all images – **Completed**: ___________
- [ ] Verify image orientation correctness – **Completed**: ___________
- [ ] Optimize image file sizes (target 80% quality) – **Completed**: ___________

### Alt Text Writing
- [ ] Write alt text for home hero images – **Completed**: ___________
- [ ] Write alt text for gallery images – **Completed**: ___________
- [ ] Write alt text for games page images – **Completed**: ___________
- [ ] Write alt text for hobby supplies images – **Completed**: ___________
- [ ] Write alt text for team member photos – **Completed**: ___________
- [ ] Review all alt texts for ≤125 char limit – **Completed**: ___________
- [ ] Validate alt text accuracy with Jason/Scott – **Completed**: ___________

### Content Writing & Refinement
- [ ] Tighten store mission statement – **Completed**: ___________
- [ ] Normalize hours formatting (12-hour) – **Completed**: ___________
- [ ] Rewrite hobby supplies blurbs – **Completed**: ___________
- [ ] Write short CTAs (Call, Directions, Join FB) – **Completed**: ___________
- [ ] Proofread all page content – **Completed**: ___________
- [ ] Verify NAP consistency sitewide – **Completed**: ___________

### Performance Optimization
- [ ] Audit Lighthouse desktop scores – **Completed**: ___________
- [ ] Audit Lighthouse mobile scores – **Completed**: ___________
- [ ] Optimize LCP to ≤2.5s – **Completed**: ___________
- [ ] Optimize CLS to ≤0.1 – **Completed**: ___________
- [ ] Optimize TBT to ≤200ms – **Completed**: ___________
- [ ] Defer Facebook SDK loading – **Completed**: ___________
- [ ] Minimize JavaScript bundle size – **Completed**: ___________
- [ ] Enable Vercel edge caching – **Completed**: ___________
- [ ] Test page load times on 3G network – **Completed**: ___________

### Accessibility Pass
- [ ] Validate color contrast ratios (AA) – **Completed**: ___________
- [ ] Add focus styles to interactive elements – **Completed**: ___________
- [ ] Verify semantic heading hierarchy – **Completed**: ___________
- [ ] Test keyboard navigation flow – **Completed**: ___________
- [ ] Add ARIA labels where needed – **Completed**: ___________
- [ ] Test with screen reader (VoiceOver/NVDA) – **Completed**: ___________
- [ ] Validate HTML semantics – **Completed**: ___________

### Analytics Integration
- [ ] Create Plausible Analytics account – **Completed**: ___________
- [ ] Add Plausible script to BaseLayout – **Completed**: ___________
- [ ] Configure custom events (phone_click) – **Completed**: ___________
- [ ] Configure custom events (directions_click) – **Completed**: ___________
- [ ] Configure custom events (fb_events_click) – **Completed**: ___________
- [ ] Configure custom events (contact_submit) – **Completed**: ___________
- [ ] Test event tracking in Plausible dashboard – **Completed**: ___________

---

## Milestone 4: Launch Preparation (Week 4)

### Email Deliverability
- [ ] Configure SPF record for domain – **Completed**: ___________
- [ ] Configure DKIM record for domain – **Completed**: ___________
- [ ] Verify domain in Resend dashboard – **Completed**: ___________
- [ ] Test email to Gmail inbox – **Completed**: ___________
- [ ] Test email to Outlook inbox – **Completed**: ___________
- [ ] Test email to Yahoo inbox – **Completed**: ___________
- [ ] Test email to Apple Mail inbox – **Completed**: ___________
- [ ] Test email to ProtonMail inbox – **Completed**: ___________

### QA Testing
- [ ] Verify content parity with Wix site – **Completed**: ___________
- [ ] Test all internal navigation links – **Completed**: ___________
- [ ] Test all external links (FB groups, charity) – **Completed**: ___________
- [ ] Verify Facebook embeds render correctly – **Completed**: ___________
- [ ] Test contact form submission flow – **Completed**: ___________
- [ ] Validate schema markup (Rich Results Test) – **Completed**: ___________
- [ ] Check for console errors across pages – **Completed**: ___________
- [ ] Test on iPhone Safari – **Completed**: ___________
- [ ] Test on Android Chrome – **Completed**: ___________
- [ ] Test on desktop Chrome – **Completed**: ___________
- [ ] Test on desktop Firefox – **Completed**: ___________
- [ ] Test on desktop Safari – **Completed**: ___________

### 301 Redirects
- [ ] Create vercel.json redirects config – **Completed**: ___________
- [ ] Add redirect: /app-landing-page → /hobby-supplies – **Completed**: ___________
- [ ] Test all redirect paths – **Completed**: ___________
- [ ] Verify 301 status codes – **Completed**: ___________

### DNS & Deployment
- [ ] Lower DNS TTL to 300s (24h before cutover) – **Completed**: ___________
- [ ] Configure custom domain in Vercel – **Completed**: ___________
- [ ] Generate SSL certificate – **Completed**: ___________
- [ ] Update A record to Vercel IP – **Completed**: ___________
- [ ] Update CNAME for www subdomain – **Completed**: ___________
- [ ] Enable HTTP→HTTPS redirect – **Completed**: ___________
- [ ] Verify DNS propagation globally – **Completed**: ___________
- [ ] Test site on new domain – **Completed**: ___________

### Google Business Profile
- [ ] Verify store categories in GBP – **Completed**: ___________
- [ ] Update business hours in GBP – **Completed**: ___________
- [ ] Upload photos to GBP – **Completed**: ___________
- [ ] Verify NAP consistency with website – **Completed**: ___________

### Launch Day Tasks
- [ ] Schedule cutover for Tuesday 10 AM EST – **Completed**: ___________
- [ ] Monitor DNS propagation status – **Completed**: ___________
- [ ] Test site from multiple networks – **Completed**: ___________
- [ ] Monitor Vercel logs for errors – **Completed**: ___________
- [ ] Monitor Plausible for traffic spike – **Completed**: ___________
- [ ] Monitor contact form submissions – **Completed**: ___________
- [ ] Prepare Wix rollback banner (if needed) – **Completed**: ___________

### Post-Launch Monitoring (First 48h)
- [ ] Check Vercel bandwidth usage – **Completed**: ___________
- [ ] Monitor Core Web Vitals in Search Console – **Completed**: ___________
- [ ] Verify Google indexing status – **Completed**: ___________
- [ ] Check for broken links via crawl – **Completed**: ___________
- [ ] Monitor Facebook embed uptime – **Completed**: ___________
- [ ] Review Plausible analytics data – **Completed**: ___________
- [ ] Collect user feedback from Jason/Scott – **Completed**: ___________

---

## Newly Discovered Tasks

### Week 1 Discoveries
- [ ] Review and fix npm audit vulnerabilities (7 moderate) – **Reason**: npm install reported 7 moderate vulnerabilities requiring review – **Completed**: ___________
- [ ] Upgrade to Astro 5.14.1 when stable – **Reason**: Dev server shows update available, evaluate breaking changes – **Completed**: ___________

### Week 2 Discoveries
- [ ] _Task placeholder – add tasks as discovered_ – **Completed**: ___________

### Week 3 Discoveries
- [ ] _Task placeholder – add tasks as discovered_ – **Completed**: ___________

### Week 4 Discoveries
- [ ] _Task placeholder – add tasks as discovered_ – **Completed**: ___________

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
