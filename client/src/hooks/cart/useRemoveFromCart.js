import { useState } from "react"
import toast from "react-hot-toast"
import { useDispatch } from "react-redux"
import { deleteFromCart } from "../../store/features/cart/cartSlice"

const useRemoveFromCart = () => {

    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()

    const removeFromCart = async (itemId) => {
        setLoading(true)
        try {

            if (!itemId) return

            const res = await fetch(`/api/cart/${itemId}`, {
                method: "DELETE"
            })

            const data = await res.json()

            if (!res.ok) {
                return toast.error(data.message)
            }

            dispatch(deleteFromCart(itemId))

        } catch (e) {
            console.log("Error in removeFromCart hook: ", e.message)
        } finally {
            setLoading(false)
        }
    }

    return { loading, removeFromCart }
}

export default useRemoveFromCart