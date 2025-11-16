"use client"
import MenuBox from '@/components/layout/Profile/MenuBox'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

function AccountLayoutSideBar() {
    const pathname = usePathname()
    const activePath = pathname.split("/").at(-1)
    const [active, setActive] = useState(activePath)


    const handleActiveLink = (slug) => {
        setActive(slug)
    }


    const AccaoutLinks = [
        { id: 1, slug: "profile", url: "/account/profile", page: "Istifadəçi məlumatları" },
        { id: 2, slug: "address-info", url: "/account/address-info", page: "Adress məlumatları" },
        { id: 3, slug: "my-cards", url: "/account/my-cards", page: "Kart məlumatları" }
    ]

    return (
        <div className='rounded-[6px] flex flex-col gap-[20px] w-[calc((100%-20px)/5)] h-full '>
            <MenuBox title='Hesabım'>
                <ul>

                    {AccaoutLinks.map(item => (
                        <li key={item.id} onClick={() => handleActiveLink(item.slug)} >
                            <Link                         className={`py-1.5 transition-all hover:bg-[#78367a] block hover:px-[10px] hover:rounded-[6px] hover:text-[#fff]   ${active == item.slug ? "rounded-[6px] px-[10px] my-[5px]    bg-base":""}`} href={item.url}>{item.page}</Link>
                        </li>
                    ))}
                  

                </ul>
            </MenuBox>
            <MenuBox title='Sənə özəl'>
                <ul>
                    <li >
                        <Link className={`py-1.5 transition-all hover:bg-[#78367a] block hover:px-[10px] hover:rounded-[6px] hover:text-[#fff]`} href={'/orders'}>Sifarişlərim</Link>
                    </li>
                    <li >
                        <Link className='className={`py-1.5 transition-all hover:bg-[#78367a] block hover:px-[10px] hover:rounded-[6px] hover:text-[#fff]`}' href={'/favorites'}>Sevimlilər</Link>
                    </li>
                    <li >
                        <Link className={`py-1.5 transition-all hover:bg-[#78367a] block hover:px-[10px] hover:rounded-[6px] hover:text-[#fff]`} href={'/basket'}>Səbət</Link>
                    </li>
                </ul>
            </MenuBox>
        </div>
    )
}

export default AccountLayoutSideBar