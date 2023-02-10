export const SetTime = ({setTime, time}) => {

return <>

<div className="pomo__setPomo">
    Timer:
<input type="number" className="pomo__set" placeholder="Set Pomo Timer" 
        onChange={(evt)=>{
            const copy = {...time}
            copy.pomoTimer = parseInt(evt.target.value)
            setTime(copy)
        
        }}/>
</div>

<div className="pomo__setBreak">
    Break:
<input type="number" className="pomo__set__" placeholder="Set Break Timer" 
        onChange={(evt)=>{
            const copy = {...time}
            copy.breakTimer = parseInt(evt.target.value)
            setTime(copy)
        
        }}/>
</div>


</>
}