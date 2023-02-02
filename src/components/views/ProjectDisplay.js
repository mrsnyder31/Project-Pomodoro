import { useEffect, useState } from "react"
import { FetchProjects, FetchTasks, PostTask } from "../data/DataAccess"
import { TaskForm } from "./TaskForm"

export const ProjectDisplay = ({setFunction}) => {
    const [task, setTask] = useState(false)
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
    },[task])

    useEffect(()=>{
        FetchProjects()
        .then((data) => {
            const current = data.find(project => project.isCurrent)
            setCurrentProject(current)
            setProjectArray(data)
        })
    },[task])

return  <>
    <div className="pomo__display__container">

        {
            //display project where pomoUser.id === pA.userId && pA.isCurrent
                projectArray.map(pA => {
                    if (pA.id === 1){
                        return<div className="pomo__project__title"> <header>{pA.name}</header> </div>
                    }
                })
        }
        
        
        {
            //display tasks where tA.projectId === useState=currentProject.id 
                taskArray.map(tA => {
                    if (tA.projectId === 1){
                        return<div className="pomo__task__item">
                            {/* <button className="pomo__btn">o</button>    */}
                            <button className="pomo__btn task__btn">{tA.name}</button>
                            <button className="pomo__btn"
                                    onClick={()=>{
                                        alert("i can't go this way...")

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
        <button className="pomo__btn" 
                onClick={()=>{
                    document.getElementById("pomo__task__here").innerHTML = ""
                    setTask(false)
                }}>
            Cancel
        </button>

        <button className="pomo__btn" id="pomo__btn__save" 
                onClick={()=>{
                    document.getElementById("pomo__task__here").innerHTML = ""
                    PostTask(taskObject)
                    setTask(false)
                    
                    
                }}>
            Save
        </button>
        </>

        :

        <>


        <button className="pomo__btn" id="pomo__btn__new__task" 
                onClick={()=>{
                    setTask(true)
                    
                    }}>
            + Add Task
            </button>
        <button className="pomo__btn"onClick={()=>{alert("i should probably sleep first...")}}>Delete Project</button>
        <button className="pomo__btn"onClick={()=>{alert("i should probably sleep first...")}}>Complete Project</button>
        </>
    }


         
</>

}