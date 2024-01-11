import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer.js";
import { otherReducer } from "./reducers/otherReducer.js";
import { productReducer } from "./reducers/productReducer.js";
import { cartReducer } from "./reducers/cartReducer.js";

export const store = configureStore({
  reducer: {
    user: userReducer,
    other: otherReducer,
    product: productReducer,
    cart: cartReducer,
  },
});

export const server = "http://192.168.1.91:5004/api/v1";
