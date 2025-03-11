/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { User, userService } from "../../../../services/userService";
import { useToast } from "../../../../hooks/useToast";
import { toDate } from "../../../../utils/formatDate";

const useUserList = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPage, setTotalPage] = useState<number>(0);
    const [itemsPerPage, setItemsPerPage] = useState<number>(10);
    const [totalItem, setTotalItem] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const { toastError } = useToast();

    const onItemsPerPageChange = (number: number) => {
        setItemsPerPage(number);
    };

    const fetchUser = async () => {
        userService
            .getAll({ page: currentPage, itemsPerPage })
            .then((response) => {
                setUsers(response.data);
                setTotalPage(response.totalPage);
                setTotalItem(response.totalItem);
            })
            .catch((error) => {
                console.error("Error fetching users:", error);
                toastError("เกิดข้อผิดพลาดในการโหลดข้อมูลผู้ใช้!");
            })
            .finally(() => setIsLoading(false));
    };

    useEffect(() => {
        fetchUser();
    }, [currentPage, itemsPerPage]);

    const headers = ["#", "Name", "Username", "Role", "CreatedAt", "UpdatedAt"];
    const userRows = users.map((user) => ({
        key: user.id,
        "#": user.id,
        Name: user.name,
        Username: user.username,
        Role: user.role,
        CreatedAt: toDate(user.createdAt),
        UpdatedAt: toDate(user.updatedAt),
    }));

    return {
        users,
        currentPage,
        setCurrentPage,
        itemsPerPage,
        totalPage,
        totalItem,
        isLoading,
        onItemsPerPageChange,
        headers,
        userRows,
        fetchUser,
    };
};
export default useUserList;
