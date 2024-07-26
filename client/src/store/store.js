import { configureStore } from "@reduxjs/toolkit";

// Files
import cartReducer from "./features/cart/cartSlice"
import authReducer from "./features/auth/authSlice"
import orderReducer from "./features/order/orderSlice"
import productReducer from "./features/product/productSlice"
import categoryReducer from "./features/category/categorySlice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        category: categoryReducer,
        product: productReducer,
        cart: cartReducer,
        order: orderReducer
    },
})
