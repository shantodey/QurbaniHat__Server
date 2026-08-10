import express, { Router } from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/routes";



const app=express()


app.use(cors())
app.use(express.json())

app.use("/",router)

app.get('/',(req,res)=>{
    res.json({
        success:true,
        massage:'Wellconme'
    });
})

export default app