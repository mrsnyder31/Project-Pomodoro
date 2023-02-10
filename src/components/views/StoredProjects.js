import { useEffect, useState } from "react"
import { DeleteProject, DeleteTask, EditProject, FetchProjects, FetchSettings, FetchTasks } from "../data/DataAccess"
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
        FetchSettings().then((data)=>{ document.getElementById("root").style.backgroundColor = data[0].pomoColor})
        
    },[])

    useEffect(()=>{
        FetchProjects()
        .then((data) => {
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
        <h1> {PomoUser.name}'s Projects</h1>
            {
                projects.map(proj => {
                    if(PomoUser.id === proj.userId)
                    return <div key={`displayContainer--${proj.id}${proj.name}`} className="give__me__borders">
                   
                     <div key={`projectDisplayMap--${proj.id}`} className="pomo__project__title"> <header>{proj.name} </header> </div>
                {

                    tasks.map(tA => {
                        if (tA.projectId === proj.id){
                            return <div key={`taskDisplayMap--${tA.id}`} className="pomo__stored__item">
                                <header className="">{tA.name}</header> 
                            </div>
                        }
                    })
                }

                        {/* <button className="pomo__btn">
                            Resume Project
                        </button> */}


                        <button className="pomo__stored__delete" 
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