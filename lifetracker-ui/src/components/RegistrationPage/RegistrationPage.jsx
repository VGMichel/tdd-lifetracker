import * as React from "react"
import { Link } from "react-router-dom"
import "./RegistrationPage.css"

export default function RegistrationPage() {
  return (
    <div className="registration-page">
      <RegistrationForm />
    </div>
  )
}

export function RegistrationForm() {
  return (
    <div className="registration-page">
      <div className="card">
        <h2>Register</h2>
        <div className="form">
          <div className="input-field">
            <label for="email">Email</label>
            <input className="form-input" type="email" name="email" placeholder="Enter a valid email" />
          </div>
          <div className="input-field">
            <label for="username">Username</label>
            <input className="form-input" type="text" name="username" placeholder="your username" />
          </div>
          <div className="split-input-field">
            <div className="input-field">
              <input className="form-input" type="text" name="firstName" placeholder="First Name" />
            </div>
            <div className="input-field">
              <input className="form-input" type="text" name="lastName" placeholder="Last Name" />
            </div>
          </div>
          <div className="input-field">
            <label for="password">Password</label>
            <input className="form-input" type="password" name="password" placeholder="Enter a secure password" />
          </div>
          <div className="input-field">
            <label for="passwordConfirm">Confirm Password</label>
            <input className="form-input" type="password" name="passwordConfirm" placeholder="Confirm your password" />
          </div>
          <button className="btn">Register</button>
        </div>
        <div className="footer">
          <p>Already have an account? Login <Link className="auth-link" to='/login'>here.</Link></p>
        </div>
      </div>
    </div>
  )
}