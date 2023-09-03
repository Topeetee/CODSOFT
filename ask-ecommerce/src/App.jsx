import { BrowserRouter,Routes, Route, Router } from "react-router-dom";
import React from 'react'
import Home from "./pages/Home";
import Products from "./pages/Products";
import Signup from "./pages/Signup";
import Login from "./pages/Login"
import Order from "./pages/order";
import Cart from "./pages/Cart";
import { CartProvider } from '../hooks/cartContext';

const App = () => {
  return (
    <CartProvider>
   <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Products" element={<Products/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/register" element={<Signup/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Order" element={<Order/>}/>
    </Routes>
   </BrowserRouter>
   </CartProvider>
  )
}

export default App