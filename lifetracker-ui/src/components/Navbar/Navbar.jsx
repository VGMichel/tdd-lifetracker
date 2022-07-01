import * as React from "react"
import Logo from "components/Logo/Logo"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "components/contexts/auth"
import "./Navbar.css"

export default function Navbar() {
  return (
    <div className="navbar">
        <div className="content">
            <Logo />
            <NavLinks />
        </div>
    </div>
  )
}

export function NavLinks() {

  const auth = useAuth()
  const navigate = useNavigate()

  const logoutUser = () => {
    auth.logout()
    navigate('/')
  }

  return (
    <div className="nav-links">
        <div className="content">
            <ul className="links">
                {!auth.user
                  ? <>
                    <li><Link to='/access-forbidden'>Activity</Link></li>
                    <li><Link to='/access-forbidden'>Exercise</Link></li>
                    <li><Link to='/access-forbidden'>Nutrition</Link></li>
                    <li><Link to='/access-forbidden'>Sleep</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                    <li className="btn"><Link to='/registration'>Sign Up</Link></li>
                    </>
                  : <>
                      <li><Link to='/activity'>Activity</Link></li>
                      <li><Link to='/exercise'>Exercise</Link></li>
                      <li><Link to='/nutrition'>Nutrition</Link></li>
                      <li><Link to='/sleep'>Sleep</Link></li>
                      <li className="logout-button btn" onClick={logoutUser}>Log Out</li>
                    </>
                }
            </ul>
        </div>
    </div>
  )
}

// !auth.user && (
//                     <>
//                     <li><Link to='/login'>Login</Link></li>
//                     <li className="btn"><Link to='/registration'>Sign Up</Link></li>
//                     </>
//                 )