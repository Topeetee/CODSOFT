import { BrowserRouter,Routes, Route, Router } from "react-router-dom";
import React from 'react'
import Home from "./pages/Home";
import Products from "./pages/Products";
import Signup from "./pages/Signup";

const App = () => {
  return (
   <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Products" element={<Products/>}/>
        <Route path="/register" element={<Signup/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App