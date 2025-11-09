import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    phoneNumber: { type: String },
    address: { type: String },
    role: { type: String, enum: ["admin", "user"], default: "user" },
    orderedFoods: [{ type: String }],
    ttl: { type: Date },
    isVerified: { type: Boolean },
  },
  { timestamps: true }
);
export const User = mongoose.model("user", UserSchema);
