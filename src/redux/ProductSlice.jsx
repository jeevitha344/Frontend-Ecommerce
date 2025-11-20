import {createSlice } from "@reduxjs/toolkit"

const initialState={
    productelement:[],
searchTerm:'',
filteredData:[],

}

const productSlice = createSlice({
    name:'productelement',
initialState,
reducers:{
setProducts(state, action){
    state.productelement=action.payload
},

setProducts1(state, action){
    state.productelement=action.payload
},

setSearchTerm(state,action){
    state.searchTerm=action.payload
    state.filteredData=state.productelement.filter(product=>product.name.toLowerCase().includes(state.searchTerm.toLowerCase()))}

}

})
export const {setProducts,setProducts1,setSearchTerm}= productSlice.actions
export default productSlice.reducer