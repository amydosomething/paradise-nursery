import React from 'react';
import PlantCard from './PlantCard';
import plantsData from '../data/plantsData';
import './ProductList.css';

const ProductList = () => {
  // Group plants by category
  const categories = [...new Set(plantsData.map(plant => plant.category))];

  return (
    <div className="product-list-page">
      <div className="product-list-header">
        <h1>Our Plant Collection</h1>
        <p>Discover the perfect plants to transform your space</p>
      </div>

      {categories.map(category => {
        const categoryPlants = plantsData.filter(plant => plant.category === category);
        
        return (
          <div key={category} className="category-section">
            <h2 className="category-title">{category}</h2>
            <div className="plants-grid">
              {categoryPlants.map(plant => (
                <PlantCard key={plant.id} plant={plant} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
