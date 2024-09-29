import React from 'react';
import Counter from './Counter';
import './CartItem.css'; // Import file CSS

const CartItem = ({ product, quantity, setQuantity }) => {
  const totalItemPrice = product.price * quantity;

  return (
    <div className='cartItem'>
      <div className='cartItem-left'>
        <img className='cartItem-img' src={product.image} alt={product.title} />
        <div className='cartItem-details'>
          <h4>{product.title}</h4>
          <p>${product.price.toFixed(2)}</p>
        </div>
      </div>
      <div className='counter-container'>
        <Counter quantity={quantity} setQuantity={setQuantity} />
      </div>
      <p className='cartItem-total'>Total: ${totalItemPrice.toFixed(2)}</p>
    </div>
  );
};

export default CartItem;
