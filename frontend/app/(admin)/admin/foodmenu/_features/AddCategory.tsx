"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { axiosInstance } from "@/lib/utils";
import { useRouter } from "next/navigation";

export function AddCategory() {
  const router = useRouter();
  const AddNewCategory = async (
    event: React.SyntheticEvent<HTMLFormElement>
  ) => {
    console.log("working");
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const categoryName = formData.get("categoryName");
    const data = await axiosInstance.post(`/category`, { categoryName });

    console.log("category data", data);
    router.refresh();
    // window.location.href = "";
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="w-11 h-11 rounded-[50%] bg-[#EF4444] text-[white] "
        >
          +
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add a new category</DialogTitle>
        </DialogHeader>
        <form onSubmit={AddNewCategory}>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Category name</Label>
              <Input
                id="name-1"
                name="categoryName"
                placeholder="Type category name..."
              />
            </div>
            <div className="flex justify-end">
              <DialogClose asChild>
                <Button className="w-[30%] " type="submit">
                  Add category
                </Button>
              </DialogClose>
            </div>
          </div>
        </form>

        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
