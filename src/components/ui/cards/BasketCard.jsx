import { Trash2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BasketCard = ({ product, deleteFromBasket }) => {
  return (
    <>
      <li className="flex py-3">
        <div className="size-20 shrink-0 overflow-hidden rounded-md border border-gray-200">
          <Image width={30} height={30} alt={product.title} src={product.imageUrl} className="size-full object-cover" />
        </div>

        <div className="ml-4 flex flex-1 flex-col">
          <div>
            <div className="flex justify-between text-base font-medium text-gray-900">
              <h3>
                <Link href="/" className="text-[1.1em] font-semibold">
                  {product.title}
                </Link>
                <span className="ml-2 text-xs text-green-700">{product.ml} ml</span>
              </h3>
              <Trash2Icon onClick={() => deleteFromBasket(product.id)} className=" font-semibold size-4 text-gray-700" />
            </div>
          </div>
          <div className="flex flex-1 items-end justify-between text-sm">
            <p className="text-gray-500">
              {product.quantity} x <span className="font-bold text-base">{product.price}₼</span>
            </p>
            <p className=" font-bold text-base">{product.price * product.quantity}₼</p>
          </div>
        </div>
      </li>
    </>
  );
};

export default BasketCard;
