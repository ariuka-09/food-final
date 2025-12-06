"use client";
import { Button } from "@/components/ui/button";
import { FoodOrder } from "@/lib/types";
import { axiosInstance } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { useState } from "react";

export const StatusButton = (props: { order: FoodOrder }) => {
  const [currentStatus, setCurrentStatus] = useState("PENDING");
  const { order } = props;

  const statusHandler = async (id: string, status: string) => {
    await axiosInstance.patch(`foodOrder/update/${id}`, { status });
    setCurrentStatus(status);
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>{currentStatus} </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem
          onClick={() => {
            statusHandler(order._id, "PENDING");
          }}
        >
          PENDING
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            statusHandler(order._id, "CANCELLED");
          }}
        >
          CANCELLED
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            statusHandler(order._id, "DELIVERED");
          }}
        >
          DELIVERED
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
