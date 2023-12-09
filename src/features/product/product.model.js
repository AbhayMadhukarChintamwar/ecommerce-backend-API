// export default class ProductModel {
//     constructor(Id, name, decs, imageUrl, category, price, sizes) {

//         this.id = Id,
//             this.name = name,
//             this.decs = decs,
//             this.imageUrl = imageUrl,
//             this.category = category,
//             this.price = price,
//             this.sizes = sizes;
//     }

//     static add(product) {
//     }

//     static get(id){
//         const product = products.find((i)=> i.Id === id);
//         return product;

//     }
//     static GetAll() {
//         return products;
//     }
// }

// var products = [
//     new ProductModel(
//         1,
//         'product1',
//         'xyz',
//         'https1//',
//         'Category1',
//         121.00,
//         ['m', 's', 'xl']

//     ),
//     new ProductModel(
//         2,
//         'product2',
//         'xyz',
//         'https2//',
//         'Category2',
//         122.00,
//         ['m', 's']

//     ),
//     new ProductModel(
//         3,
//         'product3',
//         'xyz',
//         'https3//',
//         'Category3',
//         121.00,
//         ['m', 'xl']

//     ),

// ]

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