import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../hooks/useAuth";
import { authService } from "../../../../services/authService";
import { useToast } from "../../../../hooks/useToast";
import { useForm } from "react-hook-form";
import { LoginFormData, loginSchema } from "./loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export const useLogin = () => {
    const { toastSuccess, toastWarning } = useToast();
    const { login } = useAuth();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<LoginFormData>({ resolver: zodResolver(loginSchema) });

    const handleLogin = handleSubmit((data) => {
        authService
            .login(data)
            .then((loginData) => {
                login(loginData);
                toastSuccess("Login Success!");
                navigate("/dashboard");
            })
            .catch((error) => {
                console.error(error);
                toastWarning("Invalid username or password");
            });
        reset();
    });

    return {
        register,
        errors,
        handleLogin,
    };
};
