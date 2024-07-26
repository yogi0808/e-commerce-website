import { useState } from 'react'
import toast from "react-hot-toast"
import { useDispatch } from 'react-redux'

// Files
import { setProducts } from '../../store/features/product/productSlice'

const useGetAllProducts = () => {

  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()

  const getAllProducts = async (category) => {
    setLoading(true)
    try {

      let res;

      if (category) {
        res = await fetch(`/api/product?category=${category}`)
      }

      if (!category) {
        res = await fetch(`/api/product`)
      }

      const data = await res.json()

      if (!res.ok) {
        return toast.error(data.message)
      }

      dispatch(setProducts(data))

    } catch (e) {
      console.log("Error in getAllProducts hook: ", e.message)
    } finally {
      setLoading(false)
    }
  }

  return { loading, getAllProducts }
}

export default useGetAllProducts