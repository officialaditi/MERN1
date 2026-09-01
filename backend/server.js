import express from 'express';
import products from './data/product.js';
import { configDotenv } from 'dotenv';
import connectDB from './config/db.js';
import colors from 'colors';
import productRoutes from './routes/productRoutes.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';


configDotenv();
connectDB();
const app = express();

app.get('/', (req, res) => {
    res.send('hello world server started')
})

app.use('/api/products', productRoutes);

app.use(notFound);
app.use(errorHandler)

const port = process.env.PORT  || 8000
app.listen(port, () => {
    console.log(`server started on port ${port} on ${process.env.MODE} mode..`.bgMagenta)
})

