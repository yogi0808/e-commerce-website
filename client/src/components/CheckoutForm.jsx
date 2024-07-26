import React from "react"
import { useState } from "react"

// Files
import Btn from "./Btn"
import Loader from "./Loader"
import useCreateOrder from "../hooks/order/useCreateOrder"

const CheckoutForm = ({ totalPrice }) => {
  const [payment, setPayment] = useState("card")

  const { loading, createOrder } = useCreateOrder() // Custom Hook for create an Order

  const onSelect = (e) => {
    setPayment(e.target.value)
  }

  // handling checkout form submit
  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)

    const values = Object.fromEntries(formData)

    createOrder({ ...values, totalPrice })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6"
    >
      <div className="flex flex-col gap-4 border-2 border-n-5 p-4 rounded-md bg-n-2">
        <h1 className="h7 text-n-7 font-bold">Contact Information</h1>
        <div className="flex gap-3 w-full flex-wrap">
          <label
            className="text-n-4 uppercase font-medium flex flex-col flex-1 min-w-28"
            htmlFor="firstName"
          >
            First Name *
            <input
              type="text"
              name="firstName"
              className="input"
              placeholder="First Name"
              required
            />
          </label>
          <label
            className="text-n-4 uppercase font-medium flex flex-col flex-1 min-w-28"
            htmlFor="lastName"
          >
            Last Name *
            <input
              type="text"
              name="lastName"
              className="input"
              placeholder="Last Name"
              required
            />
          </label>
        </div>
        <label
          className="text-n-4 uppercase font-medium flex flex-col flex-1"
          htmlFor="name"
        >
          Phone Number *
          <input
            type="text"
            name="phoneNumber"
            className="input"
            placeholder="e.g, 1234567890"
            pattern="[0-9]{10}"
            minLength={10}
            maxLength={10}
            required
          />
        </label>
        <label
          className="text-n-4 uppercase font-medium flex flex-col flex-1"
          htmlFor="name"
        >
          Email Address *
          <input
            type="email"
            name="email"
            className="input"
            placeholder="e.g, example@expmple.com"
            required
          />
        </label>
      </div>
      <div className="flex flex-col gap-4 border-2 border-n-5 p-4 rounded-md bg-n-2">
        <h1 className="h7 text-n-7 font-bold">Shipping Address</h1>
        <label
          className="text-n-4 uppercase font-medium flex flex-col flex-1"
          htmlFor="street"
        >
          Street Address *
          <input
            type="text"
            name="street"
            className="input"
            placeholder="Street Address"
            required
          />
        </label>
        <label
          className="text-n-4 uppercase font-medium flex flex-col flex-1"
          htmlFor="country"
        >
          Country *
          <input
            type="text"
            name="country"
            className="input"
            placeholder="Country"
            required
          />
        </label>
        <label
          className="text-n-4 uppercase font-medium flex flex-col flex-1"
          htmlFor="city"
        >
          Town City *
          <input
            type="text"
            name="city"
            className="input"
            placeholder="Town / City"
            required
          />
        </label>
        <div className="flex gap-3 w-full flex-wrap">
          <label
            className="text-n-4 uppercase font-medium flex flex-col flex-1 min-w-28"
            htmlFor="state"
          >
            State *
            <input
              type="text"
              name="state"
              className="input"
              placeholder="State"
              required
            />
          </label>
          <label
            className="text-n-4 uppercase font-medium flex flex-col flex-1 min-w-28"
            htmlFor="zip"
          >
            Zip Code *
            <input
              type="text"
              name="zip"
              className="input"
              pattern="[0-9]{6}"
              placeholder="e.g, 123456"
              maxLength={6}
              minLength={6}
              required
            />
          </label>
        </div>
      </div>
      <div className="flex flex-col gap-4 border-2 border-n-5 p-4 rounded-md bg-n-2">
        <h1 className="h7 text-n-7 font-bold">Payment Method</h1>
        <label className="checked:bg-n-2 border-2 rounded-md flex gap-3 items-center border-n-5 font-semibold px-3 py-2 cursor-pointer">
          <input
            type="radio"
            name="paymentMethod"
            value="card"
            checked={payment === "card"}
            onChange={onSelect}
            className="size-5 accent-n-7"
          />
          <div className="w-full flex items-center">
            <p>Pay by Card Credit</p>
          </div>
        </label>
        <label className="checked:bg-n-2 border-2 rounded-md flex gap-3 items-center border-n-5 font-semibold px-3 py-2 cursor-pointer">
          <input
            type="radio"
            name="paymentMethod"
            value="upi"
            checked={payment === "upi"}
            onChange={onSelect}
            className="size-5 accent-n-7"
          />
          <div className="w-full flex items-center">
            <p>UPI</p>
          </div>
        </label>
        <label className="checked:bg-n-2 border-2 rounded-md flex gap-3 items-center border-n-5 font-semibold px-3 py-2 cursor-pointer">
          <input
            type="radio"
            name="paymentMethod"
            value="cod"
            checked={payment === "cod"}
            onChange={onSelect}
            className="size-5 accent-n-7"
          />
          <div className="w-full flex items-center">
            <p>Case on Delivery</p>
          </div>
        </label>
        <div className="w-full h-px bg-n-3" />
        {payment === "card" ? (
          <div className="flex flex-col gap-4">
            <label
              className="text-n-4 uppercase font-medium flex flex-col flex-1"
              htmlFor="cardNumber"
            >
              Card Number *
              <input
                type="text"
                name="cardNumber"
                className="input"
                placeholder="e.g, 1234 1234 1234 1234"
                pattern="[0-9]{16}"
                minLength={16}
                maxLength={16}
                required
              />
            </label>
            <div className="flex gap-3 w-full flex-wrap items-end">
              <label
                className="text-n-4 uppercase font-medium flex flex-col flex-1 min-w-28"
                htmlFor="cardExpiry"
              >
                Expiration Date *
                <input
                  type="month"
                  name="cardExpiry"
                  className="input"
                  placeholder="Enter your First Name"
                  required
                />
              </label>
              <label
                className="text-n-4 uppercase font-medium flex flex-col flex-1 min-w-28"
                htmlFor="cardCVC"
              >
                CVC *
                <input
                  type="text"
                  name="cardCVC"
                  className="input"
                  pattern="[0-9]{3}"
                  minLength={3}
                  maxLength={3}
                  placeholder="e.g, 123"
                  required
                />
              </label>
            </div>
          </div>
        ) : (
          ""
        )}
        {payment === "upi" ? (
          <label
            className="text-n-4 uppercase font-medium flex flex-col flex-1"
            htmlFor="upi"
          >
            UPI *
            <input
              type="text"
              name="upi"
              className="input"
              placeholder="Enter your UPI"
              required
            />
          </label>
        ) : (
          ""
        )}
      </div>
      <Btn
        disabled={loading}
        bg
      >
        {loading ? <Loader /> : "Place Order"}
      </Btn>
    </form>
  )
}

export default CheckoutForm
