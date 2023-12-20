import ProductModel from "./product.model.js";
export default class ProductController {
  getAllProducts(req, res) {
    const products = ProductModel.getAll();
    res.json(products);
  }
  addProducts(req, res) { }


  getOneProduct(req, res) {
    const id = req.params.id;
    const product = ProductModel.get(id);
    if (!product) {
      res.status(404).send('Product not found');
    } else {
      return res.status(200).send(product);
    }
  }


  filterProducts(req, res) {

    const minPrice = req.query.minPrice;
    const maxPrice = req.query.maxPrice;
    const category = req.query.category;

    const product = ProductModel.filter(minPrice, maxPrice, category);

    res.status(200).send(product)



  };

  rateProduct(req, res) {
    const userID = req.query.userID;
    const productID = req.query.productID;
    const rating = req.query.rating;

    const error = ProductModel.rateProduct(userID, productID, rating);

    if (error) {
      return res.status(400).send(error);
    } else {
      return res.status(200).send("Rating are added")
    }
   
  }


}

// example of query parameters
//localhost:2000/api/product/filter?minPrice=10&maxPrice=20&category=1
