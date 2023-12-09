import ProductModel from "./product.model.js";
export default class ProductController {
  getAllProducts(req, res) {
    const products = ProductModel.getAll();
    res.json(products);
  }
  addProducts(req, res) { }

  
  getOneProduct(req,res){
    const id = req.params.id;
    const product = ProductModel.get(id);
    if(!product){
        res.status(404).send('Product not found');
    } else{
        return res.status(200).send(product);
    }
}
}
