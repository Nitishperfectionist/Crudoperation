import express from "express";
import { createProduct, getProduct, updateProduct } from "../controllers/product.controller.js";

const router=express.Router();


router.post('/create',createProduct)
router.get('/product',getProduct);
router.put('/update/:id',updateProduct)

export default router;