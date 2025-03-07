export interface PaginationResponse<T> {
    page: number;
    itemsPerPage: number;
    totalItem: number;
    totalPage: number;
    data: T[];
}

export interface PaginationRequest {
    page: number;
    itemsPerPage: number;
}
