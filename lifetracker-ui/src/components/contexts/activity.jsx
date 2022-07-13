import React, { createContext, useContext, useState, useEffect } from 'react'
import { useAuthContext } from './auth';
import apiClient from 'components/services/apiClient';

const ActivityContext = createContext(null);

export const ActivityContextProvider = ({children}) => {
    const { user } = useAuthContext()
    const [activity, setActivity] = useState({})
    const [initialized, setInitialized] = useState([])
    const [isLoading, setIsLoading] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {

    })
    
    const activityValue = { activity, initialized, isLoading, error }

    return(
        <ActivityContext.Provider value={activityValue}>
            <>{children}</>
        </ActivityContext.Provider>
    )
}

export const useActivityContext = () =>  useContext(ActivityContext)