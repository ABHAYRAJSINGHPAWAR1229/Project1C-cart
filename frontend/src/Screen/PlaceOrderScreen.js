import React from 'react'
import {Link,redirect,useLocation,useNavigate} from 'react-router-dom'
import { Form,Button,Image } from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import Alerting from '../Component/Alerting'
import Spinner from '../Component/Spinner'
import { saveShippingAddress } from '../slices/cartSlice'
import CheckOutSteps from '../Component/CheckOutSteps'


const PlaceOrderScreen = () => {
    // const dispatch = useDispatch()
    // const navigate = useNavigate()
    // const location = useLocation()
    // const cart = useSelector(state => state.cart)
    // const user=useSelector((state)=>state.login)
  return (
    <div>
      <CheckOutSteps step1 step2 step3 step4 step5></CheckOutSteps>
    </div>
  )
}

export default PlaceOrderScreen