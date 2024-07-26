import { useState } from "react"
import toast from "react-hot-toast"

const useSendMessage = () => {

    const [loading, setLoading] = useState(false)

    const sendMessage = async (messageData) => {
        setLoading(true)
        try {
            const isDataValid = validateData(messageData) // Validating message Data

            if (!isDataValid) return // Checking for valid parameters

            const res = await fetch("/api/message", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(messageData)
            })

            const data = await res.json()

            if (!res.ok) {
                return toast.error(data.message)
            }

            toast.success(data.message)

        } catch (e) {
            console.log("Error in sendMessage hook: ", e.message)
        } finally {
            setLoading(false)
        }
    }

    return { loading, sendMessage }
}

// Validator Function for message data
const validateData = (data) => {
    const { fullName, email, message } = data

    if (!fullName || !email || !message) {
        toast.error("Fill All the input fids.")
        return false
    }

    return true
}

export default useSendMessage