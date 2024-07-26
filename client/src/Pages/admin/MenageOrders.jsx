import React from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import useGetAllOrders from "../../hooks/order/useGetAllOrders"
import { useEffect } from "react"
import { formatDate } from "../../utils/helper"
import useUpdateStatus from "../../hooks/order/useUpdateStatus"
import Loader from "../../components/Loader"

const MenageOrders = () => {
  const { allOrders } = useSelector((state) => state.order)

  const { loading, getAllOrders } = useGetAllOrders()
  const { updateStatus } = useUpdateStatus()

  const calculateItems = (products) => {
    return products.reduce((ini, p) => ini + p.quantity, 0)
  }

  useEffect(() => {
    getAllOrders()
  }, [updateStatus])
  return (
    <main className="flex-1 w-full flex-center flex-col md:px-3">
      <div className=" overflow-auto w-full">
        <table className="min-w-full text-left font-medium text-n-7">
          <thead className="border-b-2 border-n-4 font-medium text-n-4">
            <tr>
              <th
                scope="col"
                className="px-6 py-4"
              >
                #
              </th>
              <th
                scope="col"
                className="px-6 py-4"
              >
                Date
              </th>
              <th
                scope="col"
                className="px-6 py-4"
              >
                Customer
              </th>
              <th
                scope="col"
                className="px-6 py-4"
              >
                Payment Method
              </th>
              <th
                scope="col"
                className="px-6 py-4"
              >
                Total
              </th>
              <th
                scope="col"
                className="px-6 py-4"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-4"
              >
                Items
              </th>
              <th
                scope="col"
                className="px-6 py-4"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {allOrders?.map((o, idx) => (
              <tr
                className="border-b border-n-4"
                key={o._id}
              >
                <td className="px-6 py-4">{idx + 1}</td>
                <td className="px-6 py-4">{formatDate(o.createdAt)}</td>
                <td className="px-6 py-4">{o.firstName}</td>
                <td className="px-6 py-4">{o.paymentMethod.toUpperCase()}</td>
                <td className="px-6 py-4">{o.totalPrice}</td>
                <td className="px-6 py-4">
                  {o.status === "Processing" ? (
                    <select
                      className="input"
                      name="status"
                      onChange={(e) => updateStatus(o._id, e.target.value)}
                      required
                    >
                      <option
                        selected
                        disabled
                        hidden
                      >
                        Processing
                      </option>
                      <option value="PickupAvailable">PickupAvailable</option>
                      <option value="Delivered">Delivered</option>
                    </select>
                  ) : (
                    o.status
                  )}
                </td>
                <td className="px-6 py-4">{calculateItems(o.products)}</td>
                <td className="px-6 py-4">
                  <Link className="font-bold text-n-4">View</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {allOrders.length <= 0 ? (
          <p className="font-semibold text-n-4 text-center py-4">
            Don't Have any Orders.
          </p>
        ) : (
          ""
        )}
      </div>
    </main>
  )
}

export default MenageOrders
