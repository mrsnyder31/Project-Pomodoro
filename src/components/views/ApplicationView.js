import { useEffect, useState } from "react"
import { FetchProjects } from "../data/DataAccess"
import { GuestView } from "./GuestView"
import { ProjectDisplay } from "./ProjectDisplay"
import { ProjectForm } from "./ProjectForm"
import { Timer } from "./Timer"
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