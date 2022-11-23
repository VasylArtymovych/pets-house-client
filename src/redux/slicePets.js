import { createSlice} from "@reduxjs/toolkit";
import { petsApi } from "./fetchPets";

const initialState={
    petsFinded:[],
}

export const slicePets=createSlice({
    name:'pets',
    initialState,
    reducers:{
        postToUserPets(state,action){
            return {...state, petsFinded:action.payload}
        },
    },
    extraReducers:(builder)=>{
        builder.addMatcher(petsApi.endpoints.getUserPets.matchFulfilled,(state,{payload})=>{
            state.petsFinded=payload.pets
            //state.petsFinded=[...state.petsFinded, ...payload.pets]
        })
    }
})

export const {postToUserPets}= slicePets.actions;

export const petsUserReducer= slicePets.reducer;
