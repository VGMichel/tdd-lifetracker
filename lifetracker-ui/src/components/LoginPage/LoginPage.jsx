import * as React from "react"
import { Link } from "react-router-dom"
import { useRef, useState, useEffect } from "react"
import { useAuth } from "components/contexts/auth"
import { useNavigate } from "react-router-dom"
import validation from "../validate"
import "./LoginPage.css"

export default function LoginPage() {
  return (
    <div className="login-page">
        <LoginForm />
    </div>
  )
}

export function LoginForm() {
    // const [user, setUser] = useState('')
    // const [pwd, setPwd] = useState('')
    const auth = useAuth()
    const navigate = useNavigate()
    const [errors, setErrors] = useState({});
    const [values, setValues] = useState({
        email:  "",
        username: "",
    });

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
        console.log('Test')
  }

    const loginUser = (user) => {
        if(values.email || values.password) {
            setErrors(validation(values))
        } else {
            auth.login(user)
            navigate('/activity')
        }

    }
    
    return(
        <div className="login-form">
            <div className="card">
                <h2>Login</h2>
                <div className="form">
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input className="form-input"
                               type="email" 
                               name="email" 
                               placeholder="user@email.com"
                               autoComplete="off"
                               onChange={handleChange}
                               value={values.email}
                               required
                               />
                               {errors.email && <span className="error">{errors.email}</span>}
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Password</label>
                        <input className="form-input" 
                               type="password" 
                               name="password" 
                               placeholder="•••••••"
                               onChange={handleChange}
                               value={values.password}
                               required
                               />
                               {errors.password && <span className="error">{errors.password}</span>}
                    </div>
                    <button className="submit-login btn" onClick={loginUser}>Login</button>
                </div>
                <div className="footer">
                    <p>Don't have an account? Sign up <Link className="auth-link" to='/registration'>here.</Link></p>
                </div>
            </div>
        </div>
    )
}



// export function LoginForm() {

//     const [user, setUser] = useState('')
//     const auth = useAuth()
//     const navigate = useNavigate()
//     const [pwd, setPwd] = useState('')
//     const [errors, setErrors] = useState({});
//     const [values, setValues] = useState({
//     email:  "",
//     password: "",
//   });


//     const loginUser = () => {
//         auth.login(user)
//         navigate('/')
//         //setErrors(validation(values))
//     }
    
//     return(
//         <div className="login-form">
//             <div className="card">
//                 <h2>Login</h2>
//                 <div className="form">
//                     <div className="input-field">
//                         <label htmlFor="email">Email</label>
//                         <input className="form-input"
//                                type="email" 
//                                name="email" 
//                                placeholder="user@email.com"
//                                autoComplete="off"
//                                onChange={(e) => {setValues(e.target.value)}}
//                                value={values.email}
//                                required
//                                />
//                     </div>
//                     <div className="input-field">
//                         <label htmlFor="email">Password</label>
//                         <input className="form-input" 
//                                type="password" 
//                                name="password" 
//                                placeholder="•••••••"
//                                onChange={(e) => {setValues(e.target.value)}}
//                                value={values.password}
//                                required
//                                />
//                     </div>
//                     <button className="submit-login btn" onClick={loginUser}>Login</button>
//                 </div>
//                 <div className="footer">
//                     <p>Don't have an account? Sign up <Link className="auth-link" to='/registration'>here.</Link></p>
//                 </div>
//             </div>
//         </div>
//     )
// }