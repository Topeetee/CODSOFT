import React, { useState } from 'react';
import { useCart } from '../../hooks/cartContext';
import Navbar from '../component/Navbar'
import { Link } from 'react-router-dom';

const CartPage = () => {
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
                    <div>
                        <ul>
                            {cart.map((item) => (
                                <li key={item.id}>
                                    <div className=' flex '>
                                        <div className=' flex'>
                                        <img src={item.Image} alt={item.name} className=' w-36 h-36' />
                                        <h3 className=''>{item.name}</h3>
                                        <p>Price: ${item.price.toFixed(2)}</p>
                                        </div>

                                        <div>
                                            <button onClick={() => handleDecrement(item.id)}>-</button>
                                            <span>{quantity[item.id] || 1}</span>
                                            <button onClick={() => handleIncrement(item.id)}>+</button>
                                        </div>
                                        <p>Total Price: ${(item.price * (quantity[item.id] || 1)).toFixed(2)}</p>
                                    </div>
                                    <button onClick={() => handleRemoveCart(item.id)}>Remove from Cart</button>
                                </li>
                            ))}
                        </ul>
                        <p>Final Price for All Products: ${calculateTotalPrice()}</p>
                        <button>Checkout</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartPage;
