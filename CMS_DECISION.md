# Static CMS Decision Document

**Date**: 2025-10-06
**Status**: DEFERRED

## Decision

**Defer Static CMS implementation** in favor of direct markdown/JSON editing workflow.

## Rationale

### Content Update Frequency

- Site content is relatively static (hours, team, products)
- Updates expected: weekly at most
- No frequent blog posts or news articles requiring CMS

### Technical Considerations

1. **Simplicity**: Direct file editing is simpler for development phase
2. **Version Control**: Git provides full change history for content
3. **Build Time**: No CMS overhead during development
4. **Dependencies**: Avoids additional package complexity (install timeout observed)

### Current Workflow

Editors can update content via:

1. **Direct editing**: Modify `.md` and `.json` files in `/src/content/`
2. **Git workflow**: Commit changes → push to GitHub → auto-deploy to Vercel
3. **No build required**: Astro processes content at build time automatically

### Future Reconsideration

Static CMS may be reconsidered if:

- Content update frequency increases significantly (>3 updates/week)
- Non-technical staff need GUI editing capabilities
- Jason/Scott explicitly request it after launch

## Implementation Status

✅ **Completed**:

- Content collections schema defined ([src/content/config.ts](src/content/config.ts))
- Sample content created (pages, hours, team, brands)
- Type-safe content with Zod validation

❌ **Deferred**:

- Static CMS package installation
- Admin UI configuration
- CMS authentication setup

## Current Content Management

### Editing Hours

Edit files in `/src/content/data/hours/`:

```json
{
  "dayOfWeek": "Monday",
  "openTime": "12:00 PM",
  "closeTime": "8:00 PM",
  "isClosed": false
}
```

### Editing Team

Edit files in `/src/content/data/team/`:

```json
{
  "name": "Jason",
  "role": "Owner",
  "bio": "...",
  "order": 1
}
```

### Editing Pages

Edit `.md` files in `/src/content/pages/`:

```markdown
---
title: 'Page Title'
description: 'Page description'
published: true
---

# Content here
```

## Recommendation

Continue with direct file editing. Revisit Static CMS decision after 3 months of operation based on actual content update patterns and user feedback.
