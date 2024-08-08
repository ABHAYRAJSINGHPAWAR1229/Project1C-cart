import React,{useState,useEffect} from 'react'
import {Table,Form,Row,Col, Card, ListGroup, Button} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import {toast,ToastContainer} from 'react-toastify'
import Alerting from '../../Component/Alerting'
import Spinner from '../../Component/Spinner'
import { useProfileMutation } from '../../slices/userApiSlice'
import { setCredentials } from '../../slices/loginSlice'
import { useNavigate } from 'react-router-dom'
import bcrypt from 'bcryptjs'
import { useGetMyOrdersQuery } from '../../slices/orderApiSlice'

const ProfileScreen = () => {
    const {userInfo}=useSelector((state)=>(state.login))
    const[sn,setSn]=useState(1);
    
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [contactNumber,setContactNumber]=useState("")
    const [address,setAddress] =useState("")
    const [city,setCity]=useState("")
    const [state,setState]=useState("")
    const [pinCode, setPinCode] = useState("");
    const [password,setPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");
    
    const dispatch=useDispatch();
    const navigate=useNavigate();
    
    
    const [updateProfile,{loadingUpdateProfile,error}]=useProfileMutation()
    
    useEffect(()=>{
      if(userInfo){
        setName(userInfo.name);
        setEmail(userInfo.email);
        setContactNumber(userInfo.contactNumber);
        setAddress(userInfo.address);
        setCity(userInfo.city);
        setState(userInfo.state);
        setPinCode(userInfo.pinCode)
        
      }
    },[userInfo,userInfo.name,userInfo.email])
    const submitHandler =async(e)=>{
      e.preventDefault();
      
      if(password===confirmPassword){
        try{
          toast.success('Profile Successfully Updated')
          const res=await updateProfile({ _id : userInfo._id, name,email,address,contactNumber,password:bcrypt.hashSync(password,10)}).unwrap();
          navigate('/')
          dispatch(setCredentials(res));
          
        }catch(error){
          toast.error(error?.data?.message || error.message)
        }
      }
      else
      {
        toast.error("Password and Confirm Password does not match");
      }
    }
    const {data:orders,isLoading,err}=useGetMyOrdersQuery(userInfo._id);
    console.log(orders)
    
  return (
    <>
    <ToastContainer/>
          <Row>
          <Col>
    <Card style={{backgroundColor:'lightgoldenrodyellow' }}>
        <Card.Header className='bg-warning fs-5'>Profile Data</Card.Header>
        <Card.Body>
            <ListGroup>
                <ListGroup.Item variant='warning'><Row>
                  <Col>  <p><strong> Name :</strong></p> </Col>
                  <Col><input id="name" name="name" value={name} onChange={(e)=>setName(e.target.value)}/></Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item style={{backgroundColor:'lightgoldenrodyellow'}}>
                <Row>
                <Col>   <p><strong> Contact Number :</strong></p> </Col>
                <Col><input id="cn" name="cn"  value={contactNumber} onChange={(e)=>setContactNumber(e.target.value)}/></Col>
                </Row>
                </ListGroup.Item>

                <ListGroup.Item variant='warning'>
                <Row>
                <Col>   <p><strong> Email : </strong></p>  </Col>
                <Col><input id="email" name="email"  value={email} onChange={(e)=>setEmail(e.target.value)}/></Col>
                </Row>
                </ListGroup.Item>

                <ListGroup.Item style={{backgroundColor:'lightgoldenrodyellow'}}>
                <Row>
                <Col>   <p><strong> Address : </strong></p> </Col>
                <Col><input id="address" name="address"  value={address} onChange={(e)=>setAddress(e.target.value)}/></Col>
                </Row>
                </ListGroup.Item>

                <ListGroup.Item variant='warning'>
                <Row>
                <Col> <p><strong> Password : </strong></p>  </Col>
                <Col><input type='password' id="password" name="password" placeholder='Enter Your Password' onChange={(e)=>setPassword(e.target.value)} /></Col>
                </Row>
                </ListGroup.Item>
               

                <ListGroup.Item style={{backgroundColor:'lightgoldenrodyellow'}}>
                <Row>
                <Col> <p><strong> Confirm Password : </strong></p>  </Col>
                <Col><input type='password' id="confirmPassword" name="confirmPassword" placeholder='Re-Enter Your Password' onChange={(e)=>setConfirmPassword(e.target.value)} /></Col>
                </Row>
                </ListGroup.Item>
{/*                

                <ListGroup.Item variant='warning'>
                <Col> <p><strong> City : </strong></p>  </Col>
                <Col><input id="city" name="city" onChange={(e)=>setCity(e.target.value)} disabled/></Col>
                </ListGroup.Item>

                <ListGroup.Item style={{backgroundColor:'lightgoldenrodyellow'}}>
                 <Col>   <p><strong> State : </strong></p> </Col>
                 <Col><input id="state" name="state" onChange={(e)=>setState(e.target.value)} disabled/></Col>
                </ListGroup.Item>

                <ListGroup.Item variant='warning'>
                <Col> <p><strong> PinCode : </strong></p>  </Col>
                <Col><input id="pinCode" name="pinCode" onChange={(e)=>setPinCode(e.target.value)} disabled/></Col>
                </ListGroup.Item> */}
                

                <ListGroup.Item variant='warning'>
                <Button onClick={submitHandler}>Update</Button>
                {loadingUpdateProfile && <Spinner/>}
                {error && toast.error("Problem occured")}
                </ListGroup.Item>
                </ListGroup>

        </Card.Body>
    </Card>
                </Col>
                </Row>
{/* ------------------------------------------------------------------------------------------------------------------------------------------------------ */}
<Row>
                <Col>
                <Card style={{backgroundColor:'lightgoldenrodyellow' }}>
                  <Card.Header className='bg-warning fs-5'>MyOrders</Card.Header>
                  {isLoading ? (<Spinner/>):(err?(<Alerting variant='danger'>{err?.data?.message || err.error}</Alerting>):(
                  <Card.Body>
                    <ListGroup  >
                      <Row>
                      <Col md={2} style={{backgroundColor:'gold' }}>ID</Col>
                      <Col md={2}  style={{backgroundColor:'lightyellow' }}>Ordered Date</Col>
                      <Col md={1} style={{backgroundColor:'lightgoldenrodyellow' }}>Total</Col>
                      <Col md={1} style={{backgroundColor:'lightyellow' }}>Payment Method</Col>
                      <Col md={2} style={{backgroundColor:'lightgoldenrodyellow' }} >PAID</Col>
                      <Col md={2} style={{backgroundColor:'lightyellow' }}>Delivered</Col>
                      
                      <Col md={2} style={{backgroundColor:'gold' }}>Order Details</Col>
                      </Row>
                    </ListGroup>
                    <ListGroup style={{backgroundColor:'lightgoldenrodyellow' }}>
                      <Table >
                        
                    {orders && orders.map((order) => (  
                    <tr ><Row >   
                      {/* <Col><td>{sn}</td></Col>               */}
                      <Col md={2} style={{backgroundColor:'gold' }}><td > {order._id}</td></Col>
                      <Col md={2} style={{backgroundColor:'lightyellow' }}><td> {order.createdAt.substring(0,10)}</td></Col>
                      <Col md={1} style={{backgroundColor:'lightgoldenrodyellow' }}><td> {order.totalDebtingAmount}</td></Col>
                      <Col md={1} style={{backgroundColor:'lightyellow' }}><td>{order.paymentMethod}</td></Col>
                      <Col md={2} style={{backgroundColor:'lightgoldenrodyellow' }}><td> {order.isPaid?<Alerting variant='success'>Paid</Alerting>:<Alerting variant='danger'>Not Paid</Alerting>}</td></Col>
                      <Col md={2} style={{backgroundColor:'lightyellow' }}><td> {order.isDelivered?<Alerting variant='success'>Delivered</Alerting>:<Alerting variant='danger'>Not Delivered</Alerting>}</td></Col>
                      <Col md={2} style={{backgroundColor:'gold' }}><td> 
                        <LinkContainer to={`/orders/${order._id}`}>
                        <Button> Details</Button>
                        </LinkContainer>
                        </td></Col>
                      </Row>

                    </tr>
                      
                    )
                    )}
                    </Table>
                    </ListGroup>
                  </Card.Body>
                  ))}
                </Card>
                
                </Col>
                </Row>
    </>
  )
}

export default ProfileScreen