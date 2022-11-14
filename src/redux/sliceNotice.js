import { createSlice } from "@reduxjs/toolkit";

const initialState={
    onFilterNotice:'',
}

export const sliceNotice= createSlice({
name:'notices',
initialState,
reducers:{
        setFilter(state,action){
            return {...state, filter:action.payload}
        },
    },
});

export const {setFilter}= sliceNotice.actions

export const noticeReducer= sliceNotice.reducer