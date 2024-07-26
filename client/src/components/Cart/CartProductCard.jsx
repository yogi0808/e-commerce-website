import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"

// Files
import Loader from "../Loader"
import DeleteSvg from "../../svgs/DeleteSvg"
import PlusBtnSvg from "../../svgs/PlusBtnSvg"
import MinusBtnSvg from "../../svgs/MinusBtnSvg"
import useRemoveFromCart from "../../hooks/cart/useRemoveFromCart"
import useChangeQuantity from "../../hooks/cart/useChangeQuantity"
import { calcSellPrice, formatPriceIntl } from "../../utils/helper"

const CartProductCard = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity)

  const { loading, removeFromCart } = useRemoveFromCart() // Custom Hook for delete Cart Item
  const { loading: qLoading, changeQuantity } = useChangeQuantity() // Custom Hook for change Quantity

  // Handling Delete Cart item
  const handleDelete = () => {
    removeFromCart(item._id)
  }

  // Handling quantity Increase
  const handleQuantityChangeP = () => {
    setQuantity((pre) => pre + 1)

    changeQuantity(item._id, quantity + 1)
  }

  // Handling quantity Decrease
  const handleQuantityChangeM = () => {
    if (quantity === 1) {
      handleDelete()
    } else {
      setQuantity((pre) => pre - 1)

      changeQuantity(item._id, quantity - 1)
    }
  }

  return (
    <div className="max-w-[350px] p-3 flex gap-3 border-2 border-n-5 rounded-lg h-fit">
      <Link
        to={`/product/${item?.product?._id}`}
        className="size-24 min-w-24 aspect-square overflow-hidden rounded-md border border-n-5"
      >
        <img
          src={item.product?.imgs ? item.product.imgs[0] : ""}
          alt=""
          className="h-full w-full object-cover hover:scale-105 transition-all duration-300"
        />
      </Link>
      <div className="flex flex-col gap-3">
        <h4 className="h7 font-bold line-clamp-1">{item.product?.name}</h4>
        <p className="line-clamp-3 text-n-7 text-sm font-semibold">
          {calcSellPrice(item.product?.price, item.product?.discount)}{" "}
          {item.product?.discount ? (
            <span className="text-n-4 line-through">
              {formatPriceIntl(item.product?.price)}
            </span>
          ) : (
            ""
          )}
        </p>
        <div className="flex w-full justify-between flex-wrap">
          <div className="flex gap-2">
            <button
              onClick={handleQuantityChangeM}
              className="p-1 size-7 active:scale-90"
            >
              {qLoading ? <Loader /> : <MinusBtnSvg />}
            </button>
            <span className="font-medium">{quantity}</span>
            <button
              onClick={handleQuantityChangeP}
              className="p-1 size-7 active:scale-90"
            >
              {qLoading ? <Loader /> : <PlusBtnSvg />}
            </button>
          </div>
          <button
            onClick={handleDelete}
            disabled={loading}
            className="p-1 rounded-md active:scale-90 bg-[#FF5630]"
          >
            {loading ? <Loader /> : <DeleteSvg />}
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartProductCard
