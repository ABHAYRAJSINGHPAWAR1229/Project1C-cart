import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Button,Card, CardTitle, Col, Container, ListGroup, Row } from 'react-bootstrap'
import {useSelector} from 'react-redux'

const CartScreen = () => {

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  return (
    <>
    <LinkContainer to='/'>
      <Button className='btn-block'>Back</Button>
    </LinkContainer>
    
    <Container style={{display:'flex',justifyContent:'center'}}>
    <Card style={{width:'600px',backgroundColor:'lightgoldenrodyellow' }}>
      <CardTitle className='bg-warning' >Cart</CardTitle>
      <Card.Body>
       {cartItems.length===0?(<h1>Your cart is empty</h1>):(
        <ListGroup>
          <Row>
            <Col>Product Name</Col>
            <Col>Quantity</Col>
            <Col>Price</Col>
            <Col>Remove</Col>

            <Col></Col>
          </Row>
          <hr/>
        </ListGroup>
        
       )}

      </Card.Body>
    </Card>
    </Container>
    </>
  )
}

export default CartScreen