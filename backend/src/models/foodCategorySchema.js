import { timeStamp } from "console";
import mongoose, { Schema } from "mongoose";

 const FoodCategorySchema = new Schema({
    categoryName: {type: String, required: true}
}, {timestamps:true} )
export const FoodCategory = mongoose.model("Category", FoodCategorySchema);

