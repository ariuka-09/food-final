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
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Food } from "@/lib/types";
import { FoodCardForOrderDetails } from "./FoodCardForOrderDetails";
import { ScrollArea } from "@/components/ui/scroll-area";
export function OrderDetail() {
  const foodsFromLocalStorage = JSON.parse(localStorage.getItem("foods"));

  const handleAddress = (event) => {
    localStorage.setItem("address", event.target.value);
  };
  return (
    <div>
      <Drawer>
        <DrawerTrigger asChild>
          <img src="/shopping-cart.svg" alt="" />
        </DrawerTrigger>
        <DrawerContent className="w-[30%] px-8">
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>

          <ScrollArea className="h-100 w-full rounded-md border p-4">
            <div>
              <p>My Cart</p>
              <div className="flex flex-col gap-5">
                {foodsFromLocalStorage.map((food: Food) => {
                  return <FoodCardForOrderDetails food={food} />;
                })}
              </div>
            </div>
          </ScrollArea>
          <div>
            <form action="">
              <Label htmlFor="address">Add your address</Label>
              <Input
                id="address"
                onChange={handleAddress}
                value={localStorage.getItem("address")}
              ></Input>
            </form>
          </div>
          <DrawerFooter>
            <DrawerClose>
              <Button variant="destructive" className="w-full">
                Checkout
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
