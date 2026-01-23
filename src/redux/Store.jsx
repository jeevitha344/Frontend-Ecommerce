import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import ProductSlice from "./ProductSlice"
import AuthSlice from "./AuthSlice";
import loginslicer from "./LoginSlicer"
import orderslicer from './OrderSlicer'


const store = configureStore({
     devTools:true,
    reducer:{
       
        cart:CartSlice,
        Product :ProductSlice,
        auth : AuthSlice,
        login: loginslicer,
        order:orderslicer
        }
})

export default store;