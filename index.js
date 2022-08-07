import express from 'express';
import products from './data/products.js';
import categories from './data/category.js';
import reviews from './data/reviews.js';

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Express app listening on port ${port}`);
});

app.use(express.static('images'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/products', (req, res) => {
    res.send(products);
});

app.get('/categories', (req, res) => {
    res.send(categories);
});

app.get('/category/:categoryId', (req, res) => {
    const { categoryId } = req.params;
    const productsOfCategory = products.filter((product) => product.categoryId === categoryId);
    res.send(productsOfCategory);
});