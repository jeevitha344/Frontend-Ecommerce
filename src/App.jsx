import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './component/Navbar'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Card from './pages/Card'
import Login from './component/Login'
import Orders from './pages/Orders'
import Footer from './component/Footer'
import Features from './component/Features'
import Checkout from './pages/Checkout'
import Register from './component/Register'
import SearchBar from './component/SearchBar'
import FilterData from './pages/FilterData'
import  ProductDetails from './pages/ProductDetails'
import AdminPanel from './pages/AdminPanel'
import OrderPanel from './pages/OrderPanel'
import Products from './pages/Products'
import DashBoard from './pages/DashBoard'
import MainLayout from './pages/MainLayout'
import AddProduct from './pages/AddProduct'
import EditProduct from './pages/EditProduct'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  
  const[order,setOrder]=useState(null)

   const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('access'))
  // const hideLayout = location.pathname.startsWith("/admin");
  
  return (
    <>
     <div className=''>
      {/* {!hideLayout && <Navbar />}
      {!hideLayout && <SearchBar />} */}
       <Routes>
      <Route element={<MainLayout />}>
        
        <Route path='/' element={<Home/>}/>
        <Route path='/collection' element={<Collection/>}/>
        <Route path="/collection/:id" element={<Collection />} />
         
      
        <Route path='/about' element={<About/>}/>
         <Route path='/contact' element={<Contact/>}/>
           <Route path='/checkout' element={<Checkout  setOrder={setOrder}/>}/>
            <Route path='/Order-confrimation/:id' element={<Orders />}/>
             <Route path='/filter-data' element={<FilterData  order={order}/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
         {/* <Route path='/Product' element={<Product/>}></Route>  */}
           <Route path='/productdetails/:id' element={<ProductDetails/>}/>
        <Route path='/card' element={<Card/>}/>
         {/* <Route path='/features' element={<Features/>}></Route> */}
        </Route>

          <Route element={<AdminPanel setIsLoggedIn={setIsLoggedIn} />}>
        <Route path="/dashboard" element={<DashBoard />} ></Route>
          <Route path="/products" element={<Products />} ></Route>
          <Route path="/orderpanel" element={<OrderPanel/>} ></Route>
           <Route path="/add" element={<AddProduct />} />
        <Route path="/edit/:id" element={<EditProduct />} />
         </Route>
        {/* {!hideLayout && <Footer />} */}
           </Routes>
      </div> 
    <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </>
  )
}

export default App
