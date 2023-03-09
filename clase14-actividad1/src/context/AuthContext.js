import { createContext, useState } from "react";

export const AuthContext = createContext({ tasks: []})

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const login = (data) => {
        setUser({ user: data.email })
    }

    const logout = () => {
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            { children }
        </AuthContext.Provider>
    )
}