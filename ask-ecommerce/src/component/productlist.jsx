import React, { useState } from 'react';
import ProductCard from './ProductCard'; 
import products from '../product';

const ProductList = ({ cart, limit }) => {
  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  
  const displayedProducts = limit ? filteredProducts.slice(0, limit) : filteredProducts;
  const isSearchVisible =
  location.pathname !== '/' &&
  location.pathname !== '/Cart' &&
  location.pathname !== '/register' &&
  location.pathname !== '/Login';
  const isThereProduct = displayedProducts.length > 0;
  return (
    <div className="product-list ">
      <div className=' flex flex-col'>
      { isSearchVisible &&(
         <div className="relative mb-10 mt-6">
         <input
           type="text"
           value={searchQuery}
           onChange={handleSearchInputChange}
           placeholder="Search products"
           className="border px-3 py-5 rounded-lg outline-none w-96"
         />
       </div>
      )}
      <div className='flex flex-row flex-wrap '>
      {isThereProduct ? (
            displayedProducts.map((product) => (
              <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))
          ) : (
            <p className=' mt-11  text-8xl'>No products match your search.</p>
          )}
    
      </div>
      </div>
     
    </div>
  );
};

export default ProductList;
