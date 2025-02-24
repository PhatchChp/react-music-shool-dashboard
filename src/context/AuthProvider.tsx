import React, { useState } from "react";
import { AuthContext, UserData } from "./AuthContext";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<UserData | null>(null);
    const login = (userData: UserData) => setUser(userData);
    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{ user, setUser ,login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
