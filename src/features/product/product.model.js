import UserModel from "../user/user.model.js";
export default class ProductModel {
  constructor(Id, name, description, imageUrl, category, price, sizes) {
    this.Id = Id;
    this.name = name;
    this.description = description;
    this.imageUrl = imageUrl;
    this.category = category;
    this.price = price;
    this.sizes = sizes;
  }


  static get(id) {
    const product = products.find((i) => i.Id == id);
    return product;

  }

  static filter(minPrice, maxPrice, category) {
    const result = products.filter((product) => {
      return ((!minPrice || minPrice <= product.price) &&
        (!maxPrice || maxPrice >= product.price) &&
        (!category || category == product.category))
    })
    return result
  }

  static rateProduct(userID, productID, rating) {

    //  validate user
    const user = UserModel.getAll().find(u => u.id == userID);
    if (!user) {
      return "User not found"

    }

    //validate product
    const product = products.find(p => p.Id == productID)

    if (!product) {
      return "Product not found";
    }


    // check if there are any ratings and if not then add rating array.

    if (!product.rating) {
      product.rating = [];
      product.rating.push({
        userID: userID,
        rating: rating
      });
    }
    else {
      //check if user rating is already available.

      const existingRatingIndex = product.rating.findIndex(r => r.userID == userID);
      if (existingRatingIndex >= 0) {
        product.rating[existingRatingIndex] = {
          userID: userID,
          rating: rating,
        }
      }
      else {

        //if no existing rating then add rating
        product.rating.push({
          userID: userID,
          rating: rating
        });
      }
    }
  }

  static getAll() {
    return products
  }



}

let products = [
  new ProductModel(
    1,
    "Product 1",
    "Description 1",
    "image1.jpg",
    1,
    9.99,
    []
  ),
  new ProductModel(
    2,
    "Product 2",
    "Description 2",
    "image2.jpg",
    2,
    19.99,
    ["M", "XL"]
  ),
  new ProductModel(
    3,
    "Product 3",
    "Description 3",
    "image3.jpg",
    3,
    29.99,
    ["S"]
  ),
];