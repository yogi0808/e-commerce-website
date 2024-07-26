import { useState } from "react"
import toast from "react-hot-toast"
import { useDispatch, useSelector } from "react-redux"

// Files
import { setCategories } from "../../store/features/category/categorySlice"

const useGetAllCategories = () => {

    const [loading, setLoading] = useState(false)

    // Getting categories from redux store
    const categories = useSelector((state) => state.category.categories)

    const dispatch = useDispatch()

    const getAllCategories = async () => {
        setLoading(true)
        try {

            if (categories.length > 0) return

            const res = await fetch(`/api/categories`)

            const data = await res.json()

            if (!res.ok) {
                return toast.error(data.message)
            }

            dispatch(setCategories(data))

        } catch (e) {
            console.log("Error in getAllCategories hook: ", e.message)
        } finally {
            setLoading(false)
        }
    }


    return { loading, getAllCategories }
}

export default useGetAllCategories