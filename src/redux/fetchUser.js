import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const userApi=createApi({
    reducerPath:'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8888/api/auth',
        // prepareHeaders:(headers, {getState})=>{
        //     const token= getState().users.token
        //     if(token){ headers.set('Athorization', `Bearer ${token}`)}
        //     return headers
        // }
    }),
    endpoints: builder=>({
        registrationUser: builder.mutation({
            query:(payload)=>({
                url: '/register',
                method: 'POST',
                body: payload,
            }),
        }),
        logIn: builder.mutation({
            query:(payload)=>({
                url: '/login',
                method: 'POST',
                body: payload,
            }),
        }),
        getCurrentUser: builder.query({
            query: ()=> '/current'
            }),
        logOut:builder.mutation({
            query:()=>({
                url: '/logout',
                method: 'POST'
            })
        })
    })
})

export const {useRegistrationUserMutation, useLogInMutation, useLogOutMutation, useGetCurrentUserQuery}= userApi;