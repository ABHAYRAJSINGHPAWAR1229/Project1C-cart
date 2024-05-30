import {createSlice} from '@reduxjs/toolkit'

// initialState=localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):{cartItems:[0]};



const cartSlice=createSlice({
    name:"cart",
    // initialState,
    reducers:{}

})

export default cartSlice.reducer