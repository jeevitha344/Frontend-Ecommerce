import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import ProductSlice from "./ProductSlice"


const store = configureStore({
     devTools:true,
    reducer:{
       
        cart:CartSlice,
        Product :ProductSlice
    }
})

export default store;