
import CurvyTextBox from '../CurvyTextBox'
import Link from 'next/link'
import Image from 'next/image'

function GiftCard({ img, url, text, title }) {

  

    return (
        <div className='gift-card w-[calc((100%-60px)/4)]  relative  flex items-center justify-center border h-[560px] rounded-[6px]' >
            <div className="img-box h-full">
                <Image src={img} className='h-full w-full object-cover' alt="giftcard-img" />
            </div>
            <div className='text-box absolute top-[30px] left-[30px]'>
                <div className='w-2/3 flex flex-col gap-[20px]'>
                    <div><CurvyTextBox className={'bg-[#F4C340]'}>{text}</CurvyTextBox></div>
                    <p className='discount-card-title mb-[0px]'>
                        {title}
                    </p>
                    <Link className='font-bold' href={`${url}`}>Shop Now</Link>
                </div>
            </div>
        </div>
    )
}

export default GiftCard