import { Router } from "express";
import prisma from "../lib/prisma.js";

const router = Router();

// create review
router.post("/", async (req, res) => {
    try {
        const { rating, comment, productId, userId } = req.body;
        const data = await prisma.review.create({
            data: {
                rating: Number(rating),
                comment,
                productId,
                userId,
            },
        });
        res.json({
            success: true,
            message: "Review created successfully",
            data,
        });
    } catch (err: any) {
        res.status(400).json({
            success: false,
            message: err.message || "Failed to create review",
            data: null,
        });
    }
});

// get all reviews
router.get("/", async (req, res) => {
    try {
        const data = await prisma.review.findMany({
            where: { isDeleted: false },
        });
        res.json({
            success: true,
            message: "Reviews retrieved successfully",
            data,
        });
    } catch (err: any) {
        res.status(400).json({
            success: false,
            message: err.message || "Error fetching reviews",
            data: null,
        });
    }
});

// get review by id
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const data = await prisma.review.findFirst({
            where: { id, isDeleted: false },
        });
        if (!data) {
            res.status(404).json({
                success: false,
                message: "Review not found",
                data: null,
            });
            return;
        }
        res.json({
            success: true,
            message: "Review retrieved successfully",
            data,
        });
    } catch (err: any) {
        res.status(400).json({
            success: false,
            message: err.message || "Error fetching review",
            data: null,
        });
    }
});

// update review
router.patch("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const payload = req.body;
        if (payload.rating) payload.rating = Number(payload.rating);
        const data = await prisma.review.update({
            where: { id },
            data: payload,
        });
        res.json({
            success: true,
            message: "Review updated successfully",
            data,
        });
    } catch (err: any) {
        res.status(400).json({
            success: false,
            message: err.message || "Error updating review",
            data: null,
        });
    }
});

// soft delete review
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const data = await prisma.review.update({
            where: { id },
            data: { isDeleted: true },
        });
        res.json({
            success: true,
            message: "Review deleted successfully",
            data,
        });
    } catch (err: any) {
        res.status(400).json({
            success: false,
            message: err.message || "Error deleting review",
            data: null,
        });
    }
});

export default router;
