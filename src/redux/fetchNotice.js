import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const noticeApi=createApi({
    reducerPath:"noticeApi",
    baseQuery: fetchBaseQuery({
        baseUrl:'http://localhost:8888/api/notice'
    }),
    tagTypes:['Notice'],
    endpoints:builder=>({
        getNotice:builder.query({
            query:({category})=>({
                url:`/${category}`,
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