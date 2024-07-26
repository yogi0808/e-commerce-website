import React from "react"
import { useEffect } from "react"
import { useSelector } from "react-redux"

// Files
import Btn from "../Btn"
import Loader from "../Loader"
import useCreateProduct from "../../hooks/product/useCreateProduct"
import useGetallCategories from "../../hooks/category/useGetAllCategories"

const AddProductForm = () => {
  const { loading, createProduct } = useCreateProduct() // Custom Hook for create a New Product

  const { getAllCategories } = useGetallCategories() // Custom Hook for get category using api

  const categories = useSelector((state) => state.category.categories) // Getting all categories from redux store

  // Handling form Submit
  const handleSubmit = (e) => {
    e.preventDefault()
    createProduct(e)
  }

  useEffect(() => {
    getAllCategories()
  }, [])

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full max-w-[600px] my-10 md:my-0 p-4 border-2 border-n-5 rounded-lg gap-3 bg-n-2"
    >
      <h1 className="h7 text-n-7 font-bold">Create Product</h1>
      <label
        className="text-n-4 uppercase font-medium flex flex-col flex-1"
        htmlFor="name"
      >
        Product Name *
        <input
          type="text"
          name="name"
          className="input"
          placeholder="Enter Product Name"
          required
        />
      </label>
      <div className="flex gap-3 w-full flex-wrap">
        <label
          className="text-n-4 uppercase font-medium flex flex-col flex-1 min-w-28"
          htmlFor="price"
        >
          Price *
          <input
            type="number"
            name="price"
            className="input"
            placeholder="Enter Product Price"
            required
          />
        </label>
        <label
          className="text-n-4 uppercase font-medium flex flex-col flex-1 min-w-28"
          htmlFor="discount"
        >
          Discount
          <input
            type="number"
            name="discount"
            className="input"
            min="1"
            max="100"
            placeholder="Enter Product Discount"
          />
        </label>
      </div>
      <div className="flex gap-3 flex-wrap">
        <label
          className="text-n-4 uppercase font-medium flex flex-col flex-1 min-w-28"
          htmlFor="imgs"
        >
          Images *
          <input
            type="file"
            name="imgs"
            className="input"
            placeholder="Enter Product Images"
            accept="image/png, image/jpg, image/jpeg, image/webp, image/avif"
            multiple
            required
          />
        </label>
        <label
          className="text-n-4 uppercase font-medium flex flex-col flex-1"
          htmlFor="category"
        >
          Category *
          <select
            className="input"
            name="category"
            required
          >
            <option
              selected
              disabled
              hidden
            >
              Select Category
            </option>
            {categories.map((category) => (
              <option
                key={category._id}
                value={category._id}
              >
                {category.category}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label
        className="text-n-4 uppercase font-medium flex flex-col flex-1"
        htmlFor="desc"
      >
        Description *
        <textarea
          name="desc"
          className="input"
          rows={5}
          cols={10}
          placeholder="Enter Product Description."
          required
        />
      </label>
      <Btn
        disabled={loading}
        bg
      >
        {loading ? <Loader /> : "Create Product"}
      </Btn>
    </form>
  )
}

export default AddProductForm
