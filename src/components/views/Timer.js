import { useEffect, useState } from "react"
import { FetchSettings } from "../data/DataAccess"


export const Timer = ({displaySettings, setDisplaySettings}) => {

    const [time, setTime] = useState(displaySettings.pomoTimer)
    const [paused, updatePause] = useState(false)
    const [timerSettings, setTimerSettings] = useState(displaySettings)

    useEffect(() => {
        
        document.getElementById("pomo__timer__text").innerHTML = `${time}:00`

        if (time === displaySettings.pomoTimer) {
            document.getElementById("root").style.backgroundColor = displaySettings.pomoColor

        }

        if (time === displaySettings.breakTimer) {
            document.getElementById("root").style.backgroundColor = displaySettings.breakColor
           
        }
    },
        [time])

        useEffect(()=>{
            FetchSettings().then((data)=>{ document.getElementById("root").style.backgroundColor = data[0].pomoColor})
            
        },[])

    useEffect(()=>{
        
        setDisplaySettings(timerSettings)
    },[timerSettings])

    useEffect(()=>{
       
        setTimerSettings(displaySettings)
        
    },[displaySettings])


    return <>

        <div className="pomo__window">

            <button className="pomo__btn" id="pomo__btn__main" onClick={
                () => {

                    setTime(displaySettings.pomoTimer)
                    SetMainStyles()
                    displaySettings.pomo = true
                    document.getElementById("root").style.backgroundColor = displaySettings.pomoColor
                    document.getElementById("give__timer__too").innerHTML = `${displaySettings.pomoTimer}:00 - Work Hard!`
                }
            }>Pomo
            </button>

            <button className="pomo__btn" id="pomo__btn__break" onClick={
                () => {

                    setTime(displaySettings.breakTimer)
                    SetBreakStyles()
                    displaySettings.pomo = false
                    document.getElementById("root").style.backgroundColor = displaySettings.breakColor
                    document.getElementById("give__timer__too").innerHTML = `${displaySettings.breakTimer}:00 - Play Hard!`
                }
            }>Break
            </button>


            <div id="pomo__timer__text">`${time}:00`</div>

            <div id="pomo__timer__playback__container">
                <button className="pomo__btn" id="pomo__btn__start" onClick={
                    () => {

                        let minutes = time
                        let seconds = 60

                        
                        const counter = setInterval(timer, 1)

                        function timer() {
                            seconds--
                        
                            if (minutes <= 0 && seconds <= 0) {
                                clearInterval(counter)
                                if (time === displaySettings.pomoTimer) {
                                
                                    document.getElementById("pomo__timer__text").innerHTML = displaySettings.breakTimer
                                    document.getElementById("give__timer__too").innerHTML = `05:00 - Play Hard!`
                                    setTime(displaySettings.breakTimer)
                                    SetBreakStyles()
                                    document.getElementById("pomo__btn__start").innerHTML = 'Start'
                                    return
                                }
                                if (time === displaySettings.breakTimer) {
                                    document.getElementById("pomo__timer__text").innerHTML = displaySettings.pomoTimer
                                    document.getElementById("give__timer__too").innerHTML = `25:00 - Work Hard!`
                                    setTime(displaySettings.pomoTimer)
                                    SetMainStyles()
                                    document.getElementById("pomo__btn__start").innerHTML = 'Start'
                                    return
                                }
                            }
                            if (seconds === 0) {
                                minutes = minutes - 1
                                seconds = 60
                            }

                            document.getElementById("pomo__timer__text").innerHTML = `${minutes}:${seconds}`
                            document.getElementById("give__timer__too").innerHTML = `${minutes}:${seconds} - Get It!`
                            document.getElementById("pomo__btn__start").innerHTML = 'Pause'
                        
                    }
                  

                    }
                }>
                    Start</button>
            </div>
        </div>


    </>
}


const SetBreakStyles = () => {
    document.getElementById("pomo__btn__break").style = "font-weight: bold";
    document.getElementById("pomo__btn__break").style.background = "rgba(0, 0, 0, 0.15)";
    document.getElementById("pomo__btn__main").style = "font-weight: 300";
    document.getElementById("pomo__btn__main").style.background = "none";
}

const SetMainStyles = () => {
    document.getElementById("pomo__btn__main").style = "font-weight: bold";
    document.getElementById("pomo__btn__main").style.background = "rgba(0, 0, 0, 0.15)";
    document.getElementById("pomo__btn__break").style = "font-weight: 300";
    document.getElementById("pomo__btn__break").style.background = "none";
}
