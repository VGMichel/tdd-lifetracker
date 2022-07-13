import * as React from "react"
import { Link, useNavigate } from "react-router-dom"
import { useNutritionContext } from "components/contexts/nutrition"
import "./NutritionFeed.css"

export default function NutritionFeed({ nutriPosts }) {
    const { nutritions } = useNutritionContext()
    return(
        <div className="nutrition-feed">
           {/* {nutritions?.length ? (
                nutritions.map((nutrition) => (<NutritionCard nutrition={nutrition} key={nutrition.id} name={nutrition.name} />))
            ) : (
                <div className="empty-message">
                    <h1>Nothing here yet.</h1>
                    <NutritionCard />
                </div>
            )}
            <NutritionCard  /> */}
        </div>
    )
}

export function NutritionCard({ nutrition }) {

    return(
        <div className="nutrition-card">
            <div className="nutrition-image">
                <img src={nutrition.image_url} alt="Food-image" />
            </div>
            <div className="nutrition-name">{nutrition.name}</div>
            <div className="nutrition-calories">{nutrition.calories}</div>
            <div className="nutrition-category">{nutrition.category}</div>
            <div className="nutrition-date">Date</div>
        </div>
        // <div className="nutrition-card">
        //     <div className="nutrition-image">
        //         <img src="" alt="Food-image" />
        //     </div>
        //     <div className="nutrition-name">Name</div>
        //     <div className="nutrition-calories">Calories</div>
        //     <div className="nutrition-category">Category</div>
        //     <div className="nutrition-date">Date</div>
        // </div>
    )
}