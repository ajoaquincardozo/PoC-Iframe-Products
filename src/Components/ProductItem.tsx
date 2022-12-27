import React, { useRef } from "react";
import { ProductResponse } from "../Models/ProductResponse";
import { currency } from "../products";
import { AllowedDomainType } from "./Routes";

export default function ProductItem({ product }: { product: ProductResponse}) {
  const addProduct = (product: ProductResponse) => {
    const message = {
        action: "ADD_PRODUCT",
        payload: {
          newProduct: {
            id: product.id,
            price: product.price,
            quantity: 1
          }
        }
    };

    parent.postMessage(message, AllowedDomainType.development);
  };

  const onDetailClick = (id: ProductResponse["id"]) => {
    const message = {
      action: "SHOW_DETAIL",
      payload: {
        id
      }
    }
    parent.postMessage(message, AllowedDomainType.development)
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
        className="w-full h-48"
        src={product.thumbnail}
        alt={product.title}
        onClick={() => onDetailClick(product.id)}
        />
        <div className="px-6 py-4 h-52">
        <div className="flex justify-between items-center">
            <div className="font-bold text-xl">{product.title}</div>
            <div className="flex-end text-base">
            {currency.format(product.price)}
            </div>
        </div>
        <p className="text-gray-700 text-base mt-5">
            {product.description}
        </p>
        </div>
        <div className="px-6 pt-4 pb-6">
        <button
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => addProduct(product)}
        >
            <p className="text-base">Comprar</p>
        </button>
        </div>
    </div>
  );
}