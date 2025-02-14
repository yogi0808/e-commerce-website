import React from "react"
import { useDispatch, useSelector } from "react-redux"

// Files
import useGetAllProducts from "../hooks/product/useGetAllProducts"
import { sortProduct } from "../store/features/product/productSlice"

const SortProducts = () => {
  const { categories } = useSelector((state) => state.category) // getting all Category form redux store

  const { getAllProducts } = useGetAllProducts() // Custom Hook for get all Products using API

  const dispatch = useDispatch()

  // Handling change Category
  const onCategoryChange = (e) => {
    getAllProducts(e.target.value === "all" ? "" : e.target.value)
  }

  // Handling Sorting
  const onSortChange = (e) => {
    dispatch(sortProduct(e.target.value))
  }

  return (
    <div className="w-full flex gap-4">
      <select
        className="input min-w-[100px]"
        name="category"
        onChange={onCategoryChange}
        required
      >
        <option
          selected
          disabled
          hidden
        >
          Select Category
        </option>
        <option value="all">All</option>
        {categories.map((category) => (
          <option
            key={category._id}
            value={category._id}
          >
            {category.category}
          </option>
        ))}
      </select>
      <select
        className="input min-w-[100px]"
        onChange={onSortChange}
        name="sort"
      >
        <option
          selected
          disabled
          hidden
        >
          Sort By
        </option>

        <option value="aToz">Sort A to Z</option>
        <option value="zToa">Sort Z to A</option>
        <option value="lowToHigh">Sort low to high</option>
        <option value="highToLow">Sort high to low</option>
      </select>
    </div>
  )
}

export default SortProducts
