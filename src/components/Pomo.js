import { Route, Routes } from "react-router-dom"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { NavBar } from "./nav/NavBar"

import "./Pomo.css"
import { ApplicationViews } from "./views/ApplicationView"



export const Pomo = () => {
    return <>

	 <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register />} />

        <Route path="*" element={
			// <Authorized>
				<>
					<NavBar />
					<ApplicationViews />
				</>
			// </Authorized>

		} />

    </Routes>
	</>
}