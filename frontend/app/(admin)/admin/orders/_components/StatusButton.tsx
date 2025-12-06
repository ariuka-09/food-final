"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronUp, ChevronDown } from "lucide-react";
import { axiosInstance } from "@/lib/utils";
import { FoodOrder } from "@/lib/types";

export const StatusButton = ({ order }: { order: FoodOrder }) => {
  const [currentStatus, setCurrentStatus] = useState(order.status);

  const statusHandler = async (id: string, status: string) => {
    setCurrentStatus(status); // Instant UI update
    await axiosInstance.patch(`foodOrder/update/${id}`, { status });
  };

  const getBorderColor = () => {
    switch (currentStatus) {
      case "PENDING":
        return "border-red-400 text-black";
      case "DELIVERED":
        return "border-green-400 text-green-700";
      case "CANCELLED":
        return "border-gray-400 text-gray-600";
      default:
        return "border-gray-300 text-gray-600";
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className={`rounded-full px-4 py-1 border ${getBorderColor()} 
                     flex items-center gap-2 min-w-[110px] justify-between`}
        >
          <span>{currentStatus}</span>

          {/* tiny up/down arrows exactly like your screenshot */}
          <span className="flex flex-col leading-none">
            <ChevronUp className="h-3 w-3" />
            <ChevronDown className="h-3 w-3 -mt-2" />
          </span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-32">
        {["DELIVERED", "PENDING", "CANCELLED"].map((status) => (
          <DropdownMenuItem
            key={status}
            onClick={() => statusHandler(order._id, status)}
            className="cursor-pointer"
          >
            {status}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
