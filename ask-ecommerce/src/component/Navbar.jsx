import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch} from "react-icons/fa";
import { FaShoppingCart} from "react-icons/fa";
import { BsPersonCircle } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    const navigate = useNavigate();
    const redirectToLogin = () => {
        navigate('/Login'); 
      };
      const redirectToCart = ()=>{
        navigate('/Cart')
      }
    return (
        <div className="navbar w-full ">
            <div className="navContainer h-9 bg-black justify-center text-center">
                <span className=" pt-10 text-white font-mono text-lg">Free shipping available on all orders!</span>
                <div className="down flex justify-around mt-2 pb-5 pt-6 border-b-2 bg-white">
                    <div className="navItems">
                   <Link to="/"><h3 className=' font-sans text-xl'>Task-Codsoft</h3></Link>
                    </div>
                    <div className='items flex gap-10'>
                        <Link to=""><p className=' font-serif hover:border-b-2 hover:delay-75'>Bags</p></Link>
                        <Link to=""><p className=' font-serif hover:border-b-2 hover:delay-75'>Shoes</p></Link>
                    </div>
                    <div className='icon flex gap-10'>
                    <FaSearch  size={22} className='pointer'/>
                    <BsPersonCircle onClick={redirectToLogin} size={22} className='pointer'/>
                    <FaShoppingCart onClick={redirectToCart} size={22} className='pointer'/>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Navbar