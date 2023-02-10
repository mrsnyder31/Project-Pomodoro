import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { FetchProjects, FetchSettings } from "../data/DataAccess"

import { Timer } from "./Timer"

export const GuestView = ({settings, setSettings}) => {
    
    const [displaySettings, setDisplaySettings] = useState(settings)
    const [projectForm, setProjectForm] = useState(false)
    const [projectDisplay, setProjectDisplay] = useState(false)
    
    const navigate = useNavigate()

    useEffect(()=>{
        FetchSettings().then((data)=>{ document.getElementById("root").style.backgroundColor = data[0].pomoColor})
        
    },[])

    useEffect(()=>{
        setSettings(displaySettings)
    },[displaySettings])

    useEffect(()=>{
        setDisplaySettings(settings)
    },[settings])  

    useEffect(()=>{
        FetchProjects()
        .then((data) =>{
            const current = data.find(project => project.isCurrent)
            if(current){
                setProjectForm(true)
                setProjectDisplay(true)
            } else {
                setProjectForm(false)
                setProjectDisplay(false)
            }
        })
    },[])

    return <>
   
        <div className="pomo__guest__container">

        <Timer displaySettings={displaySettings} setDisplaySettings={setDisplaySettings} />
            
            <div className="pomo__project__container">
            
                <button className="pomo__btn" id="pomo__btn__new__project"
                        onClick={() =>{
                            setProjectForm(true)
                            navigate("/login")}}>
                    Sign In To Create A Project
                </button>
                    
            </div>
        
        </div>
   
    </>
}