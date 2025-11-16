import React from 'react'
import CurvyTextBox from '../CurvyTextBox'
import Link from 'next/link'
import Image from 'next/image'


function DiscountCard({ img, title, badge, index }) {
 
    
    const  bg = index == 2 ? "bg-[#ff0800]" : index == 1 ?  'bg-[#f26222]': "bg-[#f4c340]" 

    return (
        <div className='h-[290px] discount-card rounded-[6px] overflow-hidden text-left relative group'>
            <div className='img-box h-full'>
                <Image className='group-hover:scale-[1.1] transition-all duration-[.4s] h-full w-full object-cover' src={img} alt="image" />
            </div>
            <div className='text-box absolute inset-0'>
                <div className=' text-box-inner  p-[20px]  lg:p-[30px] bottom-0'>
                    <CurvyTextBox className={` ${bg} leading-[16px] !py-[10px] !px-[20px] !text-[15px]`}> {badge}</CurvyTextBox>
                    <h3 className='discount-card-title text-shadow-ff text-[26px] line-clamp-3 leading-[28px] md:text-[28px] font-bold md:leading-[33px] my-[15px]'>{title}</h3>
                    <Link className='text-[16px] underline font-semibold' href="products">Shop Now</Link>
                </div>
            </div>
        </div>
    )
}

export default DiscountCard

{/* <div className='discount-card  border  rounded-[6px]' >
            <div className="img-box w-full h-full">
                <Image className='w-full h-full object-cover' src={img} alt='discount-img' />
            </div>
            <div className='text-box absolute inset-0 p-[30px]'>
                <div className=' text-box-inner  flex flex-col gap-[15px]'>
                    <div><CurvyTextBox className={'bg-[#F4C340]'}>{badge}</CurvyTextBox></div>
                    <p className='discount-card-title'>
                        {title}
                    </p>
                    <Link className='font-semibold' href={'/'}>Shop Now</Link>
                </div>
            </div>
        </div> */}