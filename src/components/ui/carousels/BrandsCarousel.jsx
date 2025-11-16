"use client"
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Apple from '../../../assets/img/photo/apple.jpg'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import BrandCardsSkeleton from '@/components/layout/Home/skeletons/BrandCardsSkeleton';

export default function BrandsCarousel() {


    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(false)
    }, [])


    const items = [
        {
            img: Apple,
            brand: "Cold Drinks",
            count: 20,
        },
        {
            img: Apple,
            brand: "Cold Drinks",
            count: 20,
        },
        {
            img: Apple,
            brand: "Cold Drinks",
            count: 20,
        },
        {
            img: Apple,
            brand: "Cold Drinks",
            count: 20,
        },
        {
            img: Apple,
            brand: "Cold Drinks",
            count: 20,
        },
        {
            img: Apple,
            brand: "Cold Drinks",
            count: 20,
        },
        {
            img: Apple,
            brand: "Cold Drinks",
            count: 20,
        },
        {
            img: Apple,
            brand: "Cold Drinks",
            count: 20,
        },
        {
            img: Apple,
            brand: "Cold Drinks",
            count: 20,
        },
        {
            img: Apple,
            brand: "Cold Drinks",
            count: 20,
        },
    ]


    return (
        <div id='brands-carousel'>
            {
                loading ? <BrandCardsSkeleton /> : <Swiper
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
                    // ≥576px üçün
                    // ≥768px üçün
                    // ≥992px üçün
                    //  ≥1200px üçün
                    // ≥1400px
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        992: {
                            slidesPerView: 5,
                            spaceBetween: 20,
                        },
                        1400: {
                            slidesPerView: 7,
                            spaceBetween: 20,
                        },
                        1600: {
                            slidesPerView: 8,
                            spaceBetween: 20,
                        },
                    }}
                    modules={[Navigation, Pagination, Autoplay]}
                    className="mySwiper"
                >

                    {
                        items.map((item, index) => {

                            const bg = (index + 1) % 3 === 0 ? "bg-[#FFF0FF]" : (index + 1) % 2 === 0 ? "bg-[#fcede8]" : "bg-[#f4fce8] "

                            return (
                                <SwiperSlide>

                                    <div className={`card rounded-[8px] flex flex-col items-center ${bg}  p-[15px]`}>
                                        <div className='card-top w-[128px] h-[128px]'>
                                            <Image className='object-contain w-full' src={item.img} alt={item.brand} />
                                        </div>
                                        <div className='card-bottom mt-[15px]'>
                                            <h4 className='card-title mb-[5px]'>{(index + 1)} {item.brand}</h4>
                                            <h4 className='card-sub-title '>Items ({item.count})</h4>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }

                </Swiper >
            }
        </div>
    );
}

