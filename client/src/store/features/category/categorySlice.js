import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: []
}

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        setCategories: (state, action) => {
            state.categories = action.payload
        },
        addSingleCategory: (state, action) => {
            state.categories.push(action.payload)
        },
        removeCategory: (state, action) => {
            state.categories = state.categories.filter(c => c._id !== action.payload)
        }
    }
})

export const { setCategories, addSingleCategory, removeCategory } = categorySlice.actions
export default categorySlice.reducer