import React, { useRef, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductDetailResponse, ProductDetailResponseDefault } from "../Models/ProductDetailResponse";
import { currency, getProductById } from "../products";

export default function ProductDetail() {
  const { productId: id } = useParams();
  const [product, setProduct] = useState<ProductDetailResponse>(ProductDetailResponseDefault);
  const [isLoading, setIsLoading] = useState(true);
  const addToCart = useRef(null);

  useEffect(() => {
    if (id) {
      getProductById(parseInt(id))
        .then(setProduct)
        .finally(() => setIsLoading(false));
    }
  }, []);

  return (
    <>
      {isLoading
        ? ("Cargando....")
        : (
          <div className="grid grid-cols-2 gap-5">
            <div>
              <img src={product.image} alt={product.name}/>
            </div>
            <div>
              <div className="flex">
                <h1 className="font-bold text-3xl flex-grow">{product.name}</h1>
                <div className="font-bold text-3xl flex-end">
                  {currency.format(product.price)}
                </div>
              </div>
              <div ref={addToCart}></div>
              <div className="mt-10">{product.description}</div>
              <div className="mt-10">{product.longDescription}</div>
            </div>
          </div>)
      }
    </>
  );
}