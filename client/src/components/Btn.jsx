import React from "react"

const Btn = ({ children, bg, rounded, classis, disabled, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${rounded ? "rounded-full" : "rounded-lg"} ${
        bg
          ? "bg-n-7 text-n-1 hover:bg-n-7/90"
          : " border border-n-7 hover:bg-n-7 hover:text-n-1"
      } ${
        classis ? classis : ""
      } px-3 py-2 transition-all duration-300 active:scale-75 ease-out disabled:active:scale-100 disabled:text-n-3/80 disabled:cursor-not-allowed disabled:bg-n-7/90 flex-center`}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Btn
