// import React from "react";
// import { FaShoppingCart, FaStar } from "react-icons/fa";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../redux/CartSlice";
// import { Link } from "react-router-dom";
// import { data } from "../assets/MockData";

// const Product = ({ productitems }) => {
//   const dispatch = useDispatch();

//   const handelAddToCart = (e, productitems) => {
//     e.stopPropagation();
//     e.preventDefault();
//     dispatch(addToCart(productitems));
//     alert("Product added successfully");
//   };

//   return (
//     <Link to={`/productdetails/${productitems.id}`}>
//       <div className="bg-white rounded relative border-none shadow-lg p-4 mt-4 transform transition-transform duration-300 hover:scale-105 mx-7">

//         {/* PRODUCT IMAGE WITH FALLBACK */}
//         <img
//           src={productitems?.product_image}
//           alt="product"
//           className="w-full object-cover mb-4"
//           onError={(e) => {
//             e.target.onerror = null; // prevent loop
//             e.target.src = data[0].product_image; // mock image
//           }}
//         />

//         {/* PRODUCT DETAILS */}
//         <h5 className="text-lg font-semibold">
//           {productitems?.product_name}
//         </h5>

//         <p className="text-sm text-gray-600">
//           {productitems?.product_description}
//         </p>

//         <p className="text-gray-500 mt-1">
//           ${productitems?.product_price}
//         </p>

//         {/* STAR RATING */}
//         <div className="flex items-center mt-2">
//           <FaStar className="text-yellow-500" />
//           <FaStar className="text-yellow-500" />
//           <FaStar className="text-yellow-500" />
//           <FaStar className="text-yellow-500" />
//           <FaStar className="text-yellow-500" />
//         </div>

//         {/* ADD TO CART BUTTON */}
//         <div
//           className="absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-[#088178] text-white text-sm rounded-full cursor-pointer"
//           onClick={(e) => handelAddToCart(e, productitems)}
//         >
//           <FaShoppingCart />
//         </div>

//       </div>
//     </Link>
//   );
// };

// export default Product;
