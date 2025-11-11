import { timeStamp } from "console";
import mongoose, { Schema } from "mongoose";

 const CategorySchema = new Schema({
    categoryName: {type: String, required: true}
}, {timestamps:true} )
export const Category = mongoose.model("Category", CategorySchema);

