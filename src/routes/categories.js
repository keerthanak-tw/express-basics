import { Router } from 'express';
import { getCategories } from '../controller/categories.js';

const router = Router();

router.get('/', getCategories);

export default router;
