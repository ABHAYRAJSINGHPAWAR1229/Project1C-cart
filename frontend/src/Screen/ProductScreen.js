import React from 'react'
import { useParams} from 'react-router-dom'
import {Row,Card, Button, Col, ListGroup, ListGroupItem} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
// import axios from 'axios'
import Rating from '../Component/Rating'
import { useGetProductDetailsQuery } from '../slices/productsApiSlice'
import Spin from '../Component/Spinner'
import Alerting from '../Component/Alerting'

const ProductScreen = () => {
    const {id:productId} = useParams();
    // const [product,setProduct]=useState({})

    // useEffect(()=>{
    //     const fetchProduct=async()=>{
    //         const {data}= await axios.get(`/products/${productId}`)
    //         setProduct(data)
    //     }
    //     fetchProduct()
    // },[productId])
    // // const product=products.find(p=>(p._id === productId) )

    const { data:product , isLoading , error } =useGetProductDetailsQuery(productId)

  return (
    <>
    <div className='Container' >
        <div>
            <LinkContainer to='/'>
                <Button>GO Back</Button>
            </LinkContainer>
        </div>
          
          {isLoading?(
           <Spin/>
          ):error?(
            <Alerting variant='danger'>error?.data?.message || error.error</Alerting>
          ):(

            
            <Row>
                <div className='Col col-4 d-flex justify-content-between' >
                    
                <Card.Img src={product.image} alt={product.name} width='300px' height='300px' variant='top' />
                </div>
                
                <div className='Col col-4'>
                <Card>
                <ListGroup>
                    <ListGroupItem variant='info'> <h3>{product.name}</h3></ListGroupItem>
                    <ListGroupItem variant='info'> <h3>Brand: {product.brand}</h3></ListGroupItem>
                    <ListGroupItem variant='info'> <h3>Category: {product.category}</h3></ListGroupItem>
                    <ListGroupItem variant='info' style={{color:'yellowgreen'}}> <Rating value={product.rating} /></ListGroupItem>
                    <ListGroupItem variant='info'> <h3>Number of Reviews: {product.numReview}</h3></ListGroupItem>
                    <ListGroupItem variant='info'> <h3>Description:<i> {product.description} </i></h3></ListGroupItem>
    
                </ListGroup>
                </Card>
                </div>
                
            
    
                <Col className='col-4' float>
                    <Card>
                      <ListGroup>
                        
                           <ListGroup.Item className='d-flex justify-content-between'>
                           <Col > Price : </Col>
                            <Col > {product.price}</Col>
                             </ListGroup.Item>
                                            
                           <ListGroup.Item className='d-flex justify-content-between'>
                            <Col>Stock :</Col>
                            <Col>{product.countInStock>0?'Available':'Not Available'}</Col>
                             </ListGroup.Item>
    
                           <ListGroup.Item>
                            <LinkContainer to='/cart'>
                            <Button className='btn btn-block' type='submit' disabled={parseInt(product.countInStock) === 0}>Add To Cart</Button>
                            </LinkContainer>
                           </ListGroup.Item>
                        
                      </ListGroup>
                    </Card>
                </Col>
    
                </Row>
          )}

    </div>
    </>

    
  )
}

export default ProductScreen