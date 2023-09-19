import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { useLocation } from 'react-router-dom';

const ProductList = ({ limit }) => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true); 
    try {
      const response = await fetch('http://localhost:8080/api/products'); 
      if (response.ok) {
        const result = await response.json();
        setProducts(result);
      } else {
        console.error('Error fetching products:', response.status);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
    finally {
      setIsLoading(false); 
    }
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
  product.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayedProducts = limit ? filteredProducts.slice(0, limit) : filteredProducts;

  const isThereProduct = displayedProducts.length > 0;
  const location = useLocation();
  const isSearchVisible =
    location.pathname !== '/' &&
    location.pathname !== '/Cart' &&
    location.pathname !== '/register' &&
    location.pathname !== '/Login';
  return (
    <div className="product-list">
      <div className=' flex flex-col'>
        {isLoading ? ( 
          <p>Loading...</p>
        ) : (
          <>
            {isSearchVisible && (
              <div className="relative mb-10 mt-6">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                  placeholder="Search products"
                  className="border px-3 py-5 rounded-lg outline-none w-96 sm:w-52 sm:py-2"
                />
              </div>
            )}
            <div className='flex flex-row flex-wrap lg:flex-wrap  lg:flex-shrink sm:flex-wrap'>
              {isThereProduct ? (
                displayedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              ) : (
                <p className=' mt-11  text-8xl sm:text-sm'>No products match your search.</p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductList;
      
