import React from 'react'
import { useNavigate } from 'react-router-dom'

const Orders = ({order}) => {    //from app page usestatae props----order

const navigate=useNavigate()


  return (
    <div className='mt-28 ' >
    <div className='container mx-auto py-8 px-4 md:px-16 lg:px-24'>
<h2 className='text-2xl font-semibold mb-4'>Thank you for your order</h2>
<p>your order has been placed successfully you will recived an email confrimation</p>
<div className='mt-6 p-4 border rounded-lg bg-gray-100'>
  <h3 className='text-lg font-semibold mb-2'>Order Summary</h3>
  <p>Order Number:{order?.orderNumber}</p>

<div className='mt-4'>
  <h4 className='text-md font-semibold mb-2'>Billing Information</h4>
  <p>{order?.billingInformation?.name}</p>
    <p>{order?.billingInformation?.email}</p>
      <p>{order?.billingInformation?.phone}</p>
</div>

 
<div className='mt-4'>
  <h4 className='text-md font-semibold mb-2'>Shipping Information</h4>
  <p>{order?.shippingInformation?.address}</p>
    <p>{order?.shippingInformation?.city}</p>
      <p>{order?.shippingInformation?.zipcode}</p>
</div>
<div className='mt-4'> 
  <h3 className='text-md font-semibold mb-2'>Product Ordered</h3>
  {order?.products.map(product=>(
    <div key={product.id}className='flex justify-between mt-2'>
      <p>{product.name}  (x{product.quantity}) </p>
      <p>${product.price * product.quantity}</p>
    </div>
    
  ))}
</div>

<div className='mt-4 flex justify-between'> 
  <span>Total Price:</span>
  <span className='font-semibold'>${order?.totalPrice}</span>
</div>
<div className='mt-6'>
  <button className='bg-green-600 text-white py-2 px-6 mr-3 hover:bg-green-800 border rounded'>Order tracking</button>
<button className='ml-4 bg-blue-600 text-white py-2 px-4 hover:bg-blue-500' onClick={()=>navigate('/')}> Continue Shopping</button>
</div>
</div>
    </div>
    </div>
  )
}

export default Orders