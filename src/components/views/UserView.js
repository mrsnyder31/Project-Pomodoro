import { useEffect, useState } from "react"
import { FetchProjects } from "../data/DataAccess"
import { ProjectDisplay } from "./ProjectDisplay"
import { ProjectForm } from "./ProjectForm"
import { Timer } from "./Timer"

export const UserView = () => {
    
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
   
        <div className="pomo__container">

            <Timer  />
            
            <div className="pomo__project__container">
            
                {
                    projectForm

                    ?

                    <>

                    {

                        projectDisplay

                        ?
                    
                        <ProjectDisplay setFunction={setProjectDisplay} setForm={setProjectForm} />
                        
                        :

                        <ProjectForm setFunction={setProjectForm} setProject={setProjectDisplay} />

                    }
 
                    </>

                    :

                    <>

                    <button className="pomo__btn" id="pomo__btn__new__project"
                            onClick={() =>{setProjectForm(true)}}>
                        + New Project
                        </button>
                    
                    </>
                }
                
            </div>
        
        </div>
   
    </>
}