import toast from "react-hot-toast"
import React, { useEffect } from "react"
import { useNavigate } from "react-router"
import { useDispatch, useSelector } from "react-redux"

// Files
import Btn from "../components/Btn"
import PageHero from "../components/PageHero"
import { formatPriceIntl } from "../utils/helper"
import CouponInput from "../components/Cart/CouponInput"
import CartProductCard from "../components/Cart/CartProductCard"
import useGetCartProducts from "../hooks/cart/useGetCartProducts"
import DeliveryRadioBtns from "../components/Cart/DeliveryRadioBtns"
import { setDeliveryMethod } from "../store/features/cart/cartSlice"

const Cart = () => {
  const dispatch = useDispatch()

  const { products, delivery } = useSelector((state) => state.cart) // Getting cart Products and Delivery from redux store
  const { getCartProducts } = useGetCartProducts() // Custom Hook for Get cart Products form API

  const navigate = useNavigate()

  // Setting Delivery on Change
  const onChange = (e) => {
    dispatch(setDeliveryMethod(e.target.value))
  }

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

  // Checking Product for checkout and redirecting
  const checkout = () => {
    if (products.length <= 0)
      return toast.error("Don't have any Products to checkout.")

    navigate("/checkout")
  }

  useEffect(() => {
    getCartProducts()
  }, [])

  return (
    <main>
      <PageHero
        title="#Your Shopping Cart"
        subTitle="Review and Checkout"
        img="/banners/b5.png"
      />
      <div className="flex gap-8 md:gap-0 justify-center flex-wrap w-full my-6 md:my-10 px-3 md:px-8">
        <div className="w-full md:w-2/3">
          <div className="w-full flex-center h-fit">
            <h1 className="h7 text-n-7 font-bold">Products</h1>
          </div>
          <div className="flex justify-center flex-wrap gap-4 mt-6">
            {products.length <= 0 ? (
              <p className="font-semibold text-n-4">
                Don't Have any Products in Cart.
              </p>
            ) : (
              products.map((p) => (
                <CartProductCard
                  key={p._id}
                  item={p}
                />
              ))
            )}
          </div>
        </div>
        <div className="p-4 h-fit sticky top-24 flex flex-col justify-between gap-4 max-w-[415px] border-2 border-n-5 rounded-md w-full md:w-1/3">
          <h4 className="h7 font-semibold">Cart Summary</h4>
          <DeliveryRadioBtns onSelect={onChange} />
          <CouponInput />
          <div className="flex flex-col gap-2">
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
          <Btn
            onClick={checkout}
            bg
          >
            Checkout
          </Btn>
        </div>
      </div>
    </main>
  )
}

export default Cart
