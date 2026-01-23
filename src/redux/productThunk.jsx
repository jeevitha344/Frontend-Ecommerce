import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from 'axios';


export const fetchProducts =createAsyncThunk(
    'product/fetchProducts',
    async ()=>{
        const response= await axios.get("http://127.0.0.1:8000/app/api/products/");
        return response.data;

    }
)

export const addProduct = createAsyncThunk(
  "product/add",
  async (formData, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/app/api/products/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      
      return res.data;

    } catch (err) {
      console.log("Failed to add product:", err.response?.data || err.message);
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);


// EDIT
export const editProduct = createAsyncThunk(
  "products/edit",
  async ({ id, formData }) => {
    const res = await fetch(`http://127.0.0.1:8000/app/api/products/${id}/`, {
      method: "PUT",
      body: formData
    });
    return await res.json();
  }
);

// Delete product
export const deleteProduct = createAsyncThunk('products/delete', async (id) => {
  await axios.delete(`http://127.0.0.1:8000/app/api/products/${id}/`);
  return id; // return id to remove from store
});

export const fetchAllOrders = createAsyncThunk(
  'order/fetchAll', async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("access"); // get JWT token
      if (!token) throw new Error("User not authenticated");

      const res = await axios.get("http://127.0.0.1:8000/app/api/order/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("res",res)
      return res.data; // this will go to fulfilled
      
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
)
export const signupuser= createAsyncThunk(
    'auth/signupuser',
    async(userdata,{rejectWithValue})=>{
        try{
            const response =await axios.post(
                "http://127.0.0.1:8000/app/api/signup/",
                userdata
            );
            return response.data;

        }
        catch(error){
            return rejectWithValue(error.response.data);
        }
    }
)

export const loginuser= createAsyncThunk(
    'loginslicer/loginuser',
    async(userdata,{rejectWithValue})=>{
        try{
            const response=await axios.post("http://127.0.0.1:8000/app/api/login/",
                userdata);
             localStorage.setItem("access", response.data.access);
       localStorage.setItem("refresh", response.data.refresh);

                return response.data;   //  response.data automatically goes into action.payload
                                       //  Redux Toolkit does this for you internally
        } catch(error){
            return rejectWithValue (error.response.data)
        }
    })


export const refreshAccessToken = async () => {
  const refresh = localStorage.getItem("refresh");
  if (!refresh) return null;

  try {
    const res = await axios.post(
      "http://127.0.0.1:8000/app/api/token/refresh/",
      { refresh }
    );

    localStorage.setItem("access", res.data.access);
    return res.data.access;
  } catch (err) {
    localStorage.clear();
    return null;
  }
};

 

export const fetchOrders =createAsyncThunk(
    'product/fetchOrders',
    
  async (id, { rejectWithValue }) => {
    let token = localStorage.getItem("access");

    try {
      const res = await axios.get(
        `http://127.0.0.1:8000/app/api/order/${id}/`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return res.data;
    } catch (err) {
      // 🔁 Token expired → refresh
      if (err.response?.status === 401) {
        const newToken = await refreshAccessToken();

        if (!newToken) {
          return rejectWithValue("LOGIN_REQUIRED");
        }

        // Retry API
        const retry = await axios.get(
          `http://127.0.0.1:8000/app/api/order/${id}/`,
          {
            headers: { Authorization: `Bearer ${newToken}` },
          }
        );

        return retry.data;
      }

      return rejectWithValue("FAILED");
    }
  }
);