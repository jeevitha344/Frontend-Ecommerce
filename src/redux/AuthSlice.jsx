import { signupuser } from "./productThunk";
import { createSlice } from "@reduxjs/toolkit";

const authSlicer =createSlice({
    name:"auth",
    initialState:{
        loading:false,
        error:null,
        success:false,
    },

    reducers:{},

    extraReducers:(builder)=>{
    builder
    .addCase(signupuser.pending,(state)=>{
        state.status="loading";
    })
    .addCase(signupuser.fulfilled,(state,action)=>{
        state.status="success";
        state.user=action.payload;
    localStorage.setItem("access", action.payload.access);
    localStorage.setItem("refresh", action.payload.refresh);
    })
    .addCase(signupuser.rejected,(state,action)=>{
        state.status="error";
        state.error=action.payload
    })
}

});


export default authSlicer.reducer;