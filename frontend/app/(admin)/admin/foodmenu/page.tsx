import { axiosInstance } from "@/lib/utils";
import { Category } from "./_components/Category";
import { GetFood } from "./_components/GetFood";

export default async function AdminPage() {
  const Categories = await axiosInstance.get("/category");

  return (
    <div className="bg-[#F4F4F5] h-screen flex flex-col p-6 gap-6">
      <Category Categories={Categories.data} />
      <GetFood />
    </div>
  );
}
