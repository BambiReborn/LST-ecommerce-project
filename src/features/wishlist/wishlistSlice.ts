// IMPORTS //

import { createSlice } from '@reduxjs/toolkit'


type WishlistState = {
    items: number[]
}


const initialState: WishlistState = {
    items: [],
}


const wishlistSlice = createSlice({
    name: 'wishlist',

    initialState,

    reducers: {

        // LIKE / UNLIKE PRODUCT
        toggleWishlist: function (state, action) {

            const productExists = state.items.includes(
                action.payload
            )


            if (productExists) {

                state.items = state.items.filter(function (id) {
                    return id !== action.payload
                })

            } else {

                state.items.push(action.payload)

            }
        },
    },
})


export const {
    toggleWishlist,
} = wishlistSlice.actions


export default wishlistSlice.reducer