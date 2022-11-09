import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

//-----------------------------------------

export const ProtectedRoute = ({ children }) => {
    const { user } = useSelector(state => state.loggedUser)
    console.log(user);
    if (!user) {
        <Navigate to={"/login"} />
    }
    return children
}