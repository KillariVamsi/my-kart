import { createSlice } from "@reduxjs/toolkit";

let obj = {
    cartItems : [],
    wishItems : []
}

let cartReducer = createSlice({
    name : "cart",
    initialState : obj,
    reducers : {
        addToCart : (state, action) => {
            state.cartItems.push(action.payload)
            // console.log(action)
        },

        removeFromCart : (state,action) => {
            state.cartItems.splice( action.payload , 1)
        },

        addToWishlist : (state, action) => {
            state.wishItems.push(action.payload)
        },

        removeFromWishlist : (state,action) => {
            state.wishItems.splice( action.payload , 1)
        }
    }
})


export const {addToCart, removeFromCart, addToWishlist, removeFromWishlist} = cartReducer.actions
export default cartReducer.reducer