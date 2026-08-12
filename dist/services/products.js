"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prisma_1 = __importDefault(require("../lib/prisma"));
const router = (0, express_1.Router)();
// api for creating new product into database
router.post("/", async (req, res) => {
    try {
        const { title, type, breed, price, weight, age, description, image, category } = req.body;
        const data = await prisma_1.default.product.create({
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
    }
    catch (err) {
        console.log(err);
        res.status(400).json({
            success: false,
            message: err.message || "Failed to create product!",
            data: null,
        });
    }
});
// for getting all the animal data from the database
router.get("/", async (req, res) => {
    try {
        const data = await prisma_1.default.product.findMany({
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
// get single product by id
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const data = await prisma_1.default.product.findFirst({
            where: { id, isDeleted: false },
        });
        if (!data) {
            res.status(404).json({
                success: false,
                message: "Product not found!",
                data: null,
            });
            return;
        }
        res.json({
            success: true,
            message: "Product retrieved successfully",
            data,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: err.message || "Error fetching product",
            data: null,
        });
    }
});
// update product by id
router.patch("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const payload = req.body;
        if (payload.price)
            payload.price = Number(payload.price);
        if (payload.weight)
            payload.weight = Number(payload.weight);
        if (payload.age)
            payload.age = Number(payload.age);
        const data = await prisma_1.default.product.update({
            where: { id },
            data: payload,
        });
        res.json({
            success: true,
            message: "Product updated successfully!",
            data,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: err.message || "Error updating product",
            data: null,
        });
    }
});
// soft delete product by id
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const data = await prisma_1.default.product.update({
            where: { id },
            data: { isDeleted: true },
        });
        res.json({
            success: true,
            message: "Product deleted successfully!",
            data,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: err.message || "Error deleting product",
            data: null,
        });
    }
});
exports.default = router;
