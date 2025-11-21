import React from 'react'
import{image} from '../assets/index'
const CategorySection = () => {
    const banner=[{
img:image.banner1,
text:"Men's collection"
    },
    {
img:image.banner,
text:"Women's collection"
    },
    {
img:image.banner1,
text:"Kid's collection"
    },
]
  return (
    <div className='relative '>
       <div className='w-fit grid grid-col-1 relative  right-20 sm:right-10 md:grid-cols-2 md:w-3xl md:items-center lg:grid-cols-3 lg:w-7xl ml-40 gap-6  '>
        {banner.map((element,index)=>
        <div key={index} className=' relative transform transition-transform duration-300 hover:scale-105 px-0'>
      <img src= {element.img} alt='' className='w-full h-full object-cover rounded-lg shadow-md'/>
       <p className='absolute top-10 left-12 font-bold  '>{element.text}</p>
       <p className='text-gray-600 absolute top-19 left-15 p-2' >Shop Now</p>
        </div>
       )}
        </div> 
    </div>
  )
}

export default CategorySection
