import * as React from "react"
import heroImage from "../assets/heart-beat-2.png"
import "./LandingPage.css"

export default function Landing() {
  return (
    <div className="landing-page">
      <div className="hero">
        <img src={heroImage} alt="Hero Image"/>
        <div className="cta">
          <h1><span className="letter-color">L</span>ife <span className="letter-color">T</span>racker</h1>
          <p>Helping you take back control of your life</p>
        </div>
      </div>
    </div>
  )
}

//http://codepath-lifetracker.surge.sh/static/media/smartwatch-screen-digital-device.e2983a85.svg

