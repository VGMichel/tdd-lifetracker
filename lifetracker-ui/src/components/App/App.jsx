import Landing from "components/Landing/Landing"
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
              <Landing />
              </>
            )}/>
            <Route path="/login" element={(
              <>
              <Landing />
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
