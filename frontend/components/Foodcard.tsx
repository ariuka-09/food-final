import { AddFood } from "@/_features/AddFood";
import { Food } from "@/lib/types";

export const Foodcard = (props: { Food: Food }) => {
  const { foodName, price, ingredients, image } = props.Food;
  return (
    <div className="p-4 w-[365px] h-[340px] bg-amber-50 rounded-[20px] border-black border-2">
      <div className="h-[60%] relative">
        <img
          src={`${image}`}
          className="h-full w-full object-cover rounded-[20px] "
          alt=""
        />
        <AddFood Food={props.Food} />
        {/* the adding logic will be done here  */}
      </div>
      <div>
        <div className="flex justify-between items-center ">
          <p className="text-[#ef4444] text-[24px] font-semibold">{foodName}</p>
          <p className="font-semibold text-[18px]">{price}</p>
        </div>
        <div>
          <p className="text[14px] font-normal">{ingredients}</p>
        </div>
      </div>
    </div>
  );
};
