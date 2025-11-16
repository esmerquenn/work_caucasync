import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

function BrandCardsSkeleton() {


    return (
        <div id="blog-cards-skeleton">
            <div className='flex items-center flex-wrap  overflow-hidden  gap-[20px]'>
                <div className='loader !h-[212px] w-[calc((100%-140px)/8)]  rounded-[6px]'></div>
                <div className='loader !h-[212px] w-[calc((100%-140px)/8)]  rounded-[6px]'></div>
                <div className='loader !h-[212px] w-[calc((100%-140px)/8)]  rounded-[6px]'></div>
                <div className='loader !h-[212px] w-[calc((100%-140px)/8)]  rounded-[6px]'></div>
                <div className='loader !h-[212px] w-[calc((100%-140px)/8)]  rounded-[6px]'></div>
                <div className='loader !h-[212px] w-[calc((100%-140px)/8)]  rounded-[6px]'></div>
                <div className='loader !h-[212px] w-[calc((100%-140px)/8)]  rounded-[6px]'></div>
                <div className='loader !h-[212px] w-[calc((100%-140px)/8)]  rounded-[6px]'></div>
            </div>


        </div>
    )
}

export default BrandCardsSkeleton