import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "../Products";
import ProductDetail from "../ProductDetail";

function GlobalRoutes() {
  return (
    <Routes>
      <Route path="/products" element={<Products />} />
      <Route path="/products/:productId" element={<ProductDetail/>} />
    </Routes>
  );
}

export default GlobalRoutes;
