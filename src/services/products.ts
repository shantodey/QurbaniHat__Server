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

export default router