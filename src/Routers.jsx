import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout/Layout";

import Home from "./pages/home/home";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Cart from "./pages/Cart/Cart";
import DataContext from "./context/DataContext";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import CartProvider from "./context/CartProvider";
import Checkout from "./pages/checkout/Checkout";
import ProductCategory from "./pages/productTipes/ProductCategory";
import Premium from "./pages/premium/Premium";

const Routers = () => {
  return (
    <DataContext>
      <CartProvider>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/product-details/:id" element={<ProductDetails />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/products/:category" element={<ProductCategory />} />
              <Route path="/premium/:category" element={<Premium />} />
            </Route>
          </Routes>
        </Router>
      </CartProvider>
    </DataContext>
  );
};

export default Routers;
