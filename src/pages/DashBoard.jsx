import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAllOrders } from "../redux/productThunk"
import { Users, ShoppingCart, DollarSign } from "lucide-react"

const DashBoard = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllOrders())
  }, [dispatch])

  const orders = useSelector((state) => state.order.order)

  return (
    <div className="p-2">
      <h2 className="text-2xl font-bold text-[#088178] mb-11">
        Admin Dashboard
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Total Users */}
        <div className="bg-gradient-to-r from-[#088178] to-[#0aa39a] text-white p-8 rounded-xl shadow-lg transform transition hover:scale-105">
          <div className="flex items-center justify-between">
            <Users size={40} />
            <span className="text-4xl font-bold">
              {orders?.total_users ?? 0}
            </span>
          </div>
          <p className="mt-4 text-lg">Total Users</p>
        </div>

        {/* Total Orders */}
        <div className="bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] text-white p-8 rounded-xl shadow-lg transform transition hover:scale-105">
          <div className="flex items-center justify-between">
            <ShoppingCart size={40} />
            <span className="text-4xl font-bold">
              {orders?.data?.length ?? 0}
            </span>
          </div>
          <p className="mt-4 text-lg">Total Orders</p>
        </div>

        {/* Revenue */}
        <div className="bg-gradient-to-r from-[#4f46e5] to-[#6366f1] text-white p-8 rounded-xl shadow-lg transform transition hover:scale-105">
          <div className="flex items-center justify-between">
            <DollarSign size={40} />
            <span className="text-4xl font-bold">$3,500</span>
          </div>
          <p className="mt-4 text-lg">Revenue</p>
        </div>

      </div>
    </div>
  )
}

export default DashBoard
