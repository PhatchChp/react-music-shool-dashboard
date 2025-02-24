import { useState } from "react";
import Button from "../../button/Button";
import FormInput from "../../form/FormInput";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        const fakeUser = {
            username,
            firstName: "Phatch",
            lastName: "Miller",
        };
        login(fakeUser);
        navigate("/dashboard");
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <form onSubmit={handleLogin}>
                <div className="flex flex-col gap-4 bg-white p-12 rounded-2xl shadow-lg">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold">Welcome Back</h1>
                        <div className="text-sm text-gray-400 my-2">
                            <p>Glad to see you again 👋🏻</p>
                            <p>Login to your account below</p>
                        </div>
                    </div>

                    <FormInput
                        label={"Username"}
                        name={"username"}
                        type={"text"}
                        placeholder="enter username.."
                        onChange={handleUsernameChange}
                        defaultValue={username}
                    />
                    <FormInput
                        label="Password"
                        name="password"
                        type="password"
                        placeholder="enter password.."
                        onChange={handlePasswordChange}
                        defaultValue={password}
                    />
                    <Button text="Login" type="submit" />
                </div>
            </form>
        </div>
    );
};
export default Login;
