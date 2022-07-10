import * as React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NutritionOverview from "components/NutritionOverview/NutritionOverview"
import "./NutritionPage.css"
import NutritionNew from "components/NutritionNew/NutritionNew"
import NutritionDetail from "components/NutritionDeail/NutritionDetail"
import NotFound from "components/NotFound/NotFound"

export default function NutritionPage() {
  return (
    <div className="nutrition-page">
      <div className="banner">
        <h1>Nutrition</h1>
      </div>
      <div className="content">
        <Routes>
          <Route path="/" element={<NutritionOverview />}/>
          <Route path="create" element={<NutritionNew />}/>
          <Route path="id/:nutritionId" element={<NutritionDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}
