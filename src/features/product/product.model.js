export default class ProductModel {
    constructor(id, name, decs, imageUrl, category, price, sizes) {

        this.id = id,
            this.name = name,
            this.decs = decs,
            this.imageUrl = imageUrl,
            this.category = category,
            this.price = price,
            this.sizes = sizes;
    }

    static GetAll(){
        return products;
    }
}

var products = [
    new ProductModel(
        1,
        'product1',
        'xyz',
        'https1//',
        'Category1',
        121.00,
        ['m', 's', 'xl']

    ),
    new ProductModel(
        2,
        'product2',
        'xyz',
        'https2//',
        'Category2',
        122.00,
        ['m', 's']

    ),
    new ProductModel(
        3,
        'product3',
        'xyz',
        'https3//',
        'Category3',
        121.00,
        ['m',  'xl']

    ),

]