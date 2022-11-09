import React from "react";
import ReactDOM from "react-dom/client";
import App from "App";
import "api/firebase/firebase"
import { BrowserRouter } from "react-router-dom"
import "scss/main.scss";
import { Provider } from "react-redux"
import store from "redux/store";

//----------------------------------------------------------------

ReactDOM.createRoot(document.getElementById("root"))
    .render(
        <React.StrictMode>
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
        </React.StrictMode>
    );