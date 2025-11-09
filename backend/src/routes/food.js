import { Router } from "express";
import { createFood, deleteFood, getFood, updateFood } from "../controller/food.js";

export const foodRouter = Router();
foodRouter
.post('/create', createFood)
.get('/', getFood)
.patch('/update/:id', updateFood)
.delete('/delete/:id', deleteFood)