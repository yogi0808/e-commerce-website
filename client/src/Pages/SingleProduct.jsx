import { useParams } from "react-router"
import React, { useState, useEffect } from "react"

// Files
import Btn from "../components/Btn"
import Loader from "../components/Loader"
import PlusBtnSvg from "../svgs/PlusBtnSvg"
import MinusBtnSvg from "../svgs/MinusBtnSvg"
import useAddToCart from "../hooks/cart/useAddToCart"
import { calcSellPrice, formatPriceIntl } from "../utils/helper"
import useGetSingleProduct from "../hooks/product/useGetSingleProduct"

const SingleProduct = () => {
  const { id } = useParams() // getting Product Id from Params

  const [product, setProduct] = useState({})
  const [mImage, setMImage] = useState("")
  const [quantity, setQuantity] = useState(1)

  const { loading, getSingleProduct } = useGetSingleProduct() // Custom Hook for getting single Product using API
  const { loading: addToCartLoading, AddToCart } = useAddToCart() // Custom Hook for add Product to Cart

  // Handling Add to Cart
  const addToCart = () => {
    AddToCart(product._id, quantity)
  }

  // getting Product by ID on Load
  const getProduct = async () => {
    const p = await getSingleProduct(id)
    setMImage(p.imgs[0])
    setProduct(p)
  }

  // Handling Image Change on Click
  const handleOnClick = (src) => {
    setMImage(src)
  }

  useEffect(() => {
    getProduct()
  }, [])

  if (loading) {
    return (
      <div className="flex-center flex-1">
        <Loader />
      </div>
    )
  } else {
    return (
      <main className="flex flex-1 flex-col px-3 md:px-8">
        <div className="flex flex-wrap my-10 w-full gap-6 md:gap-0">
          <div className="w-full md:w-1/2 h-fit flex-center flex-col bg-n-2 rounded-md p-3">
            <div className="rounded-md w-fit p-3">
              <img
                src={mImage}
                alt={product.name}
                loading="lazy"
                className="rounded-md max-h-[400px]"
              />
            </div>
            <div className="flex overflow-x-auto gap-3 px-3 py-2 max-md:hide-scrollbar">
              {product.imgs
                ? product.imgs.map((i, idx) => {
                    if (i !== mImage)
                      return (
                        <img
                          key={idx}
                          className="max-h-28 border-2 border-n-5 rounded-md"
                          src={i}
                          loading="lazy"
                          onClick={() => handleOnClick(i)}
                          alt=""
                        />
                      )
                  })
                : ""}
            </div>
          </div>
          <div className="w-full md:w-1/2 md:px-4 flex gap-4 md:gap-6 flex-col">
            <h1 className="h5 font-semibold">{product.name}</h1>
            <p className="text-n-4 font-medium">{product.desc}</p>
            <h6 className="h7 text-n-7 text-sm font-bold">
              {calcSellPrice(product.price, product.discount)}{" "}
              {product.discount ? (
                <span className="text-n-4 line-through">
                  {formatPriceIntl(product.price)}
                </span>
              ) : (
                ""
              )}
            </h6>
            <div className="w-full flex-center gap-3">
              <div className="flex-center gap-2">
                <button
                  onClick={() =>
                    setQuantity((pre) => (pre <= 1 ? pre : pre - 1))
                  }
                  className="p-1 size-9 active:scale-90"
                >
                  <MinusBtnSvg />
                </button>
                <span className="font-medium text-lg">{quantity}</span>
                <button
                  onClick={() => setQuantity((pre) => pre + 1)}
                  className="p-1 size-9 active:scale-90"
                >
                  <PlusBtnSvg />
                </button>
              </div>
              <Btn
                onClick={addToCart}
                classis={"w-full"}
                bg
              >
                {addToCartLoading ? <Loader /> : "Add to Cart"}
              </Btn>
            </div>
          </div>
        </div>
        <div></div>
      </main>
    )
  }
}

export default SingleProduct
