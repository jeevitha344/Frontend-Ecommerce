import React from "react";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Product = ({ productitems }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(productitems));
    toast.success("Product added successfully!", { position: "top-right" });
  };

  return (
    <Link to={`/productdetails/${productitems.id}`}>
      <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col h-full transform transition-transform duration-300 hover:scale-105">
        {/* Image */}
        <div className="w-full h-48 flex items-center justify-center overflow-hidden rounded-lg">
          <img
            src={productitems?.product_image}
            alt={productitems?.product_name}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Info */}
        <div className="flex flex-col flex-1 mt-4">
          <h5 className="text-lg font-semibold truncate">
            {productitems?.product_name}
          </h5>
          <p className="text-gray-600 mt-1 line-clamp-2">
            {productitems?.product_description}
          </p>
          <p className="font-bold mt-2">${productitems?.product_price}</p>

          {/* Rating */}
          <div className="flex items-center mt-2">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-500 mr-1" />
            ))}
          </div>

          {/* Add to Cart button */}
           <button
        onClick={handleAddToCart}
        className="absolute bottom-4 right-4 w-10 h-10 bg-[#088178] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#065f52] transition-colors"
      >
        <FaShoppingCart />
      </button>
        </div>
      </div>
    </Link>
  );
};

export default Product;
