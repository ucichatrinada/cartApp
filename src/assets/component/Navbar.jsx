import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'; 
import './Navbar.css'; //import CSS

const Navbar = ({ cartCount, totalPrice }) => {
    return (
      <nav className="navbar">
        <h1 className="navbar-title">Welcome to Uci Store!</h1>
        <div className='totaltotal'>
        <div className="navbar-cart">
        <span className="cart-counter">{cartCount}</span> 
          <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" /> 
          <span className="total-price">Total: ${totalPrice}</span>
         
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;

/*const Navbar = ({ cartCount, totalPrice }) => {
  return (
    <nav style={{ backgroundColor: '#333', color: '#fff', padding: '10px' }}>
      <h2>MyStore</h2>
      <div>
        <span style={{ marginRight: '20px' }}>Total: ${totalPrice}</span>
        <span>Cart ({cartCount})</span>
      </div>
    </nav>
  );
};

export default Navbar;*/
