import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const noticeApi=createApi({
    reducerPath:"noticeApi",
    baseQuery: fetchBaseQuery({
        baseUrl:'http://localhost:8888/api/notice',
        prepareHeaders:(headers, {getState})=>{
            const token= getState().users.token
            if(token){ headers.set('Authorization', `Bearer ${token}`)}
            return headers
        }
    }),
    tagTypes:['Notice'],
    endpoints:builder=>({
        getNotice:builder.query({
            query:({category})=>({
                url:`/category/${category}`,
                method:'GET',
                body:{category},
            }),
            providesTags:['Notice']
        }),
        addNotice:builder.mutation({
            query:(payload)=>({
                url:'/add',
                method:'POST',
                body:payload,
            }),
            invalidatesTags:['Notice'],
        })
    })
})

export const {useGetNoticeQuery, useAddNoticeMutation}=noticeApi;