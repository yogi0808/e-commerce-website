import React, { useEffect } from "react"
import { useSelector } from "react-redux"

// Files
import Btn from "../components/Btn"
import Loader from "../components/Loader"
import PageHero from "../components/PageHero"
import ProductCard from "../components/ProductCard"
import SortProducts from "../components/SortProducts"
import useGetAllProducts from "../hooks/product/useGetAllProducts"
import useGetAllCategories from "../hooks/category/useGetAllCategories"
import useGetProducts from "../hooks/product/useGetProducts"

const Shop = () => {
  const { products } = useSelector((state) => state.product) // Getting Products from redux Store

  const q = new URLSearchParams(window.location.search) // Getting queries from URL

  const { loading, getAllProducts } = useGetAllProducts() // Custom Hook for get Products from API

  const { loading: loadingBtn, getProducts } = useGetProducts() // Custom Hook for get Products by Page from API

  const { getAllCategories } = useGetAllCategories() // Custom Hook for get Categories from API

  // Handling show more button for Get Products
  const handleShowMore = () => {
    getProducts()
  }

  useEffect(() => {
    getAllProducts()
    getAllCategories()
  }, [])

  return (
    <main>
      <PageHero
        title="#Shop Online"
        subTitle="Save more with coupons & up to 70% off!"
        img="/banners/b4.png"
      />
      <section className="w-full flex gap-6 flex-col my-10 px-3 md:px-8">
        <SortProducts />
        <div className="w-full flex gap-6 flex-wrap justify-center">
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
      {products.length < 10 ? (
        ""
      ) : (
        <div className="w-full flex-center py-4 px-3 md:px-8">
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

export default Shop
