import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth ต้องใช้ภายใน AuthProvider เท่านั้น!");
    }
    return context;
};
