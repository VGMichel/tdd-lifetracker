import Logo from "components/Logo/Logo"
import * as React from "react"
import { Link } from "react-router-dom"
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
  return (
    <div className="nav-links">
        <div className="content">
            <ul className="links">
                <li><Link to='/activity'>Activity</Link></li>
                <li><Link to='/exercise'>Exercise</Link></li>
                <li><Link to='/nutrition'>Nutrition</Link></li>
                <li><Link to='/sleep'>Sleep</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li className="btn secondary">
                    <Link to='/registration'>Sign Up</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}