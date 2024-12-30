import React from "react";
import { getAuth } from "firebase/auth";
import { AuthProvider, useFirebaseApp } from "reactfire";
import { BrowserRouter } from "react-router-dom";
import { PrimeReactProvider } from 'primereact/api';
import App from "./App";

const Bootstrap: React.FC = () => {
    const app = useFirebaseApp();
    const auth = getAuth(app);

    return (
        <AuthProvider sdk={auth}>
            <PrimeReactProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </PrimeReactProvider>
        </AuthProvider>
    );
};

export default Bootstrap;