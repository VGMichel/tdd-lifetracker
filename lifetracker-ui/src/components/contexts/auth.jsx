import apiClient from 'components/services/apiClient';
import React, { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [initialized, setInitialized] = useState(false)
    const [isProcessing, setIsProcessing] = useState('')
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchUser = async () => {
            const { data } = await apiClient.fetchUserFromToken()
            if (data) {
                setUser(data.user)
            }
            setInitialized(true)
        }

        const token = localStorage.getItem("lifetracker_token")
        if (token) {
            apiClient.setToken(token)
            fetchUser()
        } else {
            setInitialized(true)
        }

    }, [setUser])

    const authValue = {  user, setUser }
    
    return (
        <AuthContext.Provider value={authValue}>
            <>{children}</>
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext)