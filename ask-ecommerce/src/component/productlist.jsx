import React, { useState } from 'react';
import products from '../../src/product'; // Import your product data
import ProductCard from './ProductCard'; // Import the ProductCard component

const ProductList = ({ cart }) => {
  const [cartItems, setCartItems] = useState([]);

  // Define the addToCart function to add items to the cart
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="product-list flex flex-row flex-wrap justify-between">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
