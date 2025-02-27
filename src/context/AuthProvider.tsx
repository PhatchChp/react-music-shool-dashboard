import React, { useState } from "react";
import { AuthContext } from "./AuthContext";
import { UserResponse } from "../services/userService";
import { authService, LoginResponse } from "../services/authService";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<UserResponse | null>(null);

    const login = (loginData: LoginResponse) => {
        localStorage.setItem("token", loginData.token);
        setUser(loginData.user);
    };

    const logout = () => {
        setUser(null);
        authService.logout();
    };

    return (
        <AuthContext.Provider value={{ user, setUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
