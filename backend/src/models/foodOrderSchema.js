import mongoose, { Schema } from "mongoose";

const foodOrderSchema = new Schema(
  {
    // user: { type: String, required: true },
    user: [{ type: Schema.Types.ObjectId, ref: "user" }],
    totalPrice: { type: Number, required: true },
    foodOrderItems: { type: Array },
    status: {
      type: String,
      enum: ["PENDING", "CANCELED", "DELIVERED"],
      default: "PENDING",
    },
  },
  { timestamps: true }
);
export const FoodOrder = mongoose.model("foodOrder", foodOrderSchema);
