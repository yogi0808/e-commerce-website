import { useState } from "react"
import toast from "react-hot-toast"
import { useDispatch } from "react-redux"

// Files
import { removeCategory } from "../../store/features/category/categorySlice"

const useDeleteCategory = () => {

    const [loading, setLoading] = useState(false)


    const dispatch = useDispatch()

    const deleteCategory = async (categoryId) => {
        setLoading(true)
        try {

            const res = await fetch(`/api/categories/${categoryId}`, {
                method: "DELETE",
            })

            const data = await res.json()

            if (!res.ok) {
                return toast.error(data.message)
            }

            toast.success(data.message)

            dispatch(removeCategory(categoryId))


        } catch (e) {
            console.log("Error in deleteCategory hook: ", e.message)
        } finally {
            setLoading(false)
        }
    }

    return { loading, deleteCategory }
}

export default useDeleteCategory