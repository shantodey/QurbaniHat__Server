import { Router } from "express";
import prisma from "../lib/prisma.js";
const router = Router();
// get all users
router.get("/", async (req, res) => {
    try {
        const data = await prisma.user.findMany({
            where: { isDeleted: false },
            select: {
                id: true,
                name: true,
                userName: true,
                email: true,
                role: true,
                avatar: true,
                emailVerified: true,
                image: true,
                createdAt: true,
                updatedAt: true,
            },
        });
        res.json({
            success: true,
            message: "Users retrieved successfully",
            data,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: err.message || "Error fetching users",
            data: null,
        });
    }
});
// get user by id
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const data = await prisma.user.findFirst({
            where: { id, isDeleted: false },
            select: {
                id: true,
                name: true,
                userName: true,
                email: true,
                role: true,
                avatar: true,
                emailVerified: true,
                image: true,
                createdAt: true,
                updatedAt: true,
            },
        });
        if (!data) {
            res.status(404).json({
                success: false,
                message: "User not found",
                data: null,
            });
            return;
        }
        res.json({
            success: true,
            message: "User retrieved successfully",
            data,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: err.message || "Error fetching user",
            data: null,
        });
    }
});
// update user by id
router.patch("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const payload = req.body;
        const data = await prisma.user.update({
            where: { id },
            data: payload,
            select: {
                id: true,
                name: true,
                userName: true,
                email: true,
                role: true,
                avatar: true,
                emailVerified: true,
                image: true,
                createdAt: true,
                updatedAt: true,
            },
        });
        res.json({
            success: true,
            message: "User updated successfully",
            data,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: err.message || "Error updating user",
            data: null,
        });
    }
});
// soft delete user by id
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const data = await prisma.user.update({
            where: { id },
            data: { isDeleted: true },
            select: {
                id: true,
                name: true,
                userName: true,
                email: true,
            },
        });
        res.json({
            success: true,
            message: "User deleted successfully",
            data,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: err.message || "Error deleting user",
            data: null,
        });
    }
});
export default router;
