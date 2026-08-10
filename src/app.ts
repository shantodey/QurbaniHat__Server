import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app=express()


app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.json({
        success:true,
        massage:'Wellconme'
    });
})

export default app