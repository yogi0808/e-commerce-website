import React from "react"
import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router"

const ProtectRoute = () => {
  const userData = useSelector((state) => state.auth.userInfo) // Getting user Data from redux Store

  // Condition for user. is Logged in Or not
  return userData ? (
    <Outlet />
  ) : (
    <Navigate
      to="/"
      replace
    />
  )
}

export default ProtectRoute
