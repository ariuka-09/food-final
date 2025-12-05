"use client";
import { Button } from "@/components/ui/button";
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
import { jwtDecode } from "jwt-decode";
import { axiosInstance } from "@/lib/utils";
import { useEffect, useState } from "react";
export function OrderDetail(props: {
  address: string;
  setAddress: React.Dispatch<React.SetStateAction<string>>;
}) {
  const { address, setAddress } = props;

  // const [address, setAddress] = useState("");
  useEffect(() => {
    const stored = localStorage.getItem("address");
    console.log(stored);

    if (stored) {
      setAddress(stored);
    }
  }, []);
  const foodsFromLocalStorage = JSON.parse(
    localStorage.getItem("foods") || "[]"
  );
  const addOrder = async () => {
    const foods = JSON.parse(localStorage.getItem("foods") as string);
    let totalPrice = 0;
    if (foods) {
      for (let i = 0; i < foods.length; i++) {
        totalPrice += foods[i].price;
      }
    }
    const token = localStorage.getItem("token") as string;
    const user = jwtDecode(token);
    console.log("user", user);
    const userId = user._id;
    axiosInstance.post(`/foodOrder`, {
      user: userId,
      totalPrice,
      foodOrderItems: foods,
    });
    console.log("foods", localStorage.getItem("foods"));
    localStorage.setItem("foods", "[]");
    window.location.reload();
  };

  const handleAddress = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    localStorage.setItem("address", value);
    setAddress(value);
  };
  // const addAddress = async () => {
  //   const token = localStorage.getItem("token") as any;
  //   const decodedToken = jwtDecode(token) as any;
  //   console.log("token", decodedToken._id);
  //   try {
  //     const user = await axiosInstance.patch(`/user/${decodedToken._id}`, {
  //       address: address,
  //     });
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // };
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
                value={address}
              ></Input>
            </form>
          </div>
          <DrawerFooter>
            <DrawerClose>
              <Button
                variant="destructive"
                className="w-full"
                onClick={addOrder}
              >
                Checkout
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
