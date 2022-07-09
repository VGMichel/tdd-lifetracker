import { Link } from "react-router-dom"
import * as React from "react"
import "./AccessForbidden.css"

export default function AccessForbidden() {
  return (
    <div className="access-forbidden">
      <div className="container">
        <i className="material-icons af-icon">heart_broken</i>
        <h1>You can't see this page yet.</h1>
        <p>You don't have proper access to this page.
          <br></br>
          <Link to="/login">Login</Link> or <Link to="/register">Sign up</Link> to view the contents.
        </p>
      </div>
    </div>
  )
}

export function LoginButton() {

    return(
          <button className="submit-login btn">Log In</button>
    )
}