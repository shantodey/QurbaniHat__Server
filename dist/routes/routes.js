"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_1 = __importDefault(require("../services/products"));
const order_1 = __importDefault(require("../services/order"));
const user_1 = __importDefault(require("../services/user"));
const category_1 = __importDefault(require("../services/category"));
const review_1 = __importDefault(require("../services/review"));
const router = (0, express_1.Router)();
router.use("/products", products_1.default);
router.use("/order", order_1.default);
router.use("/users", user_1.default);
router.use("/categories", category_1.default);
router.use("/reviews", review_1.default);
exports.default = router;
