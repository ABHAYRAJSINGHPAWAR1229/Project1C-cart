import {createSlice} from '@reduxjs/toolkit'

// initialState=localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):{cartItems:[0]};
// const initialState = {
//     items: [],
//     total: 0
//   };

//for round off and make value two decimal place
const calc=(num)=>{
    return (Math.round(num*100)/100).toFixed(2)
}

const initialState = localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):{cartItems:[]};
const cartSlice=createSlice({
    name:"cart",
     initialState,
    reducers:{
        addToCart:(state,action)=>{
          const item=action.payload;
          const existItem=state.cartItems.find((p)=>p._id===item._id);

          if(existItem){
            state.cartItems=state.cartItems.map((p)=>p._id===existItem._id ? item : p)
          } else {
            state.cartItems=[...state.cartItems,item];
          }
          // total items price initialamount set to be zero
          state.totalAmount=calc(state.cartItems.reduce((initialAmount,item)=>initialAmount+item.price*item.qty,0));

          //total shipping price
          state.totalShipping=calc(state.totalAmount>1000 ? 0 :(state.totalAmount>500 ? 50 : (state.totalAmount>200 ? 100 : (state.totalAmount>100 ? 120:150))));

         //total gst price
         state.totalGst=calc(state.totalAmount*0.18);

         //total Debting Amount
         state.totalDebitingAmount=calc(state.totalAmount+state.totalShipping+state.totalGst)
        
         localStorage.getItem("cart",JSON.stringify(state))
        }
    }

})

export const {addToCart}=cartSlice.actions
export default cartSlice.reducer