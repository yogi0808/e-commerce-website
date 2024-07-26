import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    orders: [],
    allOrders: []
}

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        setOrders: (state, action) => {
            state.orders = action.payload
        },
        setAllOrders: (state, action) => {
            state.allOrders = action.payload
        },
        changeStatus: (state, action) => {
            const newOrders = state.allOrders.forEach(p => {
                if (p._id === action.payload.orderId) {
                    p.status = action.payload.status
                }
                return p
            })
            state.allOrders = newOrders
        }
    }
})

export const { setOrders, setAllOrders, changeStatus } = orderSlice.actions
export default orderSlice.reducer