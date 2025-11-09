import { response } from "express";
import { FoodCategory } from "../models/foodCategorySchema.js";

export const createFoodCategory = async (req, res) =>{
    console.log(req.body);
    const {body} = req;
    try {
        await FoodCategory.create(
            {
                categoryName: body.categoryName,
            }
        )
        res.status(200).send({message: "food category successfully added"})
    } catch (error) {
        console.log("error creating food category");
        res.status(500).send({message:"food wasnt added"})
    }
}   
export const getFoodCategory = async (req, res) =>{
    
    const {body} = req;
    console.log("CATEGORY REQ WORKS");
    
    try {
        const result = await FoodCategory.find();
        res.send(result)
    } catch (error) {
        res.status(500).send("error getting food categories")
        console.log("request body", req.body);
        
    }
}   
export const updateFoodCategory = async (req, res) => {
    const {body} = req;

    const {id} = req.params;
    try {
        console.log(body)
        await FoodCategory.findByIdAndUpdate(id, body)
        res.status(200).send("successfully updated")
        
    } catch (error) {
        res.status(500).send("there was an error with updating")
    }
}
export const deleteFoodCatergory = async (req, res) =>{
    const {id} = req.params;
    try {
        await FoodCategory.findByIdAndDelete(id)
        res.status(200).send("deletion completed")
    } catch (error) {
        res.status(500).send(error, "error")
    }
}
export const getFoodCategoryById = async (req, res) =>{
    const {id} = req.params;
    try {
        const result = await FoodCategory.findById(id);
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send("looking quite complicated")
    }
}