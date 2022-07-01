import * as React from "react"
import { Link } from "react-router-dom"
import { useRef, useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { useAuth } from "components/contexts/auth"
import { useNavigate } from "react-router-dom"
import "./LoginPage.css"

export default function LoginPage() {
  return (
    <div className="login-page">
        <LoginForm />
    </div>
  )
}

export function LoginForm() {

    const [user, setUser] = useState('')
    const auth = useAuth()
    const navigate = useNavigate()
    const [pwd, setPwd] = useState('')
    //const {register, handleSubmit, errors} = useForm()



    const loginUser = () => {
        auth.login(user)
        navigate('/')
    }
    
    return(
        <div className="login-form">
            <div className="card">
                <h2>Login</h2>
                <form className="form">
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input className="form-input"
                               type="email" 
                               name="email" 
                               placeholder="user@email.com"
                               autoComplete="off"
                               onChange={(e) => {setUser(e.target.value)}}
                               value={user}
                               required
                               />
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Password</label>
                        <input className="form-input" 
                               type="password" 
                               name="password" 
                               placeholder="•••••••"
                               onChange={(e) => {setPwd(e.target.value)}}
                               value={pwd}
                               required
                               />
                    </div>
                    <button className="submit-login btn" onClick={loginUser}>Login</button>
                </form>
                <div className="footer">
                    <p>Don't have an account? Sign up <Link className="auth-link" to='/registration'>here.</Link></p>
                </div>
            </div>
        </div>
    )
}