import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Navbar,Nav,NavLink,Container, Badge, NavDropdown} from 'react-bootstrap'
import {FaUser,FaShoppingCart,FaBaby} from 'react-icons/fa'
import {useSelector,useDispatch} from 'react-redux'
import { useLogoutMutation } from '../slices/userApiSlice'
import { logout } from '../slices/loginSlice'
import { useNavigate } from 'react-router-dom'

const Header = () => {

  const {cartItems} =useSelector((state)=>state.cart);
  const {userInfo} =useSelector((state)=>state.login)
  console.log(cartItems);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [logoutApiCall]=useLogoutMutation();

  const logoutHandler=async()=>{
    try{
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/');
    }catch(error){
      console.log('error');

    }

   console.log("logout")
  }
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

                  {userInfo?(
                    <NavDropdown title={userInfo.name} id='name'>
                      <LinkContainer to='/profile'>
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Item onClick={logoutHandler}>
                        Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                  ):(
                    <>
                    <LinkContainer to='/users/login'>
                        <NavLink ><FaUser/>LogIn</NavLink>
                      </LinkContainer>

                     <LinkContainer to='/register'>
                      <NavLink ><FaBaby/>Registration</NavLink>
                     </LinkContainer>
                    </>
                    )}
                      

                     
                
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