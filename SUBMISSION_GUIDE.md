# 📋 Coursera Submission Guide

## Complete Step-by-Step Instructions for Project Submission

### ⏱️ Estimated Time: 30-45 minutes

---

## Phase 1: Local Testing (10 minutes)

### Step 1.1: Install Dependencies
```bash
cd d:\NOTES\coursera1
npm install
```

**Expected Output**: 
- Dependencies installing
- No errors
- `node_modules` folder created

### Step 1.2: Start Development Server
```bash
npm start
```

**Expected Output**:
- Compiled successfully
- Browser opens to http://localhost:3000
- Landing page displays

### Step 1.3: Test All Features

**Landing Page**:
- [ ] Background image loads
- [ ] Company name "Paradise Nursery" visible
- [ ] Company description readable
- [ ] "Get Started" button works

**Product Listing Page**:
- [ ] All 9 plants display with images
- [ ] Three category sections visible
- [ ] Prices show correctly
- [ ] "Add to Cart" buttons work
- [ ] Buttons disable after clicking
- [ ] Cart icon count increases

**Shopping Cart Page**:
- [ ] Cart items display correctly
- [ ] Total quantity shows
- [ ] Total cost calculates correctly
- [ ] Increase (+) button works
- [ ] Decrease (-) button works
- [ ] Delete button removes items
- [ ] "Continue Shopping" returns to products
- [ ] "Checkout" shows "Coming Soon" alert
- [ ] Empty cart shows proper message

**Navigation**:
- [ ] Header shows on Products and Cart pages
- [ ] Header hidden on Landing page
- [ ] All navigation links work
- [ ] Cart badge updates in real-time

**Stop the server**: Press `Ctrl+C` in terminal

---

## Phase 2: GitHub Setup (10 minutes)

### Step 2.1: Create GitHub Repository

1. Go to https://github.com/new
2. Fill in:
   - **Repository name**: `paradise-nursery` (or your choice)
   - **Description**: "Paradise Nursery Shopping Cart - React & Redux"
   - **Visibility**: ✅ **Public** (required for free GitHub Pages)
   - **Initialize**: ❌ Do NOT check any boxes
3. Click "Create repository"

**Important**: Copy your repository URL. It will look like:
```
https://github.com/YOUR_USERNAME/paradise-nursery.git
```

### Step 2.2: Initialize Git Locally

```bash
# Initialize git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Paradise Nursery Shopping Cart"

# Link to GitHub (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/paradise-nursery.git

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

### Step 2.3: Verify on GitHub

1. Refresh your GitHub repository page
2. You should see all your files
3. Verify these files are present:
   - [ ] `src/redux/store.js`
   - [ ] `src/redux/cartSlice.js`
   - [ ] `src/components/` folder
   - [ ] `package.json`
   - [ ] `README.md`

**✅ Checkpoint**: Your code is now on GitHub!

---

## Phase 3: Deployment to GitHub Pages (15 minutes)

### Step 3.1: Install gh-pages Package

```bash
npm install --save-dev gh-pages
```

### Step 3.2: Update package.json

Open `package.json` and make these changes:

**Replace `YOUR_USERNAME` with your actual GitHub username!**

1. **Add homepage** (add this line near the top, after "name"):
```json
"homepage": "https://YOUR_USERNAME.github.io/paradise-nursery",
```

2. **Add deployment scripts** (add these to the "scripts" section):
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

Your scripts section should look like:
```json
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

**Save the file!**

### Step 3.3: Commit Changes

```bash
git add package.json
git commit -m "Add deployment configuration"
git push
```

### Step 3.4: Deploy to GitHub Pages

```bash
npm run deploy
```

**Expected Output**:
```
> paradise-nursery@1.0.0 predeploy
> npm run build

Creating an optimized production build...
Compiled successfully.

> paradise-nursery@1.0.0 deploy
> gh-pages -d build

Published
```

**⏰ Wait 2-3 minutes** for GitHub Pages to activate.

### Step 3.5: Enable GitHub Pages (if needed)

1. Go to your repository on GitHub
2. Click **Settings**
3. Scroll down to **Pages** (in left sidebar)
4. Under **Source**, it should show:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. You'll see: "Your site is published at https://YOUR_USERNAME.github.io/paradise-nursery"

---

## Phase 4: Verify Deployment (5 minutes)

### Step 4.1: Visit Your Live Site

Open in browser:
```
https://YOUR_USERNAME.github.io/paradise-nursery
```

### Step 4.2: Test Deployed Site

