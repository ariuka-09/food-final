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
import { API_URI } from "@/lib/utils";
import axios from "axios";
import { useState } from "react";

export function AddFoodButton(props: { category: string }) {
  const { category } = props;
  const AddNewCategory = async (
    event: React.SyntheticEvent<HTMLFormElement>
  ) => {
    console.log("working");
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const foodName = formData.get("foodName");
    const foodPrice = formData.get("foodPrice");
    const ingredients = formData.get("ingredients");
    const image = formData.get("image");

    const data = await axios.post(`${API_URI}/food/create`, {
      foodName: foodName,
      foodPrice: foodPrice,
      ingredients: ingredients,
      category: category,
    });
    console.log("category data", data);
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
              <Label htmlFor="foodName">Food name</Label>
              <Input
                id="foodName"
                name="foodName"
                placeholder="Type food name..."
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="foodPrice">Food price </Label>
              <Input
                id="foodPrice"
                name="foodPrice"
                placeholder="Enter price..."
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="ingredients">Ingredients </Label>
              <Input
                id="ingredients"
                name="ingredients"
                placeholder="List ingredients"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="image">Food image </Label>
              <Input
                id="image"
                name="image"
                placeholder="Enter price..."
                type="file"
              />
            </div>
            <div className="flex justify-end">
              <DialogClose asChild>
                <Button className="w-[30%] " type="submit">
                  Add Dish
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
