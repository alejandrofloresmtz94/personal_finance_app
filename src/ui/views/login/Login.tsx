import React from "react";
import Logo from '../../../assets/Logo.png';
import LoginForm from "../../components/loginForm/LoginForm";
import SignupForm from "../../components/signupForm/SignupForm";
import useAuthStore from "../../../core/stores/authStore";
import { AuthComponent } from "../../../core/interfaces/auth.store.interfaces";

const Login: React.FC = () => {
    const showAuthComponent = useAuthStore((state) => state.showAuthComponent);

    return (
        <div className="flex flex-row w-full h-full bg-beige-100">
            <div className="flex flex-col justify-between w-1/3 h-[95%] m-250 px-6 py-10 bg-center bg-cover rounded-xl bg-login-sigin-img">
                <img src={Logo} alt="Logo" className="w-48 h-10" />
                <div className="flex flex-col gap-10">
                    <span className="text-white font-public-sans text-preset-1">Keep track of your money and save for your future</span>
                    <span className="text-white font-public-sans text-preset-4">Personal finance app puts you in control of your spending. Track transactions, set budgets, and add to savings pots easily.</span>
                </div>
            </div>
            <div className="flex flex-row items-center justify-center w-2/3 h-full">
                <div className="flex flex-col w-2/3 h-auto bg-white p-400 gap-400 rounded-xl">
                    {
                        showAuthComponent === AuthComponent.LOGIN ? <LoginForm /> : <SignupForm />
                    }
                </div>
            </div>
        </div>
    );
};

export default Login;