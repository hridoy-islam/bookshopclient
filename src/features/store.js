import { configureStore } from '@reduxjs/toolkit'
import apiSlice from './api/apislice';
import authReducer from './auth/authSlice'
import bookSlice from './Books/bookSlice';

const store = configureStore({
    reducer: {
      [apiSlice.reducerPath] : apiSlice.reducer,
      auth: authReducer,
      book: bookSlice,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware)
  })
  
  export default store;