Go through the same testing checklist as Phase 1:

**Critical Tests**:
- [ ] Landing page loads
- [ ] Images display
- [ ] Navigation works
- [ ] Can add items to cart
- [ ] Cart functionality works
- [ ] No console errors (press F12)

**Common Issues**:

**Blank page?**
- Check browser console for errors
- Verify `homepage` in package.json is correct
- Clear cache and hard refresh (Ctrl+Shift+R)

**Images not loading?**
- Check internet connection
- Images use Unsplash CDN

**404 on refresh?**
- This is normal for GitHub Pages with React Router
- Use the navigation links within the app

---

## Phase 5: Coursera Submission (5 minutes)

### Step 5.1: Gather Your URLs

You need TWO URLs:

**1. GitHub Repository URL** (Public):
```
https://github.com/YOUR_USERNAME/paradise-nursery
```

**2. Live Website URL**:
```
https://YOUR_USERNAME.github.io/paradise-nursery
```

### Step 5.2: Submit to Coursera

1. Go to your Coursera course
2. Find the Final Project assignment
3. Fill in the submission form:

**Project Title**: 
```
Paradise Nursery Shopping Cart
```

**GitHub Repository URL**:
```
https://github.com/YOUR_USERNAME/paradise-nursery
```

**Live Website URL**:
```
https://YOUR_USERNAME.github.io/paradise-nursery
```

### Step 5.3: Final Checklist Before Submitting

- [ ] GitHub repository is **public**
- [ ] All files are pushed to GitHub
- [ ] Live site is accessible
- [ ] All features work on live site
- [ ] No console errors
- [ ] URLs are correct (no typos)
- [ ] URLs include `https://` prefix

### Step 5.4: Submit!

Click the submit button on Coursera.

---

## Phase 6: Peer Review Preparation (Optional)

### What Reviewers Will Check

Your peers will verify:

1. **GitHub Repository** (6 points):
   - Repository is public ✅
   - Redux files exist ✅

2. **Landing Page** (5 points):
   - Background image ✅
   - Company description ✅
   - Company name ✅
   - Get Started button ✅

3. **Product Listing** (9 points):
   - 6+ unique plants ✅ (you have 9)
   - 3+ categories ✅
   - Add to Cart functionality ✅

4. **Header** (7 points):
   - Shows on correct pages ✅
   - Cart icon with count ✅
   - Navigation links ✅

5. **Shopping Cart** (23 points):
   - Total items ✅
   - Total cost ✅
   - Item details ✅
   - Increase/decrease ✅
   - Delete button ✅
   - Checkout button ✅
   - Continue Shopping ✅

**Expected Score**: 50/50 ✅

---

## Troubleshooting Common Issues

### Issue 1: npm install fails

**Solution**:
```bash
# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Try again
npm install
```

### Issue 2: Port 3000 already in use

**Solution**:
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID_NUMBER> /F

# Then try npm start again
```

### Issue 3: Git push fails

**Solution**:
```bash
# If you need to authenticate
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Try pushing again
git push -u origin main
```

### Issue 4: Deployment fails

**Solution**:
```bash
# Make sure gh-pages is installed
npm install --save-dev gh-pages

# Try deploying again
npm run deploy
```

### Issue 5: Live site shows 404

**Solution**:
1. Wait 5 minutes (GitHub Pages can be slow)
2. Check Settings → Pages on GitHub
3. Verify `gh-pages` branch exists
4. Clear browser cache
5. Try incognito/private window

---

## Quick Reference Commands

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy

# Git commands
git add .
git commit -m "Your message"
git push
```

---

## Your Submission URLs Template

Copy and fill this out:

```
Project Title: Paradise Nursery Shopping Cart

GitHub Repository URL: 
https://github.com/YOUR_USERNAME/paradise-nursery

Live Website URL: 
https://YOUR_USERNAME.github.io/paradise-nursery
```

**Remember to replace YOUR_USERNAME with your actual GitHub username!**

---

## 🎉 Congratulations!

You've successfully:
- ✅ Built a complete React + Redux application
- ✅ Implemented all required features
- ✅ Deployed to GitHub Pages
- ✅ Submitted to Coursera

**Expected Grade**: 50/50 points

Good luck with your peer reviews! 🚀

---

## Need Help?

1. Check browser console (F12) for errors
2. Review `DEPLOYMENT.md` for detailed instructions
3. Verify all files are in correct locations
4. Test in incognito mode to rule out cache issues
5. Check GitHub repository settings

---

*Last Updated: October 2024*
