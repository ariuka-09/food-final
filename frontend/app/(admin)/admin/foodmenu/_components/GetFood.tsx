import { AddFood } from "../_features/AddFood";
import { Food, Category } from "@/lib/types";
import { FoodcardForAdmin } from "../_features/FoodCardForAdmin";
import { axiosInstance } from "@/lib/utils";

export async function GetFood() {
  const categories = await axiosInstance.get<Category[]>(
    `/category`
  )

  // const foods = await axiosInstance.get<Food[]>(`/food`);
  // console.log("foods", foods, "categories", foodCategories);

  return (
    <div className="bg-[#ffffff] rounded-[20px] p-5">
      <div className="flex flex-col gap-10">
        {categories.data.map((category) => {
          const { _id, categoryName, foods } = category;
          return (
            <div className="" key={_id}>
              <div className="text-black text-[20px] font-semibold">
                {categoryName}
              </div>
              <div className="flex flex-wrap gap-4">
                <AddFood category={category} />
                {foods && foods.map((food) => {
                  return <FoodcardForAdmin key={food._id}  Food={food} categories={categories}/>;
                  // if (_id == category._id) {
                  //   return <FoodcardForAdmin key={food._id} Food={food} />;
                  // }
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
