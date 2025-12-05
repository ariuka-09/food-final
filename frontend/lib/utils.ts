import axios from "axios";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  // headers: {
  //   Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
  // },
});
export const API_URI = "https://food-final-backend.vercel.app";
