import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { FetchSettings, PostUser } from "../data/DataAccess"
import "./Login.css"

export const Register = () => {
    const [customer, setCustomer] = useState({
        email: "",
        name: "",
        
    })
    let navigate = useNavigate()

    useEffect(()=>{
        FetchSettings().then((data)=>{ document.getElementById("root").style.backgroundColor = data[0].pomoColor})
        
    },[])

    const registerNewUser = () => {
        return PostUser(customer)
            .then(createdUser => {
                if (createdUser.hasOwnProperty("id")) {
                    localStorage.setItem("pomo_user", JSON.stringify({
                        id: createdUser.id,
                        name: createdUser.name,
                        email: createdUser.email
                    }))

                    navigate("/")
                }
            })
    }

    const handleRegister = (e) => {
        e.preventDefault()
        return fetch(`http://localhost:8088/users?email=${customer.email}`)
            .then(res => res.json())
            .then(response => {
                if (response.length > 0) {
                   
                    window.alert("Account with that email address already exists")
                }
                else {
                  
                    registerNewUser()
                }
            })
    }

    const updateCustomer = (evt) => {
        const copy = {...customer}
        copy[evt.target.id] = evt.target.value
        setCustomer(copy)
    }

    return (
        <main className="pomo__container__register" style={{ textAlign: "center" }}>
            <section>
                <h1 className="h3 mb-3 font-weight-normal">Please Register for Project Pomodoro</h1>
            <form className="pomo__form__login" onSubmit={handleRegister}>
                <section>
                    <label htmlFor="fullName"> Full Name </label>
                    <input onChange={updateCustomer}
                           type="text" id="name" className="form-control"
                           placeholder="Enter your name" required autoFocus />
                </section>
                <section>
                    <label htmlFor="email"> Email address </label>
                    <input onChange={updateCustomer}
                        type="email" id="email" className="form-control"
                        placeholder="Email address" required />
                </section>
                <section className="btn__container">
                    <button className="btn__login" type="submit"> Register </button>
                </section>
            </form>
            </section>
        </main>
    )
}
