import React from "react"

const PageHero = ({ title, subTitle, img }) => {
  return (
    <section className="flex-center w-full relative flex-col px-3 md:px-8 py-8 md:py-12 gap-3">
      <h2 className="h4 sm:h3 lg:h2 text-n-1 font-bold text-center">{title}</h2>
      <p className="tracking-wider font-medium text-n-1 text-center">
        {subTitle}
      </p>
      <img
        className="w-full h-full object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
        src={img || "/banners/b3.png"}
        alt=""
      />
    </section>
  )
}

export default PageHero
