import { Router } from "express";
import products from "../services/products.js";
import order from "../services/order.js";
import user from "../services/user.js";
import category from "../services/category.js";
import review from "../services/review.js";

const router = Router();

router.use("/products", products);
router.use("/order", order);
router.use("/users", user);
router.use("/categories", category);
router.use("/reviews", review);

export default router;