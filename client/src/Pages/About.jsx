import React from "react"

// Files
import { aboutText } from "../constants"
import PageHero from "../components/PageHero"
import NewsLetter from "../components/NewsLetter"

const About = () => {
  return (
    <main>
      <PageHero
        title="#Know Us"
        subTitle="The customer is very happy, it will be followed"
        img="/banners/b5.png"
      />
      <section className="flex flex-wrap mt-10 px-3 md:px-8">
        <div className="flex flex-center md:w-1/2 w-full p-3">
          <img
            src="/a1.jpg"
            alt="About"
          />
        </div>
        <div className="flex gap-3 w-full md:w-1/2 flex-col">
          <h2 className="h4 lg:h3 font-bold">Who we Are?</h2>
          {aboutText.map((item, idx) => (
            <p
              className="font-medium"
              key={idx}
            >
              &emsp;{item}
            </p>
          ))}
        </div>
      </section>

      <NewsLetter />
    </main>
  )
}

export default About
