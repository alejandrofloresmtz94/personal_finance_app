import React, { ChangeEvent, Fragment, useRef, useState } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { AuthComponent } from "../../../core/interfaces/auth.store.interfaces";
import { Button } from "primereact/button";
import { useFirebaseApp } from "reactfire";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Toast } from "primereact/toast";
import useAuthStore from "../../../core/stores/authStore";

const SignupForm: React.FC = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const toastRef = useRef<Toast>(null);
    const setShowAuthComponent = useAuthStore((state) => state.setShowAuthComponent);

    const app = useFirebaseApp();
    const auth = getAuth(app);

    const onClickLogin = () => {
        setShowAuthComponent(AuthComponent.LOGIN);
    };

    const onSubmitSignup = (e: React.MouseEvent) => {
        e.preventDefault();

        if(name.length === 0 || email.length === 0 || password.length < 8) {
            toastRef.current?.show({ severity: 'error', summary: 'Error', detail: 'Please fill all fields correctly' });
            return;
        }

        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            updateProfile(userCredential.user, {
                displayName: name
            }).then(() => {
                toastRef.current?.show({ severity: 'success', summary: 'Success', detail: 'Account created successfully. . .' });
                setShowAuthComponent(AuthComponent.LOGIN);
            }).catch(() => {
                setPassword("");
                toastRef.current?.show({ severity: 'error', summary: 'Error', detail: 'An error ocurred while creating your account, try again' });
            });
        }).catch(() => {
            setPassword("");
            toastRef.current?.show({ severity: 'error', summary: 'Error', detail: 'An error ocurred while creating your account, try again' });
        });
    };

    return (
        <Fragment>
            <Toast ref={toastRef} position="top-right" />
            <span className="text-preset-1">Sign Up</span>
            <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-bold text-preset-5">Name</label>
                <InputText id="name" className="w-full px-2 border border-black h-11 focus:shadow-black focus:border-none" value={name} onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-bold text-preset-5">Email</label>
                <InputText id="email" className="w-full px-2 border border-black h-11 focus:shadow-black focus:border-none" value={email} onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="password" className="font-bold text-preset-5">Create Password</label>
                <Password id="password" aria-describedby="password-help" className="border border-black rounded h-11" feedback={false} value={password} onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} pt={{
                    input: {
                        className: "w-full h-full px-2 focus:shadow-black"
                    },
                    iconField: {
                        pt: {
                            root: {
                                className: "w-full h-full"
                            }
                        }
                    }
                }} toggleMask />
                <small className="self-end" id="password-help">Passwords must be at least 8 characters</small>
            </div>
            <Button type="button" label="Create Account" className="w-full h-12 font-bold text-white bg-black rounded-lg text-preset-4" onClick={onSubmitSignup} />
            <span className="self-center text-preset-4">Already have an account? <a href="#" onClick={onClickLogin} className="font-bold underline">Login</a></span>
        </Fragment>
    );
};

export default SignupForm;