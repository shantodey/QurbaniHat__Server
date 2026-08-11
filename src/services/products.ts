import { Router } from "express";
import prisma from "../lib/prisma";

const router=Router()

// api for creating new product into database
router.post("/", async (req, res) => {
    try {
        const { title, type, breed, price, weight, age, description, image, category } = req.body;
        const data = await prisma.product.create({
            data: {
                title,
                type,
                breed,
                price: Number(price),
                weight: Number(weight),
                age: Number(age),
                description,
                image,
                category,
            },
        });
        res.json({
            success: true,
            message: "Product Created Successfully!",
            data,
        });
    } catch (err: any) {
        console.log(err);
        res.status(400).json({
            success: false,
            message: err.message || "Failed to create product!",
            data: null,
        });
    }
});

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