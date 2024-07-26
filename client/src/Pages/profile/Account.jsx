import React from "react"
import { useSelector } from "react-redux"

const Account = () => {
  // Getting User Data from redux Store
  const { userInfo } = useSelector((state) => state.auth)

  return (
    <div className="flex flex-col gap-10 items-center">
      <h1 className="h7 text-n-7 font-bold">Account Details</h1>

      <table className="text-left font-medium text-n-7">
        <tbody>
          <tr className="border-b-2 border-n-4">
            <th
              scope="col"
              className="px-6 py-4 text-n-4"
            >
              Full Name:
            </th>
            <td className="whitespace-nowrap px-6 py-4">{userInfo.fullName}</td>
          </tr>
          <tr className="border-b-2 border-n-4">
            <th
              scope="col"
              className="px-6 py-4 text-n-4"
            >
              Display Name:
            </th>
            <td className="whitespace-nowrap px-6 py-4">{userInfo.username}</td>
          </tr>
          <tr className="border-b-2 border-n-4">
            <th
              scope="col"
              className="px-6 py-4 text-n-4"
            >
              Email:
            </th>
            <td className="whitespace-nowrap px-6 py-4">{userInfo.email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Account
