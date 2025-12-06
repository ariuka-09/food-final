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
import { StatusButton } from "./_components/StatusButton";
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

  const statusHandler = async (id: string, status: string) => {
    await axiosInstance.patch(`foodOrder/update/${id}`, { status });
  };

  return (
    <div>
      {orders &&
        orders.map((order) => {
          // const data = jwtDecode();
          return (
            <div className="flex">
              {order.user[0].email}
              <div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">Open</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    {order.foodOrderItems.map((food) => {
                      return (
                        <DropdownMenuItem>{food.foodName} </DropdownMenuItem>
                      );
                    })}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              {order.createdAt.split("T")[0].replace(/-/g, "/")}
              {order.totalPrice}
              {order.user[0].address}
              <StatusButton order={order} />
            </div>
          );
        })}
    </div>
  );
}
