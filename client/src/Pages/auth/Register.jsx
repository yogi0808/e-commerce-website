import React from "react"
import { Link } from "react-router-dom"

// Files
import Btn from "../../components/Btn"
import Loader from "../../components/Loader"
import useRegister from "../../hooks/auth/useRegister"

const Register = () => {
  const { loading, Register } = useRegister() // Custom Hook for Register new User

  // Handling Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)

    const user = Object.fromEntries(formData)

    await Register(user)
  }

  return (
    <main className="flex-1 w-full flex-center px-3 md:px-8">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full max-w-[550px] my-10 md:my-0 p-4 border-2 border-n-5 rounded-lg gap-3 bg-n-2"
      >
        <label
          className="text-n-4 uppercase font-medium flex flex-col"
          htmlFor="name"
        >
          Full Name
          <input
            type="text"
            name="fullName"
            className="input"
            placeholder="Enter Your Name"
            required
          />
        </label>
        <label
          className="text-n-4 uppercase font-medium flex flex-col"
          htmlFor="username"
        >
          Username
          <input
            type="text"
            name="username"
            className="input"
            placeholder="Enter Your Username"
            required
          />
        </label>
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
        <label
          className="text-n-4 uppercase font-medium flex flex-col"
          htmlFor="confirmPassword"
        >
          Confirm Password
          <input
            type="password"
            name="confirmPassword"
            className="input"
            placeholder="Enter Your Confirm Password"
            required
          />
        </label>
        <p className="text-n-4 font-semibold">
          Already have a Account?{" "}
          <Link
            to="/login"
            className="text-n-7 underline"
          >
            Click hear.
          </Link>
        </p>
        <Btn
          bg
          disable={loading}
        >
          {loading ? <Loader /> : "Register"}
        </Btn>
      </form>
    </main>
  )
}

export default Register
