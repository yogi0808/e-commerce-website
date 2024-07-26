import { useState } from "react"
import toast from "react-hot-toast"
import { useDispatch, useSelector } from "react-redux"

// Files
import useRemoveFromCart from "../cart/useRemoveFromCart"
import { setCart } from "../../store/features/cart/cartSlice"

const useCreateOrder = () => {

    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    const { products } = useSelector(state => state.cart) // getting Products form redux store

    const { removeFromCart } = useRemoveFromCart() // Custom Hook for remove Product from Cart

    const createOrder = async (orderData) => {
        setLoading(true)
        try {

            const cartItems = []

            products.forEach(p => {
                cartItems.push({
                    product: p.product._id,
                    quantity: p.quantity
                })
            })

            const isDataValid = validateData({ ...orderData, products: cartItems }) // validating order Data 

            if (!isDataValid) {
                return toast.error("Provide valid Inputs.")
            }

            const res = await fetch(`/api/order`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ ...orderData, products: cartItems })
            })

            const data = await res.json()

            if (!res.ok) {
                return toast.error(data.message)
            }

            products.forEach(p => {
                removeFromCart(p._id)
            })

            dispatch(setCart([]))

            toast.success(data.message)
        } catch (e) {
            console.log("Error in createOrder hook: ", e.message)
        } finally {
            setLoading(false)
        }
    }

    return { loading, createOrder }
}

// Validator Function for Order Data
const validateData = (data) => {
    const { firstName, lastName, phoneNumber, email, street, country, city, state, zip, paymentMethod, cardNumber, cardExpiry, cardCVC, upi, totalPrice, products } = data


    if (!firstName || !lastName || !phoneNumber || !email || !street || !country || !city || !state || !zip || !paymentMethod || !totalPrice || (products.length <= 0)) {
        console.log(data)
        return false
    }

    if (paymentMethod === "card" && (!cardNumber || !cardExpiry || !cardCVC)) {
        return false

    }

    if (paymentMethod === "upi" && !upi) {
        return false
    }

    if (phoneNumber.length !== 10 || zip.length !== 6) {
        return false
    }

    if (paymentMethod === "card" && (cardNumber.length !== 16 && cardCVC !== 3)) {
        return false
    }

    return true
}

export default useCreateOrder