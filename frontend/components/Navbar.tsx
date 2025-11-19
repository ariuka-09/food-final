"use client";
import { OrderDetail } from "@/_features/OrderDetail";
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
import { useState } from "react";

export const Navbar = () => {
  const [address, setAddress] = useState("");
  const addAddress = () => {
    const token = localStorage.getItem("token");
  };
  return (
    <div className="bg-[#18181B] px-22 py-3 flex justify-between">
      <div className="flex gap-3">
        <img src="/logo.svg" alt="" />
        <div>
          <div className="flex">
            <p className="text-white">Nom</p>
            <p className="text-[#EF4444]">Nom</p>
          </div>
          <p className="text-3 font-weight-normal text-white">Swift delivery</p>
        </div>
      </div>
      <div className="flex h-fit gap-[12.81px]">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="text-[12px] font-normal ">
              <span className="text-[#EF4444] ">Delivery address:</span> Add
              Location
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Please write your delivery address!</DialogTitle>
            </DialogHeader>
            <div className="flex items-center gap-2">
              <div className="flex flex-col gap-3 w-full">
                <Label htmlFor="link" className="sr-only">
                  Link
                </Label>
                <Input
                  id="link"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
                <DialogClose asChild>
                  <Button onClick={addAddress} className="w-fit">
                    Close
                  </Button>
                </DialogClose>
              </div>
            </div>
            <DialogFooter className="sm:justify-start"></DialogFooter>
          </DialogContent>
        </Dialog>
        <button className="bg-[#F4F4F5] p-2 rounded-[50%]">
          <OrderDetail />
        </button>
        <button className="bg-[#ef4444] p-2 rounded-[50%]">
          <img src="/user.svg" alt="" />
        </button>
      </div>
    </div>
  );
};
