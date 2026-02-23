import { Checkbox } from "@/components/ui/checkbox";
import { toggleSize } from "@/store/slices/filters/filterSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

let sizes = [15, 30, 50, 100, 120];

const SizeFilter = () => {
  const dispatch = useDispatch();
  const selectedSizes = useSelector((state) => state.productsFilters.selectedSizes); 

  const handleSizeChange = (size) => {
    dispatch(toggleSize(size));
  };

  return (
    <div>
      <h4 className="text-xl font-semibold border-b inline-block pr-3 my-3">Ölçülər</h4>
      {sizes.map((item) => (
        <li key={item} className="flex items-center gap-2 font-medium text-lg cursor-pointer">
          <Checkbox checked={selectedSizes.includes(item)} onCheckedChange={() => handleSizeChange(item)} />
          <span className="max-w-[120px] border-b border-transparent hover:border-[#E5E5E5]">{item} ml</span>
        </li>
      ))}
    </div>
  );
};

export default SizeFilter;
