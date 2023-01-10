import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    cartItems: 0
            
}
export const cartReducer = createReducer(initialState, {
    cartItemsIncrement: (state) => {
        state.cartItems += 1;
    }
    
});





