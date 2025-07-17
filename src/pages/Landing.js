import React from 'react';
import { useNavigate } from 'react-router-dom';
import bg from '../assets/bg.jpg';

function Landing() {
  const navigate = useNavigate();
  return (
    <div style={{
      minHeight: '90vh',
      background: `url(${bg}) center/cover no-repeat`,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      textShadow: '0 2px 8px #333',
    }}>
      <h1 style={{fontSize: '3rem', fontWeight: 'bold'}}>GreenLeaf Houseplants</h1>
      <p style={{maxWidth: '600px', fontSize: '1.2rem', margin: '2rem 0'}}>
        Welcome to GreenLeaf Houseplants! We offer a curated selection of beautiful, easy-to-care-for houseplants to brighten your home and purify your air. Discover your new favorite plant today!
      </p>
      <button onClick={() => navigate('/products')} style={{padding: '1rem 2rem', fontSize: '1.2rem', background: '#4caf50', color: '#fff', border: 'none', borderRadius: '6px'}}>Get Started</button>
    </div>
  );
}

export default Landing;
