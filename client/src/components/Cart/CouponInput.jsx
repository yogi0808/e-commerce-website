import React from "react"

// Files
import CouponSvg from "../../svgs/CouponSvg"

const CouponInput = () => {
  return (
    <div className="checked:bg-n-2 border rounded-md flex gap-2 items-center border-n-4 px-2 py-1 cursor-pointer">
      <CouponSvg />
      <input
        type="text"
        placeholder="Coupon Code"
        className="bg-transparent focus:outline-none px-2 py-2 font-medium text-n-7 flex-1 min-w-[50px]"
      />
      <button className="font-semibold text-n-7 hover:text-n-4 transition-all text-nowrap">
        Apply
      </button>
    </div>
  )
}

export default CouponInput
