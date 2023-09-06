import React from 'react'
import Navbar from '../component/Navbar'
import ProductList from '../component/Productlist'
import products from '../product'


const Products = () => {
 
  // const [searchQuery, setSearchQuery] = useState('');

  // const handleSearchInputChange = (event) => {
  //   setSearchQuery(event.target.value);
  // };

  // const filteredProducts = products.filter((product) =>
  //   product.name.toLowerCase().includes(searchQuery.toLowerCase())
  // );
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