import express from "express";
import ProductController from "./product.controller.js";

const productRoutes = express.Router()
const productController = new ProductController()
productRoutes.get('/', productController.getAllProducts)
productRoutes.post('/', productController.addProducts)
productRoutes.get('/filter',productController.filterProducts)
productRoutes.get('/:id',productController.getOneProduct);


export default productRoutes