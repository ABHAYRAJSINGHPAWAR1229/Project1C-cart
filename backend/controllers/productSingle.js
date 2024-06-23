import asyncHandler from "../middleware/asyncHandler"
import Product from "../models/productSchema"

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

export { getProductByID}