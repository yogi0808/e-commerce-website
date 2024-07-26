import React from "react"

// Files
import Hero from "../components/home/Hero"
import NewsLetter from "../components/NewsLetter"
import Category from "../components/home/Category"
import NewArrivals from "../components/home/NewArrivals"

const Home = () => {
  return (
    <div className="">
      <Hero />
      <Category />
      <NewArrivals />
      <NewsLetter />
    </div>
  )
}

export default Home
