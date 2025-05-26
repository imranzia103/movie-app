import { configureStore } from '@reduxjs/toolkit';

import { setupListener } from '@reduxjs/toolkit/query';

import authReducer from './features/auth/authSlice'

const store = configureStore({


  reducer: {
    auth:authReducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().contact(apiSlice.middleware),

  devTools: true,


})

setupListener(store.dispatch);


export default store;