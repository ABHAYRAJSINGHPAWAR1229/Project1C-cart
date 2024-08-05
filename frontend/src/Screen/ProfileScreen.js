import React,{useState,useEffect} from 'react'
import {Table,Form,Row,Col, Card, ListGroup} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import {toast} from 'react-toastify'
import Alerting from '../Component/Alerting'
import Spinner from '../Component/Spinner'
import { useProfileMutation } from '../slices/userApiSlice'
import { setCredentials } from '../slices/loginSlice'

const ProfileScreen = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");
    
    const dispatch=useDispatch();
    const {userInfo}=useSelector((state)=>(state.login))
    
  return (
    <>
    <Card style={{backgroundColor:'lightgoldenrodyellow' }}>
        <Card.Header className='bg-warning fs-5'>Profile Data</Card.Header>
        <Card.Body><Row>
            <Col><ListGroup>
                <ListGroup.Item variant='success'>
                    <p><strong> Name :</strong></p>
                </ListGroup.Item>

                <ListGroup.Item variant='info'>
                    <p><strong> Contact Number :</strong></p>
                </ListGroup.Item>

                <ListGroup.Item variant='success'>
                    <p><strong> Email : </strong></p>
                </ListGroup.Item>

                <ListGroup.Item variant='info'>
                    <p><strong> Address : </strong></p>
                </ListGroup.Item>

                <ListGroup.Item variant='success'>
                    <p><strong> City : </strong></p>
                </ListGroup.Item>

                <ListGroup.Item variant='info'>
                    <p><strong> State : </strong></p>
                </ListGroup.Item>

                <ListGroup.Item variant='success'>
                    <p><strong> PinCode : </strong></p>
                </ListGroup.Item>
                </ListGroup></Col>



            <Col><ListGroup>
                <ListGroup.Item variant='success'>
                    <p>{userInfo.name}</p>
                </ListGroup.Item>

                <ListGroup.Item variant='primary'>
                    <p>{userInfo.contactNumber}</p>
                </ListGroup.Item>

                <ListGroup.Item variant='success'>
                    <p>{userInfo.email}</p>
                </ListGroup.Item>

                <ListGroup.Item variant='primary'>
                    <p>{userInfo.address}</p>
                </ListGroup.Item>

                <ListGroup.Item variant='success'>
                    <p>{userInfo.city}</p>
                </ListGroup.Item>

                <ListGroup.Item variant='primary'>
                    <p>{userInfo.state}</p>
                </ListGroup.Item>

                <ListGroup.Item variant='success'>
                    <p>{userInfo.postalCode}</p>
                </ListGroup.Item>
                </ListGroup></Col>
            </Row>
        </Card.Body>
    </Card>
    </>
  )
}

export default ProfileScreen