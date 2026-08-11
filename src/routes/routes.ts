import { Router } from "express";
import products from "../services/products";
import order from "../services/order";



const router= Router()

router.use("/products", products);



router.use("/order", order);

export default router