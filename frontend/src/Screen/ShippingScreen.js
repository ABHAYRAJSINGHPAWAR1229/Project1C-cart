import React,{useState} from 'react'
import {Form,Button, Card} from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { saveShippingAddress } from '../slices/cartSlice'
import CheckOutSteps from '../Component/CheckOutSteps'
import { LinkContainer } from 'react-router-bootstrap'


const ShippingScreen= () => {
    const {userInfo} = useSelector((state) => state.login)
    const [fullName, setFullName] = useState('')
    const [address, setAddress] = useState(userInfo.address || '')
    const [city, setCity] = useState('')
    const [postalCode, setPostalCode] = useState('')
    const [country, setCountry] = useState('')
   
    const dispatch = useDispatch()
    const navigate = useNavigate()




    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(saveShippingAddress({fullName,address,city,postalCode,country}))
        navigate('/payment')

        }

return(
   <>
    <LinkContainer to='/'>
      <Button className='btn-block'>Back</Button>
    </LinkContainer>
    

    <CheckOutSteps step1 step2 step3/>

    <Card  className='bg-warning fs-5' >
        <Card.Title>
        <h1>Shipping</h1>
        </Card.Title>
        <Card.Body style={{backgroundColor:'lightgoldenrodyellow' }}>
        <Form onSubmit={submitHandler}>
            <Form.Group controlId='fullName'>
                <Form.Label>Full Name</Form.Label>
                <Form.Control type='text' placeholder='Enter Full Name' value={fullName} onChange={(
                    e) => setFullName(e.target.value)}>
                    </Form.Control>
            </Form.Group>
            <Form.Group controlId='address'>
                <Form.Label>Address</Form.Label>
                <Form.Control type='text' placeholder='Enter Address' value={address} onChange={(
                    e) => setAddress(e.target.value)}>
                    </Form.Control>
            </Form.Group>
            <Form.Group controlId='city'>
                <Form.Label>City</Form.Label>
                <Form.Control type='text' placeholder='Enter City' value={city} onChange={(
                    e) => setCity(e.target.value)}>
                    </Form.Control>
            </Form.Group>
            <Form.Group controlId='postalCode'>
                <Form.Label>Postal Code</Form.Label>
                <Form.Control type='text' placeholder='Enter Postal Code' value={postalCode} onChange
                ={(e) => setPostalCode(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId='country'>
                <Form.Label>Country</Form.Label>
                <Form.Control type='text' placeholder='Enter Country' value={country} onChange={(e) => setCountry(e.target.value)}>
                    </Form.Control>
            </Form.Group>
            <Button type='submit' variant='primary'>Continue</Button>

            
        </Form>    
        </Card.Body>
        
    </Card>
    </>
  )
}

export default ShippingScreen
