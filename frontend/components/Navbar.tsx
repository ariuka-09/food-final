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
import { axiosInstance } from "@/lib/utils";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";

export const Navbar = () => {
  const [address, setAddress] = useState("");
  const addAddress = async () => {
    const token = localStorage.getItem("token") as any;
    const decodedToken = jwtDecode(token) as any;
    console.log("token", decodedToken._id);
    try {
      const user = await axiosInstance.patch(`/user/${decodedToken._id}`, {
        address: address,
      });
    } catch (error) {
      console.log("error", error);
    }
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
            <div className="flex flex-col  gap-2">
              <div className="flex flex-col gap-3 w-full">
                <Label htmlFor="link" className="sr-only">
                  Link
                </Label>
                <Input
                  id="link"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                    console.log(address);
                  }}
                />
              </div>
              <div className="flex gap-4 w-full justify-end">
                <DialogClose asChild>
                  <Button className="w-fit">Close</Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button
                    onClick={addAddress}
                    variant="outline"
                    className="w-fit"
                  >
                    Add address
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
