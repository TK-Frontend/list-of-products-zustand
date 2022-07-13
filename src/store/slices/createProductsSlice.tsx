import axios from "axios";
import { Product } from "../../models/product.model";

const createProductsSlice = (set: Function, get: Function) => ({
  products: [],
  searchedId: 0,
  filteredProducts: [],

  getProducts: async () => {
    const response = await axios.get("https://reqres.in/api/products");
    set({ products: await response.data.data });
  },

  filterById: (productId: number) => {
    set({
      filteredProducts: get().products.filter(
        (item: Product) => item.id === productId
      ),
    });
  },

  setSearchedProductId: (productId: number) => {
    set({
      searchedId: productId,
    });
  },
});

export default createProductsSlice;
