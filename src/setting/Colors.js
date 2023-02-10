import { useEffect, useState } from "react"

export const Colors = ({setColor, color}) => {
  

    return <>
    <div className="pomo__timer__color">
    Timer: 
        <button
            onClick={()=>{ 
                document.getElementById("root").style.backgroundColor = 'rgb(57, 112, 151)'
                const copy = {...color}
                copy.pomoColor = 'rgb(57, 112, 151)'
                setColor(copy)
                
                }}>   
            0
        </button>
        <button 
            onClick={()=>{ 
                document.getElementById("root").style.backgroundColor = 'rgb(125, 83, 162)'
                const copy = {...color}
                copy.pomoColor = 'rgb(125, 83, 162)'
                setColor(copy)
                }}>
            1
        </button>
        <button 
            onClick={()=>{ 
                document.getElementById("root").style.backgroundColor = 'rgb(81, 138, 88)'
                const copy = {...color}
                copy.pomoColor = 'rgb(81, 138, 88)'
                setColor(copy)
                }}>
            2
        </button>
        <button 
            onClick={()=>{
                document.getElementById("root").style.backgroundColor = 'rgb(164, 137, 60)'
                const copy = {...color}
                copy.pomoColor = 'rgb(164, 137, 60)'
                setColor(copy)
                }}>
            3
        </button>
        <button 
            onClick={()=>{
                document.getElementById("root").style.backgroundColor = 'rgb(186, 73, 73)'
                const copy = {...color}
                copy.pomoColor = 'rgb(186, 73, 73)'
                setColor(copy)
                }}>
            4
        </button>
        <button 
            onClick={()=>{
                document.getElementById("root").style.backgroundColor = 'rgb(84, 87, 100)'
                const copy = {...color}
                copy.pomoColor = 'rgb(84, 87, 100)'
                setColor(copy)
                }}>
            5
        </button>
    </div>   
    
    <div className="pomo__break__color">
    Break:
        <button 
            onClick={()=>{ 
                document.getElementById("root").style.backgroundColor = 'rgb(57, 112, 151)'
                const copy = {...color}
                copy.breakColor = 'rgb(57, 112, 151)'
                setColor(copy)
                
                }}>   
            0
        </button>
        <button 
            onClick={()=>{ 
                document.getElementById("root").style.backgroundColor = 'rgb(125, 83, 162)'
                const copy = {...color}
                copy.breakColor = 'rgb(125, 83, 162)'
                setColor(copy)
                }}>
            1
        </button>
        <button 
            onClick={()=>{ 
                document.getElementById("root").style.backgroundColor = 'rgb(81, 138, 88)'
                const copy = {...color}
                copy.breakColor = 'rgb(81, 138, 88)'
                setColor(copy)
                }}>
            2
        </button>
        <button 
            onClick={()=>{
                document.getElementById("root").style.backgroundColor = 'rgb(164, 137, 60)'
                const copy = {...color}
                copy.breakColor = 'rgb(164, 137, 60)'
                setColor(copy)
                }}>
            3
        </button>
        <button 
            onClick={()=>{
                document.getElementById("root").style.backgroundColor = 'rgb(186, 73, 73)'
                const copy = {...color}
                copy.breakColor = 'rgb(186, 73, 73)'
                setColor(copy)
                }}>
            4
        </button>
        <button 
            onClick={()=>{
                document.getElementById("root").style.backgroundColor = 'rgb(84, 87, 100)'
                const copy = {...color}
                copy.breakColor = 'rgb(84, 87, 100)'
                setColor(copy)
                }}>
            5
        </button>
    </div>  
    </>

}