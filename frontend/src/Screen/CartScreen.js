import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Button,Card, CardTitle } from 'react-bootstrap'

const CartScreen = () => {
  return (
    <>
    <LinkContainer to='/'>
      <Button className='btn-block'>Back</Button>
    </LinkContainer>
    
    <Card>
      <CardTitle>Cart</CardTitle>
      <Card.Body></Card.Body>
    </Card>

    </>
  )
}

export default CartScreen