import * as React from "react"
import { useNavigate } from "react-router-dom";
import "./ActivityPage.css"

export default function ActivityPage() {

  ////// Navigation for Buttons
  let navigate = useNavigate()

  const navToNutrition = () => {
    let path = '/nutrition/create'
    navigate(path)
  }

  const navToExercise = () => {
    let path = '/exercise'
    navigate(path)
  }

  const navToSleep = () => {
    let path = '/sleep'
    navigate(path)
  }
  //////

  return (
    <div className="activity-page">
      <div className="content">
        <div className="actions">
          <h2 className="heading">Activity Feed</h2>
          <div className="buttons">
            <button className="btn green" onClick={navToNutrition}>Record Nutrition</button>
            <button className="btn purple" onClick={navToExercise}>Add Exercise</button>
            <button className="btn plump" onClick={navToSleep}>Log Sleep</button>
          </div>
        </div>
        <ActivityFeed />
      </div>
    </div>
  )
}

export function ActivityFeed(props) {
  const { totalCaloriesPerDay, avgCaloriesPerDay } = props;
  return (
    <div className="activity-feed">
      <div className="content">
        <p>Activity Page</p>
        <div className="per-category">
          <h4>Average Calories Per Category</h4>
        </div>
        <div className="per-day"></div>
      </div>
    </div>
  )
}

export function SummaryStat(props) {
  const { stat, label, substat } = props
  return (
    <div className="summary-stat">
      <div className="primary-statistic">{/* stat */}</div>
      <div className="stat-label">{/* label */}</div>
      <div className="secondary-statistic">{/* substat */ }</div>
    </div>
  )
}