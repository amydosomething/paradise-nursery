# Paradise Nursery Shopping Cart

A React-based shopping cart application for an online plant shop featuring various houseplants.

## Features

- **Landing Page**: Welcome page with company information and Get Started button
- **Product Listing**: Browse plants organized by categories (Aromatic, Medicinal, Air Purifying)
- **Shopping Cart**: Manage cart items with quantity controls and delete functionality
- **Redux State Management**: Centralized state management for cart operations
- **Responsive Design**: Modern UI with beautiful styling

## Technologies Used

- React 18
- Redux Toolkit
- React Router DOM
- CSS3

## Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd paradise-nursery
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Build for Production

```bash
npm run build
```

## Deployment

This application can be deployed to GitHub Pages or any static hosting service.

For GitHub Pages:
1. Update the `homepage` field in `package.json`
2. Run `npm run build`
3. Deploy the `build` folder to GitHub Pages

## Project Structure

```
paradise-nursery/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── LandingPage.jsx
│   │   ├── ProductList.jsx
│   │   ├── PlantCard.jsx
│   │   └── ShoppingCart.jsx
│   ├── redux/
│   │   ├── store.js
│   │   └── cartSlice.js
│   ├── App.js
│   ├── App.css
│   └── index.js
└── package.json
```

## License

MIT
