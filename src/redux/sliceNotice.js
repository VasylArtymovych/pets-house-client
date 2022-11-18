import { createSlice } from "@reduxjs/toolkit";

const initialState={
    onFilterNotice:'',
}

export const sliceNotice= createSlice({
name:'notices',
initialState,
reducers:{
        setFilterNotice(state,action){
            return {...state, filter:action.payload}
        },
    },
});

export const {setFilterNotice}= sliceNotice.actions

export const noticeReducer= sliceNotice.reducer