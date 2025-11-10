import mongoose, { Schema } from "mongoose";

const foodSchema = new Schema(
  {
    foodName: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String },
    ingredients: { type: String, required: true },
    category: { type: String, required:true },
  },
  { timestamps: true }
);
export const Food = mongoose.model("food", foodSchema);
