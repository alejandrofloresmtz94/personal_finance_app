import React from "react";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { AuthProvider, useFirebaseApp } from "reactfire";
import { BrowserRouter } from "react-router-dom";
import { PrimeReactProvider } from 'primereact/api';
import App from "./App";

const Bootstrap: React.FC = () => {
    const app = useFirebaseApp();
    const auth = getAuth(app);

    // Check for dev/test mode however your app tracks that.
    // `process.env.NODE_ENV` is a common React pattern
    if (process.env.NODE_ENV !== 'production') {
        // Set up emulators
        connectAuthEmulator(auth, 'http://192.168.0.134:9099');
    }

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