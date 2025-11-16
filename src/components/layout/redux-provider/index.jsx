"use client"





import { store } from "@/store"
import { useEffect } from "react"
import { Provider } from "react-redux"



function ReduxProvider({children}) {

    useEffect(()=>{
    },[])

    return (
        <Provider store={store}>{children}</Provider>
    )
}

export default ReduxProvider