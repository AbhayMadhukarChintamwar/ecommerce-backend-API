
import express from "express";
import ProductCOntroller from "./product.controller.js";

const router = express.Router();

const productCOntroller = new ProductCOntroller();
router.get("/", productCOntroller.getAllProducts);
router.post("/", productCOntroller.addProduct);
export default router;