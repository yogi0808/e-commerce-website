import { Outlet } from "react-router"
import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { Toaster } from "react-hot-toast"

// Files
import Header from "./components/Header"
import Footer from "./components/Footer"
import useGetCartProducts from "./hooks/cart/useGetCartProducts"

const App = () => {
  const { getCartProducts } = useGetCartProducts() // Custom Hook for getting Cart Products
  const { userInfo } = useSelector((state) => state.auth) // getting User Data from redux store

  useEffect(() => {
    getCartProducts()
  }, [userInfo])

  return (
    <main className="flex flex-col min-h-screen">
      <Toaster />
      <Header />
      <Outlet />
      <Footer />
    </main>
  )
}
export default App
