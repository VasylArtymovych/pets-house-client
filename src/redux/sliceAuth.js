import { createSlice } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from "redux-persist";
import { userApi } from "./fetchUser";


const initialState={
    user:{
        email:null,
        password:null,
        name:null,
        city:null,
        phone:null,
        id:null,
        pets:[],
        notices:[],
        favorites:[],
    },
    token:null,
    isLogged:false,
    loadUser:false,
    errorServer:false,
    errorRegistration:false,
}

export const authSlice=createSlice({
    name: 'users',
    initialState,
    extraReducers:builder=>{
        builder.addMatcher(
            userApi.endpoints.logIn.matchFulfilled,
            (state, {payload})=>{
                const{user}= payload;
                state.user.email= user.email;
                state.user.name= user.name;
                state.user.city= user.city;
                state.user.phone= user.phone;
                state.user.id= user._id;
                state.user.pets= user.pets;
                state.user.notices= user.notices;
                state.user.favorites= user.favorites;
                state.token=user.token;
                state.isLogged= true;
                state.loadUser=false;
                state.errorServer=false;
            }
        )
        builder.addMatcher(
            userApi.endpoints.logIn.matchPending,
            (state)=>{
                state.loadUser= true;
            }
        )
        builder.addMatcher(
            userApi.endpoints.logIn.matchRejected,
            (state,{payload})=>{
                if (payload?.status=== 400){
                    state.errorServer= true;
                }
            }
        )
        builder.addMatcher(
            userApi.endpoints.registrationUser.matchFulfilled,
            (state,{payload})=>{
                const {user}=payload;
                state.user.email= user.email;
                state.user.name= user.name;
                state.user.city= user.city;
                state.user.phone= user.phone;
                state.isLogged= true;
                state.loadUser= false;
            }
        )
        builder.addMatcher(
            userApi.endpoints.registrationUser.matchPending,
            (state)=>{
                state.loadUser= true;
            }
        )
        builder.addMatcher(
            userApi.endpoints.registrationUser.matchRejected,
            (state,{payload})=>{
                if(payload?.status===400){
                    state.errorRegistration= true;
                }
            }
        )
        builder.addMatcher(
            userApi.endpoints.getCurrentUser.matchFulfilled,
            (state,{payload})=>{
                const{email,name,city,phone}= payload.user;
                state.user.email= email;
                state.user.name= name;
                state.user.city=city;
                state.user.phone= phone;
                state.isLogged= true;
                state.loadUser= false;
            }
        )
        builder.addMatcher(
            userApi.endpoints.getCurrentUser.matchPending,
            (state)=>{
                state.loadUser= true;
            }
        )
        builder.addMatcher(
            userApi.endpoints.getCurrentUser.matchRejected,
            (state,{payload})=>{
                if(payload?.status=== 401){
                    state.token=``;
                }
            }
        )
        builder.addMatcher(
            userApi.endpoints.logOut.matchPending,
            (state)=>{
                state.loadUser= true;
            }
        )
        builder.addMatcher(
            userApi.endpoints.logOut.matchFulfilled,
            ()=>{
                return {...initialState}
            }
        )
    }
})

const persistConfig = {
    key: 'users',
    storage,
    whitelist:['token']
};

export const persistSliceAuth= persistReducer(persistConfig, authSlice.reducer) ;
