import { Router } from "express";
import {
  createFoodOrder,
  deleteFoodOrder,
  getFoodOrder,
  updateFoodOrder,
} from "../controller/foodOrder.js";

export const foodOrderRouter = Router();
foodOrderRouter
  .post("/", createFoodOrder)
  .patch("/update/:id", updateFoodOrder)
  .delete("/delete/:id", deleteFoodOrder)
  .get("/", getFoodOrder);
