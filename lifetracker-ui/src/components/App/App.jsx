import * as React from "react"
import { useState } from "react"
import ActivityPage from "components/ActivityPage/ActivityPage"
import LandingPage from "components/LandingPage/LandingPage"
import LoginPage from "components/LoginPage/LoginPage"
import Navbar from "components/Navbar/Navbar"
import NotFound from "components/NotFound/NotFound"
import NutritionOverview from "components/NutritionOverview/NutritionOverview"
import NutritionPage from "components/NutritionPage/NutritionPage"
import NutritionNew from "components/NutritionNew/NutritionNew"
import NutritionDetail from "components/NutritionDeail/NutritionDetail"
import ExercisePage from "components/ExercisePage/ExercisePage"
import RegistrationPage from "components/RegistrationPage/RegistrationPage"
import SleepPage from "components/SleepPage/SleepPage"
import AccessForbidden from "components/AccessForbidden/AccessForbidden"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthContextProvider } from "components/contexts/auth"
import { useAuth } from "components/contexts/auth"
import "./App.css"

//export default function AppContainer() {
//  return(
//    <AuthContextProvider>
//      <App />
//    </AuthContextProvider>
//  )
// }

export default function App() {
  
  return (
    <div className="app">
      <React.Fragment>{
        <AuthContextProvider>
        <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<LandingPage />}/>
              <Route path="/login" element={<LoginPage />}/>
              <Route path="/registration" element={<RegistrationPage />}/>
              <Route path="*" element={<NotFound />}/>
              <Route path="/activity" element={<ActivityPage />}/>
              <Route path="/exercise" element={<ExercisePage />}/>
              <Route path="/nutrition/*" element={<NutritionPage />}/>
              <Route path="/sleep" element={<SleepPage />}/>
              <Route path="/access-forbidden" element={<AccessForbidden />}/>
            </Routes>
        </BrowserRouter>
        </AuthContextProvider>
      }</React.Fragment>
    </div>
  )
}
