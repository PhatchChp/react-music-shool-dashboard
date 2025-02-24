import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";

export const useLogout = () => {
    const navigate = useNavigate();
    const { logout } = useAuth();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };
    return handleLogout;
};
