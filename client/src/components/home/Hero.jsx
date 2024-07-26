import React from "react"

const Hero = () => {
  return (
    <section className="flex flex-col gap-6 px-3 md:px-8">
      <div className="w-full overflow-hidden max-h-[70vh] rounded-md">
        <img
          src="/hero.png"
          alt="Hero Image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex w-full justify-between gap-6 flex-wrap items-center">
        <h1 className="h5 sm:h3 md:h2 text-n-7 font-bold text-center text-nowrap">
          Simply Unique
          <span className="text-n-4">/</span>
          <br />
          Simply Better<span className="text-n-4">.</span>
        </h1>
        <p className="md:h7 font-semibold text-n-4 min-w-[200px]">
          <span className="text-n-7 font-bold">Logo.</span> is a gift &
          decorations store based in HCMC, Vietnam. Est since 2019.
        </p>
      </div>
    </section>
  )
}

export default Hero
