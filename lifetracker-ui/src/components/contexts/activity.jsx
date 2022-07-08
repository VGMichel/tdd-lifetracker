import React, { createContext, useContext, useState, useEffect } from 'react'
import { useAuth } from './auth';

const ActivityContext = createContext(null);

export const ActivityContextProvider = ({children}) => {
    const [activity, setActivity] = useState([])
    const [initialized, setInitialized] = useState([])
    const [isLoading, setIsLoading] = useState('')
    const [error, setError] = useState('')

    const activityValue = { activity, initialized, isLoading, error }

    return(
        <ActivityContext.Provider value={activityValue}>
            <>{children}</>
        </ActivityContext.Provider>
    )
}

export const useActivityContext = () => {
    return useContext(ActivityContext)
}