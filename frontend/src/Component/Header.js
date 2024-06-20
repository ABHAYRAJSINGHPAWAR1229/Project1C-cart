import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Navbar,Nav,NavLink,Container, Badge} from 'react-bootstrap'
import {FaUser,FaShoppingCart,FaBaby} from 'react-icons/fa'
import {useSelector} from 'react-redux'


const Header = () => {

  const {cartItems} =useSelector((state)=>state.cart);
  console.log(cartItems);
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
                        <NavLink ><FaBaby/>Registration</NavLink>
                      </LinkContainer>
                
                      <LinkContainer to='/cart'>
                        <NavLink ><FaShoppingCart/>Cart
                        { cartItems.length>0 && ( <Badge pill bg='success'>
                          {cartItems.reduce((a,c)=>a+c.qty,0)}
                        </Badge>)}
                        </NavLink>
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