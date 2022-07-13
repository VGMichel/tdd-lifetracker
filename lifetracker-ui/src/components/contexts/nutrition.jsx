import { createContext, useState, useContext, useEffect } from "react"
import { useAuthContext } from "./auth"
import apiClient from "components/services/apiClient"

const NutritionContext = createContext(null)

export const NutritionContextProvider = ({ children }) => {
    const { user } = useAuthContext()
    const [nutritions, setNutritions] = useState([])
    const [initialized, setInitialized] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchNutrition = async () => {
            setIsLoading(true)

            const { data, error } = await apiClient.fetchNutrition()
            if (data?.nutritions) setNutritions(data.nutritions)
            if (error) setError(error)

            setIsLoading(false)
            setInitialized(true)
        }

        if (user?.email) {
            fetchNutrition()
        }
    }, [user])
    
    const nutritionValue = { nutritions, setNutritions, initialized, isLoading, error }

    return(
        <NutritionContext.Provider value={nutritionValue}>
            <>{children}</>
        </NutritionContext.Provider>
    )
}

export const useNutritionContext = () => useContext(NutritionContext)