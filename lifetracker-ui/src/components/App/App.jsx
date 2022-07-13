import * as React from "react"
import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthContextProvider, useAuthContext } from "components/contexts/auth"
import ActivityPage from "components/ActivityPage/ActivityPage"
import LandingPage from "components/LandingPage/LandingPage"
import LoginPage from "components/LoginPage/LoginPage"
import Navbar from "components/Navbar/Navbar"
import NotFound from "components/NotFound/NotFound"
import NutritionOverview from "components/NutritionOverview/NutritionOverview"
import NutritionPage from "components/NutritionPage/NutritionPage"
import NutritionNew from "components/NutritionNew/NutritionNew"
import NutritionDetail from "components/NutritionDeail/NutritionDetail"
import ExercisePage from "components/ExercisePage/ExercisePage"
import ProtectedRoute from "components/ProtectedRoute/ProtectedRoute"
import RegistrationPage from "components/RegistrationPage/RegistrationPage"
import SleepPage from "components/SleepPage/SleepPage"
import AccessForbidden from "components/AccessForbidden/AccessForbidden"
import apiClient from "components/services/apiClient"
import "./App.css"
import { NutritionContextProvider } from "components/contexts/nutrition"
//cd lifetracker-
export default function AppContainer() {
 return(
   <AuthContextProvider>
    <NutritionContextProvider>    
     <App />
    </NutritionContextProvider>
   </AuthContextProvider>
 )
}

function App() {

  const { user, setUser } = useAuthContext()
  const [nutriPosts, setNutriPosts] = useState([])
  const [error, setError] = useState(null)
  const [isFetching, setIsFetching] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchNutriPosts = async () => {
      setIsFetching(true)

      const { data, error } = await apiClient.listNutrition()
      if (data) setNutriPosts(data.nutriPosts)
      if (error) setError(error)

      setIsFetching(false)

    }

    fetchNutriPosts()
  }, [])

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await apiClient.fetchUserFromToken()
      if (data) setUser(data.user)
      if (error) setError(error)
    }

    const token = localStorage.getItem("lifetracker_token")
    if (token) {
      apiClient.setToken(token)
      fetchUser()
    }
  }, [setUser])

  const logoutUser = async () => {
    await apiClient.logoutUser()
    setUser({})
    setNutriPosts([])
    setError(null)
  }
  
  return (
    <div className="app">
      <React.Fragment>{
        <AuthContextProvider>
        <BrowserRouter>
            <Navbar user={user} setUser={setUser} logoutUser={logoutUser} />
            <Routes>
              <Route path="/" element={<LandingPage />}/>
              <Route path="/login" element={<LoginPage user={user} setUser={setUser} />}/>
              <Route path="/registration" element={<RegistrationPage user={user} setUser={setUser} />}/>
              <Route path="*" element={<NotFound user={user} error={error} />}/>
              <Route path="/activity" element={<ActivityPage />}/>
              <Route path="/exercise" element={<ExercisePage />}/>
              <Route path="/nutrition/*" element={<NutritionPage nutriPosts={nutriPosts} />}/>
              <Route path="/sleep" element={<SleepPage />}/>
              <Route path="/access-forbidden" element={<AccessForbidden />}/>
            </Routes>
        </BrowserRouter>
        </AuthContextProvider>
      }</React.Fragment>
    </div>
  )
}
