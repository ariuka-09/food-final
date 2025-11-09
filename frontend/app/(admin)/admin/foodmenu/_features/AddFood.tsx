import { FoodCategory } from "@/lib/types";
import { AddFoodButton } from "./AddFoodButton";

export function AddFood(props: { categories: FoodCategory }) {
  const { categories } = props;

  return (
    <div className="w-[239px] h-[209px] border border-dashed border-[#EF4444] rounded-[20px] flex flex-col justify-center items-center gap-6 ">
      <AddFoodButton category={categories._id} />
      <div className="flex flex-col justify-center items-center">
        <p>Add new Dish to </p>
        <p>{categories.categoryName}</p>
      </div>
    </div>
  );
}
