import { Checkbox } from "@/components/ui/checkbox";
import { toggleBrand } from "@/store/slices/filters/filterSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const BrandFilter = ({ brands }) => {
  const dispatch = useDispatch();
  const selectedBrands = useSelector((state) => state.productsFilters.selectedBrands);

  const handleBrandChange = (brand) => {
    dispatch(toggleBrand(brand));
  };
  return (
    <div>
      <h4 className=" text-xl font-semibold border-b inline-block pr-3 my-3 ">Brendlər</h4>
      <ul className="flex flex-col gap-2">
        {brands.map((item) => (
          <li key={item} className="flex items-center gap-2 font-medium text-lg cursor-pointer">
            <Checkbox checked={selectedBrands.includes(item)} onCheckedChange={() => handleBrandChange(item)} />
            <span className="max-w-[120px] border-b border-transparent hover:border-[#E5E5E5]">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrandFilter;
