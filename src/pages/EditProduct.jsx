import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editProduct } from "../redux/productThunk";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams(); // get id from URL
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // get product from store
  const product = useSelector(state =>
    state.Product.productelement.find(p => p.id == id)
  );

  const [formData, setFormData] = useState({
    product_name: "",
    product_price: "",
      product_description: "",
  product_category: "",
    product_image: null
  });

  // load existing product data
  useEffect(() => {
    if (product) {
      setFormData({
        product_name: product.product_name,
        product_price: product.product_price,
         product_description: product.product_description,
      product_category: product.product_category,
        product_image: null
      });
    }
  }, [product]);

  const handleSubmit = async (e) => {
  e.preventDefault();

  const data = new FormData();
  data.append("product_name", formData.product_name);
  data.append("product_price", formData.product_price);
  data.append("product_description", formData.product_description);
  data.append("product_category", formData.product_category);

  if (formData.product_image) {
    data.append("product_image", formData.product_image);
  }

  try {
    await dispatch(editProduct({ id, formData: data })).unwrap();
    navigate("/products"); // ✅ only after success
  } catch (err) {
    console.error("Edit failed:", err);
  }
};

  return (
    <div className="flex justify-center mt-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl p-6 rounded-2xl w-96"
      >
        <h2 className="text-2xl font-bold mb-4 text-[#088178]">
          Edit Product
        </h2>

        <input
          value={formData.product_name}
          onChange={(e) =>
            setFormData({ ...formData, product_name: e.target.value })
          }
          placeholder="Product Name"
          className="w-full border p-2 mb-3 rounded"
        />

        <input
          type="number"
          value={formData.product_price}
          onChange={(e) =>
            setFormData({ ...formData, product_price: e.target.value })
          }
          placeholder="Product Price"
          className="w-full border p-2 mb-3 rounded"
        />
        <input
          value={formData.product_description}
          onChange={(e) =>
            setFormData({ ...formData, product_description: e.target.value })
          }
          placeholder="Product Description"
          className="w-full border p-2 mb-3 rounded"
        />
        <select
  
  value={formData.product_category}
  onChange={(e) =>
            setFormData({ ...formData, product_category: e.target.value })
          }
  className="w-full mb-4 p-3 border rounded-lg"
>
  <option value="">Select Category</option>
  <option value={1}>women</option>
  <option value={2}>men</option>
  <option value={3}>kids</option>
</select>

        <input
          type="file"
          onChange={(e) =>
            setFormData({ ...formData, product_image: e.target.files[0] })
          }
          className="w-full mb-4 p-2 border rounded-lg file:bg-[#088178] file:text-white file:px-4 file:py-1 file:rounded file:border-0"

        />

        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-[#088178] text-white px-4 py-2 rounded"
          >
            Update
          </button>

          <button
            type="button"
            onClick={() => navigate("/products")}
            className="bg-gray-400 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
