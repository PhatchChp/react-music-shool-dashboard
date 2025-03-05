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
    getAll: async (): Promise<UserResponse[]> =>
        api.get("/user").then((response) => response.data),
};
