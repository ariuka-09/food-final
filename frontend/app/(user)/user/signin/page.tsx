"use client";
import { API_URI } from "@/lib/utils";
import axios from "axios";
import { Fullscreen } from "lucide-react";
import { useState } from "react";

export default function LogInPage() {
  const logIn = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const email = formData.get("email");
    const password = formData.get("password");
    // const email = data.get('email')
    try {
      const { data } = await axios.post(`${API_URI}/user/logIn`, {
        email: email,
        password: password,
      });
      const { token } = data;
      localStorage.setItem("token", token);
      window.location.href = "..";

      //   window.location.href="."
      // const response =  await axios.post("http://localhost:5000/user/logIn", {email:email, password:password})
      //     console.log("working", response)
      //local storage ruu hadagaldag logic nemeh
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="h-screen flex items-center gap-5 p-4">
      <div className="flex flex-col w-[40%] pl-25 gap-2 h-fit ">
        <button className="p-2.5 bg-white w-9 h-9 border rounded-[5] ">
          <img src="/back.svg" alt="" />{" "}
        </button>
        <div>
          <h3 className="text-[24px] font-semibold">Log in</h3>
          <p className="text-#71717A font-4 font-normal">
            Log in to enjoy your favorite dishes.
          </p>
        </div>
        {/* <form action=""></form>
                <div className="flex flex-col gap-2">
                    <input type="text" placeholder="Enter your email address" value={email} onChange={(e)=>{setEmail(e.target.value)}} className="border-2"/>
                    <input type="text" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} className="border-2"/>
                </div>
                <button className="bg-[#8e8eff]" onClick={create}>Let's Go</button> */}

        <form method="post" onSubmit={logIn} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter your email address"
            className="border-2 h-9 rounded-md px-3"
            id="email"
            name="email"
          />
          <input
            type="text"
            placeholder="Password"
            className="border-2 h-9 rounded-md px-3 "
            id="password"
            name="password"
          />
          <button
            type="submit"
            className="bg-[#18181B] text-white border-2 h-9 rounded-md px-3 "
          >
            Let's Go
          </button>
        </form>
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
