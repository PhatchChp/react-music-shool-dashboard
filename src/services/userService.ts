import api from "./api";

export interface UserResponse {
    id: string;
    username: string;
    name: string;
    role: string;
    createdAt: number;
    updatedAt: number;
}

export const userService = {
    getAll: async () => api.get("/users").then((response) => response.data),
};
