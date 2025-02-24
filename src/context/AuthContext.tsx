import { createContext } from "react";

export type UserData = {
    username: string;
    firstName: string;
    lastName: string;
};

interface AuthContextType {
    user: UserData | null;
    login: (userData: UserData) => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);
