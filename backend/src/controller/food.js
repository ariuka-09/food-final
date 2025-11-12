import { Food } from "../models/foodSchema.js";

export const createFood = async (req, res) => {
  try {
    const { foodName, price, image, ingredients, category } = req.body;
    console.log("reqbody", foodName);
    const food = await Food.create({
      foodName: foodName,
      price: price,
      ingredients: ingredients,
      category:category,
    });
    res.status(201).send({ message: "food successfully created", data: food });
  } catch (error) {
    res.status(500).send({
      message: "there was a problem with creating the food",
      data: error,
    });
  }
};
export const getFood = async (req, res) => {
  try {
    const result = await Food.find().populate("category");
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};
export const updateFood = async (req, res) => {
  const { id } = await req.params;
  const { body } = req;
  console.log("id", body);

  try {
    await Food.findByIdAndUpdate(id, body);
    res.status(200).send({message:"updated successfully", data:body});

  } catch (error) {
    res.status(500).send({message:"wasnt updated", error:error});
  }
};
export const deleteFood = async (req, res) => {
  const { id } = await req.params;
  try {
    await Food.findByIdAndDelete(id);
    res.status(200).send("deleted successfully");
  } catch (error) {
    res.status(500).send("deletion failed");
  }
};
//6912991e4afa2029d145922b