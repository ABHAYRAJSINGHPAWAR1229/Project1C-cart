import asyncHandler from "../middleware/asyncHandler"
import Product from "../models/productSchema"

// get all products
// GET http://localhost:port/products
//access Public
const getProducts=asyncHandler(async(req,res)=>{
    // const Products=await Product.find({})
    // res.send(Products)
    
    
    Product.find().then(products=>{
        res.json(products)
        }).catch(err=>{
            console.error(err)
            res.status(500).json({message:"Error fetching products"})
            })
})



export default getProducts