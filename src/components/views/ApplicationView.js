import { useEffect, useState } from "react"
import { FetchProjects } from "../data/DataAccess"
import { GuestView } from "./GuestView"
import { ProjectDisplay } from "./ProjectDisplay"
import { ProjectForm } from "./ProjectForm"
import { Timer } from "./Timer"
import { UserView } from "./UserView"

export const ApplicationViews = ({userSettings, setUserSettings}) => {
    
    const localPomoUser = localStorage.getItem("pomo_user")
    const PomoUser = JSON.parse(localPomoUser)
    
    const [settings, setSettings] = useState("rgb(57, 112, 151)")
    const [login, setLogin] = useState({})
    
   

    useEffect(()=>{
        setLogin(PomoUser)
        setSettings(userSettings)
        setUserSettings(settings)
    },[])
    useEffect(()=>{
        console.log(userSettings)
    },[userSettings])
    
   
    return <>
        {
            login ? <UserView  settings={settings} setSettings={setSettings} /> : <GuestView />
        }
    
    
    </>
}