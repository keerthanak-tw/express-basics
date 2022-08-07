import express from 'express';
import products from './data/products.js';
import categories from './data/category.js';

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Express app listening on port ${port}`);
});

app.use(express.static('images'));

app.get('/', (req, res) => {
    return res.send('Hello World!');
});

app.get('/products', (req, res) => {
    return res.send(products);
});

app.get('/categories', (req, res) => {
    return res.send(categories);
});

app.get('/category/:categoryId', (req, res) => {
    try {
        const { categoryId } = req.params;
        if (!categories.some((category) => category.id === categoryId)) {
            return res.status(404).send({ message: 'Category not found' });
        }
        const productsOfCategory = products.filter((product) => product.categoryId === categoryId);
        return res.send(productsOfCategory);
    } catch (error) {
        return res.status(500).send({ message: 'Internal Server Error' });
    }
});