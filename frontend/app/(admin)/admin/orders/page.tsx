"use client";
import { Food, FoodOrder } from "@/lib/types";
import { axiosInstance } from "@/lib/utils";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
export default function Orders() {
  const [orders, setOrders] = useState<FoodOrder[]>([]);
  useEffect(() => {
    getOrders();
  }, []);
  const getOrders = async () => {
    const orders = await axiosInstance.get("foodOrder");
    console.log("orders", orders.data);

    setOrders(orders.data);
  };
  return (
    <div>
      {orders &&
        orders.map((food) => {
          // const data = jwtDecode();
          return (
            <div className="flex">
              {food.user[0].email}
              <div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">Open</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    {food.foodOrderItems.map((item) => {
                      return (
                        <DropdownMenuItem>{item.foodName} </DropdownMenuItem>
                      );
                    })}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          );
        })}
    </div>
  );
}
