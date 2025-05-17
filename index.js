import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
const app = express();
app.use(express.json());
app.use(cors())
dotenv.config()

mongoose.connect(process.env.DB_URl)
.then(()=>console.log("DB connected"))
.catch(err => console.log(err))


app.get('/', (req,res)=>{
    res.send("hello  hello maic check")
})
















app.listen(process.env.DB_PORT,()=>{
    console.log(`Server is running on port ${process.env.DB_PORT}`);
})

