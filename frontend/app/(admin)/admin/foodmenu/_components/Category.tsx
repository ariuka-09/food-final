import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { AddCategory } from "../_features/AddCategory";
import { CategoryCard } from "../_features/CategoryCard";

export function Category(props: {
  Categories: { categoryName: string; _id: string }[];
}) {
  const { Categories } = props;
  console.log("test", Categories);

  return (
    <div className="flex flex-col gap-4 p-6  bg-[#ffffff] rounded-[12px] mt-15">
      <h4 className="text-5 font-semibold">Dishes category</h4>
      <div className="flex gap-3 flex-wrap w-fit">
        {Categories.map((Category) => {
          return (
            <CategoryCard key={Category._id} Category={Category}/>
          );
        })}
        <AddCategory />
      </div>
    </div>
  );
}
