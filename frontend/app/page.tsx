import { Foodcard, Navbar } from "@/components/";
import { Food, FoodCategory } from "@/lib/types";
import axios from "axios";
import Image from "next/image";

export default async function Home() {
  // const foodCategories = await fetch("http://localhost:5000/foodCategory");
  // const data = await foodCategories.json();
  // console.log(data);

  const foodCategories = await axios.get<FoodCategory[]>(
    "https://food-delivery-backend-roan-three.vercel.app/foodCategory"
  );

  const foods = await axios.get<Food[]>(
    "https://food-delivery-backend-roan-three.vercel.app/food"
  );

  return (
    <div className="bg-[#404040]">
      <Navbar />
      <div className="flex flex-col gap-10">
        {foodCategories.data.map((categories) => {
          const { _id, categoryName } = categories;
          return (
            <div className="" key={_id}>
              <div className="text-white">{categoryName}</div>
              <div className="flex flex-wrap">
                {foods.data.map((food) => {
                  const { foodName, category } = food;

                  if (_id == category) {
                    return <Foodcard key={food._id} Food={food} />;
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
