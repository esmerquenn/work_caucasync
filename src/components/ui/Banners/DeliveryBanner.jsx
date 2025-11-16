import { useTranslations } from "next-intl";
import Link from "next/link";
import Delivery from "../../../assets/img/photo/delivery.png";
import Image from "next/image";
function DeliveryBanner() {
  const t = useTranslations("Header");

  return (
    <div
      id="delivery-banner"
      className="wrapper my-[70px] rounded-[6px] bg-[#78367a] h-[260px] flex items-center justify-around "
    >
      <div className="h-[340px]">
        <Image className=" h-[340px] w-[220px] object-contain " src={Delivery} alt="delivery" />
      </div>
      <div className="w-1/3 flex flex-col items-center gap-[10px]">
        <span className="text-center text-[36px] leading-[42px]  font-semibold text-[#fff]"> {t("delivery")} </span>
        <span className="text-[15px] text-[#fff] inline-block mb-[10px] font-medium">
          Get All Latest Information On Events, Sales Offers In Your Store{" "}
        </span>
        <Link className="bg-[#F4C340] text-[#fff] font-bold py-[12px] px-[36px] rounded-[6px] " href="/products">
          Shop Now
        </Link>
      </div>
      <div>
        <Image src={Delivery} alt="delivery" />
      </div>
    </div>
  );
}

export default DeliveryBanner;
