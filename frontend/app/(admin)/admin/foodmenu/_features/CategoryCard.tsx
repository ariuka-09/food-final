'use client'
import { Category } from "@/lib/types";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { axiosInstance } from "@/lib/utils";
import { useRouter } from "next/navigation";


export function CategoryCard (props:{Category:Category}){
    const router = useRouter()
    const {Category} = props;
    const deleteCategory = async ()=>{
        try {
        await axiosInstance.delete(`/category/${Category._id}`)
            console.log({message:`${Category.categoryName} was deleted`});
            router.refresh()
            
        } catch (error) {
            console.error({message:`${Category.categoryName} was NOT deleted`, error:error})
        }
    }
    return(
         <Dialog>
<DialogTrigger asChild>
<Button className="py-2 px-4 rounded-full border-2 border-[#E4E4E7] h-11 flex gap-2 items-center " >
        <p className="text-[14px] font-medium ">
        {Category.categoryName}
        </p>
        <div className="px-2.5 py-0.5 bg-black text-white rounded-full">
        {Category.foods &&  Category.foods.length}
        </div>
    </Button>
</DialogTrigger>
<DialogContent className="sm:max-w-[425px]">
    <DialogHeader>
    <DialogTitle>Delete Category</DialogTitle>
    <DialogDescription>
        This category will be deleted along with the foods that belong to it
    </DialogDescription>
    </DialogHeader>
    <DialogFooter>
    <DialogClose asChild>
        <Button variant="outline">Cancel</Button>
    </DialogClose>
    <DialogClose asChild>
        <Button onClick={deleteCategory}>Confirm Deletion</Button>
    </DialogClose>
    </DialogFooter>
</DialogContent>

</Dialog>
    )
}


//6910ad10cb0b4f62caee161c
//6910ad10cb0b4f62caee161c
{/* <Dialog>
<DialogTrigger asChild>
<Button className="py-2 px-4 rounded-full border-2 border-[#E4E4E7] h-11 flex gap-2 items-center " >
        <p className="text-[14px] font-medium ">
        {Category.categoryName}
        </p>
        <div className="px-2.5 py-0.5 bg-black text-white rounded-full">
        10
        </div>
    </Button>
</DialogTrigger>
<DialogContent className="sm:max-w-[425px]">
    <DialogHeader>
    <DialogTitle>Delete Category</DialogTitle>
    <DialogDescription>
        This category will be deleted along with the foods that belong to it
    </DialogDescription>
    </DialogHeader>
    <DialogFooter>
    <DialogClose asChild>
        <Button variant="outline">Cancel</Button>
    </DialogClose>
    <DialogClose asChild>
        <Button onClick={deleteCategory}>Confirm Deletion</Button>
    </DialogClose>
    </DialogFooter>
</DialogContent>

</Dialog> */}

{/* <DropdownMenu>
        <DropdownMenuTrigger asChild>
        <Button className="py-2 px-4 rounded-full border-2 border-[#E4E4E7] h-11 flex gap-2 items-center " >
        <p className="text-[14px] font-medium ">
        {Category.categoryName}
        </p>
        <div className="px-2.5 py-0.5 bg-black text-white rounded-full">
        10
        </div>
    </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="start">
      
  
          <DropdownMenuItem><Dialog>
<DialogTrigger asChild>
<p>Delete</p>
</DialogTrigger>
<DialogContent className="sm:max-w-[425px]">
    <DialogHeader>
    <DialogTitle>Delete Category</DialogTitle>
    <DialogDescription>
        This category will be deleted along with the foods that belong to it
    </DialogDescription>
    </DialogHeader>
    <DialogFooter>
    <DialogClose asChild>
        <Button variant="outline">Cancel</Button>
    </DialogClose>
    <DialogClose asChild>
        <Button onClick={deleteCategory}>Confirm Deletion</Button>
    </DialogClose>
    </DialogFooter>
</DialogContent>

</Dialog></DropdownMenuItem>
          <DropdownMenuItem>Edit</DropdownMenuItem>
   
        </DropdownMenuContent>
      </DropdownMenu> */}