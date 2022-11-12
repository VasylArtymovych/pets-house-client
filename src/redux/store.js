import { configureStore } from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import { persistSliceAuth } from "./sliceAuth";
import { userApi } from "./fetchUser";

import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    } from 'redux-persist';

export const store= configureStore({
    reducer:{
        persistSliceAuth,
        [userApi.reducerPath]: userApi.reducer,
},
middleware: getDefaultMiddleware=>
getDefaultMiddleware({
    serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
    
}).concat(userApi.middleware),
})

export const persistor = persistStore(store)

setupListeners(store.dispatch)