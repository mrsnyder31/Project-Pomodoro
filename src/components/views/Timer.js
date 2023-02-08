import { useEffect, useState } from "react"


export const Timer = ({displaySettings, setDisplaySettings}) => {

    const [time, setTime] = useState(25)
    const [paused, updatePause] = useState(false)

    useEffect(() => {
        
        document.getElementById("pomo__timer__text").innerHTML = `${time}:00`
        if (time === 25) {
            document.getElementById("root").style.backgroundColor = displaySettings
            setDisplaySettings(displaySettings)
            // document.getElementById("root").style.backgroundColor = 'rgb(57, 112, 151)'
            // setDisplaySettings('rgb(57, 112, 151)')
        }
        if (time === 5) {
            document.getElementById("root").style.backgroundColor = 'rgb(125, 83, 162)'
            setDisplaySettings('rgb(125, 83, 162)')
        }
    },
        [time])


    return <>

        <div className="pomo__window">

            <button className="pomo__btn" id="pomo__btn__main" onClick={
                () => {

                    setTime(25)
                    SetMainStyles()
                    setDisplaySettings(displaySettings)
                    // setDisplaySettings('rgb(57, 112, 151)')
                    document.getElementById("give__timer__too").innerHTML = `25:00 - Work Hard!`
                }
            }>Pomo
            </button>

            <button className="pomo__btn" id="pomo__btn__break" onClick={
                () => {

                    setTime(5)
                    SetBreakStyles()
                    setDisplaySettings('rgb(125, 83, 162)')
                    document.getElementById("give__timer__too").innerHTML = `05:00 - Play Hard!`
                }
            }>Break
            </button>


            <div id="pomo__timer__text">`${time}:00`</div>


            <div id="pomo__timer__playback__container">
                <button className="pomo__btn" id="pomo__btn__start" onClick={
                    () => {

                        let minutes = time
                        let seconds = 59

                        
                        const counter = setInterval(timer, 1)

                        function timer() {
                            seconds--
            
                            if (minutes <= 0 && seconds <= 0) {
                                clearInterval(counter)
                                if (time === 25) {
                                    document.getElementById("pomo__timer__text").innerHTML = `05:00`
                                    document.getElementById("give__timer__too").innerHTML = `05:00 - Play Hard!`
                                    setTime(5)
                                    SetBreakStyles()
                                    document.getElementById("pomo__btn__start").innerHTML = 'Start'
                                    return
                                }
                                if (time === 5) {
                                    document.getElementById("pomo__timer__text").innerHTML = `25:00`
                                    document.getElementById("give__timer__too").innerHTML = `25:00 - Work Hard!`
                                    setTime(25)
                                    SetMainStyles()
                                    document.getElementById("pomo__btn__start").innerHTML = 'Start'
                                    return
                                }
                            }
                            if (seconds === 0) {
                                minutes = minutes - 1
                                seconds = 59
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
