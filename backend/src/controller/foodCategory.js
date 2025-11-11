import { response } from "express";
import { Category } from "../models/CategorySchema";

export const createFoodCategory = async (req, res) => {
  console.log(req.body);
  const { categoryName } = req.body;
  try {
    await Category.create({
      categoryName: categoryName,
    });
    res.status(200).send({ message: "food category successfully added" });
  } catch (error) {
    console.log("error creating food category");
    res.status(500).send({ message: "food wasnt added" });
  }
};
export const getFoodCategory = async (req, res) => {
  const { body } = req;
  console.log("CATEGORY REQ WORKS");

  try {
    // const result = await Category.find();
    
    const result = await Category.aggregate([
      {
        $lookup:
          /**
           * from: The target collection.
           * localField: The local join field.
           * foreignField: The target join field.
           * as: The name for the results.
           * pipeline: Optional pipeline to run on the foreign collection.
           * let: Optional variables to use in the pipeline field stages.
           */
          {
            from: "foods",
            localField: "_id",
            foreignField: "category",
            as: "foods",
          },
      },
      {
        $project:
          /**
           * specifications: The fields to
           *   include or exclude.
           */
          {
            categoryName: 0,
          },
      },
    ])
    res.send(result);
  } catch (error) {
    res.status(500).send("error getting food categories");
    console.log("request body", req.body);
  }
};
export const updateFoodCategory = async (req, res) => {
  const { body } = req;

  const { id } = req.params;
  try {
    console.log(body);
    await Category.findByIdAndUpdate(id, body);
    res.status(200).send("successfully updated");
  } catch (error) {
    res.status(500).send("there was an error with updating");
  }
};
export const deleteFoodCatergory = async (req, res) => {
  const { id } = req.params;
  try {
    await Category.findByIdAndDelete(id);
    res.status(200).send("deletion completed");
  } catch (error) {
    res.status(500).send(error, "error");
  }
};
export const getFoodCategoryById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Category.findById(id);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send("looking quite complicated");
  }
};
