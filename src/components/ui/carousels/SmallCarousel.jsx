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
import CurvyTextBox from '../CurvyTextBox';
import Link from 'next/link';
import SmallCarouselSkeleton from '@/components/layout/Home/skeletons/SmallCarousel';

export default function SmallCarousel({ items, order }) {

    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(false)
    }, [])
    return (
        <div className='small-carousel' >
            {loading ? <SmallCarouselSkeleton /> : <Swiper
                spaceBetween={30}
                effect={'fade'}
                loop={true}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                modules={[EffectFade, Navigation, Pagination, Autoplay]}
                className="mySwiper"
            >
                {
                    items.map((item, index) => {
                        const bg = ((index + 1) % 3 == 0) ? "bg-[#f26222]" : ((index + 1) % 2 == 0) ? "bg-[#f4c340]" : "bg-[#ff0800]"
                        const bg2 = ((index + 1) % 3 == 0) ? "bg-[#ff0800]" : ((index + 1) % 2 == 0) ? "bg-[#f26222]" : "bg-[#f4c340]"

                        return (
                            <SwiperSlide key={item.id}>
                                <div className='h-[290px] text-left relative group'>
                                    <div className='img-box h-full'>
                                        <Image className='group-hover:scale-[1.1] transition-all duration-[.4s] h-full w-full object-cover' src={item.img} alt="image" />
                                    </div>
                                    <div className='content absolute inset-0'>
                                        <div className='w-full lg:w-4/5  p-[20px]  lg:p-[30px] bottom-0'>
                                            <CurvyTextBox className={`${order == 1 ? bg : bg2} leading-[16px] !py-[10px] !px-[20px] !text-[15px]`}> {item.badge}</CurvyTextBox>
                                            <h3 className='text-[26px] text-shadow-ff line-clamp-3 leading-[28px] md:text-[28px] font-bold md:leading-[33px] my-[15px]'>{item.title}</h3>
                                            <Link className='text-[16px] underline font-semibold' href="products">Shop Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>}
        </div>
    );
}
