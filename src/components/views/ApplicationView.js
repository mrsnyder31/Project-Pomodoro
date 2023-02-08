import { useEffect, useState } from "react"
import { GuestView } from "./GuestView"
import { UserView } from "./UserView"

export const ApplicationViews = () => {
    
    const localPomoUser = localStorage.getItem("pomo_user")
    const PomoUser = JSON.parse(localPomoUser)

    const [login, setLogin] = useState({})

    useEffect(()=>{
        setLogin(PomoUser)
    },[])

    return <>
        {
            login ? <UserView /> : <GuestView />
        }
    
    
    </>
}