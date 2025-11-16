import React from 'react'

function CurvyTextBox({ className, children }) {
    return (
        <div  className={`rounded-tl-[15px] rounded-br-[15px] inline-block  py-[10px] text-[#fff] font-bold  px-[20px] ${className}`}>{children}</div>
    )
}

export default CurvyTextBox