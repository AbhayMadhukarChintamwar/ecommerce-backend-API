import ProductModel from "./product.model.js";

export default class ProductCOntroller {
    getAllProducts(req, res) { 
        const products = ProductModel.GetAll();
        res.status(200).send(products)
    }

    addProduct(req, res) { }

}