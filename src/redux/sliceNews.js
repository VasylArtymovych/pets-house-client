import { createSlice } from "@reduxjs/toolkit";
import { newsApi } from "./fetchNews";

const initialState={
    news:[],
    newsIsLoad:false,
    errorServerNews:false
}
export const sliceNews=createSlice({
    name:'news',
    initialState,
    extraReducers:(builder)=>{
        builder.addMatcher(newsApi.endpoints.getNewsList.matchFulfilled, (state,{payload})=>{
            state.news= payload.data;
            state.newsIsLoad= false;
            state.errorServerNews= false;
        });
        builder.addMatcher(newsApi.endpoints.getNewsList.matchPending, (state)=>{
            state.newsIsLoad=true
        });
        builder.addMatcher(newsApi.endpoints.getNewsList.matchRejected, (state,{payload})=>{
            if(payload?.status===400){
                state.errorServerNews=true
                state.newsIsLoad=false
            }
        })
    }
})

export const newsReducer=sliceNews.reducer