import { useEffect, useState } from "react"
import { FetchProjects } from "../data/DataAccess"
import { Timer } from "./Timer"

export const GuestView = () => {
        
    const [projectForm, setProjectForm] = useState(false)
    const [projectDisplay, setProjectDisplay] = useState(false)

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

            <Timer  />
            
            <div className="pomo__project__container">
            
                <button className="pomo__btn" id="pomo__btn__new__project"
                        onClick={() =>{setProjectForm(true)}}>
                    Sign In To Create A Project
                </button>
                    
            </div>
        
        </div>
   
    </>
}