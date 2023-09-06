import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      setCart(parsedCart);
      setCartItemCount(parsedCart.length); // Calculate cartItemCount based on the stored cart data
    }
  }, []); // Run this effect only once during initialization

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    setCartItemCount(cart.length);
  }, [cart]);

  const addToCart = (product) => { 
    setCart([...cart, product]);
    setCartItemCount(cartItemCount + 1);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    setCartItemCount(cartItemCount - 1);  
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, cartItemCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
