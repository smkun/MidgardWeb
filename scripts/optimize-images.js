#!/usr/bin/env node

/**
 * Image Optimization Script for Midgard Hobbies & Games
 *
 * Converts images from IMAGES/ folder to optimized WebP format
 * and organizes them into appropriate directories.
 *
 * Usage: node scripts/optimize-images.js
 */

import { readdir, copyFile, mkdir, stat } from 'fs/promises';
import { join, parse, relative } from 'path';
import { existsSync } from 'fs';
import sharp from 'sharp';

// Configuration
const CONFIG = {
  sourceDir: './IMAGES',
  destDirs: {
    logo: './public',
    images: './src/assets/images',
  },
  webpOptions: {
    quality: 85,
    effort: 6, // 0-6, higher = better compression but slower
  },
  resizeOptions: {
    maxWidth: 2400,
    maxHeight: 2400,
    fit: 'inside',
    withoutEnlargement: true,
  },
  logoPatterns: ['logo', 'favicon'],
};

// Color formatting
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

/**
 * Get all image files recursively from a directory
 */
async function getImageFiles(dir, fileList = []) {
  const files = await readdir(dir);

  for (const file of files) {
    const filePath = join(dir, file);
    const fileStat = await stat(filePath);

    if (fileStat.isDirectory()) {
      await getImageFiles(filePath, fileList);
    } else if (/\.(jpg|jpeg|png|gif|webp)$/i.test(file)) {
      fileList.push(filePath);
    }
  }

  return fileList;
}

/**
 * Determine destination directory based on filename
 */
function getDestination(filename) {
  const lowerName = filename.toLowerCase();

  // Check if it's a logo
  for (const pattern of CONFIG.logoPatterns) {
    if (lowerName.includes(pattern)) {
      return CONFIG.destDirs.logo;
    }
  }

  // Default to images directory
  return CONFIG.destDirs.images;
}

/**
 * Get file size in human-readable format
 */
function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}

/**
 * Optimize a single image
 */
async function optimizeImage(sourcePath, destDir) {
  const { name, ext } = parse(sourcePath);
  const stats = await stat(sourcePath);
  const originalSize = stats.size;

  // Ensure destination directory exists
  if (!existsSync(destDir)) {
    await mkdir(destDir, { recursive: true });
  }

  // Special handling for SVG files (copy without conversion)
  if (ext.toLowerCase() === '.svg') {
    const destPath = join(destDir, `${name}.svg`);
    await copyFile(sourcePath, destPath);
    log(`  ✓ Copied SVG: ${name}.svg`, 'green');
    return {
      original: sourcePath,
      optimized: destPath,
      originalSize,
      optimizedSize: originalSize,
      saved: 0,
      format: 'svg',
    };
  }

  // Convert to WebP
  const destPath = join(destDir, `${name}.webp`);

  const image = sharp(sourcePath);
  const metadata = await image.metadata();

  await image.resize(CONFIG.resizeOptions).webp(CONFIG.webpOptions).toFile(destPath);

  const optimizedStats = await stat(destPath);
  const optimizedSize = optimizedStats.size;
  const saved = originalSize - optimizedSize;
  const percentSaved = ((saved / originalSize) * 100).toFixed(1);

  log(
    `  ✓ ${name}${ext} → ${name}.webp (${formatBytes(originalSize)} → ${formatBytes(optimizedSize)}, -${percentSaved}%)`,
    'green'
  );

  return {
    original: sourcePath,
    optimized: destPath,
    originalSize,
    optimizedSize,
    saved,
    format: 'webp',
    dimensions: `${metadata.width}x${metadata.height}`,
  };
}

/**
 * Main execution
 */
async function main() {
  log('\n🖼️  Midgard Image Optimization Tool\n', 'bright');

  // Check if source directory exists
  if (!existsSync(CONFIG.sourceDir)) {
    log(`❌ Source directory not found: ${CONFIG.sourceDir}`, 'red');
    log(`   Please create the directory and add your images.`, 'yellow');
    return;
  }

  // Get all images
  log('📁 Scanning for images...', 'blue');
  const imageFiles = await getImageFiles(CONFIG.sourceDir);

  if (imageFiles.length === 0) {
    log(`⚠️  No images found in ${CONFIG.sourceDir}`, 'yellow');
    log(`   Supported formats: .jpg, .jpeg, .png, .gif, .webp, .svg`, 'yellow');
    return;
  }

  log(`   Found ${imageFiles.length} image(s)\n`, 'blue');

  // Process images
  const results = [];
  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;

  for (const imagePath of imageFiles) {
    const { name } = parse(imagePath);
    const destDir = getDestination(name);
    const relativePath = relative(CONFIG.sourceDir, imagePath);

    log(`Processing: ${relativePath}`, 'blue');

    try {
      const result = await optimizeImage(imagePath, destDir);
      results.push(result);
      totalOriginalSize += result.originalSize;
      totalOptimizedSize += result.optimizedSize;
    } catch (error) {
      log(`  ✗ Error: ${error.message}`, 'red');
    }
  }

  // Summary
  const totalSaved = totalOriginalSize - totalOptimizedSize;
  const percentSaved = ((totalSaved / totalOriginalSize) * 100).toFixed(1);

  log('\n' + '='.repeat(60), 'bright');
  log('📊 Optimization Summary', 'bright');
  log('='.repeat(60), 'bright');
  log(`Images processed: ${results.length}`, 'blue');
  log(`Original size:    ${formatBytes(totalOriginalSize)}`, 'yellow');
  log(`Optimized size:   ${formatBytes(totalOptimizedSize)}`, 'green');
  log(`Total saved:      ${formatBytes(totalSaved)} (-${percentSaved}%)`, 'green');
  log('='.repeat(60) + '\n', 'bright');

  // Output file locations
  log('📂 Output Locations:', 'bright');
  const logoFiles = results.filter((r) => r.optimized.includes(CONFIG.destDirs.logo));
  const optimizedImageFiles = results.filter((r) => r.optimized.includes(CONFIG.destDirs.images));

  if (logoFiles.length > 0) {
    log(`\n  Logos (${logoFiles.length}):`, 'blue');
    logoFiles.forEach((f) => {
      const filename = parse(f.optimized).base;
      log(`    • ${filename}`, 'green');
    });
  }

  if (optimizedImageFiles.length > 0) {
    log(`\n  Images (${optimizedImageFiles.length}):`, 'blue');
    optimizedImageFiles.forEach((f) => {
      const filename = parse(f.optimized).base;
      log(`    • ${filename}`, 'green');
    });
  }

  log('\n✅ Optimization complete!\n', 'bright');

  // Next steps
  log('📝 Next Steps:', 'bright');
  log('  1. Review optimized images in their destination folders', 'yellow');
  log('  2. Update image references in components to use .webp format', 'yellow');
  log('  3. Consider adding <picture> elements for fallback support', 'yellow');
  log('  4. Delete the original IMAGES/ folder after verification\n', 'yellow');
}

// Run the script
main().catch((error) => {
  log(`\n❌ Fatal error: ${error.message}`, 'red');
  console.error(error);
  process.exit(1);
});
