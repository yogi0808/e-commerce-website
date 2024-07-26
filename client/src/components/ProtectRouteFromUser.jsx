import React from "react"
import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router"

const ProtectRouteFromUser = () => {
  // Getting user Data from redux Store
  const userData = useSelector((state) => state.auth.userInfo)

  // Condition for user. is Logged in Or not
  return !userData ? (
    <Outlet />
  ) : (
    <Navigate
      to="/"
      replace
    />
  )
}

export default ProtectRouteFromUser
