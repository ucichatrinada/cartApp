import React, { useState, useEffect } from 'react';
import Navbar from './assets/component/Navbar';
import Cartlist from '.assets/component/cartlist';

const App = () => {
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState([]);

  // Fetch products from API
  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=5')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setQuantities(new Array(data.length).fill(0)); // Default quantity is 0 for each product / Inisialisasi quantities dengan nilai 0 untuk setiap produk
      });
  }, []);

  // Calculate total items and total price
  const cartCount = quantities.reduce((total, quantity) => total + quantity, 0);
  const totalPrice = quantities.reduce((total, quantity, index) => total + quantity * products[index].price, 0);

  return (
    <div>
      <Navbar cartCount={cartCount} totalPrice={totalPrice.toFixed(2)} />
      <Cartlist products={products} quantities={quantities} setQuantities={setQuantities} />
    </div>
  );
};

export default App;


