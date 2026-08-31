import express from 'express';
import products from './data/product.js';
import { configDotenv } from 'dotenv';
import connectDB from './config/db.js';
import colors from 'colors';


configDotenv();
connectDB();
const app = express();

app.get('/', (req, res) => {
    res.send('hello world server started')
})

app.get('/api/products', (req, res) => {
    res.json(products)
})

app.get('/api/products/:id', (req, res) => {
    const product = products.find((prod) => prod.id == req.params.id);
    res.json(product);
})

const port = process.env.PORT  || 8000
app.listen(port, () => {
    console.log(`server started on port ${port} on ${process.env.MODE} mode..`.bgMagenta)
})