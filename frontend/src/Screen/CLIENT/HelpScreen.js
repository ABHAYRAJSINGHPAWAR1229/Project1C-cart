import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'

const HelpScreen = () => {
  return (
    <div>
        <h1>Help</h1>
        <Card style={{backgroundColor:'lightgoldenrodyellow' }}>
            <Card.Header className='bg-warning fs-5'>Help</Card.Header>
            <Card.Body>
                <ListGroup >
                    <ListGroup.Item style={{backgroundColor:'lightyellow' }}><h4>Toll Free Contact Number : </h4> 180017352010 </ListGroup.Item>
                    <ListGroup.Item style={{backgroundColor:'lightyellow' }}><h4>For Technical Support    : </h4>+918737801229 </ListGroup.Item>
                    
                    <ListGroup.Item style={{backgroundColor:'lightyellow' }}><h4>Email : </h4>abhayrajsinghpawar.cdac@gmail.com</ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    </div>
  )
}

export default HelpScreen