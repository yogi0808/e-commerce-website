import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProducts, increasePage } from '../../store/features/product/productSlice'
import toast from 'react-hot-toast'

const useGetProducts = () => {

    const [loading, setLoading] = useState(false)

    const { page } = useSelector(state => state.product)

    const dispatch = useDispatch()

    const getProducts = async () => {
        setLoading(true)
        try {

            dispatch(increasePage())

            const res = await fetch(`/api/product?page=${page + 1}`)

            const data = await res.json()

            if (!res.ok) {
                return toast.error(data.message)
            }

            dispatch(addProducts(data))

        } catch (e) {
            console.log("Error in getProducts hook: ", e.message)
        } finally {
            setLoading(false)
        }
    }

    return { loading, getProducts }
}

export default useGetProducts