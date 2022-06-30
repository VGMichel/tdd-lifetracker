import * as React from "react"
import { Link } from "react-router-dom"
import "./Logo.css"

export default function Logo() {
  return (
    <div className="logo">
        <Link to="/">
            <img src="https://assets.dryicons.com/uploads/icon/svg/5943/b92ac1f1-61fb-486b-856e-4d6591f0af84.svg" alt="logo" />
        </Link>
    </div>
  )
}
