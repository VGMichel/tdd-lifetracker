import NutritionFeed from "components/NutritionFeed/NutritionFeed"
import * as React from "react"
import { Link, useNavigate } from "react-router-dom"
import "./NutritionOverview.css"

export default function NutritionOverview() {

    let navigate = useNavigate()
    const createNew = () => {
        let path = '/nutrition/create'
        navigate(path)
    }

    return(
        <div className="nutrition-overview">
            <div className="header">
                <h1>Overview</h1>
                <Link to="/nutrition/create">
                    <button className="btn" onClick={createNew}>Record Nutrition</button>
                </Link>
            </div>
            <NutritionFeed />
        </div>
    )
}