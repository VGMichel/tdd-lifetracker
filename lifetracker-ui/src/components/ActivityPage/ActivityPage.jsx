import * as React from "react"
import "./ActivityPage.css"

export default function ActivityPage() {
  return (
    <div className="activity-page">
      <div className="actions">
        <h2 className="heading">Activity Feed</h2>
        <div className="buttons">
          <button className="button outline small">Add Exercise</button>
          <button className="button outline small">Log Sleep</button>
          <button className="button outline small">Record Nutrition</button>
        </div>
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
        <div className="per-category"></div>
        <div className="per-day"></div>
      </div>
    </div>
  )
}