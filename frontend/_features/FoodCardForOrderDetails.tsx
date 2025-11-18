import { Food } from "@/lib/types";

export function FoodCardForOrderDetails(props: { food: Food }) {
  const { food } = props;
  return (
    <div className="flex gap-2.5 w-full">
      <div className="w-30 h-30 bg-[violet] ">{food.image}</div>
      <div className="w-full">
        <div className="flex gap-2.5">
          <div>
            <p className="text-[16px] text-[#EF4444] font-bold ">
              {food.foodName}
            </p>
            <p className="text-[12px]  font-normal ">{food.ingredients} </p>
          </div>
          <button>exit</button>
        </div>
        <div className="flex justify-between">
          <button>inc dec logic</button>
          <p>{food.price} </p>
        </div>
      </div>
    </div>
  );
}
