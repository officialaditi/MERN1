import express from 'express';
import products from './data/product.js';


const app = express();
const port = 3000;

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


app.listen(port, () => {
    console.log(`server started on port ${port}`)
})