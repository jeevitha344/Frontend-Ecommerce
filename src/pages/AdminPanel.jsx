import React, { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom';

const AdminPanel = ({ setIsLoggedIn }) => {
    const [page,setPage]=   useState('dashboard');
     const navigate=useNavigate()
    
  return (
     <div className="flex min-h-screen">
     <div className="w-64 bg-[#088178] text-white p-4 min-h-screen">
      <h1 className="text-xl font-bold mb-6 ">Admin Panel</h1>

      <div className="space-y-4">
        <button
          onClick={() => navigate("dashboard/")}
          className="block w-full mt-10 p-2 rounded-lg text-start  text-white  hover:text-black hover:bg-white  "
        >
          Dashboard
        </button>

        <button
          onClick={() => navigate("products/")}
          className="block w-full p-2 rounded-lg  text-start text-white  hover:text-black hover:bg-white "
        
        >
          Products
        </button>

        <button
          onClick={() => navigate("orderpanel/")}
          className="block w-full p-2 rounded-lg  text-start text-white  hover:text-black hover:bg-white "
        
        >
          Orders
        </button>

        <button
          className="bg-red-600 w-full px-3 py-2 rounded-lg  mt-4"
          onClick={() => {
            localStorage.removeItem("access"); // clear token
            setIsLoggedIn(false);               // update state
            navigate("/");                     // redirect to home
          }}
        >
          Logout
        </button>
      </div>
      
    </div>
    {/* Main content */}
      <main className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </main>
</div>
  )
}

export default AdminPanel
