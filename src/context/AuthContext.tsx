import { createContext } from "react";
import { UserResponse } from "../services/userService";
import { LoginResponse } from "../services/authService";

interface AuthContextType {
    user: UserResponse | null;
    setUser: (userData: UserResponse | null) => void;
    login: (loginData: LoginResponse) => void;
    logout: () => void;
    isLoading: boolean;
}

export const AuthContext = createContext<AuthContextType | null>(null);
