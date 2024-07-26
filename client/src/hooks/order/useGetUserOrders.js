import { useState } from "react"
import toast from "react-hot-toast"
import { useDispatch } from "react-redux"
import { setOrders } from "../../store/features/order/orderSlice"

const useGetUserOrders = () => {

    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()

    const getUserOrders = async () => {
        setLoading(true)
        try {

            const res = await fetch(`/api/order`)

            const data = await res.json()

            if (!res.ok) {
                return toast.error(data.message)
            }

            dispatch(setOrders(data))
        } catch (e) {
            console.log("Error in getUserOrder hook: ", e.message)
        } finally {
            setLoading(false)
        }
    }

    return { loading, getUserOrders }
}

export default useGetUserOrders