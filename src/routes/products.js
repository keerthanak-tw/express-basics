import { Router } from 'express';
import products from '../data/products.js';

const router = Router();

router.get('/', (req, res) => {
    return res.send(products);
});

export default router;
