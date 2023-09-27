import { createSlice } from "@reduxjs/toolkit";
//import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
// const initialState = []

const CartReducer = createSlice({
    name: 'CartReducer',
    initialState: {
        products: []
    },
    reducers: {
        incrementcart: (state=initialState,action) => {
            // console.log(state)
          state.products.push(action.payload)
          return state
        },
        removeFromCart: (state, action) => {
            // console.log("rtfgyhjklfghj")
            // console.log(state)
            // console.log(action)
             state.products=state.products.filter(item => item.id !== action.payload)
         //  console.log(sol)
           return state
        }
    }
})

export const {incrementcart,removeFromCart} = CartReducer.actions;
export default CartReducer.reducer;

// import React from 'react';
// export default function Counter() {
//     return (
//         <Text>Counter</Text>
//     )
// }