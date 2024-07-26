import { useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { changeStatus } from '../../store/features/order/orderSlice'

const useUpdateStatus = () => {

    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    const updateStatus = async (orderId, status) => {
        setLoading(true)
        try {

            if (!orderId || !status) {
                return toast.error("Provide valid Input.")
            }

            const res = await fetch(`/api/order/${orderId}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ status })
            })

            const data = await res.json()

            if (!res.ok) {
                return toast.error(data.message)
            }

            dispatch(changeStatus({ orderId, status }))

            toast.success(data.message)

        } catch (e) {
            console.log("Error in updateStatus hook: ", e.message)
        } finally {
            setLoading(false)
        }
    }

    return { loading, updateStatus }
}

export default useUpdateStatus