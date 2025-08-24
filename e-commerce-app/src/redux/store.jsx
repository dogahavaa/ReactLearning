import { configureStore } from '@reduxjs/toolkit'
import appReducer from './slices/appSlice'
import productReducer from './slices/productSlice'


export const store = configureStore({
    reducer: {
        app: appReducer,
        product: productReducer
    },
})