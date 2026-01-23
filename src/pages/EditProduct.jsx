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
    product_image: null
  });

  // load existing product data
  useEffect(() => {
    if (product) {
      setFormData({
        product_name: product.product_name,
        product_price: product.product_price,
        product_image: null
      });
    }
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("product_name", formData.product_name);
    data.append("product_price", formData.product_price);

    // only update image if new image selected
    if (formData.product_image) {
      data.append("product_image", formData.product_image);
    }

    dispatch(editProduct({ id, formData: data }));
    navigate("/products");
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
          type="file"
          onChange={(e) =>
            setFormData({ ...formData, product_image: e.target.files[0] })
          }
          className="w-full mb-4"
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
