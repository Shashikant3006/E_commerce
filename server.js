import express from 'express';
import colors from 'colors'
import dotenv from 'dotenv'
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js';
import categoryRoute from './routes/categoryRoute.js';
import productRoutes from './routes/productRoutes.js';
import cors from 'cors';
dotenv.config()

connectDB();
//   rest object


const app=express();
app.use(express.json())

app.use(cors());

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/category',categoryRoute);
app.use('/api/v1/products',productRoutes);


// rest api

app.get("/",(req,res)=>{
    res.send({
        message : "welcome to ecommerce  and shopify app"
    })
})

// port
const PORT = process.env.PORT ||8080;

app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`.bgCyan.white);
})