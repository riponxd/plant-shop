import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import PlantCard from '../components/PlantCard';
import plantData from '../assets/plantData';

function ProductListing() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const cartIds = cartItems.map(item => item.id);

  // Group by category
  const categories = {};
  plantData.forEach(plant => {
    if (!categories[plant.category]) categories[plant.category] = [];
    categories[plant.category].push(plant);
  });

  return (
    <div style={{padding: '2rem'}}>
      <h2>Our Houseplants</h2>
      {Object.keys(categories).map(cat => (
        <div key={cat} style={{marginBottom: '2rem'}}>
          <h3>{cat}</h3>
          <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {categories[cat].map(plant => (
              <PlantCard
                key={plant.id}
                plant={plant}
                inCart={cartIds.includes(plant.id)}
                onAdd={p => dispatch(addToCart(p))}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductListing;
