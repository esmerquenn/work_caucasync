"use client";

import { addToBasket, incrementQuantity } from "@/store/slices/basket";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Parfume from "../../../assets/img/photo/parfume.png";

import CurvyTextBox from "../CurvyTextBox";
import Image from "next/image";
import { addToWishlist, loadFromCookie, removeFromWishlist } from "@/store/slices/wishlist";
import { Heart } from "lucide-react";
import { toast } from "sonner";

const Card = ({ title, description, imageUrl, id, discount,brand,gender, isNew, variants, w = "" }) => {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket);
  const [open, setOpen] = useState(false);
  const [variant, setVariant] = useState({ ml: variants[0].ml, price: variants[0].price });

  function handleConfirmAdd() {
      const uniqueId = `${id}-${variant.ml}`;
    const existingItem = basket.items.find((item) =>  item.id == uniqueId);
    console.log(existingItem);
    
    if (existingItem) {
      dispatch(incrementQuantity({ id: existingItem.id, amount: 1 }));
      toast.success(`${title} məhsulunun sayı artırıldı`);
    } else {
      dispatch(
        addToBasket({
          uniqueId,
          title,
          discount,
          imageUrl,
          brand,
          gender,
          price: variant.price,
          ml: variant.ml,
        })
      );
      toast.success(`${title} (${variant.ml}ml) məhsulu səbətə əlavə edildi`);
    }
    setOpen(false);
  }

  const wishlistItems = useSelector((state) => state.wishlist.items);
  const isInWishlist = wishlistItems.some((wishItem) => wishItem.id === id);

  const handleToggleWishlist = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(id));
      toast.info(`${title} məhsulu istək siyahısından çıxarıldı`);
    } else {
      dispatch(
        addToWishlist({
          id,
          title,
          description,
          imageUrl,
          price: variant.price,
          ml: variant.ml,
          discount,
          brand,
          gender,
          isNew,
        })
      );
      toast.success(`${title} məhsulu istək siyahısına əlavə edildi`);
    }
  };

  useEffect(() => {
    dispatch(loadFromCookie());
  }, [dispatch]);

  function changePrice(item) {
    setVariant(item);
  }

  return (
    <div
      className={`overflow-hidden md:hover:translate-y-[-6px] transition-all duration-300 relative box-shadow rounded-[3px] ${w}`}
    >
      <div className="flex absolute top-3.5 left-3.5 flex-col gap-[4px]">
        {isNew == "true" && (
          <div
            className={` text-xs font-semibold bg-base text-[#fff] px-2.5 py-1 rounded-tl-[10px] rounded-br-[10px]
        ${discount != 0 ? "top-10" : "top-3.5"} `}
          >
            New
          </div>
        )}
        {discount != 0 && (
          <CurvyTextBox
            className={
              "bg-[orangered] text-[12px]  sm:mb-[5px] leading-[14px] !rounded-tl-[10px] !rounded-br-[10px] !py-[5px] !px-[10px] "
            }
          >
            -{discount}%
          </CurvyTextBox>
        )}
        <button className="text-pink-500" onClick={handleToggleWishlist}>
          <Heart className={`size-5 ${isInWishlist ? "fill-pink-500" : ""}`} />
        </button>
      </div>
      <div className="h-[160px] sm:h-[220px] p-[20px]">
        <Image src={Parfume} alt="sekil" className="h-full  object-contain object-bottom " />
      </div>
      <div className="card-content text-left px-[10px] pb-[10px] sm:px-[14px] sm:py-[14px]">
        <CurvyTextBox
          className={
            "bg-[#ff0800] text-[12px]  sm:mb-[5px] leading-[14px] !rounded-tl-[10px] !rounded-br-[10px] !py-[5px] !px-[10px] "
          }
        >
          {title}
        </CurvyTextBox>
        <p className="text-[#000] font-bold  text-[16px] sm:text-[18px] leading-[20px] mt-[10px]">{description}</p>

        <div className="flex items-center gap-[5px] pt-[20px] flex-wrap text-center pb-[10px]">
          {variants.map((item, index) => (
            <span key={index} onClick={() => changePrice(item)} className={`size ${item.price == variant.price ? "active" : ""}`}>
              {item.ml}ml
            </span>
          ))}
        </div>
        <h6 className="text-[#78367A] text-right  font-bold text-[14px] sm:text-[16px] flex items-center gap-[4px]   mb-[10px]">
          <span>Qiymət:</span> <span>{variant.price} AZN</span>
        </h6>
        <button
          onClick={handleConfirmAdd}
          className="inline-block w-full border border-[#e5e5e5] rounded-md py-[8px] cursor-pointer hover:bg-[#8e678e] font-semibold text-[#fff]  text-[14px] md:text-[16px]   bg-[#78367A]  transition-all duration-300"
        >
          Səbətə əlavə et
        </button>
      </div>
    </div>
  );
};

export default Card;
