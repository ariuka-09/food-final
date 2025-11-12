import { Category } from "@/lib/types";
import { AddFoodButton } from "./AddFoodButton";

export function AddFood(props: { Category: Category }) {
  const { Category } = props;

  return (
    <div className="w-[239px] h-[209px] border border-dashed border-[#EF4444] rounded-[20px] flex flex-col justify-center items-center gap-6 ">
      <AddFoodButton category={Category._id} />
      <div className="flex flex-col justify-center items-center">
        <p>Add new Dish to </p>
        <p>{Category.categoryName}</p>
      </div>
    </div>
  );
}
