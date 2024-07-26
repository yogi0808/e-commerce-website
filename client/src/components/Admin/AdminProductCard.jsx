import React from "react"
import { Link } from "react-router-dom"

// Files
import Loader from "../Loader"
import EditSvg from "../../svgs/EditSvg"
import DeleteSvg from "../../svgs/DeleteSvg"
import { calcSellPrice, formatPriceIntl } from "../../utils/helper"
import useDeleteProduct from "../../hooks/product/useDeleteProduct"

const AdminProductCard = ({ product }) => {
  const { loading, deleteProduct } = useDeleteProduct() // Custom Hook for Delete Product

  // Handling Delete Confirmation
  const handleDelete = () => {
    const text = "Are you sure You want to Delete this Product?"
    if (!confirm(text)) return

    deleteProduct(product._id)
  }

  return (
    <div className="w-fit rounded-lg p-4 border-2 border-n-5 max-w-[300px]">
      <Link
        to={`/product/${product._id}`}
        className="size-[260px] relative aspect-square rounded-lg flex-center overflow-hidden border border-n-5 mx-auto"
      >
        {product.discount ? (
          <div className="flex absolute top-0 left-0 px-3 py-1 rounded text-n-1 z-10 font-semibold bg-g">
            {product.discount}%
          </div>
        ) : (
          ""
        )}
        <img
          className="w-full h-full object-cover hover:scale-105 transition-all duration-300"
          src={product.imgs[0]}
          alt=""
        />
      </Link>
      <div className="flex flex-col gap-3">
        <h4 className="h7 font-bold line-clamp-1">{product.name}</h4>
        <p className="line-clamp-3 text-n-7 text-sm font-semibold">
          {calcSellPrice(product.price, product.discount)}{" "}
          {product.discount ? (
            <span className="text-n-4 line-through">
              {formatPriceIntl(product.price)}
            </span>
          ) : (
            ""
          )}
        </p>
        <div className="w-full flex items-center justify-between">
          <button className="flex-center gap-1 font-semibold text-n-4 active:scale-90 bg-n-2 border border-n-5 py-px px-1 rounded-md ">
            <EditSvg />
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="p-1 rounded-md active:scale-90 bg-[#FF5630] "
          >
            {loading ? <Loader /> : <DeleteSvg />}
          </button>
        </div>
      </div>
    </div>
  )
}

export default AdminProductCard
