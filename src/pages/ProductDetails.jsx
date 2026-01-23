import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import { setProducts } from '../redux/ProductSlice'
import { useDispatch, useSelector } from 'react-redux'
import { FaShoppingBasket, FaShoppingCart, FaStar,FaCarSide,FaQuestion } from "react-icons/fa";
import { addToCart,increaseQuantity,decreaseQuantity } from "../redux/CartSlice";

const ProductDetails = () => {
    const{id}=useParams()//get the id from the product component

    const products=useSelector(state=>state.Product.productelement)
    const cart=useSelector(state=>state.cart)
   const[product,setProduct]=useState()

const dispatch=useDispatch()

   const handler=(e,product)=>{
 e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(product))
    alert("product Added successfully");
   }

    useEffect(()=>{

        const newProduct= products.find(product => product.id === parseInt (id))
        setProduct(newProduct)
    },[id,products]);

    if(!product)return <div>loading....</div>
  return (
    <div className='mt-16'>
     <div className='container mx-auto py-8 px-4 md:px-16 lg:px-24' >
<div className='flex flex-col md:flex-row gap-x-16'>
    <div className='md:w-1/2 py-4 shadow-md md:px-8 h-96 flex justify-center'>
<img src={product.product_image} alt={product.product_name} className='h-full' />
    </div>

<div className='md:w-1/2 p-4 shadow-md md:p-16 flex flex-col items-center gap-y-2'> 
<h2 className='text-3xl font-semibold mb-2'>
    {product.product_name}

</h2>
<p className='text-xl font-semibold text-gray-800 mb-4'>

    ${product.product_price}
</p>
<div className='flex items-center mb-4 gap-x-2'>

{/* <input type="number" 
id='quantity'
min='1'
className='border p-1 w-16'


/> */}
   
{/* <button onClick={()=>dispatch(increaseQuantity(product.id))}>+</button>
<button onClick={()=>dispatch(increaseQuantity(product.id))}>-</button> */}

<button className='bg-red-600 text-white py-1.5 px-4 hover:bg-red-800'onClick={(e)=> handler(e, product)}  >Add to Cart</button>

</div>
<div className='flex flex-col gap-y-4 mt-4'>
<p className='flex items-center'>
<FaCarSide className="mr-1"/>
Delivery & Return
</p>
<p className='flex items-center'>
<FaQuestion className="mr-1"/>
Ask a Question
</p>
</div>

</div>


</div>

<div className='mt-8'>
<h3 className='text-xl font-bold mb-2'>
Product Description
</h3>
<p>{ product.product_description }</p>
</div>





    </div>
    </div>
  )
}

export default ProductDetails