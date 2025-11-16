import { Checkbox } from "@/components/ui/checkbox";
import { toggleGender } from "@/store/slices/filters/filterSlice";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

const GenderFilter = ({ genders }) => {
  const dispatch = useDispatch();
  const selectedGenders = useSelector((state) => state.productsFilters.selectedGenders);

  const handleGenderChange = (gender) => {
    dispatch(toggleGender(gender));
  };

  return (
    <div>
      <h4 className="text-xl font-semibold border-b inline-block pr-3 my-3">Növ</h4>
      <ul className="flex flex-col gap-2">
        {genders.map((item) => (
          <li key={item} className="flex items-center gap-2 font-medium text-lg cursor-pointer">
            <Checkbox checked={selectedGenders.includes(item)} onCheckedChange={() => handleGenderChange(item)} />
            <span className="max-w-[120px] border-b border-transparent  hover:border-[#E5E5E5]">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GenderFilter;
