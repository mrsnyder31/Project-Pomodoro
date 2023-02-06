import { Link, useNavigate } from "react-router-dom"

export const GuestNavBar = () => {




    const navigate = useNavigate()
    return <>
     
     <ul className="navbar__container">
                <li className="navbar__item navbar__home">
                    <Link className="navbar__link" to="/">Home</Link>
                </li>
                
                <li className="navbar__item">
                    <Link className="navbar__link" to="/settings">Settings</Link>
                </li>
                
                <li className="navbar__item navbar__logout">
                    <Link className="navbar__link" to="/login" onClick={() => {
                        localStorage.removeItem("pomo_user")
                        navigate("/", { replace: true })
                    }}>Sign In</Link>
                </li>
            </ul>
    
    
    </>
}