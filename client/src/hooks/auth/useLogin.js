import { useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'

// Files
import { login } from "../../store/features/auth/authSlice"

const useLogin = () => {

    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()

    const Login = async (userData) => {
        setLoading(true)
        try {
            const isValid = validateData(userData)

            if (!isValid) return

            const res = await fetch(`/api/auth/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userData)
            })

            const data = await res.json()

            if (!res.ok) {
                return toast.error(data.message)
            }

            delete data.user.password
            delete data.user.cart
            delete data.user.orders

            dispatch(login(data.user))

            localStorage.setItem("userData", JSON.stringify(data.user))

            toast.success(data.message)

        } catch (e) {
            console.log("Error in login hook: ", e.message)
        } finally {
            setLoading(false)
        }
    }

    return { loading, Login }

}

const validateData = (data) => {
    const { email, password } = data

    if (!email || !password) {
        toast.error("Fill All the input fids.")
        return false
    }

    if (password.length < 6) {
        toast.error("Password must be at list 6 character long.")
        return false
    }

    return true
}

export default useLogin