import { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { EditSettings, FetchSettings } from "./data/DataAccess"
import { NavBar } from "./nav/NavBar"
import "./Pomo.css"
import { ApplicationViews } from "./views/ApplicationView"
import { Settings } from "./views/Settings"
import { StoredProjects } from "./views/StoredProjects"



export const Pomo = () => {

	const [userSettings, setUserSettings] = useState(
		{
			pomoColor: "rgb(186, 73, 73)",
			breakColor: "rgb(125, 83, 162)",
			pomoTimer: 25,
			breakTimer: 5,
			pomo: true
		}
	)
	
	useEffect(()=>{
		FetchSettings().then((data)=>{setUserSettings(data[0])})
		
	},[])


	useEffect(()=>{
		if(userSettings.breakTimer && userSettings.pomoTimer && userSettings.breakColor && userSettings.breakColor){

			EditSettings(userSettings)
		}
		
	},[userSettings])
	

    return <>
	
	 <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="*" element={
	
			<>
				<NavBar />
				<ApplicationViews userSettings={userSettings} setUserSettings={setUserSettings} />
			</>
		
			
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
			<Settings setUserSettings={setUserSettings} userSettings={userSettings} />
			</>
		 } />

    </Routes>
	</>
}