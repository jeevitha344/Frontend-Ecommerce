import React from "react";
import { Categories, data } from "../assets/MockData";
import { image } from "../assets/index";
// import { Features } from 'tailwindcss'
import Collection from "./Collection";
import Features from "../component/Features";
import CategorySection from "../component/CategorySection";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Product from "./Product";
import { useNavigate } from "react-router-dom";
import { fetchProducts } from "../redux/productThunk";
import { data as mockData } from '../assets/MockData'

const Home = () => {
  const navigate=useNavigate();
  const dispatch = useDispatch();

  // {
  //   /*  store->Product array ....> inside element access*/
  // }
  // const element = useSelector((state) => state.Product.productelement);
const element = useSelector(state => state.Product.productelement);
// const status = useSelector(state => state.Product.status);
// const error = useSelector(state => state.Product.error);


  console.log(element);
  useEffect(() => {
    // dispatch(setProducts(data));
    dispatch(fetchProducts());
    // console.log("home" + data);
  }, [dispatch]);

  const displayData =
    status === "success" && element.length > 0
      ? element
      : mockData; // fallback if API fails or empty
  
  if (status === 'loading') {
    return <p className="text-center mt-10">Loading products...</p>;
  }
  
  if (status === 'error') {
    console.warn("API failed, showing mock data:", error);
  }
  
  // const displayData = element?.length > 0 ? element : mockData
  // If API fails, show mockData
// const displayData =
//   status === "success" && element.length > 0
//     ? element
//     : mockData; // fallback if API fails or empty

// if (status === 'loading') {
//   return <p className="text-center mt-10">Loading products...</p>;
// }

// if (status === 'error') {
//   console.warn("API failed, showing mock data:", error);
// }
//  console.log(displayData);

  return (
    <>
     {/* <div className=' bg-black relative mt-18   '>
  {<img className='w-full h-[300px] sm: h-[750px] object-cover object-top ' src={image.Hero} alt="" />  /*  object-top ---indicate that it would be fixed at the top */}
       {/* <h3 className='  sm:absolute top-[230px] left-27 font-bold text-2xl  font-sans'>Trade-In-Offer</h3>
 <h1 className='  sm:absolute top-[270px] left-27 font-bold text-5xl font-sans'>Super Value Deals</h1>
  <h1 className='absolute top-[330px] text-[#088178] left-27 font-bold text-5xl font-sans'>On All Products</h1>
  <p className='absolute top-[400px] left-27 text-gray-500 font-bold text-m font-sans'>Save More  Coupnes & Up To 70% Off</p>
  <button className='absolute top-[450px] left-27 font-bold text-[#088178] text-lg text-center
  bg-[url("/Image/button.png")] bg-transparent  bg-center w-50 h-12 font-sans
  
  '> Shop Now </button> 
       </div>  */} 
      
      <div className=" bg-black relative mt-18  ">

      
        <img
          className="w-full  object-contain sm:h-[550px] md:h-[650px] lg:h-[750px] sm:object-cover object-top
    bg-white "
          src={image.Hero}
          alt=""
        />

        {/* Text Section */}
         <div
          className="

      absolute inset-0
      flex flex-col justify-center
      items-start text-left  ml-10 mt-6
      sm:items-start sm:text-left
      sm:pl-10 md:pl-10 lg:pl-18 
     

    "
        >
          <h3 className="text-black font-bold font-serif text-xm  sm:text-xl md:text-2xl">
            Trade-In-Offer
          </h3>

          <h1 className="text-black font-extrabold  font-serif  text-lg mt-1 sm:text-4xl sm:mt-3 md:text-5xl">
            Super Value Deals
          </h1>

          <h1 className="text-[#088178] font-semibold font-serif  text-lg mt-2 sm:text-4xl sm:mt-3 md:text-5xl">
            On All Products
          </h1>

          <p className="text-gray-600 font-semibold text-xs sm:text-base mt-2 sm:mt-3 md:text-lg">
            Save More Coupons & Up To 70% Off
          </p>

          <button
            className="
        mt-5
        bg-[url('/Image/button.png')]
        bg-center bg-no-repeat bg-transparent
        text-[#088178]
        font-bold text-base text-xm w-30 p-1  sm:text-lg sm:w-36 sm:py-3 md:w-48 
      "  onClick={()=>navigate('/collection')}
          >
            Shop Now
          </button>
        </div>
      </div>

      <Features />
      <CategorySection />
      <div className="container mx-auto py-12">
        <h2 className="text-2xl font-bold mb-6 text-center text-[#088178] font-serif">New Collections</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 ">
          {displayData?.slice(0, 8).map((productitems) => (
            <div key={productitems.id}>
              {/* // <div>{product.name}</div>  */}
               <Product productitems={productitems} />
            </div>
          ))}
        </div>
        
      </div> 




      
    </>
  );
};

export default Home;
