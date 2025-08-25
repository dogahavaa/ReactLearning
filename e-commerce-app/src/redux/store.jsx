import { configureStore } from '@reduxjs/toolkit'
import appReducer from './slices/appSlice'
import productReducer from './slices/productSlice'
import cartReducer from './slices/cartSlice'



export const store = configureStore({
    reducer: {
        app: appReducer,
        product: productReducer,
        cart: cartReducer
    },
})