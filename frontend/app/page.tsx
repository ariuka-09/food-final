import { Foodcard, Navbar } from "@/components/";
import { Category, Food, } from "@/lib/types";
import { axiosInstance } from "@/lib/utils";

export default async function Home() {
  // const foodCategories = await fetch("http://localhost:5000/foodCategory");
  // const data = await foodCategories.json();
  // console.log(data);

  const categories = await axiosInstance.get<Category[]>(`/category`);

  const foods = await axiosInstance.get<Food[]>(`/food`);

  return (
    <div className="bg-[#404040]">
      <Navbar />
      <div className="flex flex-col gap-10">
        {categories.data.map((category) => {
          const { _id, categoryName, foods } = category;
          return (
            <div className="" key={_id}>
              <div className="text-white">{categoryName}</div>
              <div className="flex flex-wrap">
                {foods && foods.map((food) => {
                    return <Foodcard key={food._id} Food={food} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
