import express from 'express';
import productRoutes from './src/features/product/product.routes.js';
import userRoutes from './src/features/user/user.routes.js';
const app = express();

app.use(express.json());
app.use("/api/product", productRoutes);
app.use("/api/user", userRoutes)

app.use('/', (req, res) => {
  res.send("Welcome to the ecommerce api");
}) 

app.listen(2000, () => {
  console.log("Server fetching on a port 2000")
})
