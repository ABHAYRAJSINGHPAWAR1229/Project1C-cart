import React,{useEffect} from 'react'
import {PayPalButtons,usePayPalScriptReducer} from '@paypal/react-paypal-js'
import { usePayOrderMutation,useGetPayPalClientQuery } from '../slices/orderApiSlice'
import {toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'

const PaymentGatewayScreen = () => {
    const [payOrder,{isLoading,error}]=usePayOrderMutation();
    const [{isPending},paypalDispatch]=usePayPalScriptReducer();
    const {userInfo} =useSelector((state)=>state.auth);
    const {data:paypal ,isLoading:loadingPayPal,error:errorPayPal}=useGetPayPalClientQuery()
    const navigate=useNavigate()
    useEffect(() => {
        if (!errorPayPal && !loadingPayPal && paypal.clientId) {
            const loadingPayPalScript=async()=>{
                paypalDispatch({
                    type: 'resetOPtions',value:{
                        'client-Id':paypal.clientId,
                        currency:'Indian'
                    }
                });
                paypalDispatch({type:'setLoadingStatus',value:'pending'});
            }
            if(order && !order.isPaid){
                if(!window.paypal){
                     loadingPayPalScript();
                }
            }
            
            }
            }, [order,paypal,paypalDispatch,loadingPayPal,errorPayPal])
  return (
    <div>


    </div>
  )
}

export default PaymentGatewayScreen