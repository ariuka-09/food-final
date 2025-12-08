"use client";

import { FoodOrder } from "@/lib/types";
import { axiosInstance } from "@/lib/utils";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { StatusButton } from "./_components/StatusButton";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogFooter, DialogHeader } from "@/components/ui/dialog";

export default function Orders() {
  const [orders, setOrders] = useState<FoodOrder[]>([]);
  const [checkboxes, setCheckboxes] = useState({}) as any;
  const [length, setLength] = useState<number>(0);
  const [state, setState] = useState("");

  useEffect(() => {
    getOrders();
  }, []);

  useEffect(() => {
    console.log("checkboxes", checkboxes);
    setLength(Object.keys(checkboxes).length);
  }, [checkboxes]);
  const getOrders = async () => {
    const res = await axiosInstance.get("foodOrder");
    setOrders(res.data);
  };

  const formatDate = (date: string) => date.split("T")[0].replace(/-/g, "/");

  const handleBatchPatch = async () => {
    const idsOfOrders = Object.keys(checkboxes);
    try {
      const response = await axiosInstance.patch("/foodOrder/update/notAnId", {
        status: state,
        ids: idsOfOrders,
      });
      console.log("Patch response:", response.data);
      await getOrders();
      setCheckboxes({});
      setState("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      {orders.length === 0 && (
        <div className="text-center text-sm text-muted-foreground py-6">
          No orders found.
        </div>
      )}
      <div>
        <div>
          <Dialog>
            <DialogTrigger asChild>
              <Button disabled={length == 0}>Change delivery state</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[340px] p-6">
              <DialogHeader className="text-center">
                <DialogTitle className="text-base font-semibold">
                  Change delivery state
                </DialogTitle>
              </DialogHeader>

              {/* Status buttons */}
              <div className="flex justify-center gap-2 mt-4">
                {/* Delivered */}
                <Button
                  variant="outline"
                  onClick={() => setState("DELIVERED")}
                  className={`rounded-full px-4 ${
                    state === "DELIVERED"
                      ? "border-green-400 text-green-700"
                      : "border-gray-300 text-gray-600"
                  }`}
                >
                  Delivered
                </Button>

                {/* Pending */}
                <Button
                  variant="outline"
                  onClick={() => setState("PENDING")}
                  className={`rounded-full px-4 ${
                    state === "PENDING"
                      ? "border-red-400 text-red-400"
                      : "border-gray-300 text-gray-600"
                  }`}
                >
                  Pending
                </Button>

                {/* Cancelled */}
                <Button
                  variant="outline"
                  onClick={() => setState("CANCELLED")}
                  className={`rounded-full px-4 ${
                    state === "CANCELLED"
                      ? "border-gray-400 text-gray-600"
                      : "border-gray-300 text-gray-600"
                  }`}
                >
                  Cancelled
                </Button>
              </div>

              {/* Save button */}
              <DialogFooter className="mt-6">
                <DialogClose>
                  <Button
                    onClick={handleBatchPatch}
                    className="w-full rounded-full bg-black text-white hover:bg-black/90"
                  >
                    Save
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      {orders.map((order, index) => {
        const user = order.user?.[0];
        const id = order._id;
        return (
          <div
            key={order._id}
            className={`flex items-center py-3 px-4 rounded-md ${
              index % 2 === 0 ? "bg-[#F9F9F9]" : "bg-white"
            }`}
          >
            <Checkbox
              onClick={() => {
                setCheckboxes((prev: any) => {
                  if (!prev[id]) {
                    prev[id] = true;
                  } else {
                    delete prev[id];
                  }
                  console.log("check", checkboxes);
                  return prev;
                });
                const objectOfBoxes = { ...checkboxes };
                setCheckboxes(objectOfBoxes);
              }}
              checked={checkboxes.id}
            ></Checkbox>
            {/* Email */}
            <div className="w-56 text-sm">{user?.email}</div>
            {/* Food count dropdown */}
            <div className="w-28">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-sm">
                  {order.foodOrderItems.length} foods
                  <ChevronDown size={14} />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48">
                  {order.foodOrderItems.map((item, i) => (
                    <DropdownMenuItem key={i}>{item.foodName}</DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Date */}
            <div className="w-32 text-sm">{formatDate(order.createdAt)}</div>

            {/* Price */}
            <div className="w-24 text-sm font-medium">{order.totalPrice}₮</div>

            {/* Address */}
            <div className="w-60 truncate text-sm">
              {user?.address || "No address"}
            </div>

            {/* Status button */}
            <div className="ml-auto">
              <StatusButton order={order} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
