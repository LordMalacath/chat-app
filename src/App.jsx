import React from "react";
import Register from "pages/registration/Registration";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "pages/login/Login";
// import {ProtectedRoute} from "components/protectedRoute/ProtectedRoute";
import Loading from "components/loading/Loading";
import { useSelector } from "react-redux";
import { useSetLoggedUser } from "hooks/useSetLoggedUser";

//---------------------------------------------------------

export default function App() {
    const user = useSelector(state => state.loggedUser);
    useSetLoggedUser();

    const ProtectedRoute = ({ children }) => {
        if (!user) {
            return <Navigate to={"/login"} />
        }
        return children
    }

    return (
        <Routes path="/">
            <Route index element={
                <ProtectedRoute>
                    <Loading />
                </ProtectedRoute>
            } />
            <Route>

            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    )
};
