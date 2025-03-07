import React, { useCallback, useEffect, useRef, useState } from "react";
import { AuthContext } from "./AuthContext";
import { User } from "../services/userService";
import { authService, LoginResponse } from "../services/authService";
import { useToast } from "../hooks/useToast";
import { handleUnauthorized } from "../services/api";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const isUnauthorizedHandled = useRef(false);
    const { toastWarning } = useToast();

    const logout = useCallback(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
        authService.logout();
    }, []);

    useEffect(() => {
        if (!isUnauthorizedHandled.current) {
            handleUnauthorized(toastWarning, logout);
            isUnauthorizedHandled.current = true;
        }
    }, [toastWarning, logout]);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setIsLoading(false);
    }, []);

    const login = (loginData: LoginResponse) => {
        localStorage.setItem("token", loginData.token);
        localStorage.setItem("user", JSON.stringify(loginData.user));
        setUser(loginData.user);
    };

    return (
        <AuthContext.Provider
            value={{ user, setUser, login, logout, isLoading }}
        >
            {children}
        </AuthContext.Provider>
    );
};
