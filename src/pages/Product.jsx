import React from "react";
import { FaShoppingBasket, FaShoppingCart, FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import { Link } from "react-router-dom";
import {data} from "../assets/MockData"

const Product = ({ productitems }) => {
  const dispatch = useDispatch();
  const handelAddToCart = (e, productitems) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(productitems));
    alert("product Added successfully");
  };

  return (
    <Link to={`/productdetails/${productitems.id}`}>

    <div className="bg-white rounded relative border-none shadow-lg p-4 mt-4 transform transition-transform duration-300 hover: scale-105  mx-7">
      <img
        src={productitems?.product_image}
        alt="product_image loading..."
        className="w-full   object-cover mb-4"
      />
      <h5 className="text-lg font-semibold">{productitems?.product_name}</h5>
      <h3>{productitems?.product_description}</h3>
      <p className="text-gray-500">${productitems?.product_price}</p>
      <div className="flex items-center mt-2 mr-8">
        <FaStar className="text-yellow-500"></FaStar>
        <FaStar className="text-yellow-500"></FaStar>
        <FaStar className="text-yellow-500"></FaStar>
        <FaStar className="text-yellow-500"></FaStar>
        <FaStar className="text-yellow-500"></FaStar>
      </div>
      <div
        className="absolute bottom-4 right-2 flex items-center justify-center w-8 h-8  bg-[#088178] group text-white text-sm rounded-full 
       "
        onClick={(e) => handelAddToCart(e, productitems)}
      >
        <FaShoppingCart></FaShoppingCart>
      </div>
    </div>
    </Link>
  );
};

export default Product;
