import * as React from "react"
import "./NutritionDetail.css"
import { NutritionCard } from "components/NutritionFeed/NutritionFeed"

export default function NutritionDetail() {
    return(
        <div className="nutrition-detail">
            <NutritionCard />
        </div>
    )
}

// export function NutritionForm() {
//     return(
//         <div className="nutrition-form">
//             Nutrition Form
//         </div>
//     )
// }