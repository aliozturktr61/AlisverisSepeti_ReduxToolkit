import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";

const initialState = {
  products: [],
  productsStatus: STATUS.IDLE,
  productDetail: [],
  productDetailStatus: STATUS.IDLE,
};

// Fetch all products
export const getProducts = createAsyncThunk("getproducts", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
});

// Fetch products by category
export const getCategoryProducts = createAsyncThunk(
  "getcategory",
  async (category) => {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );
    const data = await response.json();
    return data;
  }
);

// Fetch product details by ID
export const getDetailProducts = createAsyncThunk(
  "getProduct",
  async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    return data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Handling the getProducts action
    builder
      .addCase(getProducts.pending, (state) => {
        state.productsStatus = STATUS.LOADING;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.productsStatus = STATUS.SUCCESS;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state) => {
        state.productsStatus = STATUS.FAIL;
      });

    // Handling the getDetailProducts action
    builder
      .addCase(getDetailProducts.pending, (state) => {
        state.productDetailStatus = STATUS.LOADING;
      })
      .addCase(getDetailProducts.fulfilled, (state, action) => {
        state.productDetailStatus = STATUS.SUCCESS;
        state.productDetail = action.payload;
      })
      .addCase(getDetailProducts.rejected, (state) => {
        state.productDetailStatus = STATUS.FAIL;
      });

    // Handling the getCategoryProducts action
    builder
      .addCase(getCategoryProducts.pending, (state) => {
        state.productsStatus = STATUS.LOADING;
      })
      .addCase(getCategoryProducts.fulfilled, (state, action) => {
        state.productsStatus = STATUS.SUCCESS;
        state.products = action.payload;
      })
      .addCase(getCategoryProducts.rejected, (state) => {
        state.productsStatus = STATUS.FAIL;
      });
  },
});

export default productSlice.reducer;