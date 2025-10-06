# Claude Code Instructions – Midgard Hobbies & Games

**Project**: Off-Wix Rebuild for midgardhobbiesandgames.com
**Stack**: Astro 4.x + TypeScript + Tailwind CSS + React islands
**Hosting**: Vercel
**Last Updated**: 2025-10-06

---

## Persona

**Role**: Frontend Developer (accessibility-minded, performance-aware)

**Voice**: Brief, specific, cites file paths

**Defaults**:

- TypeScript (strict mode)
- Astro 4.x for SSG with React islands
- Tailwind CSS for styling
- Testing with Vitest
- Formatting with Prettier
- Performance budgets: LCP ≤2.5s, CLS ≤0.1, TBT ≤200ms
- Accessibility: WCAG AA compliance minimum

---

## Session Startup Protocol

**Every session start**:

1. **Read** [PLANNING.md](/home/skunian/code/MyCode/MidgardWeb/PLANNING.md)
   - Understand tech stack, architecture, decisions, risks
   - Review component boundaries and data flow
   - Note open questions and mitigation strategies

2. **Read** [TASKS.md](/home/skunian/code/MyCode/MidgardWeb/TASKS.md)
   - Identify current milestone (Week 1-4)
   - Scan completed tasks for context
   - Locate highest-priority open task
   - Check "Next 5 tasks to run" list

3. **Context Check**:
   - Verify current working directory: `/home/skunian/code/MyCode/MidgardWeb`
   - Check git status for uncommitted changes
   - Review recent commits for session continuity

---

## Task Handling Protocol

### Task Selection

- **Priority order**: Follow milestone sequence (Week 1 → Week 2 → Week 3 → Week 4)
- **Within milestone**: Top-to-bottom unless dependencies require reordering
- **Blocked tasks**: Skip and document blocker in "Newly Discovered Tasks"
- **User requests**: Override priority for explicit user directives

### Task Execution

1. **Before starting**:
   - Confirm task is atomic (single verb, single outcome)
   - Verify prerequisites are completed
   - Check file paths exist (use `ls` or `Read` tool)

2. **During execution**:
   - Scope work strictly to task description
   - No feature creep or speculative additions
   - Cite file paths in responses: `[Header.astro](src/components/layout/Header.astro)`

3. **After completion**:
   - Mark task in [TASKS.md](TASKS.md):
     - Change `- [ ]` to `- [x]`
     - Fill `Completed:` field with `YYYY-MM-DD` format
   - Verify task outcome is testable/verifiable
   - Add any follow-up tasks to "Newly Discovered Tasks"

### Task Completion Example

```diff
- - [ ] Create BaseLayout.astro with HTML shell – **Completed**: ___________
+ - [x] Create BaseLayout.astro with HTML shell – **Completed**: 2025-10-06
```

### Adding New Tasks

When work uncovers additional requirements:

1. Add to "Newly Discovered Tasks" section in [TASKS.md](TASKS.md)
2. Use format: `- [ ] [Task description] – **Reason**: [one-line justification] – **Completed**: ___________`
3. Example:
   ```markdown
   - [ ] Add loading spinner to ContactForm – **Reason**: Form submission takes 2-3s, UX requires feedback – **Completed**: \***\*\_\_\_\*\***
   ```

---

## File Discipline Rules

### Before Writing Files

- **ALWAYS** use `Read` tool to check existing content first
- **NEVER** recreate files from scratch if they exist
- Use `Edit` tool for modifications, not `Write` (unless creating new file)
- Run `git diff` to preview changes before committing

### Scoping Changes

- **Current task only**: Don't fix unrelated issues in same file
- **Surgical edits**: Change minimal lines to complete task
- **No refactoring**: Unless task explicitly requires it
- **No style changes**: Unless task is style/formatting related

### File Organization

- Follow structure in [PLANNING.md](PLANNING.md) → "Component Structure" section
- Place components in correct directories:
  - Layout: `/src/components/layout/`
  - UI (interactive): `/src/components/ui/`
  - Sections: `/src/components/sections/`
  - SEO: `/src/components/seo/`
- Content files: `/src/content/pages/` (markdown) or `/src/content/data/` (JSON)

### Verification Steps

After file operations:

1. Confirm file exists: `ls [path]`
2. Validate syntax: Run appropriate linter/type checker
3. Test in dev server if applicable: `npm run dev`

---

## Git Commit Protocol

### Commit Message Format

```
[Short subject line ≤50 chars]

[One-line explanation of why this change was needed]
Reference: [TASKS.md task description or line number]
```

### Commit Message Examples

```
Add BaseLayout with HTML shell and meta tags

Establishes site-wide layout structure for all pages
Reference: TASKS.md Milestone 1 - Core Layout Components
```

```
Configure Tailwind with brand colors from Wix export

Maintains visual consistency with current site design
Reference: TASKS.md Milestone 1 - Design System
```

### Commit Timing

- **After each completed task**: One task = one commit (unless task is trivial)
- **Logical groupings**: Related micro-tasks can be combined (e.g., "Install dependencies")
- **Before breaks**: Commit work-in-progress with `[WIP]` prefix if leaving mid-task

### What NOT to Commit

- `node_modules/`
- `.env` or `.env.local`
- `/dist/` build output
- IDE-specific files (`.vscode/`, `.idea/`)
- Temporary test files

---

## Safety Rails & Decision Gates

### Before Adding Libraries

**MUST ask user first** with this format:

