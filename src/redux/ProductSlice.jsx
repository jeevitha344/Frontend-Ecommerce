import {createSlice } from "@reduxjs/toolkit"
import { fetchProducts,addProduct,editProduct,deleteProduct} from "./productThunk"; // async API call
import { data as mockData } from '../assets/MockData';
const initialState={
 productelement:[],
searchTerm:'',
filteredData:[],
 status: "idle",     // loading | success | error
  error: null

}

const productSlice = createSlice({
    name:'productelement',
initialState,
reducers:{
// setProducts(state, action){
//     state.productelement=action.payload
// },

setSearchTerm(state,action){
    state.searchTerm=action.payload
    state.filteredData=state.productelement.filter(product=>product.product_name.toLowerCase().includes(state.searchTerm.toLowerCase()))}

},

extraReducers:(builder)=>{
    builder
    .addCase(fetchProducts.pending,(state)=>{
        state.status ='loading';
    })

    .addCase(fetchProducts.fulfilled,(state,action)=>{
        state.status='success';
        const data = Array.isArray(action.payload)
          ? action.payload
          : [action.payload];

        state.productelement = data;
        state.filteredData = data;
        // state.productelement=action.payload
        // state.filteredData=action.payload
    })
    
    .addCase(addProduct.fulfilled, (state, action) => {
        state.productelement.push(action.payload);
        state.filteredData.push(action.payload);
      })
      // edit product
    .addCase(editProduct.fulfilled, (state, action) => {
        const index = state.productelement.findIndex(p => p.id === action.payload.id);
        if (index !== -1) state.productelement[index] = action.payload;
      })
      // delete product
    .addCase(deleteProduct.fulfilled, (state, action) => {
        state.productelement = state.productelement.filter(p => p.id !== action.payload);
      })
 .addCase(fetchProducts.rejected, (state, action) => {
  state.status = 'error';
  state.error = action.error.message || "Failed to fetch products";
  state.productelement = mockData;    // fallback to mock data
  state.filteredData = mockData;
});
    

    //   .addCase(fetchProducts.rejected,(state,action)=>{
    //     state.status='error';
    //     state.error=action.error.message;
    // })
    //   .addCase(fetchProducts.rejected,(state,action)=>{
    //     state.status='error';
    //     state.error=action.error.message;
    // })
}

})

export const {setSearchTerm}= productSlice.actions
export default productSlice.reducer