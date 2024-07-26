import { useState } from 'react'
import upload from '../../utils/upload'
import { useDispatch, useSelector } from "react-redux"
import { updateUser } from '../../store/features/auth/authSlice'


const useChangeProfileImg = () => {

    const [loading, setLoading] = useState(false)
    const { userInfo } = useSelector(state => state.auth) // getting user Data form redux store

    const dispatch = useDispatch()

    const changeProfileImg = async (file) => {
        setLoading(true)
        try {
            if (!file) return // Checking for valid parameters

            const profilePic = await upload(file, "user profile image/")

            console.log(profilePic)

            const res = await fetch(`/api/user/${userInfo._id}`, {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ profilePic })
            })

            dispatch(updateUser({ profilePic }))

        } catch (e) {
            console.log("Error in changeProfileImg hook: ", e.message)
        } finally {
            setLoading(false)
        }
    }

    return { loading, changeProfileImg }
}

export default useChangeProfileImg