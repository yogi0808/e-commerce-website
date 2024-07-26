import { useState } from 'react'
import toast from "react-hot-toast"

const useGetSingleProduct = () => {

    const [loading, setLoading] = useState(false)

    const getSingleProduct = async (id) => {
        setLoading(true)

        try {
            // Checking for valid parameters
            if (!id) {
                return toast.error("Provide Valid Inputs.")
            }

            const res = await fetch(`/api/product/${id}`)

            const data = await res.json()

            if (!res.ok) {
                return toast.error(data.message)
            }

            return data

        } catch (e) {
            console.log("Error in getSingleProduct hook: ", e.message)
        } finally {
            setLoading(false)
        }
    }

    return { loading, getSingleProduct }
}

export default useGetSingleProduct