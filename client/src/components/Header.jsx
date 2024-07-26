import React from "react"
import { Link } from "react-router-dom"

// Files
import NavLinks from "./NavLinks"

const Header = () => {
  return (
    <header className="w-full sticky top-0 left-0 flex items-center justify-between px-3 py-3 md:py-4 md:px-8 bg-n-2 shadow-md z-50">
      <div>
        <Link
          to="/"
          className="text-nowrap text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide text-p-4"
        >
          Logo.
        </Link>
      </div>
      <NavLinks />
    </header>
  )
}

export default Header
