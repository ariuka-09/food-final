"use client";

export function EnterEmail(props: {
  setCurrentIndex: (index: number) => void;
  setEmail: (email: string) => void;
  currentIndex: number;
}) {
  const { setEmail, setCurrentIndex, currentIndex } = props;
  console.log("currentIndex", currentIndex);

  const emailFunction = async (
    event: React.SyntheticEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email")?.toString();
    console.log("email", email);

    if (email) {
      setEmail(email);
    }
    setCurrentIndex(1);
  };
  return (
    <div>
      <div>
        {" "}
        <h3 className="text-[24px] font-semibold">Create your account</h3>
        <p className="text-#71717A font-4 font-normal">
          Sign up to explore your favorite foods
        </p>
      </div>
      <form
        method="post"
        onSubmit={emailFunction}
        className="flex flex-col gap-4"
      >
        <input
          type="text"
          placeholder="Enter your email address"
          className="border-2 h-9 rounded-md px-3"
          id="email"
          name="email"
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
