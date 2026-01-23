import { fetchAllOrders, fetchOrders } from "./productThunk";
import { createSlice } from "@reduxjs/toolkit";

const orderSlicer =createSlice({
    name:"order",
    initialState: {
    loading: false,
    error: null,
    order: [], 
    orders:null,    // ✅ store order here
    status: "idle",  // ✅ initial status
  },
    reducers:{},

    extraReducers:(builder)=>{
    builder
    .addCase(fetchOrders.pending,(state)=>{
        state.status="loading";
    })
     .addCase(fetchAllOrders.fulfilled, (state, action) => {
        state.status = "success";
        state.order = action.payload;
      })

    .addCase(fetchOrders.fulfilled,(state,action)=>{
        state.status="success";
        state.orders=action.payload;
    })
    .addCase(fetchOrders.rejected,(state,action)=>{
        state.status="error";
        state.error=action.payload
    })
}
   


});




export default orderSlicer.reducer;