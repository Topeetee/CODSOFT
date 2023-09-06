import React, { useState } from 'react';
import { useCart } from '../../hooks/cartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { id, name, price, description, Image } = product;

  const handleAddToCart = () => {
    alert(`Added ${name} to cart.`);
    addToCart(product);
  };

  return (
    <div
      className={`product-card flex md:flex-col justify-start place-content-center text-left ${product.length === 1 ? 'w-full' : 'w-1/3'
        }  mb-4 pr-7  sm:w-full sm:h-80 sm:mb-20 sm:ml-6 lg:w-1/2 `}
    >
      <div className=' border border-slate-800 rounded-lg sm:flex-col'>
        <div className='flex gap-7 lg:gap-4 sm:gap-1 sm:flex-col'>
          <img src={Image} alt="image" className=' w-52 h-40  lg:h-36 rounded-br-md rounded-tl-lg bg-contain' />
          <div className=' flex flex-col mt-9 sm:mt-0 sm:ml-4 lg:mr-3'>
            <h2 className="text-lg font-semibold lg:text-base">{name}</h2>
            <p className="text-gray-600 lg:text-sm">${price.toFixed(2)}</p>
          </div>
        </div>
        <p className=' text-base mt-4 px-2'>{description}</p>
        <button
          onClick={handleAddToCart}
          className=" py-2 w-full mt-2 bg-slate-800 hover:bg-slate-700 text-blue-100 font-bold  rounded-b hover:outline-none"
        >
          Add to Cart
        </button>
      </div>

    </div>
  );
};

export default ProductCard;