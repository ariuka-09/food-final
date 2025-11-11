"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { EditIcon } from "../_icons/EditIcon";
import { axiosInstance } from "@/lib/utils";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Category } from "@/lib/types";

export function Edit(props: { Food:  {foodName:string, price:number, ingredients:string, image:string, _id:string, category:string} }) {
  const router = useRouter()
  const { foodName, price, ingredients, image, _id, category, } = props.Food;
  console.log("populated category", category);

  
  const handleFoodEdit = async (
    event: React.SyntheticEvent<HTMLFormElement>
  ) => {
    event.preventDefault()
    
    const formData = new FormData(event.currentTarget);
    const foodName = formData.get("foodName");
    const price = formData.get("price");
    const ingredients = formData.get("ingredients");
    const category = formData.get("category");

    try {
      await axiosInstance.patch(`/food/update/${_id}`, {
        foodName,
        price,
        ingredients,
        category,
      });
      console.log("food edited successfully");
      router.refresh()
    } catch (error) {
      console.log("food wasnt edited", error);
    }

  };

  const handleFoodDelete = async (id:string)  =>{
    try {
      await axiosInstance.delete(`/food/delete/${id}`);
      console.log("successfully deleted food");
      router.refresh()
    } catch (error) {
      console.log("food wasnt deleted", error);
      
    }
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div>
          <EditIcon />
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleFoodEdit}>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="foodName">Dish name</Label>
              <Input id="foodName" name="foodName" defaultValue={foodName} />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="price">Price</Label>
              <Input id="price" name="price" defaultValue={price} />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="name-1">Ingredients</Label>
              <Input
                id="name-1"
                name="ingredients"
                defaultValue={ingredients}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="category">Dish category</Label>
              <Input id="category" name="category" defaultValue={category} />
                <Select >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue  defaultValue="main"  />
                  </SelectTrigger>
                  <SelectContent>
                    {/* {categories.map((category)=>{
                      return(<SelectItem value='axa' >Light</SelectItem>)
                    })} */}
                    {/* <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem> */}
                  </SelectContent>
                </Select>
              <p>dropdown</p>
            </div>

            <div className="grid gap-3">
              <Label htmlFor="name-1">Name</Label>
              <Input
                id="name-1"
                name="name"
                defaultValue={image}
                type="image"
              />
            </div>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button type="submit">Save changes</Button>
            </DialogClose>
          </div>
        </form>
          <DialogClose asChild>
            <Button variant="destructive" onClick={()=>{handleFoodDelete(_id)}}>Delete Food</Button>
          </DialogClose>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
