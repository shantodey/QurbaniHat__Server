import { Router } from "express";
import prisma from "../lib/prisma";

const router = Router();

// create category
router.post("/", async (req, res) => {
    try {
        const { name, description } = req.body;
        const data = await prisma.category.create({
            data: { name, description },
        });
        res.json({
            success: true,
            message: "Category created successfully",
            data,
        });
    } catch (err: any) {
        res.status(400).json({
            success: false,
            message: err.message || "Failed to create category",
            data: null,
        });
    }
});

// get all categories
router.get("/", async (req, res) => {
    try {
        const data = await prisma.category.findMany({
            where: { isDeleted: false },
        });
        res.json({
            success: true,
            message: "Categories retrieved successfully",
            data,
        });
    } catch (err: any) {
        res.status(400).json({
            success: false,
            message: err.message || "Error fetching categories",
            data: null,
        });
    }
});

// get category by id
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const data = await prisma.category.findFirst({
            where: { id, isDeleted: false },
        });
        if (!data) {
            res.status(404).json({
                success: false,
                message: "Category not found",
                data: null,
            });
            return;
        }
        res.json({
            success: true,
            message: "Category retrieved successfully",
            data,
        });
    } catch (err: any) {
        res.status(400).json({
            success: false,
            message: err.message || "Error fetching category",
            data: null,
        });
    }
});

// update category
router.patch("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const payload = req.body;
        const data = await prisma.category.update({
            where: { id },
            data: payload,
        });
        res.json({
            success: true,
            message: "Category updated successfully",
            data,
        });
    } catch (err: any) {
        res.status(400).json({
            success: false,
            message: err.message || "Error updating category",
            data: null,
        });
    }
});

// soft delete category
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const data = await prisma.category.update({
            where: { id },
            data: { isDeleted: true },
        });
        res.json({
            success: true,
            message: "Category deleted successfully",
            data,
        });
    } catch (err: any) {
        res.status(400).json({
            success: false,
            message: err.message || "Error deleting category",
            data: null,
        });
    }
});

export default router;
