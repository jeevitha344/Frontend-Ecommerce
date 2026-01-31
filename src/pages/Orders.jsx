import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchOrders } from "../redux/productThunk";
import axios from 'axios';
import { clearCart } from '../redux/CartSlice';

const Orders = () => {    //from app page usestatae props----order
const {id}= useParams();

console.log("URL id:", id);
const  { orders, loading, error }  =useSelector(state=>state.order)
const navigate=useNavigate();
// const [order, setOrder] = useState(null);
const dispatch=useDispatch();
 useEffect(() => {
    if (id) {
      // Fetch the order by ID
      dispatch(fetchOrders(id))
        .unwrap()  // if using createAsyncThunk
        .then(() => {
          // Clear cart only after order is fetched successfully
          dispatch(clearCart());
        })
        .catch(err => console.error(err));
    }
  }, [id, dispatch]);
console.log("order",orders);
  return (
    <div className='mt-28 ' >
    <div className='container mx-auto py-8 px-4 md:px-16 lg:px-24'>
<h2 className='text-2xl font-semibold mb-4'>Thank you for your order</h2>
<p>your order has been placed successfully you will recived an email confrimation</p>
<div className='mt-6 p-4 border rounded-lg bg-gray-100'>
  <h3 className='text-lg font-semibold mb-2'>Order Summary</h3>
  
  <p>Order Number:{orders?.id}</p>

<div className='mt-4'>
  <h4 className='text-md font-semibold mb-2'>Billing Information</h4>
  <p>Name : {orders?.name}</p>
    <p> Email: {orders?.email}</p>
      <p> Phone:{orders?.phone}</p>
</div>

 
<div className='mt-4'>
  <h4 className='text-md font-semibold mb-2'>Shipping Information</h4>
  <p>address: {orders?.address}</p>
    <p>city: {orders?.city}</p>
      <p>zipcode: {orders?.zipcode}</p>
</div>
<div className='mt-4'> 
  <h3 className='text-md font-semibold mb-2'>Product Ordered</h3>
  {orders?.items?.map(product=>(
    <div key={product.id}className='flex justify-between mt-2'>
      <p>{product.product.product_name} x  ( {product.quantity}) </p>
      <p>${product.product.product_price * product.quantity}</p>
    </div>
    
  ))}
</div>

<div className='mt-4 flex justify-between'> 
  <span>Total Price:</span>
  <span className='font-semibold'>${orders?.total_price}</span>
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