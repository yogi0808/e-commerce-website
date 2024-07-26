import { useState } from "react"
import { useDispatch } from "react-redux"
import toast from "react-hot-toast"
import { addToCart } from "../../store/features/cart/cartSlice"

const useAddToCart = () => {

    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    const AddToCart = async (productId, quantity = 1) => {
        setLoading(true)

        try {

            if (!productId) return

            const res = await fetch(`/api/cart`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ productId, quantity })
            })

            const data = await res.json()

            if (!res.ok) {
                return toast.error(data.message)
            }

            dispatch(addToCart(data.product))

            toast.success(data.message)

        } catch (e) {
            console.log("Error in addToCart hook: ", e.message)
        } finally {
            setLoading(false)
        }
    }

    return { loading, AddToCart }
}

export default useAddToCart