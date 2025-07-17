import React from 'react';

function PlantCard({ plant, inCart, onAdd }) {
  return (
    <div style={{border: '1px solid #ddd', borderRadius: '8px', padding: '1rem', margin: '1rem', width: '200px', background: '#fff'}}>
      <img src={plant.image} alt={plant.name} style={{width: '100%', height: '120px', objectFit: 'cover', borderRadius: '6px'}} />
      <h3>{plant.name}</h3>
      <p>${plant.price}</p>
      <button onClick={() => onAdd(plant)} disabled={inCart} style={{background: inCart ? '#ccc' : '#4caf50', color: '#fff', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px'}}>
        {inCart ? 'Added' : 'Add to Cart'}
      </button>
    </div>
  );
}

export default PlantCard;
