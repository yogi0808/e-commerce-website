import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"

// Files
import CartSvg from "../svgs/CartSvg"
import MenuSvg from "../svgs/MenuSvg"
import { navLinks } from "../constants"

const NavLinks = () => {
  // Getting user Data from redux Store
  const userData = useSelector((state) => state.auth.userInfo)

  // Getting cart Products from redux Store
  const { products } = useSelector((state) => state.cart)

  const [cartCount, setCartCount] = useState(
    products.reduce((ini, p) => ini + (p.quantity ? p.quantity : 1), 0)
  )

  const [isNavOpen, setIsNavOpen] = useState(false)

  const closeNav = () => {
    setIsNavOpen(false)
  }

  useEffect(() => {
    return setCartCount(
      products.reduce((ini, p) => ini + (p.quantity ? p.quantity : 1), 0)
    )
  }, [products])

  return (
    <div className="flex items-center justify-center gap-5">
      <nav
        className={`flex gap-5 w-full absolute left-0 ${
          isNavOpen ? "" : "-translate-y-[calc(100%+60px)]"
        } top-full bg-n-2 sm:bg-inherit sm:static sm:translate-y-0 flex-col sm:flex-row items-center transition-all duration-300 shadow-md sm:shadow-none ease-in-out`}
      >
        {navLinks.map((link) => (
          <NavLink
            onClick={closeNav}
            className={({ isActive }) =>
              `navLink ${isActive ? "!text-n-7 after:w-[70%]" : ""}`
            }
            to={link.url}
            key={link.id}
          >
            {link.title}
          </NavLink>
        ))}
        {/* Condition form user logged in or not. */}
        {userData ? (
          <>
            <NavLink
              onClick={closeNav}
              to="/profile"
              className={({ isActive }) =>
                `navLink ${isActive ? "!text-n-7 after:w-[70%]" : ""}`
              }
            >
              Profile
            </NavLink>
            {userData.isAdmin ? (
              <NavLink
                onClick={closeNav}
                to="/admin"
                className={({ isActive }) =>
                  `navLink ${isActive ? "!text-n-7 after:w-[70%]" : ""}`
                }
              >
                Admin
              </NavLink>
            ) : (
              ""
            )}
          </>
        ) : (
          <NavLink
            to="/login"
            onClick={closeNav}
            className={({ isActive }) =>
              `navLink ${isActive ? "!text-n-7 after:w-[70%]" : ""}`
            }
          >
            Login
          </NavLink>
        )}
      </nav>
      <div className="flex gap-5">
        {userData ? (
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `navLink ${isActive ? "!text-n-7 after:w-[70%]" : ""} relative`
            }
          >
            <CartSvg />
            <div className="size-5 border-2 border-white bg-p text-white rounded-full flex absolute items-center justify-center top-0 right-0 text-[0.6rem] -translate-y-1 translate-x-1">
              {cartCount}
            </div>
          </NavLink>
        ) : (
          ""
        )}
        <button
          className="sm:hidden"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <MenuSvg isOpen={isNavOpen} />
        </button>
      </div>
    </div>
  )
}

export default NavLinks
