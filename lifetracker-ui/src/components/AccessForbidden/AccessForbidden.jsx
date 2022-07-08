import { Link } from "react-router-dom"
import * as React from "react"
import "./AccessForbidden.css"

export default function AccessForbidden() {
  return (
    <div className="access-forbidden">
      <div className="container">
        <h1>Access Forbidden</h1>
        <p>You don't have proper access to this page.
          <br></br>
          Login in to view the contents.
        </p>
        <Link className="login-button" to="/login">
          <LoginButton />
        </Link>
      </div>
    </div>
  )
}

export function LoginButton() {

    return(
          <button className="submit-login btn">Log In</button>
    )
}