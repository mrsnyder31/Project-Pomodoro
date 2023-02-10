import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { GuestNavBar } from "./GuestNavBar"
import "./NavBar.css"

export const NavBar = () => {


    const localPomoUser = localStorage.getItem("pomo_user")
    const PomoUser = JSON.parse(localPomoUser)

    const [login, setLogin] = useState({})

    useEffect(()=>{
        setLogin(PomoUser)
    },[])
    
    const navigate = useNavigate()


    
    return <>
        {
            login 
            ?
            
            <div className="navbar__container">

            <div className="navbar__home">
                <li className="navbar__item navbar__home">
                    <Link className="navbar__link" to="/">Home</Link>
                </li>
            </div>

            <div className="centerMe">
                <li className="navbar__item">
                    <Link className="navbar__link" to="/projects">Projects</Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/settings">Settings</Link>
                </li>
            </div>
            <div className="navbar__logout">
                <li className="navbar__item navbar__logout">
                    <Link className="navbar__link" to="/login" onClick={() => {
                        localStorage.removeItem("pomo_user")
                        navigate("/", { replace: true })
                    }}>Logout</Link>
                </li>
            </div>
        </div>
        :
        <GuestNavBar />
        }   
    
    
    </>

}