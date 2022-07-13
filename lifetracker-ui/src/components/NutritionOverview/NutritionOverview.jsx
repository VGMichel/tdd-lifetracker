import * as React from "react"
import { Link, useNavigate } from "react-router-dom"
import { useNutritionContext } from "components/contexts/nutrition"
import NutritionFeed from "components/NutritionFeed/NutritionFeed"
import { NutritionCard } from "components/NutritionFeed/NutritionFeed"
import Loading from "components/Loading/Loading"
import "./NutritionOverview.css"

export default function NutritionOverview({ nutriPosts }) {

    let navigate = useNavigate()
    const { nutritions, error, isLoading } = useNutritionContext()
    const createNew = () => {
        let path = '/nutrition/create'
        navigate(path)
    }

    return(
        <div className="nutrition-overview">
            <div className="header">
                <h1>Overview</h1>
                <Link to="/nutrition/create">
                    <button className="btn" onClick={createNew}>Record Nutrition</button>
                </Link>
            </div>
            <div className="feed">
        {nutritions?.length ? (
          nutritions.map((nutrition) => <NutritionCard nutrition={nutrition} key={nutrition.id} />)
        ) : (
          <div className="empty">
            <h2>Nothing here yet.</h2>
          </div>
        )}
      </div>
            {/* {error ? <h2 className="error">{error}</h2> : null}
            {isLoading ? <Loading /> : <NutritionFeed nutriPosts={ nutriPosts } />} */}
        </div>
    )
}