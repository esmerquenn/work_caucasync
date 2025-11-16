"use client"
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../../../assets/style/swiper.css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Card from '../cards/Card';
import ProductCardsSkeleton from '@/components/layout/Home/skeletons/ProductCardsSkeleton';
import Parfume from "../../../assets/img/photo/parfume.png"
import { useSelector } from 'react-redux';
export default function ProductCarousel() {


  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  // const products = [
  //   {
  //     title: "Ətir 1",
  //     description: "Ən brendindən ətir zad bizim etirlerden yoxdu",
  //     imageUrl: Parfume,
  //     price: "35",
  //     id: "1",
  //     isNew: "true",
  //     discount: "20",
  //     brand: "Brand A",
  //     ml: 50,
  //     gender: "Unisex",
  //   },
  //   {
  //     title: "Ətir 2",
  //     description: "Ən brendindən ətir zad bizim etirlerden yoxdu",
  //     imageUrl: Parfume,
  //     price: "45",
  //     id: "2",
  //     isNew: "true",
  //     discount: "15",
  //     brand: "Brand B",
  //     ml: 100,
  //     gender: "Woman",
  //   },
  //   {
  //     title: "Ətir 3",
  //     description: "Ən brendindən ətir zad bizim etirlerden yoxdu",
  //     imageUrl: Parfume,
  //     price: "55",
  //     id: "3",
  //     isNew: "true",
  //     discount: "10",
  //     brand: "Brand C",
  //     ml: 30,
  //     gender: "Man",
  //   },
  //   {
  //     title: "Ətir 4",
  //     description: "Ən brendindən ətir zad bizim etirlerden yoxdu",
  //     imageUrl: Parfume,
  //     price: "50",
  //     id: "4",
  //     isNew: "false",
  //     discount: "25",
  //     brand: "Brand D",
  //     ml: 75,
  //     gender: "Unisex",
  //   },
  //   {
  //     title: "Ətir 5",
  //     description: "Ən brendindən ətir zad bizim etirlerden yoxdu",
  //     imageUrl: Parfume,
  //     price: "60",
  //     id: "5",
  //     isNew: "false",
  //     discount: "30",
  //     brand: "Brand E",
  //     ml: 60,
  //     gender: "Man",
  //   },
  //   {
  //     title: "Ətir 6",
  //     description: "Ən brendindən ətir zad bizim etirlerden yoxdu",
  //     imageUrl: Parfume,
  //     price: "65",
  //     id: "6",
  //     isNew: "true",
  //     discount: "20",
  //     brand: "Brand F",
  //     ml: 50,
  //     gender: "Woman",
  //   },
  //   {
  //     title: "Ətir 7",
  //     description: "Ən brendindən ətir zad bizim etirlerden yoxdu",
  //     imageUrl: Parfume,
  //     price: "70",
  //     id: "7",
  //     isNew: "true",
  //     discount: "10",
  //     brand: "Brand G",
  //     ml: 100,
  //     gender: "Unisex",
  //   },
  //   {
  //     title: "Ətir 8",
  //     description: "Ən brendindən ətir zad bizim etirlerden yoxdu",
  //     imageUrl: Parfume,
  //     price: "80",
  //     id: "8",
  //     isNew: "false",
  //     discount: "5",
  //     brand: "Brand H",
  //     ml: 90,
  //     gender: "Child",
  //   },
  //   {
  //     title: "Ətir 9",
  //     description: "Ən brendindən ətir zad bizim etirlerden yoxdu",
  //     imageUrl: Parfume,
  //     price: "40",
  //     id: "9",
  //     isNew: "true",
  //     discount: "0",
  //     brand: "Brand I",
  //     ml: 50,
  //     gender: "Man",
  //   },
  //   {
  //     title: "Ətir 10",
  //     description: "Ən brendindən ətir zad bizim etirlerden yoxdu",
  //     imageUrl: Parfume,
  //     price: "90",
  //     id: "10",
  //     isNew: "true",
  //     discount: "30",
  //     brand: "Brand J",
  //     ml: 120,
  //     gender: "Woman",
  //   },
  // ];
const products = useSelector(state=> state.products)
  return (
    <div className='product-carousel'>
      {
        loading ? <ProductCardsSkeleton /> : <Swiper
          slidesPerView={2}
          spaceBetween={20}
          loop={true}
          pagination={
            {
              clickable: true,
            }
          }
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 5, 
            },
            576: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 5
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1500: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper"
        >

          {
            products.map((item, index) => {
              return (
                <SwiperSlide>
                  <Card  {...item} w="" />
                </SwiperSlide>
              )
            })
          }

        </Swiper >
      }
    </div>
  );
}

