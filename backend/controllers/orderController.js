import asyncHandler from "../middleware/asyncHandler.js";
import Order from '../models/orderSchema.js'

//create new order
//POST http://localhost:3000/orders
//Private
const createOrder=asyncHandler(async(req,res)=>{
    const {orderItems,shippingAddress,paymentMethod,itemsPrice,totalGst,totalShipping,totalPrice}=req.body;
    if(orderItems && orderItems.length===0){
        res.status(400).json({success:false,message:"No order items found."})
    }else{
        const order=new Order({
            orderItems:orderItems.map((x)=>({...x,product:x._id,
                _id:undefined
            })),
            shippingAddress,
            paymentMethod,
            itemsPrice,
            totalGst,
            totalShipping,
            totalPrice,
            user:req.user._id})
            const createdOrder=await order.save();
            res.status(201).json({success:true,message:"Order created successfully.",data:createdOrder})
            
    }
    

});

//get logged in user items
//GET http://localhost:3000/orders/myOrders
//Private
const getMyOrders=asyncHandler(async(req,res)=>{

     const orders=await Order.find({user:req.user._id})
     res.status(200).json({success:true,orders:orders})
});

//get order by id
//get http://localhost:3000/orders/:id
//private
const getOrderById=asyncHandler(async(req,res)=>{
  
     const order=await Order.findById(req.params.id).populate('user','name email')
     res.status(200).json({success:true,order:order});

     if(order){
        res.status(200).json({success:true,order:order});
     }else{
        res.status(404).json({success:false,message:"Order not found."})
     }
    });

//update order to paid
//PUT http://localhost:3000/orders/:id/pay
//private
const updateOrderToPaid=asyncHandler(async(req,res)=>{
    const order=await Order.findById(req.params.id)
    if(order){
        order.isPaid=true;
        order.paidAt=Date.now();
        order.paymentResult={
            id:req.body.id,
            status:req.body.status,
            update_time:req.body.update_time,
            email_address:req.body.email_address

        }
        const updatedOrder=await order.save();
        res.status(200).json({success:true,message:"Order is paid.",data:updatedOrder
            });
            }else{
                res.status(404).json({success:false,message:"Order not found."})
                }
                

});



//update order to delivered
//GET http://localhost:3000/orders/:id/deliver
//private Admin
const updateOrderToDelivered=asyncHandler(async(req,res)=>{
    res.send('update order to delivered')
    // const order=await Order.findById(req.params.id)
    // order.isDelivered=true;
    // order.deliveredAt=Date.now()
    // order.save();
    // res.status(200).json({success:true,order:order})
    // res.status(200).json({success:true,message:"Order is delivered",order:order
    });

    //get all orders
    //GET http://localhost:3000/orders
    //private Admin
    const getAllOrders=asyncHandler(async(req,res)=>{
        

       //  const orders=await Order.find({}).populate('user','name')
         //res.status(200).json({success:true,orders:orders})
        });

        export{
            createOrder,
            getMyOrders,
            getOrderById,
            updateOrderToPaid,
            updateOrderToDelivered,
            getAllOrders

        }








