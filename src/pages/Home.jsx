import React from "react";
import { Categories, data } from "../assets/MockData";
import { image } from "../assets/index";
// import { Features } from 'tailwindcss'
import Collection from "./Collection";
import Features from "../component/Features";
import CategorySection from "../component/CategorySection";
import { setProducts } from "../redux/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Product from "./Product";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate=useNavigate();
  const dispatch = useDispatch();
  {
    /*  store->Product array ....> inside element access*/
  }
  const element = useSelector((state) => state.Product);

  console.log(element);
  useEffect(() => {
    dispatch(setProducts(data));
    console.log("home" + data);
  }, []);

  return (
    // <div className='bg-white mt-2 px'>Home
    //   <div>
    //     <div>
    //       <div>

    //         <div>SHOP BY CATEGORIES</div>

    //       <ul>
    //         {Categories.map((category,index)=>(
    //           <li key={index}>
    //             <div> </div>
    //             {category}
    //           </li>
    //         ))}
    //       </ul>

    //     </div>
    //     {/* <img src={} alt="" /> */}
    //     <p></p>
    //     <h2></h2>
    //     <p></p>
    //     <button></button>
    //     </div>
    //   </div>
    // </div>

    <>
      {/* <div className=' bg-black relative mt-18   '>
  {<img className='w-full sm: h-[750px] object-cover object-top ' src={image.Hero} alt="" />  /*  object-top ---indicate that it would be fixed at the top */}
      {/* <h3 className='  sm:absolute top-[230px] left-27 font-bold text-2xl  font-sans'>Trade-In-Offer</h3>
 <h1 className='  sm:absolute top-[270px] left-27 font-bold text-5xl font-sans'>Super Value Deals</h1>
  <h1 className='absolute top-[330px] text-[#088178] left-27 font-bold text-5xl font-sans'>On All Products</h1>
  <p className='absolute top-[400px] left-27 text-gray-500 font-bold text-m font-sans'>Save More  Coupnes & Up To 70% Off</p>
  <button className='absolute top-[450px] left-27 font-bold text-[#088178] text-lg text-center
  bg-[url("/Image/button.png")] bg-transparent  bg-center w-50 h-12 font-sans
  
  '> Shop Now </button> */}
      {/* </div> */}
      <div className="relative bg-black mt-18">
        <img
          className="w-full h-[400px] sm:h-[550px] md:h-[650px] lg:h-[750px] object-cover object-top"
          src={image.Hero}
          alt=""
        />

        {/* Text Section */}
        <div
          className="
      absolute inset-0
      flex flex-col justify-center
      items-start ml-14
      sm:items-start sm:text-left
      sm:pl-10 md:pl-10 lg:pl-18
    "
        >
          <h3 className="text-black font-bold font-serif text-lg sm:text-xl md:text-2xl">
            Trade-In-Offer
          </h3>

          <h1 className="text-black font-semibold  font-serif mt-3 text-3xl sm:text-4xl md:text-5xl">
            Super Value Deals
          </h1>

          <h1 className="text-[#088178] font-semibold font-serif mt-3 text-3xl sm:text-4xl md:text-5xl">
            On All Products
          </h1>

          <p className="text-gray-600 font-semibold mt-3 text-sm sm:text-base md:text-lg">
            Save More Coupons & Up To 70% Off
          </p>

          <button
            className="
        mt-5
        bg-[url('/Image/button.png')]
        bg-center bg-no-repeat bg-transparent
        text-[#088178]
        font-bold text-base sm:text-lg
        w-36 sm:w-40 md:w-48
        h-10 sm:h-12
      "  onClick={()=>navigate('/collection')}
          >
            Shop Now
          </button>
        </div>
      </div>

      <Features />
      <CategorySection />
      <div className="container mx-auto py-12">
        <h2 className="text-2xl font-bold mb-6 text-center">New Collections</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {element?.productelement?.slice(0, 5).map((productitems) => (
            <div key={productitems.id}>
              {/* // <div>{product.name}</div> */}
              <Product productitems={productitems} />
            </div>
          ))}
        </div>
        <Collection />
      </div>
    </>
  );
};

export default Home;
