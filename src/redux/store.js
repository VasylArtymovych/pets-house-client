import { configureStore } from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import { persistSliceAuth } from "./sliceAuth";
import { userApi } from "./fetchUser";
import { noticeApi } from "./fetchNotice";
import { newsApi } from "./fetchNews";
import { noticeReducer } from "./sliceNotice";
import { newsReducer } from "./sliceNews";

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
        users:persistSliceAuth,
        [userApi.reducerPath]: userApi.reducer,
        [noticeApi.reducerPath]:noticeApi.reducer,
        [newsApi.reducerPath]:newsApi.reducer,
        notice:noticeReducer,
        news:newsReducer,
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