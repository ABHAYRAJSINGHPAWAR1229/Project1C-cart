import asyncHandler from "../middleware/asyncHandler.js"
import Product from '../models/productSchema.js'

// get all products
// GET http://localhost:port/products
//access Public
const getProducts=asyncHandler(async(req,res)=>{
    
    const keyword=req.query.keyword ? {name:{ $regex:req.query.keyword, $options:'i'}}:{};
    
    const count=await Product.countDocuments({...keyword});
    // console.log(count);
    const products=await Product.find({...keyword})
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

//get top rated products
// GET http://localhost:port/products/top
//access Public
const getTopProducts=async(req,res)=>{
    const products=await Product.find({}).sort({rating:-1}).limit(3)
    res.status(200).json(products)
    }



export { getProducts,getProductByID,getTopProducts}