import { useEffect, useState } from "react"

export const Colors = ({setColor}) => {
  

    return <>
        <button 
            onClick={()=>{ 
                document.getElementById("root").style.backgroundColor = 'rgb(57, 112, 151)'
                setColor('rgb(57, 112, 151)')
                
                }}>   
            0
        </button>
        <button 
            onClick={()=>{ 
                document.getElementById("root").style.backgroundColor = 'rgb(125, 83, 162)'
                setColor('rgb(125, 83, 162)')
                }}>
            1
        </button>
        <button 
            onClick={()=>{ 
                document.getElementById("root").style.backgroundColor = 'rgb(81, 138, 88)'
                setColor('rgb(81, 138, 88)')
                }}>
            2
        </button>
        <button 
            onClick={()=>{
                document.getElementById("root").style.backgroundColor = 'rgb(164, 137, 60)'
                setColor('rgb(164, 137, 60)')
                }}>
            3
        </button>
        <button 
            onClick={()=>{
                document.getElementById("root").style.backgroundColor = 'rgb(186, 73, 73)'
                setColor('rgb(186, 73, 73)')
                }}>
            4
        </button>
        <button 
            onClick={()=>{
                document.getElementById("root").style.backgroundColor = 'rgb(84, 87, 100)'
                setColor('rgb(84, 87, 100)')
                }}>
            5
        </button>
       
    
    
    </>

}