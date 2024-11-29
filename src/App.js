import React from "react";
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from "react-use-cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home/home";
import { About } from "./About/about";
import { Contact } from "./Contact/contact";

function Makaan(){
  return(
    <>
    <CartProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </CartProvider>
    </>
  )
}
export{Makaan}