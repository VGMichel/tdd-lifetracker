import * as React from "react"
import { Link, useNavigate } from "react-router-dom"
import "./NutritionFeed.css"

export default function NutritionFeed() {
    return(
        <div className="nutrition-feed">
            <NutritionCard />
        </div>
    )
}

export function NutritionCard() {
    return(
        <div className="nutrition-card">
            <div className="nutrition-image">
                <img src="" alt="Food-image" />
            </div>
            <div className="nutrition-name">Name</div>
            <div className="nutrition-calories">Calories</div>
            <div className="nutrition-category">Category</div>
            <div className="nutrition-date">Date</div>
        </div>
    )
}