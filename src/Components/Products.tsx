import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import { getProducts } from "../products";
import { ProductResponse } from "../Models/ProductResponse";

export default function Products() {
  const [products, setProducts] = useState<ProductResponse[]>([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-6">
      {products.map(product => <ProductItem key={product.id} product={product} />)}
    </div>
  );
}