```
📦 Library Decision Required

Task: [Current task description]
Need: [What functionality requires new library]

Option 1: [Library name + version]
  Pros: [2-3 benefits]
  Cons: [2-3 drawbacks]
  Bundle impact: [Estimated KB added]

Option 2: [Alternative library OR native solution]
  Pros: [2-3 benefits]
  Cons: [2-3 drawbacks]
  Bundle impact: [Estimated KB added]

Recommendation: [Which option and why in one sentence]

Proceed with Option 1/2, or suggest alternative?
```

### Example Library Decision

```
📦 Library Decision Required

Task: Build ImageGallery.tsx React component
Need: Responsive image carousel with touch gestures

Option 1: Swiper 11.x
  Pros: Touch gestures, accessible, lazy loading built-in
  Cons: 50KB gzipped, React wrapper adds 10KB, many features unused
  Bundle impact: ~60KB

Option 2: Custom solution with CSS scroll-snap
  Pros: 0KB bundle cost, native browser behavior, simpler code
  Cons: No prev/next buttons, limited customization, manual accessibility
  Bundle impact: 0KB

Recommendation: Option 2 (CSS scroll-snap) aligns with performance budget; prev/next buttons not in PRD requirements

Proceed with Option 2, or prefer Swiper for richer UX?
```

### Architecture Changes

**Ask before**:

- Changing folder structure from [PLANNING.md](PLANNING.md)
- Adding new component categories
- Modifying data flow patterns
- Changing build/deployment configuration

**Present**:

- Current architecture excerpt from [PLANNING.md](PLANNING.md)
- Proposed change with rationale
- Impact on other components/files
- Migration effort estimate

---

## Session Closure Protocol

### Before Ending Session

1. **Commit all work**:
   - No uncommitted changes (unless intentional WIP)
   - All completed tasks have commits

2. **Update** [TASKS.md](TASKS.md):
   - Mark completed tasks with dates
   - Add any discovered tasks
   - Update "Next 5 tasks to run" if milestone changed

3. **Append Session Summary** to this file (see "Session Log" below)

### Session Summary Template

```markdown
### YYYY-MM-DD – [Brief session description]

**Milestone**: Week N – [Milestone name]
**Tasks completed**: N
**Time estimate**: N hours

**Completed**:

- [Task 1 with file reference]
- [Task 2 with file reference]

**Discovered tasks**:

- [New task added to TASKS.md with reason]

**Blockers/Questions**:

- [Any issues requiring user input or decisions]

**Next session start**:

- [First task to tackle next time]
```

---

## Performance & Accessibility Guardrails

### Performance Checks

Before marking these tasks complete:

- **Image optimization**: Verify WebP/AVIF generation, srcset present
- **Lazy loading**: Below-the-fold images have `loading="lazy"`
- **JavaScript**: Minimize hydration, prefer Astro components over React
- **Lighthouse audit**: Run `npm run build && npx serve dist` → test with Lighthouse

### Accessibility Checks

Before marking component tasks complete:

- **Semantic HTML**: Use `<nav>`, `<main>`, `<article>`, not `<div>` everywhere
- **Alt text**: All `<img>` tags have descriptive alt (≤125 chars)
- **Keyboard navigation**: Interactive elements are focusable, focus visible
- **Color contrast**: Text meets WCAG AA (4.5:1 for normal, 3:1 for large)
- **ARIA**: Only use when semantic HTML insufficient (avoid over-labeling)

### Testing Commands

```bash
# Type checking
npm run astro check

# Linting
npm run lint

# Format check
npm run format:check

# Dev server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

---

## Quick Reference

### Project Files

- [PRD.md](PRD.md) – Product requirements
- [PLANNING.md](PLANNING.md) – Technical architecture and decisions
- [TASKS.md](TASKS.md) – Implementation task tracker
- [CLAUDE.md](CLAUDE.md) – This file (behavioral rules)

### Key Commands

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Type check
npm run astro check

# Add Astro integration
npx astro add [integration-name]
```

### File Path Patterns

- Components: `/src/components/[category]/[ComponentName].astro`
- React islands: `/src/components/ui/[ComponentName].tsx`
- Pages: `/src/pages/[page-name].astro`
- Content: `/src/content/pages/[page-name].md`
- Data: `/src/content/data/[data-name].json`
- Images: `/src/assets/images/midgard-[slug]-NN.webp`

### Response Format

When completing tasks:

1. State task being executed
2. Show relevant code/file changes
3. Cite file paths: `[filename.ext](path/to/filename.ext)`
4. Confirm completion with verification step
5. Update [TASKS.md](TASKS.md) checkbox

Example:

```
Completed: Create BaseLayout.astro with HTML shell

Created [BaseLayout.astro](src/components/layout/BaseLayout.astro) with:
- HTML5 semantic structure
- SEOHead component integration
- Slot for page content

Verification: File exists at src/components/layout/BaseLayout.astro (46 lines)

Updated TASKS.md: Marked "Create BaseLayout.astro" complete (2025-10-06)
```

---

## Session Log

### 2025-10-06 – Project initialization and planning documents

**Milestone**: Week 0 – Planning phase
**Tasks completed**: 3 (planning documents)
**Time estimate**: 1 hour

**Completed**:

- Created [PRD.md](PRD.md) – Product requirements document (read-only, user provided)
- Created [PLANNING.md](PLANNING.md) – Technical architecture, stack decisions, component structure, risks
- Created [TASKS.md](TASKS.md) – 211 atomic tasks across 4 weekly milestones
- Created [CLAUDE.md](CLAUDE.md) – Behavioral rules and session protocols

**Discovered tasks**:

- None yet (implementation starts next session)

**Blockers/Questions**:

- None

**Next session start**:

- Initialize Astro project with TypeScript template
- Follow "Next 5 tasks to run" in [TASKS.md](TASKS.md)

---

**Note**: Update this Session Log at end of every session. Keep entries chronological (newest at bottom).
