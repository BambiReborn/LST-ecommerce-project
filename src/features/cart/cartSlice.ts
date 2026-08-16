// IMPORTS //

import { createSlice } from '@reduxjs/toolkit'


type CartItem = {
    id: number
    quantity: number
}


type CartState = {
    items: CartItem[]
}


const initialState: CartState = {
    items: [],
}


const cartSlice = createSlice({
    name: 'cart',

    initialState,

    reducers: {

        // ADD PRODUCT TO CART //
        addToCart: function (state, action) {
            const existingItem = state.items.find(function (item) {
                return item.id === action.payload
            })

            if (existingItem) {
                existingItem.quantity += 1
            } else {
                state.items.push({
                    id: action.payload,
                    quantity: 1,
                })
            }
        },


        // INCREASE QUANTITY //
        incrementQuantity: function (state, action) {
            const item = state.items.find(function (item) {
                return item.id === action.payload
            })

            if (item) {
                item.quantity += 1
            }
        },


        // DECREASE QUANTITY //
        decrementQuantity: function (state, action) {
            const item = state.items.find(function (item) {
                return item.id === action.payload
            })

            if (!item) {
                return
            }

            if (item.quantity > 1) {
                item.quantity -= 1
            }
        },


        // REMOVE PRODUCT //
        removeFromCart: function (state, action) {
            state.items = state.items.filter(function (item) {
                return item.id !== action.payload
            })
        },
    },
})


export const {
    addToCart,
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
} = cartSlice.actions


export default cartSlice.reducer