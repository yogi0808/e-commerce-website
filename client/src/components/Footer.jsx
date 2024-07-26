import React from "react"

// Files
import InstaSvg from "../svgs/InstaSvg"
import YouTubeSvg from "../svgs/YouTubeSvg"
import FaceBookSvg from "../svgs/FaceBookSvg"

const Footer = () => {
  const date = new Date()

  return (
    <section className="text-n-1 bg-n-7 flex items-center justify-between px-3 md:px-8 py-3 flex-wrap gap-6">
      <p>Copyright © {date.getFullYear()} 3legant. All rights reserved</p>
      <div className="flex gap-6">
        <a
          href="https://www.instagram.com/"
          target="_blank"
        >
          <InstaSvg />
        </a>
        <a
          href="https://www.facebook.com/"
          target="_blank"
        >
          <FaceBookSvg />
        </a>
        <a
          href="https://www.youtube.com/"
          target="_blank"
        >
          <YouTubeSvg />
        </a>
      </div>
    </section>
  )
}

export default Footer
