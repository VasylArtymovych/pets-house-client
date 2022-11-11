import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user:{
        email:null,
        password:null,
        name:null,
        location:null,
        phone:null,
    },
    token:null,
    isLogged:false,
    load:false,
    errorServer:false,
    errorRegistration:false,
}

const authSlice=createSlice({
    name: 'users',
    initialState,
    
})
