import * as React from "react"
import ActivityPage from "components/ActivityPage/ActivityPage"
import LandingPage from "components/LandingPage/LandingPage"
import LoginPage from "components/LoginPage/LoginPage"
import Navbar from "components/Navbar/Navbar"
import NotFound from "components/NotFound/NotFound"
import NutritionPage from "components/NutritionPage/NutritionPage"
import ExercisePage from "components/ExercisePage/ExercisePage"
import RegistrationPage from "components/RegistrationPage/RegistrationPage"
import AccessForbidden from "components/AccessForbidden/AccessForbidden"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthProvider } from "components/contexts/auth"
import "./App.css"
import SleepPage from "components/SleepPage/SleepPage"

export default function App() {
  return (
    <div className="app">
      <React.Fragment>{
        <AuthProvider>
        <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<LandingPage />}/>
              <Route path="/login" element={<LoginPage />}/>
              <Route path="/registration" element={<RegistrationPage />}/>
              <Route path="*" element={<NotFound />}/>
              <Route path="/activity" element={<ActivityPage />}/>
              <Route path="/exercise" element={<ExercisePage />}/>
              <Route path="/nutrition" element={<NutritionPage />}/>
              <Route path="/sleep" element={<SleepPage />}/>
              <Route path="/access-forbidden" element={<AccessForbidden />}/>
            </Routes>
        </BrowserRouter>
        </AuthProvider>
      }</React.Fragment>
    </div>
  )
}
