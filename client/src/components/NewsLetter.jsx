import React from "react"

// Files
import EmailSvg from "../svgs/EmailSvg"

const NewsLetter = () => {
  return (
    <section className="w-full relative aspect-auto mt-10 min-h-[150px] py-20 md:py-26 flex-center px-3 md:px-8">
      <div className="flex flex-col gap-6 ">
        <div className="flex flex-col gap-4">
          <h1 className="h7 sm:h5 md:h4 font-bold text-center">
            Join Our Newsletter
          </h1>
          <p className="text-sm text-center">
            Sign up for new deals, new products and promotions
          </p>
        </div>
        <div className="border-b border-n-4 flex flex-nowrap items-center min-w-[200px]">
          <EmailSvg />
          <input
            className="flex-1 bg-transparent focus:outline-none px-3 py-2"
            type="text"
            placeholder="Email address"
          />
          <button className="font-semibold text-n-4 hover:text-n-7 transition-all text-nowrap">
            Sign up
          </button>
        </div>
      </div>
      <img
        className="w-full h-full object-cover absolute top-0 bottom-0 left-1/2 -translate-x-1/2 -z-10"
        src="/newsletter.png"
        alt=""
      />
    </section>
  )
}

export default NewsLetter
