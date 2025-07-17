import React from 'react';

function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  return (
    <div style={{display: 'flex', alignItems: 'center', borderBottom: '1px solid #eee', padding: '1rem 0'}}>
      <img src={item.image} alt={item.name} style={{width: '80px', height: '80px', objectFit: 'cover', borderRadius: '6px', marginRight: '1rem'}} />
      <div style={{flex: 1}}>
        <h4>{item.name}</h4>
        <p>Unit Price: ${item.price}</p>
        <p>Quantity: {item.quantity}</p>
      </div>
      <div>
        <button onClick={() => onIncrease(item.id)} style={{marginRight: '0.5rem'}}>+</button>
        <button onClick={() => onDecrease(item.id)} style={{marginRight: '0.5rem'}} disabled={item.quantity === 1}>-</button>
        <button onClick={() => onRemove(item.id)} style={{color: 'red'}}>Delete</button>
      </div>
    </div>
  );
}

export default CartItem;
