import * as React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NutritionOverview from "components/NutritionOverview/NutritionOverview"
import "./NutritionPage.css"

export default function NutritionPage() {
  return (
    <div className="nutrition-page">
      <p>Nutrition</p>
      <NutritionOverview />
    </div>
  )
}
