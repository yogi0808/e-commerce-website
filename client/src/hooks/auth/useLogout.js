import { useState } from "react"
import toast from "react-hot-toast"
import { useDispatch } from "react-redux"

// Files
import { logout } from "../../store/features/auth/authSlice"

const useLogout = () => {

    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    const Logout = async () => {
        setLoading(true)
        try {

            const res = await fetch(`/api/auth/logout`)

            const data = await res.json()

            if (!res.ok) {
                return toast.error(data.message)
            }

            dispatch(logout())

            localStorage.clear()

            toast.success(data.message)


        } catch (e) {
            console.log("Error in logout hook: ", e.message)
        } finally {
            setLoading(false)
        }
    }

    return { loading, Logout }
}

export default useLogout