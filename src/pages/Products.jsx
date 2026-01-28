import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, deleteProduct } from "../redux/productThunk";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productelement, status } = useSelector(
    state => state.Product
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-xl font-semibold">Loading products...</h2>
      </div>
    );
  }

  // 🛑 EMPTY STATE
  if (productelement.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-xl font-semibold">No products found</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-[#088178]">Product Management</h1>
        <button
          onClick={() => navigate("/add")}
          className="bg-[#088178] hover:bg-[#066d66] text-white px-6 py-2 rounded-lg shadow"
        >
          + Add Product
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productelement.map(item => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-4"
          >
            <img
              src={item.product_image} 
              alt={item.product_name}
              className="w-full h-48 object-cover rounded-lg"
            />

            <h3 className="mt-3 text-lg font-semibold text-gray-800">
              {item.product_name}
            </h3>

            <p className="text-green-600 font-bold text-xl">
              ${item.product_price}
            </p>

            <div className="flex justify-between mt-4">
              <button
                onClick={() => navigate(`/edit/${item.id}`)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-md text-sm"
              >
                Edit
              </button>

              <button
                onClick={() => dispatch(deleteProduct(item.id))}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-md text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
