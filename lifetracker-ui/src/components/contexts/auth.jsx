import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null);

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [initialized, setInitialized] = useState([])
    const [isLoading, setIsLoading] = useState('')
    const [error, setError] = useState(null)

    const login = (user) => {
        setUser(user)
    }

    const logout = () => {
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}