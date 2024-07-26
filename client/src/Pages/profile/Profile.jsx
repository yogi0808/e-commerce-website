import React from "react"
import { Outlet } from "react-router"
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"

// Files
import useLogout from "../../hooks/auth/useLogout"
import Loader from "../../components/Loader"
import CameraSvg from "../../svgs/CameraSvg"
import useChangeProfileImg from "../../hooks/profile/useChangeProfileImg"
import { useEffect } from "react"

const Profile = () => {
  // Custom Hook for Logout user
  const { loading, Logout } = useLogout()

  // Getting user Data from redux Store
  const { userInfo } = useSelector((state) => state.auth)

  const { loading: loadingImg, changeProfileImg } = useChangeProfileImg() // Custom Hook for change Profile Pic

  const handelProfilePicChange = (e) => {
    changeProfileImg(e.target.files[0])
  }

  // Handling Logout
  const handelLogout = () => {
    Logout()
  }

  useEffect(() => {}, [userInfo])

  return (
    <div className="w-full px-3 md:px-8 gap-10 md:gap-0 flex-1 flex flex-wrap my-6">
      <div className="p-4 h-fit md:sticky top-24 flex flex-col justify-between gap-4 max-w-[415px] border-2 border-n-5 rounded-md w-full md:w-1/3 bg-n-2">
        <div className="flex items-center flex-col">
          <div className="size-1/2 border-2 border-n-5 aspect-square relative rounded-full">
            <img
              className="w-full h-full object-cover rounded-full"
              src={userInfo.profilePic || "/user.png"}
              alt=""
            />
            <label className="absolute bottom-0 right-6 size-8 bg-n-7 rounded-full border-2 border-n-2 flex-center cursor-pointer">
              {loadingImg ? <Loader /> : <CameraSvg />}
              <input
                onChange={handelProfilePicChange}
                type="file"
                accept="image/png, image/jpg, image/jpeg, image/webp, image/avif"
                className="hidden"
              />
            </label>
          </div>
          <h4 className="h5 font-semibold">{userInfo.username}</h4>
        </div>
        <div className="flex flex-col gap-3">
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `py-2 ${
                isActive ? "border-b-2 border-n-5 text-n-7" : ""
              } text-n-4 font-medium`
            }
          >
            Account
          </NavLink>
          <NavLink
            to="orders"
            className={({ isActive }) =>
              `py-2 ${
                isActive ? "border-b-2 border-n-5 text-n-7" : ""
              } text-n-4 font-medium`
            }
          >
            Orders
          </NavLink>
          <button
            onClick={handelLogout}
            className={`py-2 text-start text-n-4 font-medium`}
          >
            {loading ? <Loader /> : "Logout"}
          </button>
        </div>
      </div>
      <div className="w-full md:w-2/3 ">
        <Outlet />
      </div>
    </div>
  )
}

export default Profile
