import { useEffect, useState } from "react";
import { Pomo } from "../Pomo";
import { ApplicationViews } from "../views/ApplicationView";

export const bridge = () => {

    const [bridgeSettings, setBridgeSettings] = useState("")

    useEffect(()=>{
        setBridgeSettings("hamburger")
    },[])

   return <>
        <Pomo setBridgeSettings={setBridgeSettings} />
        <ApplicationViews setBridgeSettings={setBridgeSettings} />
    </>
}