import React, { useEffect } from "react"
import { useSelector } from "react-redux"

// Files
import Btn from "../../components/Btn"
import Loader from "../../components/Loader"
import useGetProducts from "../../hooks/product/useGetProducts"
import AddProductForm from "../../components/Admin/AddProductForm"
import useGetAllProducts from "../../hooks/product/useGetAllProducts"
import AdminProductCard from "../../components/Admin/AdminProductCard"

const MenageProducts = () => {
  const { products } = useSelector((state) => state.product) // Getting Products From redux Store

  const { loading, getAllProducts } = useGetAllProducts() // Custom Hook for get All Products using API

  const { loading: loadingBtn, getProducts } = useGetProducts() // Custom Hook for get Products by Page from API

  // Handling show More Button for get more Products
  const handleShowMore = () => {
    getProducts()
  }

  useEffect(() => {
    getAllProducts()
  }, [])

  return (
    <main className="flex-1 w-full flex-center flex-col md:px-3">
      <AddProductForm />
      <h1 className="h6 text-n-7 font-bold my-10">Products</h1>
      <section className="w-full flex gap-6 flex-wrap justify-center mb-10">
        {loading ? (
          <Loader />
        ) : (
          products.map((p) => (
            <AdminProductCard
              key={p._id}
              product={p}
            />
          ))
        )}
      </section>
      {products.length < 10 ? (
        ""
      ) : (
        <div className="w-full flex-center py-4">
          <Btn
            onClick={handleShowMore}
            rounded
          >
            {loadingBtn ? <Loader /> : "Show More..."}
          </Btn>
        </div>
      )}
    </main>
  )
}

export default MenageProducts
