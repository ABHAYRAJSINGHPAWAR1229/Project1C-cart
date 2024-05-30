import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Navbar,Nav,NavLink,Container} from 'react-bootstrap'
import {FaUser,FaShoppingCart} from 'react-icons/fa'


const Header = () => {
  return (
    <>
    <Navbar bg='dark' variant='light' expand='lg' collapseOnSelect ></Navbar>
    
    
    <Navbar  variant='light' expand='lg' bg='warning' collapseOnSelect >
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
               <img width={20} height={20} src='/C_cart.png' alt='images!'></img>
               &nbsp;&nbsp;<b>C-cart</b> 
            </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-Navbar-nav'>
                <Nav className='ms-auto'>
                      <LinkContainer to='/login'>
                        <NavLink ><FaUser/>LogIn</NavLink>
                      </LinkContainer>

                      <LinkContainer to='/register'>
                        <NavLink ><FaUser/>Registration</NavLink>
                      </LinkContainer>
                
                      <LinkContainer to='/cart'>
                        <NavLink ><FaShoppingCart/>Cart</NavLink>
                        </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Container>

    </Navbar>
    
   
    <Navbar bg='dark' variant='light' expand='lg' collapseOnSelect ></Navbar>
    </>
  )
}

export default Header