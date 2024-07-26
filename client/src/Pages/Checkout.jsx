import React from "react"
import { useSelector } from "react-redux"
import CartProductCard from "../components/Cart/CartProductCard"
import { formatPriceIntl } from "../utils/helper"
import CheckoutForm from "../components/CheckoutForm"
import { Navigate } from "react-router"

const Checkout = () => {
  const { products, delivery } = useSelector((state) => state.cart)

  // Calculating Total Price for Checkout
  const calcSubTotal = () => {
    const total = products.reduce((ini, p) => {
      const discount = ((p.product?.price * p.product?.discount) / 100).toFixed(
        0
      )
      const sellPrice = (p.product?.price - discount).toFixed(0)
      return ini + sellPrice * p.quantity
    }, 0)

    return total
  }

  // Calculating Sub Total Price
  const calcTotal = () => {
    const subTotal = products.reduce((ini, p) => {
      const discount = ((p.product?.price * p.product?.discount) / 100).toFixed(
        0
      )
      const sellPrice = (p.product?.price - discount).toFixed(0)

      if (delivery === "free") {
        return ini + sellPrice * p.quantity
      } else if (delivery === "express") {
        return ini + sellPrice * p.quantity + 250
      } else if (delivery === "pickup") {
        return ini + sellPrice * p.quantity - 250
      }
    }, 0)

    return subTotal
  }

  return products.length <= 0 ? (
    <Navigate
      to="/"
      replace
    />
  ) : (
    <main className="flex flex-wrap w-full my-6 md:my-10 px-3 md:px-8 gap-6 md:gap-0">
      <div className="w-full md:w-2/3 md:px-8">
        <CheckoutForm totalPrice={formatPriceIntl(calcTotal())} />
      </div>
      <div className="p-4 h-fit sticky top-24 flex flex-col items-center gap-4 max-w-[415px] border-2 border-n-5 rounded-md w-full md:w-1/3 max-h-[80vh]">
        <div className="flex flex-col gap-4 overflow-auto hide-scrollbar">
          {products.map((p) => (
            <CartProductCard
              key={p._id}
              item={p}
            />
          ))}
        </div>
        <div className="flex flex-col gap-2 w-full mt-6">
          <div className="flex gap-8 justify-between">
            <p className="font-medium text-n-4">Subtotal</p>
            <span className="font-medium">
              {formatPriceIntl(calcSubTotal())}
            </span>
          </div>
          <div className="w-full h-px bg-n-3" />
          <div className="flex gap-8 justify-between">
            <p className="font-semibold h7 text-n-7">Total</p>
            <span className="font-semibold h7">
              {formatPriceIntl(calcTotal())}
            </span>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Checkout
