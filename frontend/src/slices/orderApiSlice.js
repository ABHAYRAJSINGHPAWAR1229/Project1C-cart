import {apiSlice} from './apiSlice'
import { ORDERS_URL, PAYPAL_URL } from '../constants'


export const ordersApiSlice=apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createOrder: builder.mutation({
            query:(order)=>({
                url: ORDERS_URL,
                method: 'POST',
                body: {...order}
            }),
            }),
            getOrderDetails:builder.query({
                query:(orderId) =>({
                    url: `${ORDERS_URL}/${orderId}`,
                }),
                keepUnusedDataFor:5
            }),
        payOrder:builder.mutation({
            query:({orderId,details})=>({
                url:`${ORDERS_URL}/${orderId}/pay`,
                method:'PUT',
                body:{...details}
                }),
        }),
        getPayPalClient:builder.query({
            query:()=>({
                url:PAYPAL_URL,
                }),
                keepUnusedDataFor:5,
                }),
         getMyOrders:builder.query({
            query:()=>({
                url:`${ORDERS_URL}/myOrders`,
                method:'GET'
            }),
            keepUnusedDataFor:5,
         }),  
         getAllOrders:builder.query({
            query:()=>({
                url:`${ORDERS_URL}/admin/orderList`,
                method:'GET'
            }),
            keepUnusedDataFor:5,
            
         }),     
        }),


});

export const { useCreateOrderMutation ,useGetOrderDetailsQuery,usePayOrderMutation,useGetPayPalClientQuery,useGetMyOrdersQuery} = ordersApiSlice;
