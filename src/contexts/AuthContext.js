import { auth } from "api/firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export function AuthProvider({ children }) {
    const [user, setUser] = useState({})
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => {
            setUser(user)
        })
        return () => { unsub() }
    }, [])

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    )
};
