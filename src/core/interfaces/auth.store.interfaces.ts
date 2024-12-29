import { UserCredential } from "firebase/auth";

export enum AuthComponent {
    LOGIN = 'login',
    SIGNUP = 'signup'
}

export interface AuthStore {
    showAuthComponent: AuthComponent;
    setShowAuthComponent: (showLoginComponent: AuthComponent) => void;
    userCredential: UserCredential | null;
    setUserCredential: (userCredentials: UserCredential) => void;
}