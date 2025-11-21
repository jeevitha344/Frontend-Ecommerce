import React from 'react'
import{image} from '../assets/index'
const Features = () => {

  const feature=[
    {
 id:1,     
images:image.f1,
text:'Free Shipping'

  },
  {
     id:2, 
images:image.f2,
text:'Online Order'

  },
  {
     id:3, 
images:image.f3,
text:'Save Money'

  },
  {
     id:4, 
images:image.f4,
text:'Promotions'

  },
  {
     id:5, 
images:image.f5,
text:'Happy Sell'

  },
  {
     id:6, 
images:image.f6,
text:'24/7 Support'

  }]

  return (
  <div className='bg-white pb-8 pt-12 px-29 mb-3  '>
 
<div className='container  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6  gap-8   '>
{feature.map((element,index)=>
<div key={index} className='  flex flex-col items-center text-center px-2 py-[9px] border-box shadow  transform transition-transform duration-300 hover:scale-105'>
 <img src= {element.images} alt='' className='my-2'/>
  <h4 className='bg-gray-300 px-2 py-0  border rounded text-[#088178] mt-5 mb-2 font-serif'>{element.text}</h4>
</div>


)}
</div>
   <div className='text-xl font-bold  text-center sm:text-2xl font-serif flex items-center justify-center mt-14  text-[#088178]'>
<h1 className=' ' >Features Of Products</h1>
</div>
  </div>
  )
}

export default Features