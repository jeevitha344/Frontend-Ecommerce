import React from 'react'
import {image} from '../assets/index'

const About = () => {
  return (
    <>
    <div className='mt-16'> 

<div className='text-2xl text-center pt-8 border-t '>
  <div className='inline-flex gap-2 items-center  mt-3'>
<p className='text-gray-500 '>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
  <p className='w-8 sm:w-12h-[1px] md:h-0.5 bg-gray-700'></p>
  </div>
</div>
  </div>

<div className='my-6 flex flex-col md:flex-row gap-16 mt-1'>
<img src={image.about} alt="" className='w-[80%] md:max-w-[450px] ml-16' />
<div className='flex flex-col justify-center items-center  relative left-16 w-[80%] gap-6  md:w-2/4 text-gray-600'>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In perferendis ipsum molestias qui dolorem nobis optio labore adipisci facere, quae rem maiores, corrupti voluptatibus odio ea quos quo deleniti? Rerum nam totam obcaecati consectetur, asperiores at placeat aut ipsam. Vel.
</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod expedita tempora sint nostrum, asperiores obcaecati voluptatem reprehenderit commodi odio quas eaque placeat minus optio velit assumenda incidunt ipsa ab qui natus quaerat dolorem saepe unde?</p>

<b className='text-gray-800'>Our Mission</b>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima officia atque sed tempore laboriosam! Quasi vel itaque enim tenetur quaerat dolores dolore? Eligendi aliquam maiores recusandae ducimus ea amet possimus.</p>

</div>
</div>
<div className='text-xl py-4  mt-1 '>
    <div className='inline-flex gap-2 items-center '>
<p className='text-gray-500  ml-13   '>WHY<span className='text-gray-700 font-medium ml-2'>CHOOSE US</span><span className='text-gray-700 font-medium ml-2'></span></p>
  <p className='w-8 sm:w-12h-[1px] md:h-0.5 bg-gray-700'></p>
  </div>

</div>

<div className='flex flex-col md:flex-row text-sm  mx-10  mb-10 ' >
<div className='  border-gray-900 shadow-md px-10 md:px-5 py-8 sm:py-20 flex flex-col gap-3 hover:scale-105 '>
<b>Quality Assurance:</b>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error expedita aut quia asperiores eaque nesciunt, voluptas molestiae facere esse hic. </p>
</div>
<div className='border-white shadow-md  px-10 md:px-16 py-8  sm:py-20 flex flex-col gap-5 hover:scale-105'>
<b>Convenience:</b>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eaque nobis atque commodi maiores quo, sed eligendi assumenda molestiae odio!</p>
</div>
<div className=' border-white shadow-md px-10 md:px-16 py-8  sm:py-20 flex flex-col gap-5 hover:scale-105'>
<b>Exceptional Customer Service:</b>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur quisquam est culpa asperiores praesentium ea id maxime iste iusto reprehenderit. </p>
</div>

</div>

</>

  
  )
}

export default About