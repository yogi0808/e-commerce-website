import React from "react"
import { Link } from "react-router-dom"

// Files
import ArrowRight from "../svgs/ArrowRight"

const ULink = ({ children, arrow, url, classis }) => {
  return (
    <Link
      to={url}
      className={`text-base font-medium text-n-7 border-b border-n-7 w-fit flex items-center justify-center gap-4 hover:gap-6 transition-all duration-300 ease-out ${
        classis ? classis : ""
      }`}
    >
      {children}
      {arrow ? <ArrowRight /> : ""}
    </Link>
  )
}

export default ULink
