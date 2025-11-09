"use client";
import axios from "axios";
import { useState } from "react";
import { CreatePassword } from "./_components/CreatePassword";
import { EnterEmail } from "./_components/EnterEmail";
import { API_URI } from "@/lib/utils";

export default function CreateUserPage() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const [email, setEmail] = useState("");
  const signUp = async (password: string, email: string) => {
    console.log("current index", currentIndex);
    console.log("pass", password);

    try {
      const data = await axios.post(`${API_URI}/user/signUp`, {
        email: email,
        password: password,
      });
      console.log("data", data);

      window.location.replace("signin");
    } catch (error) {
      console.log("err0r", error);
    }
  };

  return (
    <div className="h-screen flex items-center gap-5 p-4">
      <div className="flex flex-col w-[40%] pl-25 gap-2 h-fit ">
        {currentIndex == 0 && (
          <EnterEmail
            setCurrentIndex={setCurrentIndex}
            setEmail={setEmail}
            currentIndex={currentIndex}
          />
        )}
        {currentIndex == 1 && (
          <CreatePassword
            signUp={signUp}
            email={email}
            setCurrentIndex={setCurrentIndex}
          />
        )}
      </div>
      <div className="w-[60%] h-full">
        <img
          src="/LogInPage.jpg"
          className="h-full object-cover rounded-[20px] "
          alt=""
        />
      </div>
    </div>
  );
}
