import { useSelector } from "react-redux"
import React, { useEffect, useState } from "react"

// Files
import Btn from "../Btn"
import Loader from "../Loader"
import useSendMessage from "../../hooks/massage/useSendMessage"

const ContactFrom = () => {
  const { userInfo } = useSelector((state) => state.auth) // Getting user information from redux Store

  const { loading, sendMessage } = useSendMessage() // Custom Hook for send Message

  const [message, setMessage] = useState({
    fullName: "",
    email: "",
    message: "",
  })

  // Handling form Submit
  const handelSubmit = (e) => {
    e.preventDefault()

    sendMessage(message)

    setMessage({
      message: "",
    })
  }

  const handelOnChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    setMessage((pre) => ({ ...pre, [name]: value }))
  }

  useEffect(() => {
    setMessage({
      fullName: userInfo?.fullName,
      email: userInfo?.email,
      message: "",
    })
  }, [userInfo])

  return (
    <form
      onSubmit={handelSubmit}
      className="flex flex-col"
    >
      <label
        className="text-n-4 uppercase font-medium mt-4"
        htmlFor="name"
      >
        Full Name
      </label>
      <input
        type="text"
        name="fullName"
        className="input"
        onChange={handelOnChange}
        value={message.fullName}
        placeholder="Enter Your Name"
        required
      />
      <label
        className="text-n-4 uppercase font-medium mt-4"
        htmlFor="email"
      >
        Email Address
      </label>
      <input
        type="email"
        name="email"
        className="input"
        value={message.email}
        onChange={handelOnChange}
        placeholder="Enter Your Email"
        required
      />
      <label
        className="text-n-4 uppercase font-medium mt-4"
        htmlFor="message"
      >
        Message
      </label>
      <textarea
        name="message"
        className="input"
        rows={5}
        cols={10}
        value={message.message}
        onChange={handelOnChange}
        placeholder="Enter Your Message"
        required
      />
      <Btn
        bg
        classis="mt-4"
        disabled={loading}
      >
        {loading ? <Loader /> : "Send Message"}
      </Btn>
    </form>
  )
}

export default ContactFrom
