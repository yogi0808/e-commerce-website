import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setCart } from '../../store/features/cart/cartSlice'

const useGetCartProducts = () => {

    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()

    const getCartProducts = async () => {
        setLoading(true)
        try {

            const res = await fetch(`/api/cart`)

            const data = await res.json()

            if (!res.ok) return

            dispatch(setCart(data))

        } catch (e) {
            console.log("Error in getCartProducts hook: ", e.message)
        } finally {
            setLoading(false)
        }
    }

    return { loading, getCartProducts }
}

export default useGetCartProducts