import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    products: [],
    delivery: "free"
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setCart: (state, action) => {
            state.products = action.payload
        },
        addToCart: (state, action) => {
            state.products.push(action.payload)
        },
        deleteFromCart: (state, action) => {
            state.products = state.products.filter(p => p._id !== action.payload)
        },
        modifyQuantity: (state, action) => {
            let i
            for (i = 0; i <= state.products.length - 1; i++) {
                if (state.products[i]._id === action.payload.itemId) {
                    state.products[i].quantity = action.payload.quantity
                }
            }
        },
        setDeliveryMethod: (state, action) => {
            state.delivery = action.payload
        }
    }
})

export const { setCart, addToCart, deleteFromCart, modifyQuantity, setDeliveryMethod } = cartSlice.actions
export default cartSlice.reducer