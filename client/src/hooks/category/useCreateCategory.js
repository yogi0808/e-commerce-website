import { useState } from "react"
import toast from "react-hot-toast"
import { useDispatch } from "react-redux"

// Files
import { addSingleCategory } from "../../store/features/category/categorySlice"

const useCreateCategory = () => {

    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()

    const createCategory = async (category) => {

        setLoading(true)
        try {

            // Checking for valid parameters
            if (!category) {
                return toast.error("Fill All the input fids.")
            }

            const res = await fetch(`/api/categories`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ category })
            })

            const data = await res.json()

            if (!res.ok) {
                return toast.error(data.message)
            }

            dispatch(addSingleCategory(data.category))

            toast.success(data.message)

        } catch (e) {
            console.log("Error in createCategory hook: ", e.message)
        } finally {
            setLoading(false)
        }
    }

    return { loading, createCategory }
}

export default useCreateCategory