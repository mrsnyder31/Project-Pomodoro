import { useEffect, useState } from "react"
import { FetchProjects, FetchTasks } from "../data/DataAccess"

export const StoredProjects = () => {
    const [projects, setProjects] = useState([{id: 0, name: "Create a new Project"}])
    const [tasks, setTasks] = useState([{id: 0, name: "Create a new Task"}])

    useEffect(()=>{
        FetchProjects()
        .then((data) => {
            // const current = data.find(project => project.isCurrent)
            setProjects(data)
           
        })
    },[])
    useEffect(()=>{
        FetchTasks()
        .then((data) => {
            setTasks(data)
        })
    },[])


    return <>
        <div className="pomo__stored__projects__container">
        
            {
                projects.map(proj => {
                    return <>
                    <div className="give__me__borders">
                     <div key={`projectDisplayMap--${proj.id}`} className="pomo__project__title"> <header>{proj.name}</header> </div>
                {

                    tasks.map(tA => {
                        if (tA.projectId === proj.id){
                            return <div key={`taskDisplayMap--${tA.id}`} className="pomo__task__item">
                                <header className="">{tA.name}</header> 
                            </div>
                        }
                    })
                }
                    </div>
                    </>
                })
            }
        
        </div>
        
    </>
}