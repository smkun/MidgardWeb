# Midgard Hobbies & Games - Design System

## Brand Colors

### Extracted from Logo (2025-10-06)

| Color Name    | Hex Code  | Usage                                                       |
| ------------- | --------- | ----------------------------------------------------------- |
| **Primary**   | `#25242C` | Deep charcoal gray - primary brand color, backgrounds, text |
| **Secondary** | `#B82F2F` | Dark crimson red - secondary brand accent, CTAs, highlights |
| **Accent**    | `#EF6725` | Vibrant orange - highlight color, energy, call-to-action    |
| **Burgundy**  | `#972B32` | Deep burgundy - tertiary accent, depth, variation           |
| **Light**     | `#FEFFFD` | Off-white/cream - backgrounds, text on dark surfaces        |

### Color Application Guidelines

**Primary (`#25242C`)**:

- Main navigation backgrounds
- Footer backgrounds
- Heading text on light backgrounds
- Primary brand identity touchpoints

**Secondary (`#B82F2F`)**:

- Primary CTA buttons
- Links and interactive elements
- Section accents and dividers
- Important highlights

**Accent (`#EF6725`)**:

- Secondary CTA buttons
- Hover states for interactive elements
- Badges and notifications
- Energy/excitement indicators

**Burgundy (`#972B32`)**:

- Tertiary accents
- Visual depth and variation
- Alternative CTA states
- Complementary highlights

**Light (`#FEFFFD`)**:

- Text on dark backgrounds
- Card backgrounds
- Section backgrounds
- Whitespace and breathing room

## Typography

### Font Stack

**Sans Serif (Body & UI)**:

- System UI stack for performance and native feel
- `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`

**Heading Font**:

- `"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`

### Type Scale

| Element | Size            | Weight | Line Height |
| ------- | --------------- | ------ | ----------- |
| H1      | 3.75rem (60px)  | 700    | 1.2         |
| H2      | 3rem (48px)     | 700    | 1.3         |
| H3      | 2.25rem (36px)  | 600    | 1.3         |
| H4      | 1.875rem (30px) | 600    | 1.4         |
| H5      | 1.5rem (24px)   | 600    | 1.4         |
| H6      | 1.25rem (20px)  | 600    | 1.5         |
| Body    | 1rem (16px)     | 400    | 1.6         |
| Small   | 0.875rem (14px) | 400    | 1.5         |

## Spacing

### Custom Spacing Scale

Beyond Tailwind's default spacing:

- `18`: 4.5rem (72px)
- `88`: 22rem (352px)
- `128`: 32rem (512px)

## Component Patterns

### Buttons

**Primary Button** (`.btn-primary`):

- Background: `brand-secondary` (#B82F2F)
- Text: `white`
- Hover: 90% opacity
- Padding: `px-6 py-3`
- Border radius: `rounded-md`

**Secondary Button** (`.btn-outline`):

- Border: 2px `brand-primary`
- Text: `brand-primary`
- Hover: `bg-brand-primary`, `text-white`

### Container

**Container Custom** (`.container-custom`):

- Max width: `max-w-7xl` (1280px)
- Horizontal padding: `px-4 sm:px-6 lg:px-8`
- Centered: `mx-auto`

### Cards

**Card Base**:

- Background: `white`
- Border: `1px brand-gray-200`
- Border radius: `rounded-lg`
- Padding: `p-6`
- Shadow: `shadow-md`
- Hover: `shadow-xl transition-shadow`

## Responsive Breakpoints

Following Tailwind defaults:

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## Brand Voice & Tone

- **Professional yet approachable**: Gaming store expertise without intimidation
- **Community-focused**: Welcoming, inclusive language
- **Passionate**: Enthusiasm for hobby gaming shows through
- **Helpful**: Educational tone, sharing knowledge freely

## Accessibility Standards

- **Color Contrast**: WCAG AA minimum (4.5:1 for normal text, 3:1 for large text)
- **Focus States**: Visible keyboard focus indicators on all interactive elements
- **Semantic HTML**: Proper heading hierarchy, landmark regions
- **Alt Text**: Descriptive alternative text for all images
- **Interactive Elements**: Minimum touch target size 44x44px

## Implementation Notes

All brand colors are configured in `tailwind.config.js` under the `brand` namespace.

Access colors in components:

```astro
<button class="bg-brand-secondary text-white hover:bg-brand-burgundy"> Call to Action </button>
```

CSS custom properties (if needed):

```css
:root {
  --brand-primary: #25242c;
  --brand-secondary: #b82f2f;
  --brand-accent: #ef6725;
  --brand-burgundy: #972b32;
  --brand-light: #fefffd;
}
```
