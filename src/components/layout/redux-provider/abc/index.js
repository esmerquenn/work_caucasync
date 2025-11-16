"use client"

import { useSelector } from "react-redux"



function ABC() {
    const { test } = useSelector(store => store.layout)

    return (
        <div>{test}</div>
    )
}

export default ABC