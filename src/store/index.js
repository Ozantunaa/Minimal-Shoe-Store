import {configureStore} from '@reduxjs/toolkit'
import { cartSlice } from './cartSlice'
import { favoritesSlice } from './favoritesSlice'
import { productsSlice } from './productsSlice'

export const store = configureStore({
    reducer:{
        products: productsSlice.reducer,
        cart: cartSlice.reducer,
        favorites: favoritesSlice.reducer
    }
})