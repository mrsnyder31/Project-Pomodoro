import { useEffect, useState } from "react"
import { DeleteProject, DeleteTask, EditProject, FetchProjects, FetchTasks, PostTask } from "../data/DataAccess"
import { TaskForm } from "./TaskForm"

export const ProjectDisplay = ({setFunction, setForm}) => {

    const [task, setTask] = useState(false)
    const [trigger, setTrigger] = useState(false)
    const [taskObject, setTaskObject] = useState({
        name: "",
        projectId: 1,
        pomoCount: 1,
        isComplete: false
        
    })
    const [taskArray, setTaskArray] = useState([])
    const [projectArray, setProjectArray] = useState([])
    const [currentProject, setCurrentProject] = useState({})

    useEffect(()=>{
        FetchTasks()
        .then((data) => {
            setTaskArray(data)
        })
    },[task, trigger])

    useEffect(()=>{
        FetchProjects()
        .then((data) => {
            const current = data.find(project => project.isCurrent)
            setCurrentProject(current)
            setProjectArray(data)
        })
    },[task, trigger])

return  <>
    <div className="pomo__display__container">

        {

            projectArray.map(pA => {
                if (pA.id === currentProject?.id){
                    return<div key={`projectMap--${pA.id}`} className="pomo__project__title"> <header>{pA.name}</header> </div>
                }
            })
        }
               
        {

            taskArray.map(tA => {
                if (tA.projectId === currentProject?.id){
                    return<div key={`taskMapper--${tA.id}`} className="pomo__task__item">
                        <button className="pomo__btn task__btn">{tA.name}</button>
                        <button className="pomo__btn"
                                onClick={()=>{
                                    
                                    DeleteTask(tA.id)
                                    
                                    setTrigger(!trigger)


                                }}>
                            x
                        </button>
                    </div>
                }
            })
        }
            

    </div>

    <div id="pomo__task__here"></div>

    {
        task

        ? 

        <>

        <TaskForm setTaskObject={setTaskObject} taskObject={taskObject} />

        <div className="btn_holder">
        
            <button className="pomo__btn" id="pomo__btn__cancel"
                    onClick={()=>{
                        document.getElementById("pomo__task__here").innerHTML = ""
                        setTask(false)
                    }}>
                Cancel
            </button>

            <button className="pomo__btn" id="pomo__btn__save" 
                    onClick={()=>{
                        document.getElementById("pomo__task__here").innerHTML = ""
                        const copy = {...taskObject}
                        copy.projectId = currentProject.id
                        PostTask(copy)
                        
                        setTask(false)
                        setTrigger(!trigger)

                    }}>
                Save 
            </button>
        </div>
        </>

        :

        <>

        <button className="pomo__btn" id="pomo__btn__new__task" 
                onClick={()=>{
                    setTask(true)
                    
                    }}>
            + Add Task
            </button>
        <div className="btn_holder">    
            <button className="pomo__btn"
                    onClick={()=>{
                        taskArray.forEach(task => {
                            if(task.projectId === currentProject.id){
                            DeleteTask(task.id)}
                        });
                        DeleteProject(currentProject.id)
                        setFunction(false)
                        setForm(false)
          
                    }}>
                Delete Project
            </button>

            <button className="pomo__btn"
                onClick={()=>{
                    const copy = {...currentProject}
                    copy.isComplete = true
                    copy.isCurrent = false
                    EditProject(copy)
                    setForm(false)
                    setFunction(false)
                
                }}>
                Complete Project
            </button>
        </div>
        </>
    }
       
</>

}