import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Button } from 'react-bootstrap'

const CartScreen = () => {
  return (
    <>
    <LinkContainer to='/'>
      <Button className='btn-block'>Back</Button>
    </LinkContainer>
    <div>CartScreen</div>

    </>
  )
}

export default CartScreen