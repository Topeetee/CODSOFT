import React, { useState } from 'react';
import { useCart } from '../../hooks/cartContext';
import Navbar from '../component/Navbar'
import { Link } from 'react-router-dom';
import {AiOutlineDelete} from "react-icons/ai"
import { useNavigate } from 'react-router-dom'; 

const CartPage = () => {
    const navigate = useNavigate()
    const { cart, removeFromCart } = useCart();
    const [quantity, setQuantity] = useState({}); // State to store quantity for each product

    const handleRemoveCart = (productId) => {
        console.log("remove")
        removeFromCart(productId)
    }

    const handleIncrement = (productId) => {
        setQuantity({
            ...quantity,
            [productId]: (quantity[productId] || 0) + 1,
        });
    }

    const handleDecrement = (productId) => {
        if (quantity[productId] > 1) {
            setQuantity({
                ...quantity,
                [productId]: (quantity[productId] || 0) - 1,
            });
        } else {
            handleRemoveCart(productId);
        }
    }

    const isEmpty = cart.length === 0;

    const calculateTotalPrice = () => {
        let totalPrice = 0;
        cart.forEach((item) => {
            totalPrice += (item.price * (quantity[item.id] || 1));
        });
        return totalPrice.toFixed(2);
    };
    const handleCheckout = () => {
        // Create a JSON object with cart details
        const checkoutData = {
            cart,
            quantity,
            totalPrice: calculateTotalPrice(),
        };

        // Make a POST request to send checkout data to the server
        fetch('http://localhost:8080/api/cart/addToCart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(checkoutData),
        })
            .then((response) => response.json())
            .then((data) => {
                navigate("/Order")
            })
            .catch((error) => {
                console.error('Error during checkout:', error);
            });
        };

    return (
        <div>
            <Navbar />
            <div className=' mt-40 fll'>
                <h3 className=' text-2xl lg:text-base font-bold'>Your Cart</h3>
                {isEmpty ? (
                    <div className=' mt-6 lg:mt-4'>
                        <p>Cart is empty. Buy a product to add items to your cart.</p>
                        <Link to="/Products">
                            <button className=' mt-4 lg:mt-2 py-2 px-3 bg-black rounded-md text-white'>Buy a Product</button>
                        </Link>
                    </div>
                ) : (
                    <div>
                        <ul>
                            {cart.map((item) => (
                                <li key={item.id}>
                                    <div className=' flex justify-around  text-center border-t border-teal-600 mt-4 pt-8 pb-5'>
                                        <div className=' flex '>
                                            <img src={item.Image} alt={item.name} className=' w-24 h-34' />
                                            <div className=' ml-6 mt-7'>
                                                <h3 className=' text-lg'>{item.name}</h3>
                                                <p className=' text-base '>Price: ${item.price.toFixed(2)}</p>
                                            </div>

                                        </div>
                                        <div className='flex gap-5'>
                                            <div className=' mt-7 flex gap-7 flex-row  border border-teal-600 px-7'>
                                                <button onClick={() => handleDecrement(item.id)} className=' bg-transparent text-lg'>-</button>
                                                <p className=' text-sm px-4 pt-6'>{quantity[item.id] || 1}</p>
                                                <button onClick={() => handleIncrement(item.id)} className=' bg-transparent text-lg'>+</button>
                                            </div>
                                            <button onClick={() => handleRemoveCart(item.id)}><AiOutlineDelete className=' text-2xl mt-7 bg-none'/></button>
                                        </div>

                                        <p className=' mt-10'> ${(item.price * (quantity[item.id] || 1)).toFixed(2)}</p>
                                    </div>

                                </li>
                            ))}
                        </ul>
                        <div className=' float-right mt-7 mr-9 mb-8'>
                        <p>Total price: ${calculateTotalPrice()}</p>
                        
                        <Link to="/Order"><button className=' mt-4 bg-black rounded px-7 py-4 text-white font-semibold' onClick={handleCheckout}>Checkout</button></Link>
                        </div>
                        
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartPage;
