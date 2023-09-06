  import React, { useState } from 'react';
  import { useCart } from '../../hooks/cartContext';
  
  const ProductCard = ({ product}) => {
      const { addToCart } = useCart();
    const { id, name, price, description, image } = product;

    const handleAddToCart = () => {
      alert(`Added ${name} to cart.`);
      addToCart(product);
    };

    return (
      <div
        className={`product-card flex flex-col ${
          product.length === 1 ? 'w-full' : 'w-1/2'
        } px-2 mb-4`}
      >
        <img src={image} alt="image" />
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-gray-600">${price.toFixed(2)}</p>
        <p>{description}</p>
        <button
          onClick={handleAddToCart}
          className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add to Cart
        </button>
      </div>
    );
  };
  
  export default ProductCard;