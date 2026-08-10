import { Router } from "express";
import prisma from "../lib/prisma";

const router=Router()

// api for creating new data into database
router.post("/",async(req,res)=>{
    try {
        const productsData=req.body;
        const data=await prisma.product.create({data:productsData})
        res.json({
            success:true,
            message:"Data Created!",
            data,
        })
        
    } catch (err:any) {
        console.log(err);
        res.status(400).json({
            success:false,
            message:err.massage || "Data insrted failed!",
            data:null,
        })
    }
})

// for getting all the animal data forn the database
router.get("/",async(req,res)=>{
    try {
        const data=await prisma.product.findMany();
        res.json({
            success:true,
            message:"Data Created!",
            data,
        })
        
    } catch (err:any) {
        res.status(400).json({
            success:false,
            message:err.massage || "Error fetching data",
            data:null,
        })
    }
})

export default router