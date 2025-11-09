"use client";
import { Dispatch, SetStateAction, useState } from "react";

export function CreatePassword(props: {
  signUp: (password: string, email: string) => void;
  email: string;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
}) {
  const { signUp, email, setCurrentIndex } = props;
  const passFunction = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const confirm = formData.get("confirm");
    const password = formData.get("password")?.toString();

    try {
      if (confirm === password) {
        signUp(password, email);
        console.log("password created", password);
      }
    } catch (error) {
      console.log("err0r", error);
    }
  };

  return (
    <div>
      <button
        className="p-2.5 bg-white w-9 h-9 border rounded-[5] "
        onClick={() => {
          setCurrentIndex((prev) => prev - 1);
        }}
      >
        <img src="/back.svg" alt="" />{" "}
      </button>
      <div>
        {" "}
        <h3 className="text-[24px] font-semibold">Create a strong password</h3>
        <p className="text-#71717A font-4 font-normal">
          Create a strong password with letters, numbers.
        </p>
      </div>
      <form
        method="post"
        onSubmit={passFunction}
        className="flex flex-col gap-4"
      >
        {/* <input type="text" placeholder="Enter your email address"  className="border-2 h-9 rounded-md px-3" id="email" name="email"/> */}
        <input
          type="text"
          placeholder="Password"
          className="border-2 h-9 rounded-md px-3 "
          id="password"
          name="password"
        />
        <input
          type="text"
          placeholder="Confirm"
          className="border-2 h-9 rounded-md px-3 "
          id="confirm"
          name="confirm"
        />
        <button
          type="submit"
          className="bg-[#18181B] text-white border-2 h-9 rounded-md px-3 "
        >
          Let's Go
        </button>
      </form>
    </div>
  );
}
