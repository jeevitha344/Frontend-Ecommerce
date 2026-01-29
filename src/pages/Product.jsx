import React from "react";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import { Link } from "react-router-dom";
import { data as mockData } from "../assets/MockData";

const Product = ({ productitems }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addToCart(productitems));
    alert("Product added successfully");
  };

  // 🔑 Find matching mock product using id
  const mockProduct = mockData.find(
    (item) => item.id === productitems?.id
  );

  // 🔑 Image fallback logic
  const imageSrc =
    productitems?.product_image || mockProduct?.image;

  return (
    <Link to={`/productdetails/${productitems.id}`}>
      <div className="bg-white rounded shadow-lg p-4 mt-4 hover:scale-105 transition mx-7 relative">

        <img
          src={imageSrc}
          alt="product"
          className="w-full object-cover mb-4"
        />

        <h5 className="text-lg font-semibold">
          {productitems?.product_name || mockProduct?.name}
        </h5>

        <p>
          {productitems?.product_description || mockProduct?.description}
        </p>

        <p className="text-gray-500">
          ${productitems?.product_price || mockProduct?.price}
        </p>

        <div className="flex mt-2">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-yellow-500" />
          ))}
        </div>

        <div
          className="absolute bottom-4 right-2 w-8 h-8 bg-[#088178] text-white flex items-center justify-center rounded-full cursor-pointer"
          onClick={handleAddToCart}
        >
          <FaShoppingCart />
        </div>
      </div>
    </Link>
  );
};

export default Product;
