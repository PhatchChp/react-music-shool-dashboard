import api from "./api";
import { UserResponse } from "./userService";

interface LoginRequest {
    username: string;
    password: string;
}

export interface LoginResponse {
    token: string;
    user: UserResponse;
}

export const authService = {
    login: async (data: LoginRequest): Promise<LoginResponse> =>
        api.post("/login", data).then((response) => response.data),
    logout: async () => localStorage.removeItem("token"),
};
