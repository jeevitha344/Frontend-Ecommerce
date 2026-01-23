import { createSlice } from "@reduxjs/toolkit";
import { loginuser } from "./productThunk";



const loginSlicer=createSlice({
    name:'loginslicer',
    initialState:{
         loading:false,
        error:null,
        success:false,
    },
    reducers:{},



    extraReducers : (builder)=>{
     builder
     .addCase(loginuser.pending,(state)=>{
        state.loading=true;
        state.error=null;
     })
     .addCase(loginuser.fulfilled,(state,action)=>{
         console.log(action.payload); //  response.data
        state.loading=false;
        state.access=action.payload.access;
        state.refresh=action.payload.refresh;
        // state.isAuthenticated=true
        localStorage.setItem("access",action.payload.access);
        localStorage.setItem("refresh",action.payload.refresh);

     })
     .addCase(
        loginuser.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload
            
        }
     )

}
    
}
)

export default loginSlicer.reducer