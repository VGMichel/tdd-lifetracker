import * as React from "react"

export default function NutritionOverview() {
    return(
        <div className="nutrition-overview">
            <p>Nutrition Overview</p>
            <NutritionCard />
        </div>
    )
}

export function NutritionCard() {
    return(
        <div className="nutrition-card">
            Nutrition Card
        </div>
    )
}