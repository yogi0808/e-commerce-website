import { useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'

// Files
import upload from '../../utils/upload'
import { addSingleProduct } from '../../store/features/product/productSlice'

const useCreateProduct = () => {

    const [loading, setLoading] = useState(false)


    const dispatch = useDispatch()

    const createProduct = async (e) => {
        setLoading(true)
        try {

            if (!e) return // Checking for valid parameters

            const formData = new FormData(e.target)

            const images = e.target.imgs.files

            const productData = Object.fromEntries(formData)

            delete productData.imgs

            const isDataValid = validateData(productData, images)

            if (!isDataValid) return // validating Product Data

            const imgs = [...images]

            const imagesUrls = []

            let i = 0

            // Looping thru all Images and Uploading to fireStore 
            for (i = 0; i <= imgs.length - 1; i++) {
                const url = await upload(imgs[i])
                imagesUrls.push(url)
            }

            const res = await fetch(`/api/product`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...productData, imgs: imagesUrls })
            })

            const data = await res.json()

            if (!res.ok) {
                return toast.error(data.message)
            }

            dispatch(addSingleProduct(data.product))

            e.target.reset()

            toast.success(data.message)

        } catch (e) {
            console.log("Error in createProduct hook: ", e.message)
        } finally {
            setLoading(false)
        }
    }

    return { loading, createProduct }
}

// Validator Function for product Data
const validateData = (productData, images) => {
    const { name, price, category, desc, discount } = productData

    if (!name || !price || !category || !desc) {
        toast.error("Fill All the input fids.")
        return false
    }

    if (price <= 0) {
        toast.error("Price must me bigger then 0")
        return false
    }

    if (discount > 100) {
        toast.error("Discount must me less than 100.")
        return false
    }

    if (images.length <= 0) {
        toast.error("Add at list 1 Image.")
        return false
    }

    return true
}

export default useCreateProduct