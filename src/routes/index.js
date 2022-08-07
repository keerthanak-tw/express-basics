import { Router } from 'express';
import products from './products.js';
import categories from './categories.js';
import category from './category.js';

const router = Router();

router.use('/products', products);
router.use('/categories', categories);
router.use('/category', category);

export default router;
