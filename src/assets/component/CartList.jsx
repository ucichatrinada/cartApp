import React from 'react';
import CartItem from './CartItem';

const CartList = ({ products, quantities, setQuantities }) => {
  return (
    <div>
      {products.map((product, index) => (
        <CartItem
          key={product.id}
          product={product}
          quantity={quantities[index]}
          setQuantity={(quantity) => {
            const newQuantities = [...quantities];
            newQuantities[index] = quantity;
            setQuantities(newQuantities);
          }}
        />
      ))}
    </div>
  );
};

export default CartList; 


