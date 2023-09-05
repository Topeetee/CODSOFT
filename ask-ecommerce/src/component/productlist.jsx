import React, { useState } from 'react';
import ProductCard from './ProductCard'; // Import the ProductCard component

const ProductList = ({ cart ,limit,products}) => {
  const [cartItems, setCartItems] = useState([]);
  const items = limit ? products.slice(0, limit) : products;

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="product-list flex flex-row flex-wrap justify-between">
      {items.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
