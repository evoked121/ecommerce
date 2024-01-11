import { createReducer } from "@reduxjs/toolkit";

export const otherReducer = createReducer({}, (builder) => {
  builder.addCase("updatePasswordRequest", (state) => {
    state.loading = true;
  });
  builder.addCase("updateProfileRequest", (state) => {
    state.loading = true;
  });
  builder.addCase("updatePicRequest", (state) => {
    state.loading = true;
  });
  builder.addCase("placeOrderRequest", (state) => {
    state.loading = true;
  });
  builder.addCase("processOrderRequest", (state) => {
    state.loading = true;
  });
  builder.addCase("addCategoryRequest", (state) => {
    state.loading = true;
  });
  builder.addCase("deleteCategoryRequest", (state) => {
    state.loading = true;
  });
  builder.addCase("addProductRequest", (state) => {
    state.loading = true;
  });
  builder.addCase("updateProductRequest", (state) => {
    state.loading = true;
  });
  builder.addCase("updateProductImageRequest", (state) => {
    state.loading = true;
  });
  builder.addCase("deleteProductImageRequest", (state) => {
    state.loading = true;
  });
  builder.addCase("deleteProductRequest", (state) => {
    state.loading = true;
  });
  builder.addCase("forgetPasswordRequest", (state) => {
    state.loading = true;
  });
  builder.addCase("resetPasswordRequest", (state) => {
    state.loading = true;
  });
  builder.addCase("updatePasswordSuccess", (state, action) => {
    state.loading = false;
    state.message = action.payload;
  });
  builder.addCase("updateProfileSuccess", (state, action) => {
    state.loading = false;
    state.message = action.payload;
  });
  builder.addCase("updatePicSuccess", (state, action) => {
    state.loading = false;
    state.message = action.payload;
  });
  builder.addCase("placeOrderSuccess", (state, action) => {
    state.loading = false;
    state.message = action.payload;
  });
  builder.addCase("processOrderSuccess", (state, action) => {
    state.loading = false;
    state.message = action.payload;
  });
  builder.addCase("addCategorySuccess", (state, action) => {
    state.loading = false;
    state.message = action.payload;
  });
  builder.addCase("deleteCategorySuccess", (state, action) => {
    state.loading = false;
    state.message = action.payload;
  });
  builder.addCase("addProductSuccess", (state, action) => {
    state.loading = false;
    state.message = action.payload;
  });
  builder.addCase("updateProductSuccess", (state, action) => {
    state.loading = false;
    state.message = action.payload;
  });
  builder.addCase("updateProductImageSuccess", (state, action) => {
    state.loading = false;
    state.message = action.payload;
  });
  builder.addCase("deleteProductImageSuccess", (state, action) => {
    state.loading = false;
    state.message = action.payload;
  });
  builder.addCase("deleteProductSuccess", (state, action) => {
    state.loading = false;
    state.message = action.payload;
  });
  builder.addCase("forgetPasswordSuccess", (state, action) => {
    state.loading = false;
    state.message = action.payload;
  });
  builder.addCase("resetPasswordSuccess", (state, action) => {
    state.loading = false;
    state.message = action.payload;
  });
  builder.addCase("updatePasswordFail", (state, action) => {
    state.loading = false;
    state.error = action.payload;
  });
  builder.addCase("updateProfileFail", (state, action) => {
    state.loading = false;
    state.error = action.payload;
  });
  builder.addCase("updatePicFail", (state, action) => {
    state.loading = false;
    state.error = action.payload;
  });
  builder.addCase("placeOrderFail", (state, action) => {
    state.loading = false;
    state.error = action.payload;
  });
  builder.addCase("processOrderFail", (state, action) => {
    state.loading = false;
    state.error = action.payload;
  });
  builder.addCase("addCategoryFail", (state, action) => {
    state.loading = false;
    state.error = action.payload;
  });
  builder.addCase("deleteCategoryFail", (state, action) => {
    state.loading = false;
    state.error = action.payload;
  });
  builder.addCase("addProductFail", (state, action) => {
    state.loading = false;
    state.error = action.payload;
  });
  builder.addCase("updateProductFail", (state, action) => {
    state.loading = false;
    state.error = action.payload;
  });
  builder.addCase("updateProductImageFail", (state, action) => {
    state.loading = false;
    state.error = action.payload;
  });
  builder.addCase("deleteProductImageFail", (state, action) => {
    state.loading = false;
    state.error = action.payload;
  });
  builder.addCase("deleteProductFail", (state, action) => {
    state.loading = false;
    state.error = action.payload;
  });
  builder.addCase("forgetPasswordFail", (state, action) => {
    state.loading = false;
    state.error = action.payload;
  });
  builder.addCase("resetPasswordFail", (state, action) => {
    state.loading = false;
    state.error = action.payload;
  });
  builder.addCase("clearError", (state) => {
    state.error = null;
  });
  builder.addCase("clearMessage", (state) => {
    state.message = null;
  });
});
