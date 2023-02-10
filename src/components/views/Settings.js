import { useEffect, useState } from "react"
import { Colors } from "../../setting/Colors"
import { SetTime } from "../../setting/SetTime"
import { FetchSettings } from "../data/DataAccess"

export const Settings = ({setUserSettings, userSettings}) => {
    const [color, setColor] = useState(userSettings)
    const [time, setTime] = useState(userSettings)
    
    
    useEffect(()=>{
        setUserSettings(color)
    },[color])

    useEffect(()=>{
    
        setUserSettings(time)

    },[time])

    useEffect(()=>{
        FetchSettings().then((data)=>{ document.getElementById("root").style.backgroundColor = data[0].pomoColor})
        
    },[])

    return <>
    <div className="pomo__settings__container">

        <div>Timer</div>
        <SetTime setTime={setTime} time={time} />

        <div>Color</div>
        <Colors setColor={setColor} color={color} />

        <div>Sound</div>
    
    </div>
    </>
}