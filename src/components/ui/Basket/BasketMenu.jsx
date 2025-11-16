"use client";
import React, { useEffect } from "react";
import { Trash2Icon, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { loadFromCookie, removeFromBasket } from "@/store/slices/basket";
import Link from "next/link";
import BasketCard from "../cards/BasketCard";
const BasketMenu = ({ open, onClose }) => {
 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFromCookie());
  }, [dispatch]);
  
  function deleteFromBasket(id) {
    dispatch(removeFromBasket(id));
  }

  const products = useSelector((state) => state.basket);
  return (
    <div className="relative z-10 ">
      {open && <div onClick={onClose} className="fixed inset-0 bg-gray-500/75" />}
      <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
        <div
          className={`pointer-events-auto fixed inset-y-0 right-0 max-w-sm w-full bg-white shadow-xl transform transition duration-1000
        ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex h-screen flex-col  bg-white shadow-xl">
            <div className="flex-1">
              <div className="flex items-start justify-between px-5 py-3.5   sm:px-6 bg-base">
                <h3 className="text-xl font-bold  ">Shopping cart</h3>
                <div className="ml-3 flex h-7 items-center">
                  <button type="button" onClick={onClose} className="relative -m-2 p-2 text-gray-400 hover:text-gray-500">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close panel</span>
                    <X aria-hidden="true" className="size-6 text-white " />
                  </button>
                </div>
              </div>

              <div className="mt-5 px-4   overflow-y-auto scrollbar-custom h-[50vh] sm:px-6">
                <div className="flow-root">
                  <ul role="list" className="-my-2 divide-y divide-gray-200">
                    {products.items.length > 0 && products.items.map((product) => <BasketCard key={product.id} product={product} deleteFromBasket={deleteFromBasket} />)}
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
              <div className="flex mb-4 justify-between text-base font-bold text-gray-900">
                <p>Məhsulların sayı</p>
                <p>{products.totalCount}</p>
              </div>
              <div>
                <div className="flex mb-2 justify-between text-base font-bold text-gray-900">
                  <p>Qiymət</p>
                  <p>{products.totalPrice}₼</p>
                </div>
                <div className="flex mb-2 justify-between text-base font-bold text-gray-900">
                  <p>Endirim</p>
                  <p>00.00₼</p>
                </div>
                <div className="flex mb-2 justify-between text-base font-bold text-gray-900">
                  <p>Ümumi qiymət</p>
                  <p>{products.totalPrice}₼</p>
                </div>
              </div>
              <div className="mt-6 flex gap-4 justify-between items-center">
                <button
                  onClick={onClose}
                  className=" w-1/2 flex items-center justify-center rounded-md border border-transparent bg-base px-6 py-3 text-base font-bold text-white shadow-xs hover:bg-base"
                >
                  <Link href={"/basket"}>Səbətə keç</Link>
                </button>
                <button
                  onClick={onClose}
                  className=" w-1/2 flex items-center justify-center rounded-md border border-transparent bg-base px-6 py-3 text-base font-bold text-white shadow-xs hover:bg-base"
                >
                  Rəsmiləşdir
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketMenu;
