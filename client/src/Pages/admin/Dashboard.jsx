import React from "react"
import { NavLink, Outlet } from "react-router-dom"

const Dashboard = () => {
  return (
    <main className="w-full flex flex-wrap flex-1 mt-10 px-3 md:px-8">
      <div className="p-4 h-fit md:sticky top-24 flex flex-col justify-between gap-4 bg-n-2 max-w-[415px] border-2 border-n-5 rounded-md w-full md:w-1/3">
        <h1 className="h7 text-n-7 font-bold">Admin Dashboard</h1>
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
        <NavLink
          to="products"
          className={({ isActive }) =>
            `py-2 ${
              isActive ? "border-b-2 border-n-5 text-n-7" : ""
            } text-n-4 font-medium`
          }
        >
          Products
        </NavLink>
        <NavLink
          to="category"
          className={({ isActive }) =>
            `py-2 ${
              isActive ? "border-b-2 border-n-5 text-n-7" : ""
            } text-n-4 font-medium`
          }
        >
          category
        </NavLink>
      </div>
      <div className="w-full md:w-2/3">
        <Outlet />
      </div>
    </main>
  )
}

export default Dashboard
