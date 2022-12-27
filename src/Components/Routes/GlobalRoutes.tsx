import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "../Products";
import ProductDetail from "../ProductDetail";
const Home = () => <></>;

function GlobalRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:productId" element={<ProductDetail/>} />
    </Routes>
  );
}

export default GlobalRoutes;
