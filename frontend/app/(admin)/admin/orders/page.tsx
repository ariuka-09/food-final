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

export default function Orders() {
  const [orders, setOrders] = useState<FoodOrder[]>([]);
  const [checkboxes, setCheckboxes] = useState({}) as any;

  useEffect(() => {
    getOrders();
  }, []);

  useEffect(() => {
    console.log("checkboxes", checkboxes);
  }, [checkboxes]);
  const getOrders = async () => {
    const res = await axiosInstance.get("foodOrder");
    setOrders(res.data);
  };

  const formatDate = (date: string) => date.split("T")[0].replace(/-/g, "/");

  return (
    <div className="space-y-2">
      {orders.length === 0 && (
        <div className="text-center text-sm text-muted-foreground py-6">
          No orders found.
        </div>
      )}

      <div>
        <Button disabled={checkboxes}>Change delivery state</Button>
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
                const objectOfBoxes = checkboxes;
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
