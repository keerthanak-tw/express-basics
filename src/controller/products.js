import products from '../data/products.js';

export const getProducts = (req, res) => {
    return res.send(products);
};