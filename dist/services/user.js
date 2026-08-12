"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prisma_1 = __importDefault(require("../lib/prisma"));
const router = (0, express_1.Router)();
// get all users
router.get("/", async (req, res) => {
    try {
        const data = await prisma_1.default.user.findMany({
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
        const data = await prisma_1.default.user.findFirst({
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
        const data = await prisma_1.default.user.update({
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
        const data = await prisma_1.default.user.update({
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
exports.default = router;
