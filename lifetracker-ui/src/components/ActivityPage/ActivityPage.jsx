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
        <div className="stats">
          <div className="activity-card green">
            <div className="per-category">
              <h3 className="green-title">Average Calories Per Category</h3>
              <SummaryStat />
            </div>
          </div>
          <div className="activity-card purple">
            <div className="per-day">
              <h3 className="purple-title">Total Exercise</h3>
              <SummaryStat />
            </div>
          </div>
          <div className="activity-card plump">
            <div className="per-day">
              <h3 className="plump-title">Average Sleep Hours</h3>
              <SummaryStat />
            </div>
          </div>
        </div>
        {/* More Stats */}
        <div className="more-stats">
          <div className="activity-card green">
            <div className="per-day">
              <h3 className="green-title">Average Calories Per Day</h3>
              <SummaryStat />
            </div>
          </div>
          <div className="activity-card purple">
            <div className="per-day">
              <h3 className="purple-title">Average Exercise Intensity</h3>
              <SummaryStat />
            </div>
          </div>
          <div className="activity-card plump">
            <div className="per-day">
              <h3 className="plump-title">Total Hours Slept</h3>
              <SummaryStat />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function SummaryStat(props) {
  const { stat, label, substat } = props
  return (
    <div className="summary-stat">
      <div className="background">
        <div className="primary-statistic">0</div>
        {/* <div className="stat-label">Label</div>
        <div className="secondary-statistic">0</div> */}
      </div>
    </div>
  )
}