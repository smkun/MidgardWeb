# Image Optimization Tool

Automated image optimization script for Midgard Hobbies & Games website.

## Overview

This tool converts images to modern WebP format with optimal compression settings and organizes them into the appropriate directories for use in the Astro site.

## Features

- ✅ **WebP Conversion**: Converts JPG, PNG, GIF to optimized WebP format
- ✅ **SVG Handling**: Preserves SVG files without conversion
- ✅ **Smart Organization**: Automatically places logos in `/public` and images in `/src/assets/images`
- ✅ **Size Optimization**: Reduces file sizes by ~60-80% while maintaining quality
- ✅ **Automatic Resizing**: Limits maximum dimensions to 2400x2400px
- ✅ **Detailed Reporting**: Shows size savings and output locations

## Usage

### 1. Add Images to IMAGES Folder

Place your original images in the `IMAGES/` directory at the project root:

```
IMAGES/
├── logo.png
├── store-front.jpg
├── gaming-tables.jpg
├── miniatures-display.jpg
└── ...
```

### 2. Run the Optimization Script

```bash
npm run optimize-images
```

### 3. Review Output

The script will:

- Convert all images to WebP format (except SVGs)
- Place logos (files with "logo" or "favicon" in name) in `/public`
- Place all other images in `/src/assets/images`
- Display a summary report with file sizes and savings

## Configuration

Edit `scripts/optimize-images.js` to customize:

```javascript
const CONFIG = {
  sourceDir: './IMAGES',
  destDirs: {
    logo: './public',
    images: './src/assets/images',
  },
  webpOptions: {
    quality: 85, // 0-100, higher = better quality
    effort: 6, // 0-6, higher = better compression
  },
  resizeOptions: {
    maxWidth: 2400, // Maximum width in pixels
    maxHeight: 2400, // Maximum height in pixels
  },
  logoPatterns: ['logo', 'favicon'], // Filename patterns for logos
};
```

## Output Locations

### Logos (`/public`)

Files matching logo patterns go to `/public` for direct URL access:

- `logo.webp` → accessible at `/logo.webp`
- `favicon.svg` → accessible at `/favicon.svg`

### Images (`/src/assets/images`)

All other images go to `/src/assets/images` for Astro image optimization:

```astro
---
import { Image } from 'astro:assets';
import storeImage from '@/assets/images/store-front.webp';
---

<Image src={storeImage} alt="Store front" />
```

## Quality Settings

### Current Settings (85% quality, effort 6)

- **Quality**: 85% strikes a balance between visual quality and file size
- **Effort**: 6 (maximum) provides best compression at the cost of processing time

### Recommended Settings by Use Case

**High Quality (product photos, featured images)**

```javascript
webpOptions: {
  quality: 90,
  effort: 6,
}
```

**Standard Quality (general site images)**

```javascript
webpOptions: {
  quality: 85,
  effort: 6,
}
```

**Aggressive Compression (backgrounds, decorative)**

```javascript
webpOptions: {
  quality: 75,
  effort: 6,
}
```

## Example Output

```
🖼️  Midgard Image Optimization Tool

📁 Scanning for images...
   Found 8 image(s)

Processing: logo.png
  ✓ logo.png → logo.webp (245 KB → 52 KB, -78.8%)

Processing: store-front.jpg
  ✓ store-front.jpg → store-front.webp (3.2 MB → 645 KB, -79.8%)

============================================================
📊 Optimization Summary
============================================================
Images processed: 8
Original size:    15.2 MB
Optimized size:   3.1 MB
Total saved:      12.1 MB (-79.6%)
============================================================

📂 Output Locations:

  Logos (1):
    • logo.webp

  Images (7):
    • store-front.webp
    • gaming-tables.webp
    • miniatures-display.webp
    ...

✅ Optimization complete!

📝 Next Steps:
  1. Review optimized images in their destination folders
  2. Update image references in components to use .webp format
  3. Consider adding <picture> elements for fallback support
  4. Delete the original IMAGES/ folder after verification
```

## Using Optimized Images in Components

### Astro Components (Recommended)

```astro
---
import { Image } from 'astro:assets';
import storeImage from '@/assets/images/store-front.webp';
---

<Image src={storeImage} alt="Midgard store front" width={1200} height={800} loading="lazy" />
```

### With Fallback for Older Browsers

```astro
<picture>
  <source srcset="/assets/images/store-front.webp" type="image/webp" />
  <img src="/assets/images/store-front.jpg" alt="Store front" />
</picture>
```

### React Components

```tsx
import storeImage from '@/assets/images/store-front.webp';

export default function StoreGallery() {
  return <img src={storeImage.src} alt="Store front" />;
}
```

## Troubleshooting

### "Source directory not found"

Create the `IMAGES/` directory and add your images:

```bash
mkdir IMAGES
cp ~/Downloads/*.jpg IMAGES/
```

### "No images found"

Ensure images have supported extensions:

- `.jpg`, `.jpeg`, `.png`, `.gif`, `.webp`, `.svg`

### "Error processing image"

- Check image file is not corrupted
- Ensure sufficient disk space
- Verify sharp package is installed: `npm install sharp`

## Technical Details

### Dependencies

- **sharp**: High-performance image processing library
- Automatically installed with: `npm install`

### Supported Input Formats

- JPEG (`.jpg`, `.jpeg`)
- PNG (`.png`)
- GIF (`.gif`)
- WebP (`.webp`)
- SVG (`.svg`)

### Output Format

- WebP for all raster images (JPEG, PNG, GIF)
- SVG preserved as-is

### Performance

- Processes ~1-2 images per second depending on size
- Multi-core CPU utilization via sharp
- Progress shown in real-time

## Clean Up

After verifying optimized images work correctly:

```bash
# Remove original IMAGES folder
rm -rf IMAGES/

# Or keep as backup
mv IMAGES/ IMAGES.backup/
```
