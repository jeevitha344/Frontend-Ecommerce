import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const Checkout = ({setOrder}) => {    //from app page usestatae props----setOrder

const [billingToggle,setBillingToogel]=useState(true)
const [shippingToggle,setShippingToogel]=useState(false)
const [paymentToggle,setPaymentToogel]=useState(false)
const [paymentMethod,setPaymentMethod]=useState("cod")
const navigate=useNavigate()
const[shippingInfo,setShippingInfo]=useState({
  address:"",
  city:"",
  zipcode:""
})
const[billingInfo,setBillingInfo]=useState({
  name:"",
  email:"",
  phone:""
})


const handelOrder=()=>{
const newOrder={
products:cart.products,
orderNumber:"1234",
shippingInformation:shippingInfo,
billingInformation:billingInfo,
totalPrice:cart.totalPrice
}
setOrder(newOrder)    //from app page usestatae props----setOrder
navigate('/order-confrimation')// go to order page

}


const cart= useSelector(state => state.cart)
  return (
  
         <div className=' mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24 '>  
<div className='mt-20 ' >
   <h3 className='text-2xl font-semibold mb-6 flex flex-row justify-center '>CHECKOUT</h3>
  <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8 '>
     <div className='w-2/3 '>
     {/* check outpage leftside elements */}
      
          <div className='border p-2 mb-6'>

            <div className='flex items-center justify-between' onClick={()=> setBillingToogel(!billingToggle)}>
                <h3 className='text-lg font-semibold mb-2'>Billing Information</h3>
              {billingToggle ? <FaAngleDown/> : <FaAngleUp/> }  
            </div>

{/* this ternary opertor condition will hidden the  element when the toogel is false if true it show the content like input attriubute */}
            <div className ={`space-y-4 ${billingToggle ? "" : "hidden"}`}> 

                <div>
                    <label className='block  text-gray-700' htmlFor="">Name</label>
                <input type="text"
                name='name' 
                placeholder='Enter Name'
                className='w-full px-3 py-2 border'
                onChange={(e)=>setBillingInfo({...billingInfo,name:e.target.value})}/>
                </div>
         
             
                <div><label className='block  text-gray-700' htmlFor="">Email</label>
                <input type="email"
                name='email' 
                placeholder='Enter Email'
                className='w-full px-3 py-2 border' 
                onChange={(e)=>setBillingInfo({...billingInfo,email:e.target.value})}
                />
               
            </div> 
           
                <div><label className='block  text-gray-700' htmlFor="">Phone</label>
                <input type="text"
                name='phone' 
                placeholder='Enter Phone'
                className='w-full px-3 py-2 border'
                onChange={(e)=>setBillingInfo({...billingInfo,phone:e.target.value})}
                />
                 </div>
          
          </div>
             </div>
{/* shipping information */}

      <div className='border p-2 mb-6'>

            <div className='flex items-center justify-between' onClick={()=> setShippingToogel(!shippingToggle)}>
                <h3 className='text-lg font-semibold mb-2'>Shipping Information</h3>
              {shippingToggle ? <FaAngleDown/> : <FaAngleUp/> }  
            </div>


            <div className ={`space-y-4 ${shippingToggle ? "" : "hidden"}`}> 
                <div>
                    <label className='block  text-gray-700' htmlFor="">Address</label>
                <input type="text"
                name='Address' 
                placeholder='Enter Address'
                className='w-full px-3 py-2 border'
                onChange={(e)=> setShippingInfo({...shippingInfo, address:e.target.value})}
                />
                </div>
         
             
                <div><label className='block  text-gray-700' htmlFor="">City</label>
                <input type="text"
                name='City' 
                placeholder='Enter City'
                className='w-full px-3 py-2 border' 
                 onChange={(e)=> setShippingInfo({...shippingInfo, city:e.target.value})}/>
               
            </div> 
           
                <div><label className='block  text-gray-700' htmlFor="">ZipCode</label>
                <input type="text"
                name='ZipCode' 
                placeholder='Enter ZipCode'
                className='w-full px-3 py-2 border'
                 onChange={(e)=> setShippingInfo({...shippingInfo, zipcode:e.target.value})} />
                 </div>
          
          </div>
             </div>

{/* payment method */}
    <div className='border p-2 mb-6'>

            <div className='flex items-center justify-between' onClick={()=> setPaymentToogel(!paymentToggle)}>
                <h3 className='text-lg font-semibold mb-2'>Payment Method</h3>
              {paymentToggle ? <FaAngleDown/> : <FaAngleUp/> }  
            </div>


            <div className ={`space-y-4 ${paymentToggle ? "" : "hidden"}`}> 
                <div className='flex items-center mb-2'>
                    
                <input type="radio"
                name='Payment' 
                checked={paymentMethod === 'cod'}
                onChange={()=> setPaymentMethod('cod')}
                
                />
                <label className='block  text-gray-700 ml-2' htmlFor="">Cash on Delivery</label>
                </div>
          <div className='flex items-center mb-2'>
              <input type="radio"
                name='Payment' 
                checked={paymentMethod === 'dc'}
                onChange={()=> setPaymentMethod('dc')}
                
                />
                <label className='block  text-gray-700 ml-2' htmlFor="">Debit Card</label>
               </div>
               {paymentMethod === "dc" && (
                <div className='bg-gray-100 p-4 rounded-lg mb-4'>
                  <h3 className='text-xl font-semibold mb-4'>Debit Card Information</h3>
                  <div className='mb-4'>
                    <label htmlFor="" className='block text-gray-700 font-semibold mb-2'>Card Number</label>
                    <input type="text"
                    placeholder='Enter card number'
                    className='border p-2 w-full rounded'
                    required
                    />
                  </div>
               <div className='mb-4'>
                <label htmlFor="" className='block text-gray-700 font-semibold mb-2'>Card Holder Name</label>
                <input type="text" 
                  placeholder='Enter card  holder name'
                    className='border p-2 w-full rounded'
                    required
                />
               </div>
<div className='flex justify-between mb-4'>
  <div className='w-1/2 mr-2'>
  <label htmlFor="" className='block text-gray-700 font-semibold mb-2'>Expire Date</label>
  <input type="text"
  placeholder='MM/YY'
  className='border p-2 w-full rounded'
  required
  />
</div>

<div className='w-1/2 ml-2'>
  <label htmlFor="" className='block text-gray-700 font-semibold mb-2'>CVV</label>
  <input type="text"
  placeholder='CVV'
  className='border p-2 w-full rounded'
  required
  />
</div>
        </div>          
                </div>
               )}
          </div>
             </div>



  </div>

  <div className='md:w-1/3 bg-white p-6 rounded-lg shadow-lg  border-none'>
 {/* check outpage rightside elements */}
<h3 className='text-lg font-semibold mb-4'>Order Summary</h3>
<div className='space-y-4'>
  {cart.products.map(product =>(
    <div key={product.id} className='flex justify-between'>
      <div className='flex items-center'>
        <img src = {product?.image}  alt={product.name} className='w-16 h-16 object-contain rounded' />
        <div className='ml-4' >
          <h4 className='text-md font-semibold'>{product?.name}</h4>
<p className='text-gray-600'>${product.price} x  {product.quantity}</p>         
        </div>
      </div>


      <div className='text-gray-800'>
        ${product.price * product.quantity}
      </div>
    </div>
  ))}
</div>
<div className='mt-4 border-t pt-4'>
  <div className='flex justify-between'>
    <span>Total Price:</span>
    <span>${cart.totalPrice.toFixed(2)}</span>
  </div>
</div>

<button className='w-full bg-blue-500 text-white py-2 mt-6 hover:bg-green-700'
onClick={handelOrder}

>Place Order</button>

   </div>

   </div> 


    </div>
    
    </div>
  )
}

export default Checkout
