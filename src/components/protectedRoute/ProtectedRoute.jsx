import { AuthContext } from "contexts/AuthContext"
import { useContext } from "react"
import { Navigate } from "react-router-dom"

export const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext)
    console.log(user);
    if (!user) {
        <Navigate to={"/login"} />
    }
    return children
}