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
import { Food } from "@/lib/types";
import { useEffect, useState } from "react";
import { AddToCart } from "./AddToCart";

export function AddFood(props: { Food: Food }) {
  const { foodName, ingredients, image, price } = props.Food;
  const [count, setCount] = useState(1);

  const handleDecrease = () => {
    setCount(count - 1);
  };
  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleStoring = () => {
    const storedFoods = localStorage.getItem("foods");
    const retrievedFoods = storedFoods ? JSON.parse(storedFoods) : [];
    for (let i = 0; i < count; i++) {
      retrievedFoods.push(props.Food);
    }
    const jsonFoods = JSON.stringify(retrievedFoods);
    localStorage.setItem("foods", jsonFoods);
  };
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <button
            onClick={() => {
              setCount(1);
            }}
            className="w-11 h-11 rounded-[50%] bg-white text-[#EF4444] z-1 absolute right-3 bottom-3 text-[16px]"
          >
            +
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div>
              <img src={image} alt="" />
            </div>
            <div>
              <div>
                <p>{foodName} </p>
                <p>{ingredients} </p>
              </div>
              <div>
                <div>
                  <p>Total price</p>
                  <p>{price * count} </p>
                </div>
                <div>
                  {count != 1 ? (
                    <button onClick={handleDecrease}>decrease</button>
                  ) : (
                    <button>decreasefake</button>
                  )}

                  <p>{count} </p>
                  <button onClick={handleIncrease}>increa se</button>
                </div>
              </div>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit" onClick={handleStoring}>
                Add to cart
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
