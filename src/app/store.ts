// IMPORTS //

import cartReducer from '../features/cart/cartSlice'
import { configureStore } from '@reduxjs/toolkit'
import { productsApi } from '../services/productsApi'


export const store = configureStore({
    reducer: {
        cart: cartReducer,
        [productsApi.reducerPath]: productsApi.reducer,
    },

    middleware: function (getDefaultMiddleware) {
        return getDefaultMiddleware().concat(
            productsApi.middleware
        )
    },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch