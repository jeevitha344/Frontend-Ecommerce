import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAllOrders } from "../redux/productThunk"

const OrderPanel = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllOrders())
  }, [dispatch])

 const orders=useSelector(state=>state.order.order)
 console.log("orders",orders)

  // if (loading) {
  //   return <p className="text-center text-lg">Loading orders...</p>
  // }

  // if (error) {
  //   return <p className="text-center text-red-500">{error}</p>
  // }

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-[#088178] mb-6">
        Orders Management
      </h2>

      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="min-w-full border">
          <thead className="bg-[#088178] text-white">
            <tr>
              <th className="p-3 text-left">Order ID</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Phone</th>
              <th className="p-3 text-left">Address</th>
            </tr>
          </thead>

          <tbody>
            {orders.data?.length > 0 ? (
              orders.data?.map((order) => (
                <tr
                  key={order?.id}
                  className="border-b hover:bg-gray-100"
                >
                  <td className="p-3">{order?.id}</td>
                  <td className="p-3">{order?.name}</td>
                  <td className="p-3">{order?.email}</td>
                  <td className="p-3">{order?.phone}</td>
                  <td className="p-3">{order?.address}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center p-4">
                  No orders found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default OrderPanel
