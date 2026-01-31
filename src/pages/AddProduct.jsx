import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../redux/productThunk";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    product_name: "",
    product_price: "",
     product_description: "",
    product_image: null,
      product_category: ""
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.product_category) {
    alert("Please select a category");
    return;
  }

  const data = new FormData();
  data.append("product_name", formData.product_name);
  data.append("product_price", formData.product_price);
  data.append("product_description", formData.product_description);
  data.append("product_category", formData.product_category);
  data.append("product_image", formData.product_image);

  dispatch(addProduct(data))
    .unwrap()
    
    .then(() =>{toast.success("Product added successfully!", { position: "top-right" });
     navigate("/products/")})
    .catch((err) => console.log("Error adding product:", err));
};

console.log(formData)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-[#088178] mb-6 text-center">
          Add New Product
        </h2>

        <input
          name="product_name"
          placeholder="Product Name"
          onChange={handleChange}
          className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#088178]"
        />

        <input
          name="product_price"
          type="number"
          placeholder="Product Price"
          onChange={handleChange}
          className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#088178]"
        />
<input
  name="product_description"
  placeholder="Product Description"
  onChange={handleChange}
  className="w-full mb-4 p-3 border rounded-lg"
/>

<select
  name="product_category"
  value={formData.product_category}
  onChange={handleChange}
  className="w-full mb-4 p-3 border rounded-lg"
>
  <option value="">Select Category</option>
  <option value={1}>women</option>
  <option value={2}>men</option>
  <option value={3}>kids</option>
</select>

        <input
  type="file"
  accept="image/*"
  onChange={(e) =>
    setFormData({ ...formData, product_image: e.target.files[0] })
  }
  className="w-full mb-4 p-2 border rounded-lg file:bg-[#088178] file:text-white file:px-4 file:py-1 file:rounded file:border-0"
/>


        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => navigate("/products")}
            className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-2 rounded-lg"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="bg-[#088178] hover:bg-[#066d66] text-white px-6 py-2 rounded-lg"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );

}
export default AddProduct;
