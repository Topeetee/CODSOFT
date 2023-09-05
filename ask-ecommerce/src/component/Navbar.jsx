import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { BsPersonCircle } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const Navbar = ({products}) => {
  const navigate = useNavigate();
  const redirectToLogin = () => {
    navigate('/Login');
  };
  const redirectToCart = () => {
    navigate('/Cart');
  };

  const [searchQuery, setSearchQuery] = useState('');
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="navbar w-full">
      <div className="navContainer h-9 bg-black justify-center text-center">
        <span className="pt-10 text-white font-mono text-lg">
          Free shipping available on all orders!
        </span>
        <div className="down flex justify-around mt-2 pb-5 pt-6 border-b-2 bg-white">
          <div className="navItems">
            <Link to="/">
              <h3 className="font-sans text-xl">Task-Codsoft</h3>
            </Link>
          </div>
          <div className="items flex gap-10">
            <Link to="">
              <p className="font-serif hover:border-b-2 hover:delay-75">Bags</p>
            </Link>
            <Link to="">
              <p className="font-serif hover:border-b-2 hover:delay-75">Shoes</p>
            </Link>
          </div>
          <div className="icon flex gap-10">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchInputChange}
                placeholder="Search products"
                className="border px-3 py-1 rounded-lg"
              />
              {searchQuery && (
                <ul className="absolute top-8 left-0 z-10 bg-white border rounded-lg mt-1">
                  {filteredProducts.map((product) => (
                    <li key={product.id}>
                      <Link to={`/product/${product.id}`}>
                        {product.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <BsPersonCircle onClick={redirectToLogin} size={22} className="pointer" />
            <FaShoppingCart onClick={redirectToCart} size={22} className="pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
