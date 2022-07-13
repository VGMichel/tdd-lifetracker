import * as React from "react"
import { Link, useNavigate } from "react-router-dom"
import { useNutritionContext } from "components/contexts/nutrition"
import "./NutritionFeed.css"

export default function NutritionFeed() {
    const { nutritions } = useNutritionContext()
    return(
        <div className="nutrition-feed">
           {nutritions?.length ? (
                nutritions.map((nutrition) => (<NutritionCard nutrition={nutrition} key={nutrition.id} />))
            ) : (
                <div className="empty-message">
                    <h1>Nothing here yet.</h1>
                </div>
            )}
        </div>
    )
}

export function NutritionCard({ nutrition }) {

    return(
        <div className="nutrition-card">
            <div className="card-header">
                <div className="nutrition-image">
                    <img src={nutrition.image_url} alt="Food-image" />
                </div>
                <div className="nutrition-name">{nutrition.name}</div>
            </div>
            <div className="card-stats">
                <div className="column">
                    <p>Calories</p>
                    <div className="nutrition-calories">{nutrition.calories}</div>
                </div>
                <div className="column">
                    <p>Quantity</p>
                    <div className="nutrition-quantity">{nutrition.quantity}</div>
                </div>
            </div>
            <div className="meta">
                <div className="nutrition-date">Date</div>
                <div className="nutrition-category">{nutrition.category}</div>
            </div>
        </div>
    )
}