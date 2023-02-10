import { useState } from "react"
import { PostProject} from "../data/DataAccess"


export const ProjectForm = ({setFunction, setProject}) => {


    const localPomoUser = localStorage.getItem("pomo_user")
    const PomoUser = JSON.parse(localPomoUser)

    const [projectObject, setProjectObject] = useState({
        name: "",
        userId: PomoUser.id,
        isCurrent: true,
        isComplete: false

    })

return  <>
<div className="pomo__project__form">
    <div className="pomo__form__item">
        
        <input type="text" className="pomo__form__field" placeholder="What's Your Deal?" onChange={(evt)=>{
            const copy = {...projectObject}
            copy.name = evt.target.value
            setProjectObject(copy)
        }}/>
         

        <div id="pomo__task__here"></div>
    
        
        <button className="pomo__btn" onClick={()=>{
            
                setFunction(false)
                }}>
            Cancel
        </button>

        <button className="pomo__btn" id="pomo__btn__save" onClick={()=>{
                
                PostProject(projectObject)
                setProject(true)
                }}>
            Save
        </button>
            
       
    </div>
</div>
</>
    
}