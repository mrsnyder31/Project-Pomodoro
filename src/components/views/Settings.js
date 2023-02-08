import { useEffect, useState } from "react"
import { Colors } from "../../settings/Colors"

export const Settings = ({setUserSettings}) => {
    const [color, setColor] = useState("")
    

    useEffect(()=>{
        setUserSettings(color)

    },[color])



    return <>
    <div className="pomo__settings__container">

        <div>Timer</div>


        <div>Color</div>
        <Colors setColor={setColor}/>

        <div>Sound</div>
    
    </div>
    </>
}