import { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { NavBar } from "./nav/NavBar"

import "./Pomo.css"
import { ApplicationViews } from "./views/ApplicationView"
import { Settings } from "./views/Settings"
import { StoredProjects } from "./views/StoredProjects"



export const Pomo = () => {

	const [userSettings, setUserSettings] = useState("rgb(57, 112, 151)")
	
	// console.log(userSettings)

    return <>
	
	 <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="*" element={
			// <Authorized>
			<>
					<NavBar />
					<ApplicationViews userSettings={userSettings} setUserSettings={setUserSettings} />
				</>
			// </Authorized>
			
		} />
		 <Route path="/projects" element={
			<>
			<NavBar />
			<StoredProjects />
			</>
		 } />

		 <Route path="/settings" element={
			<>
			<NavBar />
			<Settings setUserSettings={setUserSettings} />
			</>
		 } />

    </Routes>
	</>
}