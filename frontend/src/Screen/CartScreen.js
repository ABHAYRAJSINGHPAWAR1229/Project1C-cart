import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Button,Card, CardTitle, Container } from 'react-bootstrap'
import {useSelector} from 'react-redux'
import { FaTrash } from 'react-icons/fa'
import {Table} from 'react-bootstrap'


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

        <Table striped bordered hover>
          <thead>
            <th>Product Name</th>
            <th>Quantity</th>
             <th>Price</th>
             <th>Remove</th>
          </thead>
          {cartItems.map((item)=>(
               <>
          <tbody key={item.product}>
          <td>{item.name}</td>
             <td>{item.qty}</td>
             <td>&#8377;{item.price}</td>
             <td><Button variant='danger'><FaTrash/></Button></td>
          </tbody>
          </>
          ))}
        </Table>
        // <ListGroup>
        //   <Row>
        //     <Col>Product Name</Col>
        //     <Col>Quantity</Col>
        //     <Col>Price</Col>
        //     <Col>Remove</Col>
        //   </Row>

          
        //     {cartItems.map((item)=>(
        //       <>
        //       <Row></Row>
        //       <Row key={item.product}>
              
        //       <Col>{item.name}</Col>
        //       <Col>{item.qty}</Col>
        //       <Col>&#8377;{item.price}</Col>
        //       <Col><Button variant='danger'><FaTrash/></Button></Col>
              
        //       </Row>
        //       <Row></Row>
        //       </>
        //       ))}

         
        //   <hr/>
        // </ListGroup>
        
       )}

      </Card.Body>
    </Card>
    </Container>
    </>
  )
}

export default CartScreen