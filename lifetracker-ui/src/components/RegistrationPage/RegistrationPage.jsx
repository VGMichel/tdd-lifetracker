import * as React from "react"
import { useState, useEffect } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"
import apiClient from "components/services/apiClient"
import validation from "../validate"
import validate from "../validate"
import "./RegistrationPage.css"

export default function RegistrationPage({ user, setUser }) {
  return (
    <div className="registration-page">
      <RegistrationForm user={user} setUser={setUser} />
    </div>
  )
}

export function RegistrationForm({ user, setUser }) {

  let navigate = useNavigate()
  const [isProcessing, setIsProcessing] = useState(false)
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    email:  "",
    username: "",
    firstName: "",
    lastName: "",
    password: "",
    passwordConfirm: ""
  });

  useEffect(() => {
    if (user?.email) {
      navigate("/")
    }
  }, [user, navigate])

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
    
  }

  const signupUser = async () => {
    setIsProcessing(true)
    setErrors(validation(values))

    if (values.passwordConfirm !== values.password) {
      setErrors(validation(values.passwordConfirm))
      setIsProcessing(false)
      return
    } else {
      setErrors((e) => ({...e, passwordConfirm: null}))
    }

    const { data, error } = await apiClient.signupUser({ email: values.email, username: values.username, firstName: values.firstName, lastName: values.lastName, password: values.password })
    if (error) setErrors((e) => ({...e, values: error}))
    if (data?.user) {
      setUser(data.user)
      apiClient.setToken(data.token)
    }

    setIsProcessing(false)
  }

  return (
    <div className="registration-page">
      <div className="card">
        <h2>Register</h2>
        <div className="form">
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input 
              className="form-input" 
              type="email" 
              name="email" 
              placeholder="Enter a valid email" 
              value={values.email}
              onChange={handleChange} />
              {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="input-field">
            <label htmlFor="username">Username</label>
            <input 
              className="form-input" 
              type="text" 
              name="username" 
              placeholder="your username" 
              value={values.username}
              onChange={handleChange} />
              {errors.username && <span className="error">{errors.username}</span>}
          </div>
          <div className="split-input-field">
            <div className="input-field">
              <label htmlFor="first-name">First Name</label>
              <input 
                className="form-input" 
                type="text" 
                name="firstName" 
                placeholder="First Name" 
                value={values.firstName}
                onChange={handleChange} />
                {errors.firstName && <span className="error">{errors.firstName}</span>}
            </div>
            <div className="input-field">
              <label htmlFor="last-name">Last Name</label>
              <input 
                className="form-input" 
                type="text" 
                name="lastName" 
                placeholder="Last Name" 
                value={values.lastName}
                onChange={handleChange} />
                {errors.lastName && <span className="error">{errors.lastName}</span>}
            </div>
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input 
              className="form-input" 
              type="password" 
              name="password" 
              placeholder="Enter a secure password" 
              value={values.password}
              onChange={handleChange} />
              {errors.password && <span className="error">{errors.password}</span>}
          </div>
          <div className="input-field">
            <label htmlFor="passwordConfirm">Confirm Password</label>
            <input 
              className="form-input" 
              type="password" 
              name="passwordConfirm" 
              placeholder="Confirm your password" 
              value={values.passwordConfirm}
              onChange={handleChange} />
              {errors.passwordConfirm && <span className="error">{errors.passwordConfirm}</span>}
          </div>
          <button className="submit-registration btn" onClick={signupUser}>Create Account</button>
        </div>
        <div className="footer">
          <p>Already have an account? Login <Link className="auth-link" to='/login'>here.</Link></p>
        </div>
      </div>
    </div>
  )
}

//test