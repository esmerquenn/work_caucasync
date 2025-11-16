"use client"
import React from "react";
import PriceFilter from "./PriceFilter";
import BrandFilter from "./BrandFilter";
import GenderFilter from "./GenderFilter";
import SizeFilter from "./SizeFilter";
import { useDispatch } from "react-redux";
import { resetFilters } from "@/store/slices/filters/filterSlice";
const Filters = ({ brands, genders, filtersOpen }) => {
  const dispatch = useDispatch();

  const handleResetFilters = () => {
    dispatch(resetFilters());
  };
  return (
    <div
      className={` fixed top-0 z-[3]  ${
        filtersOpen ? " translate-x-0" : "-translate-x-full"
      }  transition-all duration-500 lg:translate-0 h-[100vh]    left-0 w-[300px] lg:left-[initial]  lg:sticky lg:w-1/5  lg:top-3 bg-white  border border-[#E5E5E5] lg:rounded-md p-4.5 lg:p-3.5 !pr-0 `}
    >
      <h2 className=" font-semibold text-black text-2xl border-b border-[#e5e5e5] p-1 mb-3 mr-3.5">Filterlər</h2>
      <div className="overflow-x-hidden h-[87vh] scrollbar-custom overflow-y-auto">
        <GenderFilter genders={genders} />
        <BrandFilter brands={brands} />
        <SizeFilter />
        <PriceFilter />
        <div className="pr-3">
          <button
            onClick={handleResetFilters}
            className=" inline-block w-full border border-[#e5e5e5] rounded-md p-3 font-bold text-base bg-[#e5e5e5] hover:bg-[#78367A] hover:text-white transition-all duration-300 "
          >
            Filterleri sil
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
