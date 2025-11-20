import React, { useState } from 'react'
import{image} from '../assets/index'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import {FaSearch} from 'react-icons/fa'
import { useSelector } from 'react-redux'
import Register from './Register'
import Login from './Login'
import Modal from './Modal'
import SearchBar from './SearchBar'
import Collection from '../pages/Collection'


const Navbar = () => {
{/*  for login /register*/}
const[isOpenModel,setIsOpenModel]=useState(false)
const[isLogin,setIsLogin]=useState(true)
{/*  for search*/}
const[search,setSearch]=useState('')
const[showSearch,setShowSearch]=useState(false)

const openSignUp =()=>{
  setIsLogin(false)
  setIsOpenModel(true)
}


const openLogin =()=>{
  setIsLogin(true)
  setIsOpenModel(true)
}
  const [visible,setVisible]=useState(false)
   {/*  from redux we get the cart product here  ..... here we import the cart product in the nav component using the use selector hook  */}
{/*  store-> cart->cartslice-product array ....> inside element access*/}

   const products = useSelector(state=>state.cart.products)  
    const navigate=useNavigate()

{/*  for search*/}
const handeler=()=>{
setShowSearch(true)
navigate('/collection')
}

  return (

    <>
  <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      
<div className='container mx-auto px-4 md:px-16 lg:px-24 py-6 flex justify-between items-center'>

 {/* logo image */}

 <div className='w-32 relative left-10 sm:left-0  sm:w-36 '>
      <Link to='/'>
  <img src={image.logo} />    
</Link></div>

 {/* <div className='relative flex-1 mx-4 right-6 '>
<form >
  <input  className=" w-full border py-2 px-4" type="text" placeholder='search product' />
<FaSearch className='absolute top-3 right-3 text-purple-400'>
</FaSearch>
</form>
</div>  


 {/* Navbar links */}

<ul className='hidden sm:flex gap-5 text-sm  ml-12 font-serif '>

<NavLink to='/'className='flex flex-col items-center gap-1 hover:text-[#088178] '>
<p >Home</p>
<hr  className='w-12  h-0.5 border-2 text-[#088178]  hidden'/>
</NavLink>
<NavLink to='/collection'className='flex flex-col items-center gap-1 hover:text-[#088178] '>
<p>Collection</p>
<hr  className='w-12 h-0.5 border-2 text-[#088178]  hidden'/>
</NavLink>
<NavLink to='/about' className='flex flex-col items-center gap-1 hover:text-[#088178]'>
<p>About</p>
<hr className='w-12  h-0.5 border-2 text-[#088178]  hidden'/>
</NavLink>
<NavLink to='/contact' className='flex flex-col items-center gap-1 hover:text-[#088178]'>
<p>Contact</p>
<hr className='w-12  h-0.5 border-2 text-[#088178]  hidden'/>
</NavLink>

</ul>

<div className='flex items-center gap-6 ml-6  sm: mr-9.5 ' >
   <img src={image.search_icon} className='w-5 cursor-pointer' alt=""  onClick={handeler}/> 

{/* <div className='flex gap-4'>  */}



 {/* redux  */}
<Link to='/card' className='relative'>
<img src={image.cart_icon} className='w-5 min-w-5 ' alt="" />
{products.length > 0 &&(
<p className='absolute right-[-5px]  bottom-[-5px] w-4 text-center leading-4  bg-black text-white aspect-square rounded-full text-[8px]'>{products.length}</p>
)}
</Link>

 {/* mobile view nav link using burger menu*/}

<img onClick={()=>setVisible(true)} src={image.menu_icon}  className='w-5 cursor-pointer sm:hidden' alt="" />

<button className='hidden md:block cursor-pointer'  onClick={()=>setIsOpenModel(true)}>
  Login
</button>

<button className='hidden md:block cursor-pointer 'onClick={()=>setIsOpenModel(true)} >
  Register
</button></div>


 {/* mobile view nav link*/}

<div className={`absolute top-0 right-0 bottom-0  bg-white transition-all ${visible ? 'w-full':'w-0'}`}>
<div className='flex flex-col text-gray-600'>
  <div onClick={()=>setVisible(false)} className='flex item-center gap-4 p-3 cursor-pointer'>
{/* <img src="" alt="" /> */}
<p>Back</p>

  </div>
<NavLink  onClick={()=>setVisible(false)} to='/' className='py-2 pl-6 border-0 shadow bg-white' >Home</NavLink>
<NavLink onClick={()=>setVisible(false)}  to='/collection' className='py-2 pl-6 border-0 shadow bg-white'>Collection</NavLink>
<NavLink onClick={()=>setVisible(false)} to='/about' className='py-2 pl-6 border-0 shadow bg-white'>About</NavLink>
<NavLink  onClick={()=>setVisible(false)} to='/contact' className='py-2 pl-6 border-0 shadow bg-white'>Contact</NavLink>
</div>
</div>

</div>

{/*  for login/ register we set the props to modal component*/}
 <Modal isOpenModel={isOpenModel} setIsOpenModel={setIsOpenModel}  >
{isLogin ? <Login  openSignUp={openSignUp}/>:<Register openLogin={openLogin}/>}
</Modal> 

    </nav>

   <SearchBar

search={ search}  setSearch={setSearch}

showSearch={showSearch}  setShowSearch={setShowSearch}>

</SearchBar>

</>
  )
}

export default Navbar