import React from "react"

// Files
import Store from "../../svgs/Store"
import CallSvg from "../../svgs/CallSvg"
import EmailSvg from "../../svgs/EmailSvg"
import { contactTexts } from "../../constants"

const ContactInfo = () => {
  return (
    <section className="flex-center gap-6 px-3 md:px-8 flex-wrap mt-10">
      <div className="flex-center flex-col gap-3 bg-n-2 flex-1 p-4 rounded-md">
        <Store />
        <p className="font-medium text-n-4">Address</p>
        <p className="font-medium text-n-7 text-center">
          {contactTexts.address}
        </p>
      </div>
      <div className="flex-center flex-col gap-3 bg-n-2 flex-1 p-4 rounded-md">
        <CallSvg />
        <p className="font-medium text-n-4">Contact</p>
        <p className="font-medium text-n-7 text-center text-nowrap">
          {contactTexts.phone}
        </p>
      </div>
      <div className="flex-center flex-col gap-3 bg-n-2 flex-1 p-4 rounded-md">
        <EmailSvg />
        <p className="font-medium text-n-4">Email</p>
        <p className="font-medium text-n-7 text-center">{contactTexts.email}</p>
      </div>
    </section>
  )
}

export default ContactInfo
