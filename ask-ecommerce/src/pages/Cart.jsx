import React from 'react';
import { useCart } from '../../hooks/cartContext';
import Navbar from '../component/Navbar'
import { Link } from 'react-router-dom'; // Import Link from React Router

const CartPage = () => {
    const { cart, removeFromCart } = useCart();
    const handleRemoveCart = (item) => {
        console.log("remove")
        removeFromCart(item)
    }
    // Check if the cart is empty
    const isEmpty = cart.length === 0;

    return (
        <div>
            <Navbar />
            <div className=' mt-40 fll'>
                <h1>Your Cart</h1>
                {isEmpty ? (
                    <div>
                        <p>Cart is empty. Buy a product to add items to your cart.</p>
                        <Link to="/Products">
                            <button>Buy a Product</button>
                        </Link>
                    </div>
                ) : (
                    <ul>
                        {cart.map((item) => (
                            <li key={item.id}>
                                <div>
                                    <img src={item.image} alt={item.name} />
                                    <h3 className=''>{item.name}</h3>
                                    <p>Price: ${item.price.toFixed(2)}</p>
                                </div>
                                <button onClick={() =>  handleRemoveCart(item)}>Remove from Cart</button>
                            </li>
                        ))}
                    </ul>
                )}
                <button>Checkout</button>
            </div>
        </div>
    );
};

export default CartPage;
