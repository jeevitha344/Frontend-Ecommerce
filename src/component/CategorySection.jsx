import React from 'react'
import{image} from '../assets/index'
import { useNavigate } from "react-router-dom";
const CategorySection = () => {
  const navigate = useNavigate();
    const banner=[{
img:image.banner1,
text:"Men's collection",
category_id:2
    },
    {
img:image.banner,
text:"Women's collection",
category_id:1
    },
    {
img:image.b17,
text:"Kid's collection",
category_id:3
    },
//      {
// img:image.gd,
// text:" ",
// category_id:4
//     },
//       {
// img:image.as,
// text:" ",
// category_id:5
//     },
]
  return (
    <div className='relative '>
       <div className='w-fit grid grid-col-1 relative  right-20 sm:right-10 md:grid-cols-2 md:w-3xl md:items-center lg:grid-cols-3 lg:w-7xl ml-40 gap-6  '>
        {banner.map((element, index) => (
  <div
    key={index}
    onClick={() => navigate(`/collection/${element.category_id}`)}
    className="relative cursor-pointer overflow-hidden rounded-xl shadow-md
               transform transition duration-300 hover:scale-105"
  >
    {/* Image */}
    <img
      src={element.img}
      alt=""
      className="w-full h-[260px] object-cover"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-black/20"></div>

    {/* Text */}
    <div className="absolute bottom-6 left-6 text-white">
      <p className="text-lg font-bold">{element.text}</p>
      <p className="text-sm underline">Shop Now</p>
    </div>
  </div>
))}

        </div> 
    </div>
  )
}

export default CategorySection
