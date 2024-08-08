import React from 'react'
import {useGetAllUsersQuery} from '../../slices/userApiSlice'
import {Card, Col, ListGroup, Row, Spinner} from 'react-bootstrap'
import Alerting from '../../Component/Alerting';
const UserListScreen = () => {
   const {data:User,isLoading,error} =useGetAllUsersQuery();
    console.log(User);
  return (
    <div>
      <Card style={{backgroundColor:'lightgoldenrodyellow' }}>
        <Card.Header className='bg-warning fs-5'> User List</Card.Header>
        <Card.Body>
         
          {isLoading?(<Spinner/>):(error?(<Alerting>{error?.data?.message || error.message}</Alerting>):(
            <ListGroup>
              <ListGroup.Item style={{backgroundColor:'gold' }}>
                <Row>
                  <Col md={2} style={{backgroundColor:'lightyellow' }}>Id</Col>
                  <Col md={2} style={{backgroundColor:'lightgoldenrodyellow' }}>Name</Col>
                  <Col md={1} style={{backgroundColor:'lightyellow' }}> Contact Number</Col>
                  <Col md={2} style={{backgroundColor:'lightgoldenrodyellow' }}>Email</Col>
                  <Col md={1} style={{backgroundColor:'lightyellow' }}>Addhar Number</Col>
                  <Col md={1} style={{backgroundColor:'lightgoldenrodyellow' }}>Register Date</Col>
                  <Col md={2} style={{backgroundColor:'lightyellow' }}>Address</Col>
                  <Col md={1} style={{backgroundColor:'lightgoldenrodyellow' }}>Role</Col>

                </Row>
              </ListGroup.Item>
              {User.map((user, index) => (

             <ListGroup.Item style={{backgroundColor:'gold' }}>
                <Row>
                  <Col md={2} style={{backgroundColor:'lightyellow' }}>{user._id}</Col>
                  <Col md={2} style={{backgroundColor:'lightgoldenrodyellow' }}>{user.name}</Col>
                  <Col md={1} style={{backgroundColor:'lightyellow' }}>{user.contactNumber}</Col>
                  <Col md={2} style={{backgroundColor:'lightgoldenrodyellow' }}>{user.email}</Col>
                  <Col md={1} style={{backgroundColor:'lightyellow' }}>{user.addharNumber}</Col>
                  <Col md={1} style={{backgroundColor:'lightgoldenrodyellow' }}>{user.createdAt.substring(0,10)}</Col>
                  <Col md={2} style={{backgroundColor:'lightyellow' }}>{user.address}</Col>
                  <Col md={1} style={{backgroundColor:'lightgoldenrodyellow' }}>{user.isAdmin?<Alerting variant='info'>Admin</Alerting>:<Alerting  variant='primary'>Client</Alerting>}</Col>
                </Row>
             </ListGroup.Item>

              ))}
            </ListGroup>
            
            

             
          ))}
        
        </Card.Body>
      </Card>
    </div>
  )
}

export default UserListScreen