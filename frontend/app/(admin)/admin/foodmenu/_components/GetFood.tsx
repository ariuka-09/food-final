import { AddFood } from "../_features/AddFood";
import axios from "axios";
import { Food, FoodCategory } from "@/lib/types";
import { FoodcardForAdmin } from "../_features/FoodCardForAdmin";

export async function GetFood() {
  const foodCategories = await axios.get<FoodCategory[]>(
    "https://food-delivery-backend-roan-three.vercel.app/foodCategory"
  );

  const foods = await axios.get<Food[]>(
    "https://food-delivery-backend-roan-three.vercel.app/food"
  );
  console.log("foods", foods, "categories", foodCategories);

  return (
    <div className="bg-[#ffffff] rounded-[20px] p-5">
      <div className="flex flex-col gap-10">
        {foodCategories.data.map((categories) => {
          const { _id, categoryName } = categories;
          return (
            <div className="" key={_id}>
              <div className="text-black text-[20px] font-semibold">
                {categoryName}
              </div>
              <div className="flex flex-wrap gap-4">
                {foods.data.map((food) => {
                  const { foodName, category } = food;

                  if (_id == category) {
                    return <FoodcardForAdmin key={food._id} Food={food} />;
                  }
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
