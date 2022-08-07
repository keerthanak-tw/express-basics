import { Router } from 'express';
import { getByCategoryId } from '../controller/category.js';

const router = Router();

router.get('/:categoryId', getByCategoryId);

export default router;
