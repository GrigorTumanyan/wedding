const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imageDir = './images';
const outputDir = './images-optimized';

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Get all image files
const files = fs.readdirSync(imageDir).filter(file => 
  ['.jpg', '.jpeg', '.png'].includes(path.extname(file).toLowerCase())
);

async function optimizeImages() {
  for (const file of files) {
    const inputPath = path.join(imageDir, file);
    const filename = path.parse(file).name;
    
    try {
      console.log(`Optimizing: ${file}`);
      
      // Create optimized JPEG (max width 1200px, 75% quality)
      await sharp(inputPath)
        .resize(1200, 1200, {
          fit: 'inside',
          withoutEnlargement: true
        })
        .jpeg({ quality: 75, mozjpeg: true })
        .toFile(path.join(outputDir, `${filename}.jpg`));
      
      // Create WebP version
      await sharp(inputPath)
        .resize(1200, 1200, {
          fit: 'inside',
          withoutEnlargement: true
        })
        .webp({ quality: 75 })
        .toFile(path.join(outputDir, `${filename}.webp`));
      
      console.log(`✓ Optimized: ${filename}`);
    } catch (error) {
      console.error(`Error optimizing ${file}:`, error.message);
    }
  }
  
  console.log('\n✓ All images optimized!');
  console.log('Files are in ./images-optimized/');
  
  // Compare sizes
  console.log('\nSize comparison:');
  for (const file of files) {
    const originalPath = path.join(imageDir, file);
    const filename = path.parse(file).name;
    const jpgPath = path.join(outputDir, `${filename}.jpg`);
    const webpPath = path.join(outputDir, `${filename}.webp`);
    
    if (fs.existsSync(jpgPath) && fs.existsSync(webpPath)) {
      const originalSize = fs.statSync(originalPath).size / 1024 / 1024;
      const jpgSize = fs.statSync(jpgPath).size / 1024 / 1024;
      const webpSize = fs.statSync(webpPath).size / 1024 / 1024;
      
      console.log(`${file}: ${originalSize.toFixed(2)}MB → JPG: ${jpgSize.toFixed(2)}MB | WebP: ${webpSize.toFixed(2)}MB`);
    }
  }
}

optimizeImages().catch(console.error);

