import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/main.scss';
import App from 'App';
import "api/firebase/firebase"
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from "contexts/AuthContext";
import { ChatProvider } from 'contexts/ChatContext';
//----------------------------------------------------------------


ReactDOM.createRoot(document.getElementById("root"))
    .render(
        <AuthProvider>
            <ChatProvider>
                <React.StrictMode>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </React.StrictMode>
            </ChatProvider>
        </AuthProvider>
    );