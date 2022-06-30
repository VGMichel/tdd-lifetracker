import * as React from "react"
import "./LandingPage.css"

export default function Landing() {
  return (
    <div className="landing-page">
      <div className="hero">
        <img className="hero-img" src="http://codepath-lifetracker.surge.sh/static/media/smartwatch-screen-digital-device.e2983a85.svg" alt="Hero Image"/>
        <div className="cta">
          <h1>Life Tracker</h1>
          <p>Helping you take back control of your life</p>
        </div>
      </div>
    </div>
  )
}


