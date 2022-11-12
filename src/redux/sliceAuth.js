import { createSlice } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from "redux-persist";
import { userApi } from "./fetchUser";


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
                const{user, token}= payload;
                state.user.email= user.email;
                state.user.name= user.name;
                state.user.location= user.location;
                state.user.phone= user.phone;
                state.token= token;
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
                const {user,token}=payload;
                state.user.email= user.email;
                state.user.name= user.name;
                state.user.location= user.location;
                state.user.phone= user.phone;
                state.token= token;
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
                const{email,name,location,phone}= payload.user;
                state.user.email= email;
                state.user.name= name;
                state.user.location=location;
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

//Selectors

export const authSelectors={
    getUserEmail: state=> state.users.user.email,
    getUserName: state=> state.users.user.name,
    getUserlocation: state=> state.users.user.location,
    getUserPhone: state=> state.users.user.phone,
    getToken: state=> state.users.token,
    isLogged: state=> state.users.isLogged,
    isLoadUser: state=> state.users.loadUser,
    isErrorServer: state=> state.users.errorServer,
    isErrorRegistration: state=> state.users.errorRegistration,
}