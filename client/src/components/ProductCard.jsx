import React from "react"
import { Link } from "react-router-dom"

// Files
import Btn from "./Btn"
import Loader from "../components/Loader"
import useAddToCart from "../hooks/cart/useAddToCart"
import { calcSellPrice, formatPriceIntl } from "../utils/helper"

const ProductCard = ({ product }) => {
  const { loading, AddToCart } = useAddToCart() // Custom Hook for add Product to Cart

  // Adding product to Cart
  const addToCart = () => {
    AddToCart(product._id)
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
        <Btn
          onClick={addToCart}
          bg
        >
          {loading ? <Loader /> : "Add to Cart"}
        </Btn>
      </div>
    </div>
  )
}

export default ProductCard
