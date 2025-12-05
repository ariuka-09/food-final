"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function SideBar() {
  const [page, setPage] = useState("./foodmenu");
  const router = useRouter();

  // useEffect(() => {
  //   router.push(`${page}`);
  // }, [page]);

  return (
    <div className="px-5 pt-9 w-[205px] ">
      <div className="flex gap-3 w-[165px]">
        <img src="/logo.svg" alt="" className="w-10 h-10" />
        <div>
          <div className="flex">
            <p className="text-black text-[18px] ">NomNom</p>
          </div>
          <p className="text-3 font-weight-normal text-[#71717A] ">
            Swift delivery
          </p>
        </div>
      </div>
      {page == "./foodmenu" ? (
        <div>
          <Button
            onClick={() => {
              setPage("./foodmenu");
            }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.25 2.75H3.66667C3.16041 2.75 2.75 3.16041 2.75 3.66667V10.0833C2.75 10.5896 3.16041 11 3.66667 11H8.25C8.75626 11 9.16667 10.5896 9.16667 10.0833V3.66667C9.16667 3.16041 8.75626 2.75 8.25 2.75Z"
                stroke="#09090B"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.3333 2.75H13.75C13.2437 2.75 12.8333 3.16041 12.8333 3.66667V6.41667C12.8333 6.92293 13.2437 7.33333 13.75 7.33333H18.3333C18.8396 7.33333 19.25 6.92293 19.25 6.41667V3.66667C19.25 3.16041 18.8396 2.75 18.3333 2.75Z"
                stroke="#09090B"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.3333 11H13.75C13.2437 11 12.8333 11.4104 12.8333 11.9167V18.3333C12.8333 18.8396 13.2437 19.25 13.75 19.25H18.3333C18.8396 19.25 19.25 18.8396 19.25 18.3333V11.9167C19.25 11.4104 18.8396 11 18.3333 11Z"
                stroke="#09090B"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.25 14.6667H3.66667C3.16041 14.6667 2.75 15.0771 2.75 15.5833V18.3333C2.75 18.8396 3.16041 19.25 3.66667 19.25H8.25C8.75626 19.25 9.16667 18.8396 9.16667 18.3333V15.5833C9.16667 15.0771 8.75626 14.6667 8.25 14.6667Z"
                stroke="#09090B"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Food menu
          </Button>
          <Button
            onClick={() => {
              setPage("./orders");
            }}
            variant="ghost"
          >
            <svg
              width="20"
              height="15"
              viewBox="0 0 20 15"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.83333 11.5H11.5M11.5 11.5V0.5H0.5V11.5H3.25M11.5 11.5H12.4167M17 11.5H18.8333V8.43833C18.8337 7.95668 18.7392 7.47967 18.5552 7.03455C18.3711 6.58944 18.1012 6.18494 17.7608 5.84417L16.0833 4.16667H11.5M7.83333 11.9583C7.83333 13.224 6.80732 14.25 5.54167 14.25C4.27601 14.25 3.25 13.224 3.25 11.9583C3.25 10.6927 4.27601 9.66667 5.54167 9.66667C6.80732 9.66667 7.83333 10.6927 7.83333 11.9583ZM17 11.9583C17 13.224 15.974 14.25 14.7083 14.25C13.4427 14.25 12.4167 13.224 12.4167 11.9583C12.4167 10.6927 13.4427 9.66667 14.7083 9.66667C15.974 9.66667 17 10.6927 17 11.9583Z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Orders
          </Button>
        </div>
      ) : (
        <div>
          <Button
            onClick={() => {
              setPage("./foodmenu");
            }}
            variant="ghost"
          >
            <img src="/menu.svg" alt="" /> Food menu
          </Button>
          <Button
            onClick={() => {
              setPage("./orders");
            }}
          >
            <img src="/truck.svg" alt="" /> Orders
          </Button>
        </div>
      )}
    </div>
  );
}
