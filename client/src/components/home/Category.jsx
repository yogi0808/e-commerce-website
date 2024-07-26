import React from "react"

// Files
import ULink from "../ULink"

const Category = () => {
  return (
    <section className="flex gap-6 w-full mt-10 justify-center flex-wrap px-3 md:px-8">
      <div className="relative rounded-md overflow-hidden">
        <div className="absolute left-5 top-5 flex flex-col gap-4 md:gap-6">
          <h5 className="h6 md:h5 text-n-7 font-semibold">Living Room</h5>
          <ULink
            arrow
            url="/shop?category=Living Room"
          >
            Shop Now
          </ULink>
        </div>
        <img
          className="w-full object-cover"
          src="/c1.png"
          alt="Category 1"
        />
      </div>
      <div className="flex flex-col gap-6 flex-wrap">
        <div className="relative rounded-md overflow-hidden">
          <div className="absolute left-5 top-5 flex flex-col gap-4 md:gap-6">
            <h5 className="h6 md:h5 text-n-7 font-semibold">Bed Room</h5>
            <ULink
              arrow
              url="/shop?category=Bed Room"
            >
              Shop Now
            </ULink>
          </div>

          <img
            className="w-full object-cover"
            src="/c2.png"
            alt="Category 1"
          />
        </div>
        <div className="relative rounded-md overflow-hidden">
          <div className="absolute left-5 top-5 flex flex-col gap-4 md:gap-6">
            <h5 className="h6 md:h5 text-n-7 font-semibold">Kitchen</h5>
            <ULink
              arrow
              url="/shop?category=Kitchen"
            >
              Shop Now
            </ULink>
          </div>
          <img
            className="w-full object-cover"
            src="/c3.png"
            alt="Category 1"
          />
        </div>
      </div>
    </section>
  )
}

export default Category
