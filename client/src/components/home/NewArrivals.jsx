import React, { useEffect } from "react"
import { useSelector } from "react-redux"

// Files
import ULink from "../ULink"
import Loader from "../Loader"
import ProductCard from "../ProductCard"
import useGetAllProducts from "../../hooks/product/useGetAllProducts"

const NewArrivals = () => {
  // Getting Products list from redux store
  const { products } = useSelector((state) => state.product)

  // Custom Hook for get All Products from API
  const { loading, getAllProducts } = useGetAllProducts()

  useEffect(() => {
    getAllProducts()
  }, [])

  return (
    <section className="mt-10">
      <div className="flex w-full items-center justify-between px-3 md:px-8">
        <h1 className="h4 font-bold leading-10">
          New
          <br /> Arrivals
        </h1>
        <ULink
          url="/shop"
          arrow
          classis="mr-2 hover:mr-0"
        >
          More Products
        </ULink>
      </div>
      <div className="overflow-x-auto flex gap-6 pt-10 py-6 px-3 md:px-8">
        {loading ? (
          <Loader />
        ) : (
          products.map((p) => (
            <ProductCard
              key={p._id}
              product={p}
            />
          ))
        )}
      </div>
    </section>
  )
}

export default NewArrivals
