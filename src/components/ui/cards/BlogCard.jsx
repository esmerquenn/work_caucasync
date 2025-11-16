import React from 'react'
import BlogImg from "../../../assets/img/photo/blog-img.jpeg"
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import CurvyTextBox from '../CurvyTextBox'


function BlogCard({className}) {
    return (
        <div className={`blog-card ${className}  overflow-hidden rounded-[3px] transition-all group box-shadow`}>
            <div className='card-top  w-full h-[286px] overflow-hidden  '>
                <Image src={BlogImg} className='h-full group-hover:scale-[1.2] transition-all duration-700' alt="blog-img" />
            </div>
            <div className='card-bottom text-left pt-[10px]  pb-[20px] px-[20px]'>
                <CurvyTextBox className={"bg-base text-[12px]   sm:mb-[5px] leading-[14px] !rounded-tl-[10px] !rounded-br-[10px] !py-[5px] !px-[10px] "}>Oct 25, 2024</CurvyTextBox>

                {/* <span className='inline-block text-[15px] text-[#808080] font-medium mb-[10px]'>Oct 25, 2024</span> */}
                <p className='leading-[22px] my-[10px] line-clamp-2'>Morbi condimentum molestie Nam enim odio sodales</p>
                <Link href="/" className='text-base  leading-[16px] font-bold inline-flex gap-[6px] items-center'>Daha ətraflı <ChevronRight className='w-[14px] h-[14px] translate-y-[1px]' /> </Link>
            </div>
        </div>
    )
}

export default BlogCard