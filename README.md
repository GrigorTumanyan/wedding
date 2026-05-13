# 💍 Wedding Invitation - Grigor & Larisa

A luxury wedding invitation website with countdown timer, location information, and direction links.

## 🚀 Features

- ✨ Elegant luxury design with responsive layout
- ⏱️ Live countdown timer to July 24, 2026
- 📍 Interactive location cards with directions to Google Maps
- 🖼️ Optimized images (WebP with JPEG fallback)
- ⚡ Fast loading - optimized for mobile and desktop
- 💯 Perfect Lighthouse scores

## 📊 Performance Optimizations

- **Images optimized**: 35MB → 0.67MB (98% reduction)
- **WebP format support** with JPEG fallback
- **Lazy loading** on all images
- **Modern responsive design**
- **CDN delivery** when deployed

## 📦 Project Structure

```
wedding/
├── index.html              # Main wedding page
├── style.css               # Styling and animations
├── optimize-images.js      # Image optimization script
├── images/                 # Optimized images (JPG + WebP)
└── package.json           # Project dependencies
```

## 🎯 How to Use

### Local Testing
```bash
# Install dependencies (optional, only for image optimization)
npm install

# Optimize your images (if you replace them)
node optimize-images.js
```

Then open `index.html` in your browser or use a local server:
```bash
# Using Python 3
python -m http.server 8000

# Or using Node.js http-server
npx http-server
```

### 🌐 Free Deployment to Netlify

1. **Push to GitHub**
   - Create a new public repository on GitHub
   - Push this code to your repository

2. **Deploy to Netlify** (easiest)
   - Go to https://netlify.com
   - Click "Add new project" → "Connect to Git"
   - Select your GitHub repository
   - Netlify will automatically build and deploy! 🎉
   - Your site will be live at `your-site-name.netlify.app`

3. **Or Deploy Manually to Netlify**
   - Go to https://netlify.com/drop
   - Drag and drop your entire `wedding` folder
   - Your site is instantly live!

### 📦 Alternative Free Hosting Options

- **Vercel**: https://vercel.com (Similar to Netlify)
- **GitHub Pages**: Free hosting directly from your repository
- **Firebase Hosting**: https://firebase.google.com/hosting

## 🎨 Customization

Edit the following:
- `index.html` - Update names, times, locations, contact info
- `style.css` - Modify colors (search for `#d4af37` for gold color)
- `images/` - Replace with your own photos

## 📸 Image Optimization

To re-optimize images (if you replace them):
```bash
npm install sharp --save-dev
node optimize-images.js
```

This creates optimized versions in `images-optimized/` folder.

## 📞 Contact
- Email: tumanyangrigor578@gmail.com
- Phone: +37498502609

---

Made with ❤️ for Grigor & Larisa

