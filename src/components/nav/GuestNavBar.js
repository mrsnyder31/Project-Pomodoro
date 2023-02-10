import { Link, useNavigate } from "react-router-dom"

export const GuestNavBar = () => {




    const navigate = useNavigate()
    return <>
     
     <div className="navbar__container">

                <div className="navbar__home">
                    <li className="navbar__item navbar__home">
                        <Link className="navbar__link" to="/">Home</Link>
                    </li>
                </div>

                <div className="centerMe">
                   
                    <li className="navbar__item">
                        <Link className="navbar__link" to="/settings">Settings</Link>
                    </li>
                </div>
                <div className="navbar__logout">
                    <li className="navbar__item navbar__logout">
                        <Link className="navbar__link" to="/login" onClick={() => {
                            localStorage.removeItem("pomo_user")
                            navigate("/", { replace: true })
                        }}>Sign In</Link>
                    </li>
                </div>
            </div>
    
    </>
}