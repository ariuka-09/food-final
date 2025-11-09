export const Navbar = () => {
  return (
    <div className="bg-[#18181B] px-22 py-3 flex justify-between">
      <div className="flex gap-3">
        <img src="/logo.svg" alt="" />
        <div>
          <div className="flex">
            <p className="text-white">Nom</p>
            <p className="text-[#EF4444]">Nom</p>
          </div>
          <p className="text-3 font-weight-normal text-white">Swift delivery</p>
        </div>
      </div>
      <div className="flex h-fit gap-[12.81px]">
        <input type="location" className="" />
        <button className="bg-[#F4F4F5] p-2 rounded-[50%]">
          <img src="/shopping-cart.svg" alt="" />
        </button>
        <button className="bg-[#ef4444] p-2 rounded-[50%]">
          <img src="/user.svg" alt="" />
        </button>
      </div>
    </div>
  );
};
