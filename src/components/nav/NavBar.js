import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()


    
        return <>
         <ul className="navbar">
                <li className="navbar__item navbar__home">
                    <Link className="navbar__link" to="/">Home</Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/">Projects</Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/">Settings</Link>
                </li>
                
                <li className="navbar__item navbar__logout">
                    <Link className="navbar__link" to="" onClick={() => {
                        localStorage.removeItem("pomo_user")
                        navigate("/", { replace: true })
                    }}>Logout</Link>
                </li>
            </ul>
        
        
        
        </>

}