import { PaginationRequest, PaginationResponse } from "../interface/pagination";
import api from "./api";

export interface User {
    id: string;
    username: string;
    name: string;
    role: string;
    createdAt: number;
    updatedAt: number;
}

export enum Role {
    ADMIN = "ADMIN",
    USER = "USER",
}

export type UserResponse = PaginationResponse<User>;

export const userService = {
    getAll: async (
        pagination: PaginationRequest,
        search?: string,
        role?: Role
    ): Promise<UserResponse> => {
        const params = new URLSearchParams({
            page: String(pagination.page ?? 1),
            itemsPerPage: String(pagination.itemsPerPage ?? 10),
            ...(search ? { search } : {}),
            ...(role ? { role } : {}),
        });
        return api.get(`/user?${params.toString()}`).then((response) => response.data);
    },
};
