"use client"
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

import CarouselImg from '../../../assets/img/photo/main-carousel1.webp'
import CarouselImg1 from '../../../assets/img/photo/main-carousel2.webp'
import CarouselImg2 from '../../../assets/img/photo/main-carousel3.webp'
import CurvyTextBox from '../CurvyTextBox';
import Link from 'next/link';
import parse from 'html-react-parser';
import MainCarouselSkeleton from '@/components/layout/Home/skeletons/MainCarouselSkeleton';


export default function MainCarousel() {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(false)
    }, [])

    const items = [
        { id: 1, badge: "Organic Food", title: "All Fruits & Veggies Are  Offered At Your Store", text: "Vegetables are parts of plants that are consumed.", img: CarouselImg1 },
        { id: 2, badge: "Organic Food", title: "Various Vegetables Fruits Available Your Store", text: "Vegetables are parts of plants that are consumed.", img: CarouselImg },
        { id: 3, badge: "Organic Food", title: "All Fruits & Veggies Are Offered At Your Store", text: "Vegetables are parts of plants that are consumed.", img: CarouselImg2 },
    ]


    return (
        <div id='main-carousel' >
            {
                loading ? <MainCarouselSkeleton /> : <Swiper
                    spaceBetween={30}
                    effect={'fade'}
                    loop={true}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 4500,
                        disableOnInteraction: false,
                    }}
                    modules={[EffectFade, Navigation, Pagination, Autoplay]}
                    className="mySwiper rounded-[8px]"
                >
                    {items.map(item => (
                        <SwiperSlide key={item.id}>
                            <div className='relative box-shadow  h-[290px] sm:h-[400px] lg:h-[600px] '>
                                <div className='img-box h-full absolute inset-0'>
                                    <Image className='h-full w-full object-cover' alt='carousel-img' src={item.img} />
                                </div>
                                <div className='content  absolute text-left p-[20px] md:p-[30px] lg:p-[50px] inset-[0px] bg-[#00000010]'>
                                    <div className='w-full sm:w-3/5'>
                                        <CurvyTextBox className={'bg-[#fff] leading-[16px] text-[16px] lg:leading-[28px] lg:text-[18px] !text-[#78367a] '}>{item.badge}</CurvyTextBox>
                                        <h2 className='text-[26px] text-shadow-ff leading-[28px]  sm:text-[30px] sm:leading-[32px]  md:text-[40px] md:leading-[42px] line-clamp-[2]  md:line-clamp-4 lg:text-[46px] lg:leading-[48px]  xl:text-[52px] my-[15px] xl:leading-[54px] font-bold'>{item.title}</h2>
                                        <p  className='mb-[15px] font-medium text-shadow-ff line-clamp-[2]  md:line-clamp-4 text-[15px] lg:text-[18px] lg:mb-[30px]'>{item.text}</p>
                                        <Link  className='bg-[#78367a] font-bold inline-block  text-[15px] lg:text-[18px] text-[#fff] px-[32px] rounded-[6px] py-[12px]' href={`${item.url}`}>Shop Now</Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
            }
        </div>
    );
}
