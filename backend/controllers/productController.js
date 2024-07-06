import asyncHandler from "../middleware/asyncHandler.js"
import Product from '../models/productSchema.js'

// get all products
// GET http://localhost:port/products
//access Public
const getProducts=asyncHandler(async(req,res)=>{
    const products=await Product.find({})
    res.json(products);
    
 //   const products = await Product.find({})
//     // throw new Error('Product Found')
//     res.json(products);
    
    // Product.find().then(products=>{
    //     res.json(products)
    //     }).catch(err=>{
    //         console.error(err)
    //         res.status(500).json({message:"Error fetching products"})
    //         })
})


// get single products
// GET http://localhost:port/product/:id
//access Public
const getProductByID=async(req,res)=>{
    const product=await Product.findById(req.params.id)

    if(product){
       return res.send(product)
    }else{
        res.status(404)
        throw new Error("Product not found")
    }
}



export { getProducts,getProductByID}