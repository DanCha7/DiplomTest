import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ISneakers, IProductsState } from "./types";

interface IFetchProductsParams {
  gender: string;
  sizes: number[];
}

export const fetchProducts = createAsyncThunk<
  ISneakers[],
  IFetchProductsParams
>("products/fetchProducts", async (params) => {
  const sizes = params.sizes.map((size) => `sizes[]=${size}`).join("&");

  try {
    const response = await axios.get(
      `https://47f892b7adaad3aa.mokky.dev/dproducts/?gender=${params.gender}${
        params.sizes.length ? `&${sizes}` : ""
      }`
    );

    return response.data;
  } catch (error) {
    console.log(`Error fetching products ${error}`);
    throw error;
  }
});

const initialState: IProductsState = {
  products: [] as ISneakers[],
  status: "idle",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

export default productsSlice.reducer;
