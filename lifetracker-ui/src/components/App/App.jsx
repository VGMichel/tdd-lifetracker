import LandingPage from "components/LandingPage/LandingPage"
import LoginPage from "components/LoginPage/LoginPage"
import Navbar from "components/Navbar/Navbar"
import RegistrationPage from "components/RegistrationPage/RegistrationPage"
import * as React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"

export default function App() {
  return (
    <div className="app">
      <React.Fragment>{
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={(
              <>
              <LandingPage />
              </>
            )}/>
            <Route path="/login" element={(
              <>
              <LoginPage />
              </>
            )}/>
            
            <Route path="/registration" element={(
              <>
              <RegistrationPage />
              </>
            )}/>
          </Routes>

        </BrowserRouter>
      
      }</React.Fragment>
    </div>
  )
}
