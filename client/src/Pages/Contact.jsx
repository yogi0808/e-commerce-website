import React from "react"

// Files
import PageHero from "../components/PageHero"
import NewsLetter from "../components/NewsLetter"
import ContactInfo from "../components/contact/ContactInfo"
import ContactFrom from "../components/contact/ContactFrom"

const Contact = () => {
  return (
    <main>
      <PageHero
        title="#let's_talk"
        subTitle="LEAVE A MESSAGE, We love to hear from you!"
        img="/banners/b5.png"
      />
      <ContactInfo />
      <section className="flex w-full flex-wrap gap-6 md:gap-0 px-3 md:px-8 mt-10">
        <div className="w-full md:w-1/2 md:p-3">
          <ContactFrom />
        </div>
        <div className="w-full md:w-1/2 md:p-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.983724337563!2d72.95632727472083!3d21.27211182937691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04690168c32f7%3A0xb2d8b2ee2a65fd0f!2sKamrej%20Char%20Rasta%2C%20Kamrej%2C%20Gujarat%20394185!5e0!3m2!1sen!2sin!4v1720881556243!5m2!1sen!2sin"
            className="min-h-[350px] rounded-md"
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
      <NewsLetter />
    </main>
  )
}

export default Contact
