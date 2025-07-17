import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease, remove, clear } from '../redux/cartSlice';
import CartItem from '../components/CartItem';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{padding: '2rem'}}>
      <h2>Your Shopping Cart</h2>
      <p>Total Plants: {totalCount}</p>
      <p>Total Cost: ${totalCost.toFixed(2)}</p>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {items.map(item => (
            <CartItem
              key={item.id}
              item={item}
              onIncrease={id => dispatch(increase(id))}
              onDecrease={id => dispatch(decrease(id))}
              onRemove={id => dispatch(remove(id))}
            />
          ))}
          <button onClick={() => alert('Coming Soon!')} style={{marginRight: '1rem', padding: '0.5rem 1rem'}}>Checkout</button>
          <button onClick={() => navigate('/products')} style={{padding: '0.5rem 1rem'}}>Continue Shopping</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
