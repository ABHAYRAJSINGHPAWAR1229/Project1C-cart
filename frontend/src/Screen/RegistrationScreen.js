import React from 'react'
import { Card } from 'react-bootstrap'

const RegistrationScreen = () => {
  return (
    <>
    <Card>
      <Card.Body className='bg-warning fs-5'>
        Registration
      </Card.Body>
     <form>
     <div className="mb-3">
    <label for="uname" className="form-label fs-4">Name</label>
    <input type="text" className="form-control" id="uname" />
  </div>

  <div className="mb-3">
    <label for="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" />
  </div>

  <div className="mb-3">
    <label for="addhar" className="form-label">Addhar Card Number</label>
    <input type="number" className="form-control" id="addhar" />
  </div>

  <div className="mb-3">
    <label for="pass" className="form-label">Re-Enter Your Password</label>
    <input type="password" className="form-control" id="pass"/>
  </div>

  <div className="mb-3">
    <label for="pass" className="form-label">New Password</label>
    <input type="password" className="form-control" id="pass"/>
  </div>

  <div className="mb-3">
    <label for="add" className="form-label">Full Address</label>
    <textarea className="form-control" id="addhar" />
  </div>

  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="C-1"/>
    <label className="form-check-label" for="C-1">Accept term and Conditions</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</Card>
    </>
  )
}

export default RegistrationScreen