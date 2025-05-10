import express from 'express';
import dotenv from 'dotenv'
import { connectDB } from './db/connectDb.js';
import authRoutes from './routes/auth.route.js'
import cookieParser from 'cookie-parser';

const app=express();
app.use(express.json());
app.use(cookieParser())
const PORT=process.env.PORT || 5000

dotenv.config();

app.use('/api/auth',authRoutes)

app.listen(PORT,()=>{
    connectDB();
    console.log(`server is running on the port ${PORT}`)
})


