import * as React from "react"
import { Link, useNavigate, Navigate } from "react-router-dom"
import Logo from "components/Logo/Logo"
import AccessForbidden from "components/AccessForbidden/AccessForbidden"
import "./Navbar.css"

export default function Navbar({ user, setUser, logoutUser }) {
  return (
    <div className="navbar">
        <div className="content">
            <Logo />
            <NavLinks user={user} setUser={setUser} logoutUser={logoutUser} />
        </div>
    </div>
  )
}

export function NavLinks({ user, setUser, logoutUser }) {

  // const navigate = useNavigate()

  return (
    <div className="nav-links">
        <div className="content">
            <ul className="links">
                {user?.email ? (
                    <>
                      <li><Link to='/activity'>Activity</Link></li>
                      <li><Link to='/exercise'>Exercise</Link></li>
                      <li><Link to='/nutrition'>Nutrition</Link></li>
                      <li><Link to='/sleep'>Sleep</Link></li>
                      <li><span>{user.email}</span></li>
                      <li><Link to="/"><button className="logout-button btn" onClick={logoutUser}>Log Out</button></Link></li>
                    </>
                ) : ( 
                    <>
                      <li><Link to='/access-forbidden'>Activity</Link></li>
                      <li><Link to='/access-forbidden'>Exercise</Link></li>
                      <li><Link to='/access-forbidden'>Nutrition</Link></li>
                      <li><Link to='/access-forbidden'>Sleep</Link></li>
                      <li><Link to='/login'>Login</Link></li>
                      <li className="btn"><Link to='/registration'>Sign Up</Link></li>
                    </>
                )
                }
            </ul>
        </div>
    </div>
  )
}