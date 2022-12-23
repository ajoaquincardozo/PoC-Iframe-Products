import { ProductResponse } from "./ProductResponse";

export type ProductDetailResponse = Omit<ProductResponse, "thumbnail" | "title"> & {
    name: string;
    image: string;
    longDescription: string;
}

export const ProductDetailResponseDefault: ProductDetailResponse  = {
    id: 0,
    price: -1,
    description: "",
    name: "",
    image: "",
    longDescription: ""
}