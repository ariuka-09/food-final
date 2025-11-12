import { axiosInstance } from "@/lib/utils";
import { GetFood } from "./_components/GetFood";
import { Category } from "./_components";


export default async function AdminPage() {
  const Categories = await axiosInstance.get("/category");
  console.log("Categories", Categories);
  
  const CategoriesNames = Categories.data.map((Category)=>{return({categoryName:Category.categoryName, categoryId: Category._id})})
  console.log("category names", CategoriesNames);
  
  
  return (
    <div className="bg-[#F4F4F5] h-screen flex flex-col p-6 gap-6">
      <Category Categories={Categories.data} />
      <GetFood  Categories={Categories.data} CategoriesNamesAndId={CategoriesNames} />
    </div>
  );
}
