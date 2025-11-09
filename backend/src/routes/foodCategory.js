import { Router } from "express";
import { createFoodCategory, deleteFoodCatergory, getFoodCategory, getFoodCategoryById, updateFoodCategory } from "../controller/foodCategory.js";

export const foodCategoryRouter = Router();
foodCategoryRouter
.post('/', createFoodCategory)
.get('/', getFoodCategory)
.patch('/:id', updateFoodCategory )
.delete('/:id', deleteFoodCatergory)
.get('/:id', getFoodCategoryById)