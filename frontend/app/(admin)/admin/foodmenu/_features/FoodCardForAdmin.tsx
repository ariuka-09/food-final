import { Category, Food } from "@/lib/types";
import { Edit } from "./Edit";

export const FoodcardForAdmin = (props: { Food: Food; Categories:Category[], CurrentCategory:string, CategoriesNames:string[] }) => {
  const { foodName, price, ingredients, image, _id } = props.Food;
  const { Categories, Food, CategoriesNames, CurrentCategory} = props
  return (
    <div className="p-4 w-[239px] h-[209px] bg-white rounded-[20px] border-[#E4E4E7] border">
      <div className="h-[60%] relative">
        <img
          src={`${image}`}
          className="h-full w-full object-cover rounded-[20px] "
          alt=""
        />
        <button className="absolute right-2 bottom-2">
          <Edit Food={Food} Categories={Categories} CategoriesNames={CategoriesNames} CurrentCategory={CurrentCategory} />
        </button>
        {/* the adding logic will be done here  */}
      </div>
      <div>
        <div className="flex justify-between items-center ">
          <p className="text-[#ef4444] text-[14px] font-medium">{foodName}</p>
          <p className="font-normal text-[12px]">{price}</p>
        </div>
        <div>
          <p className="font-normal text-[12px]">{ingredients}</p>
        </div>
      </div>
    </div>
  );
};
