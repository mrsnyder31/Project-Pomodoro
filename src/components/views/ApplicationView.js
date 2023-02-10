import { useEffect, useState } from "react"
import { GuestView } from "./GuestView"
import { UserView } from "./UserView"

export const ApplicationViews = ({userSettings, setUserSettings}) => {
    
    const localPomoUser = localStorage.getItem("pomo_user")
    const PomoUser = JSON.parse(localPomoUser)
    
    const [settings, setSettings] = useState(userSettings)
    const [login, setLogin] = useState({})
    
   

    useEffect(()=>{
        setLogin(PomoUser)
        setUserSettings(settings)
    },[settings])

    useEffect(()=>{
        setSettings(userSettings)
    },[userSettings])
    
   
   
    return <>
        {
            login ? <UserView  settings={settings} setSettings={setSettings} /> : <GuestView settings={settings} setSettings={setSettings} />
        }
    
    
    </>
}