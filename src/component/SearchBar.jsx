import React, { useEffect, useState } from 'react'
import{image} from '../assets/index'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setSearchTerm } from '../redux/ProductSlice'



const SearchBar = ({setSearch,search,showSearch,setShowSearch}) => {
const[visible,setVisible]=useState(false)
const location=useLocation();
const navigate=useNavigate()


useEffect(()=>{
  if(location.pathname.includes('collection')){
    setVisible(true)
  }
  else{
    setVisible(false)
  }
},[location])

const dispatch=useDispatch()
const handelSearch=(e)=>{
  e.preventDefault()
  dispatch(setSearchTerm(search))
  console.log(search)
navigate('/filter-data')// search product will display in this filter page
}



  return showSearch && visible ? (
 <div className="fixed top-[70px] left-0 w-full z-40 bg-white">
  <div className="border-t  shadow-md bg-white text-center mt-4 py-5">

    <div className="inline-flex items-center justify-center border border-gray-400 px-6 py-2 rounded">
<form action="" onSubmit={handelSearch}>
      <input
        type="text"
        value={search}
        className="text-sm outline-none"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />
</form>
      {/* Search Icon beside input */}
      <img
        src={image.search_icon}
        alt=""
        className="w-4 ml-16 "
      />
    </div>

    {/* Close Icon */}
    <img
      src={image.cross}
      alt=""
      className="inline w-4 cursor-pointer ml-4 "
      onClick={() => setShowSearch(false)}
    />

  </div>
</div>

  )
  
  :null


  

}

export default SearchBar