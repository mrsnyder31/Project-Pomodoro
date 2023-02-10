import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import { FetchSettings } from "../data/DataAccess";
import "./Login.css"

export const Login = () => {
    const [email, set] = useState("")
    const navigate = useNavigate()

    useEffect(()=>{
        FetchSettings().then((data)=>{ document.getElementById("root").style.backgroundColor = data[0].pomoColor})
        
    },[])

    const handleLogin = (e) => {
        e.preventDefault()

        return fetch(`http://localhost:8088/users?email=${email}`)
            .then(res => res.json())
            .then(foundUsers => {
                if (foundUsers.length === 1) {
                    const user = foundUsers[0]
                    localStorage.setItem("pomo_user", JSON.stringify({
                        id: user.id,
                        name: user.name,
                        email: user.email
                    }))

                    navigate("/")
                }
                else {
                    window.alert("Invalid login")
                }
            })
    }

    return (
        <main className="pomo__container__login">
            <section>
                    <h1> Project Pomodoro</h1>
                    <h4>Login</h4>
                <form className="pomo__form__login" onSubmit={handleLogin}>
                    
                        <label className="pomo__email" htmlFor="inputEmail"> Email address </label>
                        <input type="email"
                            value={email}
                            onChange={evt => set(evt.target.value)}
                            className="form-control"
                            placeholder="Email address"
                            required autoFocus />
                    
                <section className="btn__container">
                        <button className="btn__login" type="submit">
                            Sign in
                        </button>
                </section> 
                </form>
            </section>
            <section className="link--register">
                <Link to="/register">Not a member yet?</Link>
            </section>
        </main>
    )
}
