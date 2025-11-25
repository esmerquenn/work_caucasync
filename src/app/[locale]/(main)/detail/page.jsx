"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Heart, ShoppingCart, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, incrementQuantity } from "@/store/slices/basket";
const page = () => {
  const [quantity, setQuantity] = useState(1);
  const products = useSelector((state) => state.products);
  const product = products[1];
  const [variant, setVariant] = useState({ ml: product?.variants[0].ml, price: product?.variants[0].price });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const basket = useSelector((state) => state.basket);
  const dispatch = useDispatch();
  function handleConfirmAdd() {
    const uniqueId = `${id}-${variant.ml}`;
    const existingItem = basket.items.find((item) => item.id == uniqueId);

    if (existingItem) {
      dispatch(incrementQuantity({ id: existingItem.id, amount: quantity }));
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
          quantity: quantity,
        })
      );
      toast.success(`${title} (${variant.ml}ml) məhsulu səbətə əlavə edildi`);
    }
    setOpen(false);
  }

  const images = ["/img/top-new-banner.jpg", "/img/top-new-banner.jpg", "/img/top-new-banner.jpg", "/img/top-new-banner.jpg"];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  function changePrice(item) {
    setVariant(item);
  }
  return (
    <div className="wrapper mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2">
          <div className="relative aspect-square w-full rounded-lg bg-red-500 h-3/5 mb-4 overflow-hidden">
            <Image src={images[currentImageIndex]} alt={product.title} fill className="object-cover" priority />
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-4 gap-2">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`relative aspect-square rounded-md overflow-hidden ${
                  currentImageIndex === index ? "ring-2 ring-primary" : ""
                }`}
              >
                <Image src={img} alt={`Thumbnail ${index + 1}`} fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="lg:w-1/2">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">{product.title}</h1>

          <div className="flex items-center gap-4 mb-4">
            <Badge variant="outline" className="text-sm">
              Brand: {product.brand}
            </Badge>
            <Badge variant="outline" className="text-sm border-pink-600">
              Endirim: {product.discount}%
            </Badge>
            <Badge className="text-sm bg-green-100 text-green-800">{product.isNew ? "Yeni" : ""}</Badge>
          </div>

          <div className="prose max-w-none mb-6">
            <p>{product.description}</p>
          </div>

          <div className="flex items-center gap-2 pt-[20px] flex-wrap text-center pb-[10px]">
            {product.variants.map((item, index) => (
              <span
                key={index}
                onClick={() => changePrice(item)}
                className={` w-20 rounded-md p-2 border ${item.price == variant.price ? "bg-base" : ""}`}
              >
                {item.ml}ml
              </span>
            ))}
          </div>
          <div className=" font-bold text-base flex flex-col md:flex-row gap-3 items-end  my-5">
            <span className="text-[1.5rem] text-green-800 ">{variant.price - (variant.price * product.discount) / 100} AZN</span>
            <span className="text-[1rem] text-red-600 line-through mb-1">${variant.price}AZN</span>
          </div>
          <div className="flex flex-col  gap-3 mb-6">
            <div className="w-1/3 flex gap-2">
              <div className="flex border h-12  gap-2 rounded-md w-20  ">
                <span className=" w-12 flex justify-center items-center font-bold text-lg"> 10 </span>
                <div className="flex w-8 border-l flex-col item-center justify-center ">
                  <div className="border-b h-1/2 flex justify-center items-center ">
                    {" "}
                    <ChevronUp className="size-4" />{" "}
                  </div>
                  <div className="         h-1/2 flex justify-center items-center">
                    <ChevronDown className="size-4" />
                  </div>
                </div>
              </div>
              <Button
                onClick={handleConfirmAdd}
                className="w-full  h-12 gap-2 bg-base hover:bg-white hover:text-[#78367A] border border-[#78367A]"
              >
                <ShoppingCart className="w-5 h-5" />
                Səbətə əlavə et
              </Button>
            </div>
            <div className=" w-1/4 text-sm mt-4 p-1 flex justify-center items-center font-bold border-b border-black transition duration-300 gap-3 hover:text-[#78367A] hover:border-[#78367A]">
              <Heart className="size-4" />
              Favorilərə əlavə
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
