import React from 'react'
import MenuBox, { MenuBoxContent, MenuBoxHeader } from '../Profile/MenuBox'
import Link from 'next/link'
import AccountLayoutSideBar from '@/components/ui/sidebars/AccountLayoutSideBar'

function AccountLayoutInner({ children }) {
    return (
        <div className='wrapper'>
            <div className='flex h-[100vh] gap-[20px] py-14 '>
                <AccountLayoutSideBar />
                <div className='rounded-[6px] w-[calc((100%-20px)/5*4)] h-[90vh] border'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default AccountLayoutInner