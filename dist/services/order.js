import { Router } from "express";
import prisma from "../lib/prisma";
const router = Router();
// api for creating new order in the database
router.post("/", async (req, res) => {
    try {
        const { userid, productid, username, userphone, ordertitel, orderbreed, orderprice, orderweight, status } = req.body;
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
                ...(status ? { status } : {}),
            },
        });
        res.json({
            success: true,
            message: "Order Data Created!",
            data,
        });
    }
    catch (err) {
        console.log(err);
        res.status(400).json({
            success: false,
            message: err.message || "Order Data inserted failed!",
            data: null,
        });
    }
});
// for getting all the order data from the database
router.get("/", async (req, res) => {
    try {
        const data = await prisma.orders.findMany({
            where: { isDeleted: false },
        });
        res.json({
            success: true,
            message: "Data Found!",
            data,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: err.message || "Error fetching data",
            data: null,
        });
    }
});
// get single order by id
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const data = await prisma.orders.findFirst({
            where: { id, isDeleted: false },
        });
        if (!data) {
            res.status(404).json({
                success: false,
                message: "Order not found!",
                data: null,
            });
            return;
        }
        res.json({
            success: true,
            message: "Order retrieved successfully",
            data,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: err.message || "Error fetching order",
            data: null,
        });
    }
});
// update order by id
router.patch("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const payload = req.body;
        if (payload.userphone)
            payload.userphone = Number(payload.userphone);
        if (payload.orderprice)
            payload.orderprice = Number(payload.orderprice);
        if (payload.orderweight)
            payload.orderweight = Number(payload.orderweight);
        const data = await prisma.orders.update({
            where: { id },
            data: payload,
        });
        res.json({
            success: true,
            message: "Order updated successfully!",
            data,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: err.message || "Error updating order",
            data: null,
        });
    }
});
// soft delete order by id
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const data = await prisma.orders.update({
            where: { id },
            data: { isDeleted: true },
        });
        res.json({
            success: true,
            message: "Order deleted successfully!",
            data,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: err.message || "Error deleting order",
            data: null,
        });
    }
});
export default router;
