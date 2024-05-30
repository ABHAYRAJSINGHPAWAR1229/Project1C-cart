import express from 'express'
import { notFound,errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './database/db.js'
import colors from 'colors'
import dotenv from 'dotenv'
import productRoute from './routes/productRoute.js'

 dotenv.config();    //env setup
 connectDB()   //connection of DB
const app=express()

const port=5000
// const port = process.env.PORT || 8000;
// const app=express();
app.get('/',(req,res)=>{
    res.send('API is running')
})

// app.get('/products',(req,res)=>{
//     res.json(products);
// })

// app.get('/product/:id',(req,res)=>{
//     var product=products.find(p=>p._id===req.params.id)
//     res.send(product);
// })

app.use('/products',productRoute)
app.use(notFound);
app.use(errorHandler)

app.listen(port,()=>
console.log(colors.yellow.inverse(`Server running at port ${port}`)))

