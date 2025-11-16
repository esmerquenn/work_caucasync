import React from 'react'

function BlogCardsSkeleton() {


    return (
        <div id="blog-cards-skeleton">

            <div className='flex items-center flex-wrap h-[443px] overflow-hidden  gap-[20px]'>
                <div className='loader !h-[443px] w-[calc((100%-40px)/3)] xl:w-[calc((100%-60px)/4)] rounded-[6px]'></div>
                <div className='loader !h-[443px] w-[calc((100%-40px)/3)] xl:w-[calc((100%-60px)/4)] rounded-[6px]'></div>
                <div className='loader !h-[443px] w-[calc((100%-40px)/3)] xl:w-[calc((100%-60px)/4)] rounded-[6px]'></div>
                <div className='loader !h-[443px] w-[calc((100%-40px)/3)] xl:w-[calc((100%-60px)/4)] rounded-[6px]'></div>
            </div>

        </div>
    )
}

export default BlogCardsSkeleton

