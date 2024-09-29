import React from 'react';
import './Counter.css';

const Counter = ({ quantity, setQuantity }) => {
  const increment = () => setQuantity(quantity + 1);
  const decrement = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  return (
    <div className='counter'>
      <button onClick={decrement}>-</button>
      <span className='quantity'>{quantity}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;

/*import React, { useState } from 'react';

const Counter = () => {
  const [quantity, setQuantity] = useState(0); // State lokal di sini

  const increase = () => setQuantity(quantity + 1);
  const decrease = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  return (
    <div>
      <button onClick={decrease}>-</button>
      <span>{quantity}</span>
      <button onClick={increase}>+</button>
    </div>
  );
};

export default Counter;*/

