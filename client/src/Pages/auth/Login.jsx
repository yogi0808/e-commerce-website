import React from "react"
import { Link } from "react-router-dom"

// Files
import Btn from "../../components/Btn"
import Loader from "../../components/Loader"
import useLogin from "../../hooks/auth/useLogin"

const Login = () => {
  const { loading, Login } = useLogin() // Custom Hook for Login

  // Handling Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)

    const user = Object.fromEntries(formData)

    await Login(user)
  }

  return (
    <main className="flex-1 w-full flex-center px-3 md:px-8">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full max-w-[550px] my-10 md:my-0 p-4 border-2 border-n-5 rounded-lg gap-3 bg-n-2"
      >
        <label
          className="text-n-4 uppercase font-medium flex flex-col"
          htmlFor="email"
        >
          Email
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Enter Your Email"
            required
          />
        </label>
        <label
          className="text-n-4 uppercase font-medium flex flex-col"
          htmlFor="password"
        >
          Password
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Enter Your password"
            required
          />
        </label>
        <p className="text-n-4 font-semibold">
          Don't have a Account?{" "}
          <Link
            to="/register"
            className="text-n-7 underline"
          >
            Click hear.
          </Link>
        </p>
        <Btn
          disabled={loading}
          bg
        >
          {loading ? <Loader /> : "Login"}
        </Btn>
      </form>
    </main>
  )
}

export default Login
