import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const petsApi= createApi({
    reducerPath:'petsApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'http://localhost:8888/api/user',
        prepareHeaders:(headers,{getState})=>{
            const token=getState()?.users.token
            if(token){ headers.set('Authorization', `Bearer ${token}`)}
            return headers
        }
    }),
    tagTypes:['Pets'],
    endpoints:builder=>({
        postPet:builder.mutation({
            query:(payload)=>({
                url:'/pets',
                method:'POST',
                body:payload,
            }),
            providesTags:['Pets'],
        }),
        updatePet:builder.mutation({
            query:(payload)=>({
                url:`/pets/${payload.id}`,
                method:'PATCH',
                body:payload,
            }),
            invalidatesTags:['Pets'],
        }),
        deletePet:builder.mutation({
            query:(id)=>({
                url:`/pets/${id}`,
                method:'DELETE',
            }),
            invalidatesTags:['Pets'],
        }),
    })
})

export const { usePostPetMutation, useUpdatePetMutation, useDeletePetMutation }= petsApi;