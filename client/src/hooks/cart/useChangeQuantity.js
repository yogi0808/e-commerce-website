import { useState } from "react"
import toast from "react-hot-toast"
import { useDispatch } from "react-redux"

// Files
import { modifyQuantity } from "../../store/features/cart/cartSlice"

const useChangeQuantity = () => {

    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    const changeQuantity = async (itemId, quantity) => {
        setLoading(true)

        try {

            if (!itemId || !quantity) return // Checking for valid parameters

            if (quantity <= 0) {
                return toast.error("quantity must be Bigger then 0.")
            }

            const res = await fetch(`/api/cart/${itemId}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ quantity })
            })

            const data = await res.json()

            if (!res.ok) {
                return toast.error(data.message)
            }

            dispatch(modifyQuantity({ itemId, quantity }))

        } catch (e) {
            console.log("Error in changeQuantity hook: ", e.message)
        } finally {
            setLoading(false)
        }
    }

    return { loading, changeQuantity }
}

export default useChangeQuantity