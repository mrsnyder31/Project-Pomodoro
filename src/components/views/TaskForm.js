import { useState } from "react"

export const TaskForm = ({setTaskObject, taskObject}) => {

    return <>
    
    <div className="pomo__task__field__container">
        <input type="text" className="pomo__task__field" placeholder="Task?" 
        onChange={(evt)=>{
            const copy = {...taskObject}
            copy.name = evt.target.value
            setTaskObject(copy)
        
        }}/>
        <input type="number" className="pomo__task__field" placeholder="Est. Pomo Count?" 
        onChange={(evt)=>{
            const copy = {...taskObject}
            copy.pomoCount = parseInt(evt.target.value)
            setTaskObject(copy)
        
        }}/>
    </div>
    
    
    </>
  

}