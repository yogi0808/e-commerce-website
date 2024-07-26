import { useState } from "react"
import toast from "react-hot-toast"
import { useDispatch } from "react-redux"

// Files
import { removeProduct } from "../../store/features/product/productSlice"

const useDeleteProduct = () => {

    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()

    const deleteProduct = async (productId) => {
        setLoading(true)

        try {

            const res = await fetch(`/api/product/${productId}`, {
                method: "DELETE"
            })

            const data = await res.json()

            if (!res.ok) {
                return toast.error(data.message)
            }

            dispatch(removeProduct(productId))

            return toast.success(data.message)

        } catch (e) {
            console.log("Error in deleteProduct hook: ", e.message)
        } finally {
            setLoading(false)
        }
    }

    return { loading, deleteProduct }
}

export default useDeleteProduct