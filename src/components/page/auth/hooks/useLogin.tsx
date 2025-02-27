import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../hooks/useAuth";
import { authService } from "../../../../services/authService";
import { useToast } from "../../../../hooks/useToast";

export const useLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { toastSuccess, toastWarning } = useToast();

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
        authService
            .login({ username, password })
            .then((loginData) => {
                login(loginData);
                toastSuccess("Login Success!");
                navigate("/dashboard");
            })
            .catch((error) => {
                console.error(error);
                toastWarning("Invalid username or password");
            });
    };
    return {
        username,
        password,
        handleLogin,
        handleUsernameChange,
        handlePasswordChange,
    };
};
