import React from "react"

// Files
import Loader from "../Loader"
import EditSvg from "../../svgs/EditSvg"
import DeleteSvg from "../../svgs/DeleteSvg"
import useDeleteCategory from "../../hooks/category/useDeleteCategory"

const AdminCategoryCard = ({ category }) => {
  const { loading, deleteCategory } = useDeleteCategory() // Custom Hook for delete Category

  // Handling Delete Category
  const handleDelete = () => {
    const text = "Are you sure You want to Delete this Category?"
    if (!confirm(text)) return

    deleteCategory(category._id)
  }

  return (
    <div className="w-fit rounded-lg p-4 border-2 border-n-5 max-w-[250px] flex flex-col gap-2">
      <h4 className="h7 font-bold line-clamp-1">{category.category}</h4>
      <div className="w-full flex items-center justify-between gap-4">
        <button className="flex-center gap-1 font-semibold text-n-4 active:scale-90 bg-n-2 border border-n-5 py-px px-1 rounded-md ">
          <EditSvg />
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="p-1 rounded-md active:scale-90 bg-[#FF5630]"
        >
          {loading ? <Loader /> : <DeleteSvg />}
        </button>
      </div>
    </div>
  )
}

export default AdminCategoryCard
