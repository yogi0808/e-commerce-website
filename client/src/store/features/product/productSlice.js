import { createSlice } from "@reduxjs/toolkit";
import { calcSellPrice } from "../../../utils/helper";

const initialState = {
    products: [],
    page: 1
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload
        },
        addSingleProduct: (state, action) => {
            state.products.push(action.payload)
        },
        addProducts: (state, action) => {
            action.payload.forEach(p => {
                state.products.push(p)
            });
        },
        removeProduct: (state, action) => {
            state.products = state.products.filter(p => p._id !== action.payload)
        },
        increasePage: (state) => {
            state.page = state.page + 1
        },
        sortProduct: (state, action) => {

            // Switch case for sort Products
            switch (action.payload) {
                case "aToz":
                    state.products.sort((a, b) => {
                        let x = a.name.toLowerCase();
                        let y = b.name.toLowerCase();
                        if (x < y) { return -1; }
                        if (x > y) { return 1; }
                        return 0;
                    })
                    break
                case "zToa":
                    state.products.sort((a, b) => {
                        let x = a.name.toLowerCase();
                        let y = b.name.toLowerCase();
                        if (x > y) { return -1; }
                        if (x < y) { return 1; }
                        return 0;
                    })
                    break
                case "lowToHigh":
                    state.products.sort((a, b) => {
                        const discountA = (
                            (a.price * a.discount) /
                            100
                        ).toFixed(0)
                        const discountB = (
                            (b.price * b.discount) /
                            100
                        ).toFixed(0)

                        const sellPriceX = (a.price - discountA).toFixed(0)
                        const sellPriceY = (b.price - discountB).toFixed(0)

                        console.log(sellPriceX, sellPriceY)


                        return sellPriceX - sellPriceY;
                    })
                    break
                case "highToLow":
                    state.products.sort((a, b) => {
                        const discountA = (
                            (a.price * a.discount) /
                            100
                        ).toFixed(0)
                        const discountB = (
                            (b.price * b.discount) /
                            100
                        ).toFixed(0)

                        const sellPriceX = (a.price - discountA).toFixed(0)
                        const sellPriceY = (b.price - discountB).toFixed(0)

                        console.log(sellPriceX, sellPriceY)


                        return sellPriceY - sellPriceX;
                    })
                    break
            }
        }
    }
})

export const { setProducts, addSingleProduct, addProducts, removeProduct, increasePage, sortProduct } = productSlice.actions
export default productSlice.reducer