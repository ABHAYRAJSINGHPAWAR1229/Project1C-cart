import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


const CheckOutSteps = ({step1,step2,step3,step4}) => {
  return (
    <Nav className='justify-content-center mb-4'>
      <Nav.Item className='badge text-bg-warning'>
        {step1?(
        <LinkContainer to='/users/login' className={step1 ? 'active' : ''}>
        <Nav.Link>Sign In</Nav.Link>
        </LinkContainer>
        ):(<Nav.Link disabled>Sign In</Nav.Link>)}
      </Nav.Item>

      <Nav.Item className='badge text-bg-warning'>  
      {step2?(
        <LinkContainer to='/cart' className={step2 ? 'active' : ''}>
        <Nav.Link>Cart</Nav.Link>
        </LinkContainer>
        ):(<Nav.Link disabled>Cart</Nav.Link>)}
      </Nav.Item>

      <Nav.Item className='badge text-bg-warning'>
        {step3?(
        <LinkContainer to='/shipping' className={step3 ? 'active' : ''}>
        <Nav.Link>Shipping</Nav.Link>
        </LinkContainer>
        ):(<Nav.Link disabled>Shipping</Nav.Link>)}
        </Nav.Item>

      <Nav.Item className='badge text-bg-warning'>
        {step4?(
        <LinkContainer to='/payment' className={step4 ? 'active' : ''}>
        <Nav.Link>Payment</Nav.Link>
        </LinkContainer>
        ):(<Nav.Link disabled>Payment</Nav.Link>)}
      </Nav.Item>
    </Nav>
  )
}

export default CheckOutSteps