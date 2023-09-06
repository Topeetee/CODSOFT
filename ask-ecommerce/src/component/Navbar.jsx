import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { BsPersonCircle } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useCart } from '../../hooks/cartContext';
const Navbar = () => {
  const navigate = useNavigate();
  const redirectToLogin = () => {
    navigate('/Login');
  };
  const redirectToCart = () => {
    navigate('/Cart');
  };
  const { cartItemCount } = useCart();
  

  const handleSearchInputChange = (event) => {
    const dat = event.target.value;
    console.log(dat);
  };

  const location = useLocation();
  const isSearchVisible =
    location.pathname !== '/' &&
    location.pathname !== '/Cart' &&
    location.pathname !== '/register' &&
    location.pathname !== '/Login';

  return (
    <div className="navbar w-full">
      <div className="navContainer h-9 bg-black justify-center text-center">
        <span className="pt-10 text-white font-mono text-lg sm:text-sm">
          Free shipping available on all orders!
        </span>
        <div className="down flex justify-around mt-2 pb-5 pt-6 border-b-2 bg-white">
          <div className="navItems">
            <Link to="/">
              <h3 className="font-sans text-xl sm:text-base sm:font-bold font-bold">Task-Codsoft</h3>
            </Link>
          </div>
          <div className="items flex gap-6">
            <Link to="">
              <p className="font-serif hover:border-b-2 hover:delay-75 sm:text-base">Bags</p>
            </Link>
            <Link to="">
              <p className="font-serif hover:border-b-2 hover:delay-75 sm:text-base">Shoes</p>
            </Link>
          </div>
          <div className=' flex gap-6 sm:gap-2'>
            <BsPersonCircle onClick={redirectToLogin} size={22}  className="pointer" />
            <div className=' relative'>
              <FaShoppingCart onClick={redirectToCart} size={22} className="pointer relative"/>
              <span className="cart-item-count bottom-2 -right-2 bg-black text-white font-bold text-xs px-1 rounded-full absolute"  style={{ color: 'white' }}>
                  {cartItemCount}
                </span>
            </div>

          </div>
     
        </div>
      </div>
    </div>
  );
};

export default Navbar;
