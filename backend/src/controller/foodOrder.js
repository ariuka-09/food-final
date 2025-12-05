import { FoodOrder } from "../models/foodOrderSchema.js";

export const createFoodOrder = async (req, res) => {
  const { user, totalPrice, foodOrderItems } = req.body;
  try {
    const order = await FoodOrder.create({
      user: user,
      totalPrice: totalPrice,
      foodOrderItems: foodOrderItems,
    });
    res.status(200).send({
      message: "food order has been created successfully",
      data: order,
    });
  } catch (error) {
    res.status(500).send({
      message: "food order was NOT created",
      data: error,
    });
  }
};
export const getFoodOrder = async (req, res) => {
  try {
    const order = await FoodOrder.find().populate("user");

    res.status(200).send(order);
  } catch (error) {
    console.log("error", error);

    res
      .status(500)
      .send({ message: "problem getting food order", data: error });
  }
};
export const updateFoodOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await FoodOrder.findByIdAndUpdate(id, req.body);
    res.status(200).send({
      message: "food order has been updated successfully",
      data: order,
    });
  } catch (error) {
    res
      .status(500)
      .send({ message: "problem updating food order", data: error });
  }
};
export const deleteFoodOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await FoodOrder.findByIdAndDelete(id);
    console.log("working");

    res.status(200).send({
      message: "food order has been deleted successfully",
      data: order,
    });
  } catch (error) {
    console.log("err on deleting", error);

    res
      .status(500)
      .send({ message: "problem deleting food order", data: error });
  }
};
