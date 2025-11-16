import React from 'react'

function MenuBox({children,title}) {
    return (
        <div className='menu-box border  rounded-[6px]'>
            <MenuBoxHeader>{title}</MenuBoxHeader>
            <MenuBoxContent>{children}</MenuBoxContent>
        </div>
    )
}

export default MenuBox



export function MenuBoxHeader({children, className}) {
  return (
    <div className={`${className} py-[12px] px-3.5 border-b  font-semibold`} >{children}</div>
  )
}
export function MenuBoxContent({children, className}) {
  return (
    <div className={`${className} py-[12px] px-3.5   `} >{children}</div>
  )
}
