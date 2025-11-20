import React from 'react'
import { useSelector } from 'react-redux'
import Product from './Product'
import { useNavigate } from 'react-router-dom'
import { image } from '../assets/index'
const FilterData = () => {
const navigate =useNavigate()
   const filterproducts= useSelector(state=>state.Product.filteredData)

  return (
   
<div className='mx-auto py-12 md:px-16 lg:px-4 my-14 pt-[50px]'>

    {filterproducts.length > 0 ? (
<div>
  <h2 className='text-2xl font-bold mb-6 text-center'>Collections</h2>
  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 '>

    {filterproducts?.map(((productitems)=>(
      <div key={productitems.id}>
     
      {/* // <div>{product.name}</div> */}
      <Product productitems={productitems}/>
      </div>
    )))}
  </div>
</div>
  )
    :(
   <div className="flex items-center justify-between py-4 rounded-xl relative ">
   <img
       src={image.searchempty}
       alt="empty cart"
       className="w-[30%] mt-12 ml-50 rounded"
     /> 
   <div className='flex-col absolute right-90'> 
      <p className="text-[#088178] text-2xl font-semibold mt-8">
       No Product Found !!!
     </p>
     
   
     <button className="mt-8 bg-[#088178] text-white  px-6 py-3 rounded-lg font-semibold shadow-md hover:scale-105 transition hover:bg-white hover:text-[#088178]" onClick={()=>navigate('/collection')}>
       Continue Shopping
     </button>
     </div>
   </div>
    )
}
 </div>
  )
  
}

export default FilterData