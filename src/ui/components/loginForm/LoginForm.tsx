import React, { ChangeEvent, Fragment, useRef, useState } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from 'primereact/button';
import { AuthComponent } from "../../../core/interfaces/auth.store.interfaces";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useFirebaseApp } from "reactfire";
import { Toast } from 'primereact/toast';
import useAuthStore from "../../../core/stores/authStore";

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const toastRef = useRef<Toast>(null);
    const setShowAuthComponent = useAuthStore((state) => state.setShowAuthComponent);
    const setUserCredential = useAuthStore((state) => state.setUserCredential);

    const app = useFirebaseApp();
    const auth = getAuth(app);

    const onClickSignup = () => {
        setShowAuthComponent(AuthComponent.SIGNUP);
    };

    const onSubmitLogin = (e: React.MouseEvent) => {
        e.preventDefault();

        if(email.length === 0 || password.length < 8) {
            toastRef.current?.show({ severity: 'error', summary: 'Error', detail: 'Please fill all fields correctly' });
            return;
        }

        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            setUserCredential(userCredential);
        }).catch(() => {
            setPassword("");
            toastRef.current?.show({ severity: 'error', summary: 'Error', detail: 'Invalid email or password' });
        });
    };

    return (
        <Fragment>
            <Toast ref={toastRef} position="top-right" />
            <span className="text-preset-1">Login</span>
            <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-bold text-preset-5">Email</label>
                <InputText id="email" className="w-full px-2 border border-black h-11 focus:shadow-black" value={email} onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="password" className="font-bold text-preset-5">Password</label>
                <Password autoComplete="current-password" id="password" className="border border-black rounded h-11" feedback={false} value={password} onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} pt={{
                    input: {
                        className: "w-full h-full focus:shadow-black px-2"
                    },
                    iconField: {
                        pt: {
                            root: {
                                className: "w-full h-full"
                            }
                        }
                    }
                }} toggleMask />
            </div>
            <Button type="button" label="Login" className="w-full h-12 font-bold text-white bg-black rounded-lg text-preset-4" onClick={onSubmitLogin} />
            <span className="self-center text-preset-4">Need to create an account? <a href="#" onClick={onClickSignup} className="font-bold underline">Sign up</a></span>
        </Fragment>
    );
};

export default LoginForm;