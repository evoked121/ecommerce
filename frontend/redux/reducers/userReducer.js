import { createReducer } from "@reduxjs/toolkit";

export const userReducer = createReducer({}, (builder) => {
  builder.addCase("loginRequest", (state) => {
    state.loading = true;
  });
  builder.addCase("loadUserRequest", (state) => {
    state.loading = true;
  });
  builder.addCase("logoutRequest", (state) => {
    state.loading = true;
  });
  builder.addCase("registerRequest", (state) => {
    state.loading = true;
  });
  builder.addCase("loginSuccess", (state, action) => {
    state.loading = false;
    state.isAuthenticated = true;
    state.message = action.payload;
  });
  builder.addCase("loadUserSuccess", (state, action) => {
    state.loading = false;
    state.isAuthenticated = true;
    state.user = action.payload;
  });
  builder.addCase("logoutSuccess", (state, action) => {
    state.loading = false;
    state.isAuthenticated = false;
    state.message = action.payload;
    state.user = null;
  });
  builder.addCase("registerSuccess", (state, action) => {
    state.loading = false;
    state.isAuthenticated = true;
    state.message = action.payload;
  });

  builder.addCase("loginFail", (state, action) => {
    state.loading = false;
    state.isAuthenticated = false;
    state.error = action.payload;
  });
  builder.addCase("loadUserFail", (state, action) => {
    state.loading = false;
    state.isAuthenticated = false;
    state.error = action.payload;
  });
  builder.addCase("logoutFail", (state, action) => {
    state.loading = false;
    state.isAuthenticated = true;
    state.error = action.payload;
  });
  builder.addCase("registerFail", (state, action) => {
    state.loading = false;
    state.isAuthenticated = false;
    state.error = action.payload;
  });

  builder.addCase("clearError", (state) => {
    state.error = null;
  });
  builder.addCase("clearMessage", (state) => {
    state.message = null;
  });
});
