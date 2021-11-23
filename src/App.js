import React from "react";
// npm install react-currency-format
import "./App.css";
import Navbar from "./Navbar";
import Homepage from "./Homepage";
import Products from "./Products";
import About from "./About";
import Contact from "./Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CheckoutPage from "./CheckoutPage";
import Logout from "./Logout";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<CheckoutPage />} />
        <Route path="/logout"element={<Logout/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
