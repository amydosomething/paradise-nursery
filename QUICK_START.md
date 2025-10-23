# Quick Start Guide

## 🚀 Get Your Project Running in 5 Minutes

### Step 1: Install Dependencies
```bash
cd d:\NOTES\coursera1
npm install
```

### Step 2: Start Development Server
```bash
npm start
```

Your app will open at http://localhost:3000

### Step 3: Test the Application

1. **Landing Page**: You should see the Paradise Nursery welcome page
2. **Click "Get Started"**: Navigate to the product listing
3. **Add plants to cart**: Click "Add to Cart" on any plant
4. **View cart**: Click the cart icon in the header
5. **Manage quantities**: Use +/- buttons to adjust quantities
6. **Test delete**: Remove items from cart

### Step 4: Deploy to GitHub Pages

#### First Time Setup:

1. **Create GitHub Repository**:
   - Go to https://github.com/new
   - Name: `paradise-nursery`
   - Make it public
   - Don't initialize with README

2. **Update package.json**:
   - Open `package.json`
   - Change `"homepage": "."` to `"homepage": "https://YOUR_USERNAME.github.io/paradise-nursery"`
   - Replace `YOUR_USERNAME` with your GitHub username

3. **Install gh-pages**:
```bash
npm install --save-dev gh-pages
```

4. **Add deployment scripts to package.json**:
Add these to the "scripts" section:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

5. **Initialize Git and Push**:
```bash
git init
git add .
git commit -m "Initial commit: Paradise Nursery"
git remote add origin https://github.com/YOUR_USERNAME/paradise-nursery.git
git branch -M main
git push -u origin main
```

6. **Deploy**:
```bash
npm run deploy
```

7. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Settings → Pages
   - Source should be set to `gh-pages` branch
   - Wait 2-3 minutes

8. **Visit Your Site**:
   - https://YOUR_USERNAME.github.io/paradise-nursery

### Step 5: Submit Your Project

You'll need these two URLs:

1. **GitHub Repository**: `https://github.com/YOUR_USERNAME/paradise-nursery`
2. **Live Website**: `https://YOUR_USERNAME.github.io/paradise-nursery`

## 📋 Features Checklist

Before submitting, verify:

- [ ] Landing page loads with background image
- [ ] "Get Started" button works
- [ ] All 9 plants display with images
- [ ] Plants are grouped in 3 categories
- [ ] "Add to Cart" buttons work and disable after click
- [ ] Cart icon shows correct count
- [ ] Cart page shows all items
- [ ] Increase/decrease buttons work
- [ ] Delete button removes items
- [ ] Total cost updates correctly
- [ ] "Continue Shopping" returns to products
- [ ] "Checkout" shows "Coming Soon" message

## 🐛 Troubleshooting

### Port 3000 already in use
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or use a different port
set PORT=3001 && npm start
```

### Blank page after deployment
- Check that `homepage` in package.json matches your GitHub Pages URL
- Make sure you ran `npm run deploy` not just `npm run build`
- Clear browser cache and hard refresh (Ctrl+Shift+R)

### Images not loading
- Images use Unsplash CDN - requires internet connection
- Check browser console for errors

### npm install fails
- Delete `node_modules` folder and `package-lock.json`
- Run `npm install` again
- Make sure you have Node.js v14 or higher: `node --version`

## 📱 Testing Checklist

### Desktop Testing
- [ ] Chrome
- [ ] Firefox
- [ ] Edge

### Mobile Testing
- [ ] Responsive design works
- [ ] Buttons are clickable
- [ ] Images load properly

### Functionality Testing
- [ ] Add multiple items to cart
- [ ] Increase quantity to 5+
- [ ] Decrease quantity to 1
- [ ] Delete items
- [ ] Navigate between all pages
- [ ] Cart count updates in header

## 🎯 Project Grading Criteria

Your project will be graded on:

1. **GitHub** (6 points): Repository is public, Redux files present
2. **Landing Page** (5 points): Background, company info, Get Started button
3. **Product Listing** (9 points): 6+ plants, 3+ categories, working Add to Cart
4. **Header** (7 points): Shows on correct pages, cart icon with count, navigation
5. **Shopping Cart** (23 points): All cart features working

**Total: 50 points**

## 💡 Tips for Success

1. **Test everything locally first** before deploying
2. **Take screenshots** of each page for your records
3. **Test on different browsers** to ensure compatibility
4. **Check mobile responsiveness** using browser dev tools
5. **Verify all links work** on the deployed site
6. **Double-check URLs** before submitting

## 📞 Need Help?

- Check `DEPLOYMENT.md` for detailed deployment instructions
- Review `PROJECT_CHECKLIST.md` to ensure all requirements are met
- Check browser console (F12) for error messages
- Verify all files are in the correct locations

## 🎉 You're Ready!

Your Paradise Nursery shopping cart application is complete and ready for submission. Good luck with your project!
