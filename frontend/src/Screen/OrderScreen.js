import React from 'react'
import CheckOutSteps from '../Component/CheckOutSteps'
import { Link ,useParams} from 'react-router-dom'
import Alerting from '../Component/Alerting'
import { Card,Row,Col,ListGroup,Image,Form,Button, CardBody } from 'react-bootstrap'
import Spinner from '../Component/Spinner'
import {useGetOrderDetailsQuery } from '../slices/orderApiSlice'

const OrderScreen = () => {
    const {id:orderId} = useParams()
    console.log(orderId)
    const { data:ord,isLoading,error} = useGetOrderDetailsQuery(orderId)
   

    if (isLoading) {
        return <Spinner />;
      }
    else if (error) {
        return <Alerting>Some Problem Occurred</Alerting>;
      }

  return (
    <>
    
      <CheckOutSteps step1 step2 step3 step4 step5 step6 />
      <Alerting>Your Order is Received successfully. Your Order Id number is <u>{orderId}</u></Alerting>
      <h1><strong>My Orders</strong></h1>
      <Row>
        <Col>
        <Card>
            <Card.Header> Status</Card.Header>
            <Card.Body> 
                <Row>
                    <Col>  <strong> Delivery status : </strong> </Col>
                    <Col>
                   {ord.order.isDelivered ?(<Alerting variant='success'>Delivered on {ord.order.DeliveredAt}</Alerting>)
                   :(<Alerting variant='primary'>Not Delivered Yet</Alerting>)} 
                   </Col>
                </Row>
                 <Row> 
                    <Col>  <strong> Payment status : </strong> </Col>
                   <Col>{ord.order.isPaid ?(<Alerting variant='success'>Paid on {ord.order.PaidAt}</Alerting>)
                   :(<Alerting variant='primary'>Not Paid Yet</Alerting>)}
                   </Col>
                   </Row> </Card.Body>
        </Card>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Header>Customer details</Card.Header>
            <Card.Body>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <h4>{ord.order.user.name}</h4>
                    <p><strong>Contact No : </strong></p>
                    <p><strong>Email : </strong> {ord.order.user.email}</p>
                    <p><strong>Address : </strong> {ord.order.shippingAddress.address}</p>
                    <p><strong>City : </strong></p>
                    <p><strong>PinCode : </strong></p>
                    <p><strong>State : </strong></p>
                </ListGroup.Item>
            </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={4}>
        <Card>
            <Card.Header>Parcel details</Card.Header>
            <Card.Body>
            <ListGroup variant="flush">
                {ord.order.orderItems.map((tem)=>(
                    <ListGroup.Item key={tem._id}>
                        <h4>Product Name : {tem.name}</h4>
                        <p><strong>Price : &#8377; </strong>{tem.price}</p>
                        <p><strong>Quantity : </strong>{tem.qty}</p>
                        
                    </ListGroup.Item>
                
                ))}
              
            </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col>
      
        <Card>
            <Card.Header>Shipping details</Card.Header>
            <CardBody>
                <ListGroup>
                    <ListGroup.Item>
                        <p><strong>Amount : </strong>{ord.order.totalAmount} </p>
                        <p><strong>Gst : </strong>{ord.order.totalGst}</p>
                        <p><strong>Shipping : </strong>{ord.order.totalShipping}</p>
                       
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <p><strong>Total Payable Amount :</strong>{ord.order.totalDebtingAmount}</p>
                    </ListGroup.Item>
                </ListGroup>
            </CardBody>
        </Card>
        </Col>
      </Row>
     
    
    </>
   

    

  )
}

export default OrderScreen