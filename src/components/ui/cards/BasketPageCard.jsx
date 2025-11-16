import { decrementQuantity, incrementQuantity, removeFromBasket } from "@/store/slices/basket";
import { addToWishlist, loadFromCookie, removeFromWishlist } from "@/store/slices/wishlist";
import { Heart, Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Img from "../../../assets/img/photo/parfume.png"

const BasketPageCard = ({ item }) => {
  const dispatch = useDispatch();
  const discount = (item.price * item.discount) / 100;
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const isInWishlist = wishlistItems.some((wishItem) => wishItem.id === item.id);
  console.log(isInWishlist);
  
  const handleToggleWishlist = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(item.id));
    } else {
      dispatch(
        addToWishlist({
          ...item,
        })
      );
    }
  };
   useEffect(() => {
    dispatch(loadFromCookie());
  }, [dispatch]);
  return (
    <div className="relative mb-6">
      <div className="rounded-md border border-gray-200 bg-white p-4">
        <div className="flex flex-col gap-4 md:hidden">
          <div className="flex items-start gap-4">
            <div className="rounded-md overflow-hidden border shrink-0">
              <Image className="h-20 w-20 object-cover" src={Img} alt={item.title} />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg line-clamp-2">{item.title}</h3>
              <p className="text-lg font-bold mt-1">{item.price}₼</p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center border rounded-sm">
              <button
                onClick={() => dispatch(decrementQuantity({ id: item.id, amount: 1 }))}
                className="h-8 w-8 flex items-center justify-center border-r"
              >
                <Minus className="size-4" />
              </button>
              <div className="w-10 text-center">{item.quantity}</div>
              <button
                onClick={() => dispatch(incrementQuantity({ id: item.id, amount: 1 }))}
                className="h-8 w-8 flex items-center justify-center border-l"
              >
                <Plus className="size-4" />
              </button>
            </div>
            {/* <p className="text-lg font-bold">{item.price * item.quantity}₼</p> */}
            <div className="w-32 text-right">
              {discount ? (
                <div className="flex flex-col items-end">
                  <span className="text-red-600 line-through text-sm">{item.price * item.quantity}₼</span>
                  <span className="text-green-600 font-bold text-lg">{(item.price - discount) *  item.quantity}₼</span>
                </div>
              ) : (
                <span className=" text-lg font-bold">{item.price * item.quantity}₼</span>
              )}
            </div>
          </div>

          <div className="flex items-center justify-end gap-4">
            {/* <button onClick={() => toggleHeart(item.id)} className="text-pink-500">
              <Heart className={`size-5 ${hearts[item.id] ? "fill-pink-500" : ""}`} />
            </button> */}
            <button className="text-pink-500" onClick={handleToggleWishlist}>
              <Heart className={`size-5 ${isInWishlist ? "fill-pink-500" : ""}`} />
            </button>
            <button onClick={() => dispatch(removeFromBasket(item.id))} className="text-red-600">
              <Trash2 className="size-5" />
            </button>
          </div>
        </div>

        <div className="hidden md:flex items-center justify-between gap-6">
          <div className="flex items-center gap-4 min-w-0">
            <div className="rounded-md overflow-hidden border shrink-0">
              <Image className="h-20 w-20 object-cover" src={Img} alt={item.title} />
            </div>
            <div className="min-w-0">
              <h3 className="font-semibold text-lg truncate">{item.title}</h3>
              <p className="text-lg font-bold">{item.price}₼</p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="flex items-center border rounded-sm">
              <button
                onClick={() => dispatch(decrementQuantity({ id: item.id, amount: 1 }))}
                className="h-8 w-8 flex items-center justify-center border-r"
              >
                <Minus className="size-4" />
              </button>
              <div className="w-10 text-center">{item.quantity}</div>
              <button
                onClick={() => dispatch(incrementQuantity({ id: item.id, amount: 1 }))}
                className="h-8 w-8 flex items-center justify-center border-l"
              >
                <Plus className="size-4" />
              </button>
            </div>
          </div>
          <div className="w-32 text-right">
            {discount ? (
              <div className="flex flex-col items-end">
                <span className="text-red-600 line-through text-sm">{item.price * item.quantity}₼</span>
                <span className="text-green-600 font-bold text-lg">{(item.price - discount) * item.quantity}₼</span>
              </div>
            ) : (
              <span className="font-bold text-lg">{item.price * item.quantity}₼</span>
            )}
          </div>

          <div className="flex items-center gap-4">
            {/* <button onClick={() => toggleHeart(item.id)} className="text-pink-500">
              <Heart className={`size-5 ${hearts[item.id] ? "fill-pink-500" : ""}`} />
            </button> */}
            <button className="text-pink-500" onClick={handleToggleWishlist}>
              <Heart className={`size-5 ${isInWishlist ? "fill-pink-500" : ""}`} />
            </button>
            <button onClick={() => dispatch(removeFromBasket(item.id))} className="text-red-600">
              <Trash2 className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketPageCard;
