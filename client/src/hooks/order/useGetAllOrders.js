import { useState } from 'react'
import { useDispatch } from 'react-redux'

// Files
import { setAllOrders } from '../../store/features/order/orderSlice'

const useGetAllOrders = () => {
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()

    const getAllOrders = async () => {
        setLoading(true)
        try {

            const res = await fetch(`/api/order/all`)

            const data = await res.json()

            if (!res.ok) {
                return toast.error(data.message)
            }

            dispatch(setAllOrders(data))
        } catch (e) {
            console.log("Error in getUserOrder hook: ", e.message)
        } finally {
            setLoading(false)
        }
    }

    return { loading, getAllOrders }
}

export default useGetAllOrders