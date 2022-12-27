import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import { getCookie, getProducts } from "../products";
import { ProductResponse } from "../Models/ProductResponse";

export default function Products() {
  const [products, setProducts] = useState<ProductResponse[]>([]);
  const [cookie, setCookie] = useState("");

  useEffect(() => {
    getProducts().then(setProducts);
    setCookie(getCookie("auth-login"));
  }, []);

  return (
    <div className="grid grid-cols-4 gap-6">
      Cookie: {cookie}
      {products.map(product => <ProductItem key={product.id} product={product} />)}
    </div>
  );
}