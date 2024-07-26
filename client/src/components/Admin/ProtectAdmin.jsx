import React from "react"
import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router"

const ProtectAdmin = () => {
  const userData = useSelector((state) => state.auth.userInfo) // Getting user Data from redux Store

  // Checking user is logged in or not and is Admin or not
  return userData ? (
    userData.isAdmin ? (
      <div className="flex flex-1">
        <Outlet />
      </div>
    ) : (
      <Navigate
        to="/"
        replace
      />
    )
  ) : (
    <Navigate
      to="/"
      replace
    />
  )
}

export default ProtectAdmin
