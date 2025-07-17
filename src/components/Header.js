import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const cartCount = useSelector(state => state.cart.items.reduce((sum, item) => sum + item.quantity, 0));
  const location = useLocation();

  return (
    <header style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', background: '#fff', boxShadow: '0 2px 8px #eee'}}>
      <div style={{fontWeight: 'bold', fontSize: '1.5rem'}}>GreenLeaf Houseplants</div>
      <nav>
        <Link to="/products" style={{marginRight: '1rem', textDecoration: location.pathname === '/products' ? 'underline' : 'none'}}>Products</Link>
        <Link to="/cart" style={{marginRight: '1rem', textDecoration: location.pathname === '/cart' ? 'underline' : 'none'}}>Cart</Link>
      </nav>
      <div>
        <Link to="/cart" style={{textDecoration: 'none', color: 'inherit'}}>
          <span role="img" aria-label="cart" style={{fontSize: '1.5rem'}}>🛒</span>
          <span style={{marginLeft: '0.5rem', fontWeight: 'bold'}}>{cartCount}</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
