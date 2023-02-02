import { useState } from "react"

export const TaskForm = ({setTaskObject, taskObject}) => {
    
    // const flygon = document.getElementById("pomo__task__here").innerHTML
    return <>
    
    <div className="pomo__task__field__container">
        <input type="text" className="pomo__task__field" placeholder="Task?" 
        onChange={(evt)=>{
            const copy = {...taskObject}
            copy.name = evt.target.value
            setTaskObject(copy)
        }}/>
    </div>
    
    
    </>
  

}