import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Button,Card, CardTitle, Container } from 'react-bootstrap'

const CartScreen = () => {
  return (
    <>
    <LinkContainer to='/'>
      <Button className='btn-block'>Back</Button>
    </LinkContainer>
    
    <Container style={{display:'flex',justifyContent:'center'}}>
    <Card style={{width:'600px',backgroundColor:'lightgoldenrodyellow' }}>
      <CardTitle className='bg-warning' >Cart</CardTitle>
      <Card.Body></Card.Body>
    </Card>
    </Container>
    </>
  )
}

export default CartScreen