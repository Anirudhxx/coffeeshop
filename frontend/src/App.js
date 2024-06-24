import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import CoffeeShopDetails from "./pages/CoffeeShopDetails";
import "./App.css";
import CartPage from "./components/CartPage";
import { CartProvider } from "./components/CartContext";
import { GoogleOAuthProvider } from '@react-oauth/google';
const clientId = process.env.CLIENTID || '';
function App() {
  return (
    <GoogleOAuthProvider clientId={clientId}>    <CartProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/coffee-shop/:id" element={<CoffeeShopDetails />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
