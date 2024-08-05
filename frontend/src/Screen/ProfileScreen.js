import React,{useState,useEffect} from 'react'
import {Table,Form,Row,Col, Card, ListGroup, Button} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import {toast,ToastContainer} from 'react-toastify'
import Alerting from '../Component/Alerting'
import Spinner from '../Component/Spinner'
import { useProfileMutation } from '../slices/userApiSlice'
import { setCredentials } from '../slices/loginSlice'


const ProfileScreen = () => {
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
    const {userInfo}=useSelector((state)=>(state.login))

    const [updateProfile,{isloading:loadingUpdateProfile,error}]=useProfileMutation()

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
    },[userInfo.name,userInfo.email])

    const submitHandler =async(e)=>{
        e.preventDefault();
        if(password===confirmPassword){
          try{
              const res=await updateProfile({ _id:userInfo._id,name,email,contactNumber,address,password})
          }catch(error){
            toast.error(error?.data?.message || error.message)
          }
            }
        else
        {
            toast.error("Password and Confirm Password does not match");
        }
    }
    
  return (
    <>
    <ToastContainer/>
    <Card style={{backgroundColor:'lightgoldenrodyellow' }}>
        <Card.Header className='bg-warning fs-5'>Profile Data</Card.Header>
        <Card.Body>
            <ListGroup>
                <ListGroup.Item variant='warning'>
                  <Col>  <p><strong> Name :</strong></p> </Col>
                  <Col><input id="name" name="name" value={name} onChange={(e)=>setName(e.target.value)}/></Col>
                </ListGroup.Item>

                <ListGroup.Item style={{backgroundColor:'lightgoldenrodyellow'}}>
                <Col>   <p><strong> Contact Number :</strong></p> </Col>
                <Col><input id="cn" name="cn"  value={contactNumber} onChange={(e)=>setContactNumber(e.target.value)}/></Col>
                </ListGroup.Item>

                <ListGroup.Item variant='warning'>
                <Col>   <p><strong> Email : </strong></p>  </Col>
                <Col><input id="email" name="email"  value={email} onChange={(e)=>setEmail(e.target.value)}/></Col>
                </ListGroup.Item>

                <ListGroup.Item style={{backgroundColor:'lightgoldenrodyellow'}}>
                <Col>   <p><strong> Address : </strong></p> </Col>
                <Col><input id="address" name="address"  value={address} onChange={(e)=>setAddress(e.target.value)}/></Col>
                </ListGroup.Item>

                <ListGroup.Item variant='warning'>
                <Col> <p><strong> Password : </strong></p>  </Col>
                <Col><input id="password" name="password" onChange={(e)=>setPassword(e.target.value)}/></Col>
                </ListGroup.Item>
               

                <ListGroup.Item style={{backgroundColor:'lightgoldenrodyellow'}}>
                <Col> <p><strong> Confirm Password : </strong></p>  </Col>
                <Col><input id="confirmPassword" name="confirmPassword" onChange={(e)=>setConfirmPassword(e.target.value)}/></Col>
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
                </ListGroup.Item>
                </ListGroup>

        </Card.Body>
    </Card>
    </>
  )
}

export default ProfileScreen