import React from 'react'
import Product from './Product'
import { useDispatch, useSelector } from 'react-redux'
// import { setProducts1 } from '../redux/ProductSlice'
import { useEffect } from 'react'
import { Categories, data } from '../assets/MockData'
import { data as mockData } from '../assets/MockData'
const Collection = () => {
  //  const dispatch = useDispatch()

//  const  element = useSelector(state=> state.Product.productelement)

//  const displayData = element?.length > 0 ? element : mockData
const element = useSelector(state => state.Product.productelement);
// const status = useSelector(state => state.Product.status);
// const error = useSelector(state => state.Product.error);

// If API fails, show mockData
const displayData =
  status === "success" && element.length > 0
    ? element
    : mockData; // fallback if API fails or empty

if (status === 'loading') {
  return <p className="text-center mt-10">Loading products...</p>;
}

if (status === 'error') {
  console.warn("API failed, showing mock data:", error);
}

//  useEffect(()=>{
//   dispatch(setProducts1(data1))
//   console.log("element1" + data1)
//  },[])
  return (
    <>
  
     <div className='mx-auto py-12 md:px-16 lg:px-4 my-14 pt-[50px]'>
  <h2 className='text-2xl font-bold mb-6 text-center '>Collections</h2>
  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 '>

    {displayData?.map(((productitems)=>(
      <div key={productitems.id}>
      {/* // <div>{product.name}</div> */}
      <Product productitems={productitems}/>
      </div>
    )))}
  </div>
</div>
      
      </>
  )
}

export default Collection