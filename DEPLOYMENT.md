# Deployment Guide for Paradise Nursery

## Prerequisites
- Node.js installed (v14 or higher)
- Git installed
- GitHub account

## Step 1: Initialize Git Repository

```bash
cd d:\NOTES\coursera1
git init
git add .
git commit -m "Initial commit: Paradise Nursery Shopping Cart"
```

## Step 2: Create GitHub Repository

1. Go to GitHub (https://github.com)
2. Click the "+" icon in the top right
3. Select "New repository"
4. Name it "paradise-nursery" (or your preferred name)
5. Keep it public
6. Do NOT initialize with README (we already have one)
7. Click "Create repository"

## Step 3: Link Local Repository to GitHub

Replace `YOUR_USERNAME` with your GitHub username:

```bash
git remote add origin https://github.com/YOUR_USERNAME/paradise-nursery.git
git branch -M main
git push -u origin main
```

## Step 4: Install Dependencies

```bash
npm install
```

## Step 5: Test Locally

```bash
npm start
```

The app should open at http://localhost:3000

## Step 6: Deploy to GitHub Pages

### Option A: Using gh-pages package (Recommended)

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Update `package.json` - add these scripts and homepage:
```json
{
  "homepage": "https://YOUR_USERNAME.github.io/paradise-nursery",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

3. Deploy:
```bash
npm run deploy
```

4. Enable GitHub Pages:
   - Go to your repository on GitHub
   - Click "Settings"
   - Scroll to "Pages" section
   - Source should be set to "gh-pages" branch
   - Your site will be live at: https://YOUR_USERNAME.github.io/paradise-nursery

### Option B: Manual Deployment

1. Build the project:
```bash
npm run build
```

2. The `build` folder contains your production-ready app

3. Push to GitHub:
```bash
git add .
git commit -m "Build for production"
git push
```

4. In GitHub repository settings:
   - Go to Settings > Pages
   - Select "main" branch and "/build" folder
   - Save

## Step 7: Verify Deployment

Visit your deployed site:
- https://YOUR_USERNAME.github.io/paradise-nursery

## Troubleshooting

### Blank page after deployment
- Make sure `homepage` in package.json is correct
- Check browser console for errors
- Ensure all routes use HashRouter or BrowserRouter correctly

### Images not loading
- Verify image URLs are absolute (starting with https://)
- Check browser console for CORS errors

### 404 errors on refresh
- GitHub Pages doesn't support client-side routing by default
- Add a 404.html that redirects to index.html
- Or use HashRouter instead of BrowserRouter

## Alternative Hosting Options

### Netlify
1. Create account at netlify.com
2. Drag and drop the `build` folder
3. Or connect GitHub repository for automatic deployments

### Vercel
1. Create account at vercel.com
2. Import GitHub repository
3. Vercel will auto-detect React and deploy

### Render
1. Create account at render.com
2. Create new Static Site
3. Connect GitHub repository
4. Build command: `npm run build`
5. Publish directory: `build`

## Updating Your Deployment

After making changes:

```bash
git add .
git commit -m "Description of changes"
git push
npm run deploy
```

## Project URLs for Submission

After deployment, you'll need:

1. **GitHub Repository URL**: 
   - https://github.com/YOUR_USERNAME/paradise-nursery

2. **Live Website URL**: 
   - https://YOUR_USERNAME.github.io/paradise-nursery
   - (or your custom domain if configured)

## Notes

- Replace `YOUR_USERNAME` with your actual GitHub username
- The first deployment may take a few minutes to go live
- Always test locally before deploying
- Keep your repository public for GitHub Pages to work (free tier)
