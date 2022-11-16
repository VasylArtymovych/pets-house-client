import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const newsApi=createApi({
    reducerPath:"newsApi",
    baseQuery: fetchBaseQuery({
    baseUrl:'http://localhost:8888/api/news',
    prepareHeaders:(headers, {getState})=>{
        const token= getState().users.token
        if(token){ headers.set('Authorization', `Bearer ${token}`)}
        return headers
    }
    }),
    endpoints:builder=>({
        getNewsList: builder.query({
            query:()=> '/'
        })
    })
})

export const { useGetNewsListQuery }= newsApi;