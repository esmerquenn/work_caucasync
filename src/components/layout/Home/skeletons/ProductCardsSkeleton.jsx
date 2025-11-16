
import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

function ProductCardsSkeleton() {




    return (
        <div id="product-cards-skeleton">

            <div className='flex items-center flex-wrap h-[411px] overflow-hidden gap-[5px] sm:gap-[20px]  md:gap-[5px]  lg:gap-[20px]'>
                <div className='loader !h-[411px] w-[calc((100%-5px)/2)] md:w-[calc((100%-20px)/2)] lg:w-[calc((100%-40px)/3)] xl:w-[calc((100%-60px)/4)] 2xl:w-[calc((100%-80px)/5)] rounded-[6px]'></div>
                <div className='loader !h-[411px] w-[calc((100%-5px)/2)] md:w-[calc((100%-20px)/2)] lg:w-[calc((100%-40px)/3)] xl:w-[calc((100%-60px)/4)] 2xl:w-[calc((100%-80px)/5)] rounded-[6px]'></div>
                <div className='loader !h-[411px] w-[calc((100%-5px)/2)] md:w-[calc((100%-20px)/2)] lg:w-[calc((100%-40px)/3)] xl:w-[calc((100%-60px)/4)] 2xl:w-[calc((100%-80px)/5)] rounded-[6px]'></div>
                <div className='loader !h-[411px] w-[calc((100%-5px)/2)] md:w-[calc((100%-20px)/2)] lg:w-[calc((100%-40px)/3)] xl:w-[calc((100%-60px)/4)] 2xl:w-[calc((100%-80px)/5)] rounded-[6px]'></div>
                <div className='loader !h-[411px] w-[calc((100%-5px)/2)] md:w-[calc((100%-20px)/2)] lg:w-[calc((100%-40px)/3)] xl:w-[calc((100%-60px)/4)] 2xl:w-[calc((100%-80px)/5)] rounded-[6px]'></div>
            </div>


        </div>
    )
}

export default ProductCardsSkeleton