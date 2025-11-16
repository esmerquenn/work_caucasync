"use client";
import React, { useEffect } from "react";
import { Sheet, SheetClose, SheetContent, SheetTitle } from "../sheet";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import BasketCard from "../cards/BasketCard";
import { loadFromCookie, removeFromBasket } from "@/store/slices/basket";
import { ShoppingBasket, XIcon } from "lucide-react";
export default function BasketSideBar({ open, setOpen }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFromCookie());
  }, [dispatch]);
  function deleteFromBasket(id) {
    dispatch(removeFromBasket(id));
  }
  const products = useSelector((state) => state.basket);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent side="right" className="p-0 text-white">
        <div className="flex h-full flex-col justify-between">
          <div>
            <div className="flex items-center justify-between px-[14px] py-[8px]   sm:px-6 bg-base">
              <SheetTitle className="text-[22px] text-[#fff]  font-semibold">
                Shopping cart
              </SheetTitle>
              <SheetClose className="ring-offset-background focus:ring-ring data-[state=open]:bg-secondary rounded-xs  transition-opacity hover:opacity-100  focus:outline-hidden disabled:pointer-events-none ">
                <XIcon className="size-6" />
                <span className="sr-only">Close</span>
              </SheetClose>
            </div>

            {/* <div className="mt-5 px-4  max-h-[53vh]  overflow-y-auto scrollbar-custom  sm:px-6"> */}
            <div className="px-4 pt-5 h-[calc(100vh-300px)]  overflow-y-auto scrollbar-custom  sm:px-6">
              {products.items.length > 0 ? (
                <ul>
                  {products.items.length > 0 &&
                    products.items.map((product) => (
                      <BasketCard key={product.id} product={product} deleteFromBasket={deleteFromBasket} />
                    ))}
                </ul>
              ) : (
                // <div className="mt-5 px-4   sm:px-6 flex flex-col text-base justify-center items-center h-[30vh]">
                <div className="px-4 h-full  sm:px-6 flex flex-col text-base justify-center items-center ">
                  <ShoppingBasket className=" size-20 " />
                  <span className="font-semibold">Səbətiniz boşdur</span>
                </div>
              )}
            </div>
          </div>

          <div className="border-t border-gray-200 px-4 py-3 sm:px-6">
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
                onClick={() => setOpen(false)}
                className=" w-1/2 flex items-center justify-center rounded-md border border-transparent bg-base px-3 py-[10px] text-base font-semibold text-white shadow-xs hover:bg-base"
              >
                <Link href={"/basket"}>Səbətə keç</Link>
              </button>
              <button
                onClick={() => setOpen(false)}
                className=" w-1/2 flex items-center justify-center rounded-md border border-transparent bg-base px-3 py-[10px] text-base font-semibold text-white shadow-xs hover:bg-base"
              >
                Rəsmiləşdir
              </button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
