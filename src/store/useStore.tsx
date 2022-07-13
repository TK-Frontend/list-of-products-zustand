import create from "zustand";
import { Product } from "../models/product.model";
import createProductsSlice from "./slices/createProductsSlice";

interface ProductsState {
  products: Product[];
  searchedId: Number;
  setSearchedProductId: (productId: number) => void;
  filteredProducts: Product[];
  filterById: (productId: number) => void;
  getProducts: () => void;
}

const useStore = create<ProductsState>((set: Function, get: Function) => ({
  ...createProductsSlice(set, get),
}));

export default useStore;
