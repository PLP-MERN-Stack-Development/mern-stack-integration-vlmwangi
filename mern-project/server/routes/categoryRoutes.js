import express from "express";
const router = express.Router();

import { 
  getCategories, 
  createCategory 
} from '../controllers/categoryController.js';

import { validateCategory } from '../validation/categoryValidation.js';

router.get('/', getCategories);
router.post('/', validateCategory, createCategory);

export default router;
