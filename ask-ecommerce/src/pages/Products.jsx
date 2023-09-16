import React from 'react'
import Navbar from '../component/Navbar'
import ProductList from '../component/Productlist'
import products from '../product'


const Products = () => {
  return (
    <div className='  fll scroll-smooth '>
      <div>
      <Navbar />
        <div className=" mt-28 ml-24 mr-24">
        <ProductList />
        </div>
      </div>
    </div>
  );
};


export default Products