import { createContext } from "react";
import { User } from "../services/userService";
import { LoginResponse } from "../services/authService";

interface AuthContextType {
    user: User | null;
    setUser: (userData: User | null) => void;
    login: (loginData: LoginResponse) => void;
    logout: () => void;
    isLoading: boolean;
}

export const AuthContext = createContext<AuthContextType | null>(null);
