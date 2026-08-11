import { Router } from "express";
import prisma from "../lib/prisma";

const router = Router()

// api for creating new order in the database
router.post("/", async (req, res) => {
    try {
        const { userid, productid, username, userphone, ordertitel, orderbreed, orderprice, orderweight } = req.body;
        const data = await prisma.orders.create({
            data: {
                userid,
                productid,
                username,
                userphone: Number(userphone),
                ordertitel,
                orderbreed,
                orderprice: Number(orderprice),
                orderweight: Number(orderweight),
            },
        });
        res.json({
            success: true,
            message: "Order Data Created!",
            data,
        });

    } catch (err: any) {
        console.log(err);
        res.status(400).json({
            success: false,
            message: err.massage || "Order Data insrted failed!",
            data: null,
        })
    }
})

// for getting all the order data forn the database
router.get("/", async (req, res) => {
    try {
        const data = await prisma.orders.findMany();
        res.json({
            success: true,
            message: "Data Found!",
            data,
        })

    } catch (err: any) {
        res.status(400).json({
            success: false,
            message: err.massage || "Error fetching data",
            data: null,
        })
    }
})

export default router