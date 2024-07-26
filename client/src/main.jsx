import "./index.css"
import React from "react"
import { Provider } from "react-redux"
import ReactDOM from "react-dom/client"
import { createRoutesFromElements, Route } from "react-router"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

// Files
import App from "./App.jsx"
import Home from "./Pages/Home.jsx"
import Shop from "./Pages/Shop.jsx"
import Cart from "./Pages/Cart.jsx"
import About from "./Pages/About.jsx"
import { store } from "./store/store.js"
import Contact from "./Pages/Contact.jsx"
import Login from "./Pages/auth/Login.jsx"
import Orders from "./Pages/profile/Orders.jsx"
import Register from "./Pages/auth/Register.jsx"
import Account from "./Pages/profile/Account.jsx"
import Profile from "./Pages/profile/Profile.jsx"
import Dashboard from "./Pages/admin/Dashboard.jsx"
import ProtectRoute from "./components/ProtectRoute.jsx"
import MenageProducts from "./Pages/admin/MenageProducts.jsx"
import MenageCategory from "./Pages/admin/MenageCategory.jsx"
import ProtectAdmin from "./components/Admin/ProtectAdmin.jsx"
import ProtectRouteFromUser from "./components/ProtectRouteFromUser.jsx"
import Checkout from "./Pages/Checkout.jsx"
import MenageOrders from "./Pages/admin/MenageOrders.jsx"
import SingleProduct from "./Pages/SingleProduct.jsx"

// Creating Route from Elements
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<App />}
    >
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/shop"
        element={<Shop />}
      />
      <Route
        path="/product/:id"
        element={<SingleProduct />}
      />
      <Route
        path="/contact"
        element={<Contact />}
      />
      <Route
        path="/about"
        element={<About />}
      />

      {/* Protecting routs from not authenticated user */}
      <Route
        path=""
        element={<ProtectRoute />}
      >
        <Route
          path="/profile"
          element={<Profile />}
        >
          <Route
            path=""
            element={<Account />}
          />
          <Route
            path="orders"
            element={<Orders />}
          />
        </Route>
        <Route
          path="/cart"
          element={<Cart />}
        />
        <Route
          path="/checkout"
          element={<Checkout />}
        />
      </Route>

      {/* Protecting routs from authenticated user */}
      <Route
        path=""
        element={<ProtectRouteFromUser />}
      >
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/register"
          element={<Register />}
        />
      </Route>

      {/* Protecting Admin Route */}
      <Route
        path=""
        element={<ProtectAdmin />}
      >
        <Route
          path="/admin"
          element={<Dashboard />}
        >
          <Route
            path="orders"
            element={<MenageOrders />}
          />
          <Route
            path="products"
            element={<MenageProducts />}
          />
          <Route
            path="category"
            element={<MenageCategory />}
          />
        </Route>
      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
