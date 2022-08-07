import { Router } from 'express';
import categories from '../data/category.js';

const router = Router();

router.get('/', (req, res) => {
    return res.send(categories);
});

export default router;
