import React from "react";

const PriceFilter = () => {
  return (
    <div className=" flex gap-3 justify-between items-center text-center px-5 my-5">
      <input className="border-b border-[#808080] w-1/4 outline-none text-center" type="text" name="min" placeholder="min" />
      <span className="w-1/4">-</span>
      <input className="border-b border-[#808080] w-1/4 outline-none text-center" type="text" name="max" placeholder="max" />
    </div>
  );
};

export default PriceFilter;
