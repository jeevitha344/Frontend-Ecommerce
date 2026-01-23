import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { image } from '../assets/index'
import { FaTrashAlt} from 'react-icons/fa'
import { useState } from 'react'
import Modal from '../component/Modal'
import ChangeAddress from '../component/ChangeAddress'
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../redux/CartSlice'
import{useNavigate} from 'react-router-dom'

const Card = () => {
  const carts= useSelector(state => state.cart)
  const [address ,setAddress]=useState('main street, 0013')
const[isOpenModel,setIsOpenModel]=useState(false)
 const dispatch = useDispatch()
const navigate = useNavigate()


  return (
    <div className=' mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24 '>  

{carts.products.length > 0  ? (
<div className='mt-20 ' >
   <h3 className='text-2xl font-semibold mb-6 flex flex-row justify-center '>SHOPPING CART </h3>



  <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8 '>

     <div className='w-2/3 '>
      <div className='flex justify-between items-center mb-4 text-xs font-bold '>

        <p> PRODUCT </p>

        <div className='flex space-x-8 '>
        <p>PRICE</p>
        <p>QUANTY</p>
        <p>SUBTOTAL</p>
        <p>REMOVE</p>
        </div>

      </div> 

   
    {carts.products?.map((product)=>(
       <div key={product.id} 
       className='flex item-center justify-between p-3 border-b  '>
     
        <div className='md:flex items-center space-x-4 '>
          <img src={product?.product_image} alt=""  className='w-16 h-16 object-contain rounded '/>
          <div className='flex-1 ml-4 '>
            <h3 className='text-lg font-semibold '>{product?.product_name}</h3>
          </div>
        </div>
        <div className=' flex space-x-12 items-center '>
          <p>${product?.product_price}</p>
          <div className='flex items-center justify-center border '>
            <button className='text-xl font-bold px-1.5 border-r ' onClick={()=>dispatch(decreaseQuantity(product.id))}>-</button>
            <p className='text-xl px-2 '>{product?.quantity}</p>
              <button className='text-xl  px-1 border-l ' onClick={()=>dispatch(increaseQuantity(product.id))}> +</button>
          </div>
          <p>${(product?.quantity * product?.product_price).toFixed(2)}</p>

          <button className='text-red-500 hover:text-red-700 ' onClick={()=> dispatch(removeFromCart(product.id))}>

            <FaTrashAlt/>
          </button>
        </div>
          </div>
            ))} 
     
  </div>

  <div className='md:w-1/3 bg-white p-6 rounded-lg shadow-lg  border-none'>
    <h3 className='text-sm font-semibold mb-5'>CART TOTAL</h3>
  <div className='flex justify-between mb-5 border-b pb-1'>   {/*  total item design */}
      <span>Total Item:</span>
      <span>{carts.totalquantity}</span>

    </div>

<div className='mb-4 border-b pb-2'>
<p>Shipping:</p>
<p className='ml-2'>Shipping to{" "}
<span className='text-xs  font-bold'>{address}</span>
 </p>
<button className='text-blue-500 hover:underline mt-1 ml-2' onClick={()=>setIsOpenModel(true)}>change address</button>

</div>


<div className='flex justify-between mb-4'>
  <span>Total Price</span>
  <span>${carts.totalPrice.toFixed(2)}</span>
</div>

<button
  className="w-full mb-3 border border-gray-400 text-gray-700 py-2 rounded hover:bg-gray-100"
  onClick={() => navigate('/collection')}
>
  Continue Shopping
</button>

<button className='w-full bg-blue-400 text-white py-2 hover:bg-green-700'onClick={()=> navigate('/checkout')}>Proced to checkout</button>
 </div>
   </div>
<Modal
    isOpenModel={isOpenModel}
    setIsOpenModel={setIsOpenModel} >
<ChangeAddress setAddress={setAddress} 
setIsOpenModel={setIsOpenModel}
/>

</Modal>

   </div> 
)



 :(
//  <div className='flex justify-between items-center relative'>
//   <img src={image.cartempty} alt=""  className=' w-[50%] mt-28  object-cover'/>
//   <p className='text-blue-300 absolute right-80 '>Oopss your card is empty!!</p>
// </div> 
<div className="flex items-center justify-between py-8 rounded-xl relative ">
<img
    src={image.cartempty}
    alt="empty cart"
    className="w-[40%] mt-12 ml-10 rounded"
  /> 
<div className='flex-col absolute right-80'> 
   <p className="text-[#088178] text-2xl font-semibold mt-8">
    Oops... Your cart is empty!
  </p>
  

  <button className="mt-8 bg-[#088178] text-white  px-6 py-3 rounded-lg font-semibold shadow-md hover:scale-105 transition hover:bg-white hover:text-[#088178]" onClick={()=>navigate('/collection')}>
    Continue Shopping
  </button>
  </div>
</div>


)} 
   </div> 
  )
}


export default Card