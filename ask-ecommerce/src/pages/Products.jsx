import React from 'react'
import Navbar from '../component/Navbar'
import ProductList from '../component/Productlist'
import products from '../product';


const Products = () => {
  return (
    <div><Navbar products={products}/>
      <ProductList products={products}/>
    </div>
  )
}

export default Products