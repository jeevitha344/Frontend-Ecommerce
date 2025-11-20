import React from 'react'
import { image } from '../assets/index'
const Contact = () => {
  return (
  
   <div className='mt-16'> 
<div className='text-2xl text-center pt-8 border-t '>
  <div className='inline-flex gap-2 items-center mt-3 '>
<p className='text-gray-500  '>CONTACT <span className='text-gray-700 font-medium '>US</span></p>
  <p className='w-8 sm:w-12 h-px sm:h-0.5 bg-gray-700 '></p>
  </div>
  </div>

<div className='my-10 flex flex-col justify-start items-center md:flex-row gap-10 mb-28 md:justify-center '>
<img src={image.contact} alt="" className='w-[80%] md:max-w-[480px] ' />
<div className='flex flex-col justify-center items-start gap-6 '>
<p className='font-semibold text-xl text-gray-600'>
Our Store</p>  <p className='text-gray-500'> 54709 Hopes <br />suite 350,KrishnaNagar,CBE
</p> 
<p className='text-gray-500'> Tel: (415) 555-0132 <br /> Email:admin@forever.com</p>
<p className='font-semibold text-xl text-gray-600'>Careers at Forver</p>
<p className='text-gray-500'>Learn more about our teams and job openings.</p>
<button className='border border-black px-8 py-4 text-sm     hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
</div>

</div>
 </div>
  )
}

export default Contact