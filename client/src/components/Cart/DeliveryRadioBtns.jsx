import React from "react"
import { useSelector } from "react-redux"

const DeliveryRadioBtns = ({ onSelect }) => {
  const { delivery } = useSelector((state) => state.cart) // getting selected delivery option from redux store

  return (
    <div className="flex flex-col gap-3 ">
      <label className="checked:bg-n-2 border rounded-md flex gap-3 items-center border-n-4 px-3 py-2 cursor-pointer">
        <input
          type="radio"
          name="delivery"
          value="free"
          checked={delivery === "free"}
          onChange={onSelect}
          className="size-5 accent-n-7"
        />
        <div className="w-full flex items-center justify-between">
          <p>Free Shipping</p>
          <span>$0.00</span>
        </div>
      </label>
      <label className="checked:bg-n-2 border rounded-md flex gap-3 items-center border-n-4 px-3 py-2 cursor-pointer">
        <input
          type="radio"
          name="delivery"
          value="express"
          checked={delivery === "express"}
          onChange={onSelect}
          className="size-5 accent-n-7"
        />
        <div className="w-full flex items-center justify-between">
          <p>Express Shipping</p>
          <span>+ ₹250.00</span>
        </div>
      </label>
      <label className="checked:bg-n-2 border rounded-md flex gap-3 items-center border-n-4 px-3 py-2 cursor-pointer">
        <input
          type="radio"
          name="delivery"
          value="pickup"
          onChange={onSelect}
          checked={delivery === "pickup"}
          className="size-5 accent-n-7"
        />
        <div className="w-full flex items-center justify-between">
          <p>Pick Up</p>
          <span>- ₹250.00</span>
        </div>
      </label>
    </div>
  )
}

export default DeliveryRadioBtns
