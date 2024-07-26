import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: JSON.parse(localStorage.getItem("userData")) || null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.userInfo = action.payload
        },
        logout: (state) => {
            state.userInfo = null
        },
        updateUser: (state, action) => {
            const newUser = { ...state.userInfo, ...action.payload }

            state.userInfo = newUser

            localStorage.setItem("userData", JSON.stringify(newUser))
        }
    }
})

export const { login, logout, updateUser } = authSlice.actions

export default authSlice.reducer