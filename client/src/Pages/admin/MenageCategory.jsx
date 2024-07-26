import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"

// Files
import Btn from "../../components/Btn"
import Loader from "../../components/Loader"
import useCreateCategory from "../../hooks/category/useCreateCategory"
import AdminCategoryCard from "../../components/Admin/AdminCategoryCard"
import useGetAllCategories from "../../hooks/category/useGetAllCategories"

const MenageCategory = () => {
  const [category, setCategory] = useState("")

  // Custom Hook for Create new Category
  const { loading, createCategory } = useCreateCategory()

  // Custom Hook for Get all Categories from API
  const { getAllCategories } = useGetAllCategories()

  // Getting categories from redux Store
  const categories = useSelector((state) => state.category.categories)

  // Handling Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault()

    await createCategory(category)

    setCategory("")
  }

  useEffect(() => {
    getAllCategories()
  }, [])

  return (
    <main className="flex-1 w-full flex-col flex-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full max-w-[550px] my-10 md:my-0 p-4 border-2 border-n-5 rounded-lg gap-3 bg-n-2"
      >
        <h1 className="h7 text-n-7 font-bold">Create Category</h1>
        <label
          className="text-n-4 uppercase font-medium flex flex-col"
          htmlFor="category"
        >
          Category
          <input
            type="text"
            name="category"
            className="input"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Enter Category Name"
            required
          />
        </label>
        <Btn
          disabled={loading}
          bg
        >
          {loading ? <Loader /> : "Create"}
        </Btn>
      </form>
      <h1 className="h6 text-n-7 font-bold my-10">Categories</h1>
      <section className="w-full flex gap-6 flex-wrap justify-center mb-10">
        {categories.map((category) => (
          <AdminCategoryCard
            key={category._id}
            category={category}
          />
        ))}
      </section>
    </main>
  )
}

export default MenageCategory
