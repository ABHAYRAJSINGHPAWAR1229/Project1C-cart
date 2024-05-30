import React from 'react'
import {Card, CardBody, CardTitle,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'

const LoginScreen = () => {
  return (
    <>
      <div>
            <LinkContainer to='/'>
                <Button>GO Back</Button>
            </LinkContainer>
        </div>

    <div className='d-flex justify-content-center top-50' >
      <Card style={{width:'400px',height:'400px' }}>
        <form>
        <CardTitle className='bg-warning text-dark'>
          <div>Login</div>
        </CardTitle>
        <CardBody>
          <label for='email' className='text-secondary'><h2>User Name</h2></label><br></br><input type='email' id='email' className='form-control h2' name='email' placeholder='Enter your email'/><br></br><br></br>
          <label for='pass' className='text-secondary'><h3>Password</h3></label><br></br><input type='password' className='form-control' id='pass' name='pass' placeholder='Enter your Password'/><br></br><br></br><br></br>
           <button type='button' id='btn' className='btn btn-primary'><h3>Submit</h3></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <button type='reset' id='btn2' className='btn btn-danger'><h3>Reset</h3></button><br></br><br/>
          <Link to='/register'>To register click here</Link>

        </CardBody>
        </form>
      </Card>
    </div>
    </>
  )
}

export default LoginScreen