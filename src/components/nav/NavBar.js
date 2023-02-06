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
                
                <ul className="navbar">
                <li className="navbar__item navbar__home">
                    <Link className="navbar__link" to="/">Home</Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/projects">Projects</Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/settings">Settings</Link>
                </li>
                
                <li className="navbar__item navbar__logout">
                    <Link className="navbar__link" to="/login" onClick={() => {
                        localStorage.removeItem("pomo_user")
                        navigate("/", { replace: true })
                    }}>Logout</Link>
                </li>
            </ul>
            :
            <GuestNavBar />
            }   
        
        
        </>

}