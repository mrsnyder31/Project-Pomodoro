import { useEffect, useState } from "react"
import { DeleteProject, DeleteTask, EditProject, FetchProjects, FetchTasks } from "../data/DataAccess"
import { useNavigate } from "react-router-dom"


export const StoredProjects = () => {

    const localPomoUser = localStorage.getItem("pomo_user")
    const PomoUser = JSON.parse(localPomoUser)

    const [login, setLogin] = useState({})
    const [trigger, setTrigger] = useState(true)

    useEffect(()=>{
        setLogin(PomoUser)
    },[])
    
    const navigate = useNavigate()
    const [projects, setProjects] = useState([])
    const [tasks, setTasks] = useState([])

    useEffect(()=>{
        FetchProjects()
        .then((data) => {
            // const current = data.find(project => project.isCurrent)
            setProjects(data)
           
        })
    },[trigger])
    useEffect(()=>{
        FetchTasks()
        .then((data) => {
            setTasks(data)
        })
    },[trigger])


    return <>
        <div className="pomo__stored__projects__container">
        
            {
                projects.map(proj => {
                    if(PomoUser.id === proj.userId)
                    return <div key={`displayContainer--${proj.id}${proj.name}`} className="give__me__borders">
                   
                     <div key={`projectDisplayMap--${proj.id}`} className="pomo__project__title"> <header>{proj.name} </header> </div>
                {

                    tasks.map(tA => {
                        if (tA.projectId === proj.id){
                            return <div key={`taskDisplayMap--${tA.id}`} className="pomo__task__item">
                                <header className="">{tA.name}</header> 
                            </div>
                        }
                    })
                }

                        <button className="pomo__btn"
                            // onClick={()=>{
                            //     const copy = {...currentProject}
                            //     copy.isComplete = false
                            //     copy.isCurrent = true
                            //     EditProject(copy)
                            //     setForm(true)
                            //     setFunction(true)
                            
                            // }}
                            >
                            Resume Project
                        </button>


                        <button className="pomo__btn" 
                         onClick={()=>{
                            tasks.forEach(task => {
                                if(task.projectId === proj.id){
                                DeleteTask(task.id)}
                            });
                            DeleteProject(proj.id)
                            setTrigger(!trigger)
                            
                         
                            
                           
                        }}>Delete Project</button>
                    </div>
                   
                })
            }
            
        </div>
        
    </>
}