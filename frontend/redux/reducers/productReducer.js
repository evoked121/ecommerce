import { createReducer } from "@reduxjs/toolkit";

export const productReducer = createReducer(
  {
    products: [],
    product: {},
  },
  (builder) => {
    builder.addCase("getAllProductsRequest", (state) => {
      state.loading = true;
    });
    builder.addCase("getAdminProductsRequest", (state) => {
      state.loading = true;
    });
    builder.addCase("getProductDetailsRequest", (state) => {
      state.loading = true;
    });
    builder.addCase("getAllProductsSuccess", (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase("getAdminProductsSuccess", (state, action) => {
      state.loading = false;
      state.products = action.payload.products;
      state.inStock = action.payload.inStock;
      state.outOfStock = action.payload.outOfStock;
    });
    builder.addCase("getProductDetailsSuccess", (state, action) => {
      state.loading = false;
      state.product = action.payload;
    });
    builder.addCase("getAllProductsFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase("getAdminProductsFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase("getProductDetailsFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase("clearError", (state) => {
      state.error = null;
    });
    builder.addCase("clearMessage", (state) => {
      state.message = null;
    });
  }
);
