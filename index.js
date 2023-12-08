import express from 'express';
import ProductRouter from './src/features/product/product.routes.js'

const app = express();

app.use("/api/products", ProductRouter)

app.get("/", (req, res) => {
    res.send('welcome to Ecommerce project');
})

app.listen(2000, () => {
    console.log('server are listening on a port 2000')
}) 