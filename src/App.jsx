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
function App() {
  const [count, setCount] = useState(0)
  const[order,setOrder]=useState(null)

  return (
    <>
     <div className=''>
      <Navbar/>
      <SearchBar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/collection' element={<Collection/>}></Route>
        <Route path='/about' element={<About/>}></Route>
         <Route path='/contact' element={<Contact/>}></Route>
           <Route path='/checkout' element={<Checkout  setOrder={setOrder}/>}></Route>
            <Route path='/Order-confrimation' element={<Orders  order={order}/>}></Route>
             <Route path='/filter-data' element={<FilterData  order={order}/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
         {/* <Route path='/Product' element={<Product/>}></Route>  */}
           <Route path='/productdetails/:id' element={<ProductDetails/>}></Route>
        <Route path='/card' element={<Card/>}></Route>
         {/* <Route path='/features' element={<Features/>}></Route> */}
        </Routes>
        <Footer/>
      </div> 
    </>
  )
}

export default App
