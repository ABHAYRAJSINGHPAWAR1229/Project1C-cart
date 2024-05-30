import React from 'react'
import {Navbar} from 'react-bootstrap'
const Footer = () => {
  return (
    <footer>
        <Navbar bg='dark' variant='light' expand='lg' collapseOnSelect ></Navbar>
        
        <Navbar bg='warning' variant='danger' expand='lg' collapseOnSelect >
          <Navbar.Brand>
          <div className=" position-absolute bottom-0 start-50 translate-middle-x">@created by Abhay Raj Singh</div>
           
          </Navbar.Brand>
        </Navbar>
            {/* <Row>
                <Col className='text-center'>

                            <h2>---@ made by Abhay Raj Singh---<br/>
                                  ----- 240340120003 -----<br/>
                                     ------ DAC -------
                            </h2>
               </Col>
            </Row> */}
        
        <Navbar bg='dark' variant='light' expand='lg' collapseOnSelect ></Navbar>  
    </footer>
  )
}

export default Footer