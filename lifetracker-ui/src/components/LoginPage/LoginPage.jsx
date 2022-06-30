import * as React from "react"
import { Link } from "react-router-dom"
import "./LoginPage.css"

export default function LoginPage() {
  return (
    <div className="login-page">
        <LoginForm />
    </div>
  )
}

export function LoginForm() {
    return(
        <div className="login-form">
            <div className="card">
                <h2>Login</h2>
                <div className="form">
                    <div className="input-field">
                        <label for="email">Email</label>
                        <input type="email" name="email" placeholder="user@email.com" />
                    </div>
                    <div className="input-field">
                        <label for="email">Password</label>
                        <input type="password" name="password" placeholder="•••••••" />
                    </div>
                    <button className="btn">Login</button>
                </div>
                <div className="footer">
                    <p>Don't have an account? Sign up <Link className="auth-link" to='/registration'>here.</Link></p>
                </div>
            </div>
        </div>
    )
}