import React, { useEffect } from "react"
import { useSelector } from "react-redux"

// Files
import Btn from "../../components/Btn"
import Loader from "../../components/Loader"
import { formatDate } from "../../utils/helper"
import useUpdateStatus from "../../hooks/order/useUpdateStatus"
import useGetUserOrders from "../../hooks/order/useGetUserOrders"

const Orders = () => {
  const { orders } = useSelector((state) => state.order) // getting orders form react store

  const { loading, getUserOrders } = useGetUserOrders() // Custom Hook for get User Orders
  const { loading: cancelLoading, updateStatus } = useUpdateStatus() // Custom Hook for Update Order Status

  // Handling confirmation
  const cancelOrder = (id) => {
    const text = "Are You sure You want to Cancel The Order?"

    if (!confirm(text)) return

    updateStatus(id, "Cancelled")
  }

  useEffect(() => {
    getUserOrders()
  }, [cancelLoading])

  return (
    <div className="flex-center flex-col gap-10 w-full px-3 md:px-8">
      <h1 className="h7 text-n-7 font-bold">Orders History</h1>
      <div className="flex flex-col w-full overflow-auto py-3">
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
                ID
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
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-4"
              >
                Price
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
            {loading ? (
              <Loader />
            ) : (
              orders.map((o, ind) => (
                <tr
                  key={o._id}
                  className="border-b border-n-4"
                >
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    {ind + 1}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    {o._id}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {formatDate(o.createdAt)}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">{o.status}</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {o.totalPrice}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {o.status === "Cancelled" ? (
                      <p>Already Cancelled</p>
                    ) : cancelLoading ? (
                      <Loader />
                    ) : (
                      <Btn
                        onClick={() => cancelOrder(o._id)}
                        className="font-bold text-[#FF5630]"
                      >
                        Cancel
                      </Btn>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        {loading ? (
          <Loader />
        ) : orders.length <= 0 ? (
          <p className="font-semibold text-n-4 text-center py-4">
            Don't Have any Orders.
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  )
}

export default Orders
